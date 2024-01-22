---
layout: ../../layouts/markdown.astro
title: "Hot coco and JS"
tags: [ "javascript", "serverless", "http API's", "typescript", "generics"]
git: https://www.npmjs.com/package/warmupjs
---

So Your cheap, and you got a serverless database, you don't know when traffic is coming,
and you just wanna build something and have it run....

well in js fashion you build a wrapper, this wrapper can
call a warmup endpoint that just starts the database up when a user logins cool right!

```js
wr( 
    fetch("some api that needs access to a cool serverless thing"), 
    { fn:fetch("warmup/"), delay:45000, rest:30/*time in minutes*/ err:some_error_fun } )(props)
```

the logic is super simple, using local storage and type script generics we can create a
system that checks for when we can run our api call.

```typescript
type AnyAsyncFunction = (...args: any[]) => Promise<any>;
export function wr<T extends AnyAsyncFunction,J>( func: T,options:Options<J>):
    (...args: Parameters<T>) => Promise<ReturnType<T>> 
```

and using a good understanding of the js event loop you can do this:
```typescript
return async (...args: Parameters<T>) => {
    //...
    if (diff < options.delay) {
      await new Promise(function (resolve, _) {
        localStorage.setItem( "is_timeout", 
            setTimeout(function () {
            resolve(1);
          }, options.delay - diff).toString()
        );
        localStorage.setItem("timeout", Date.now().toString());
      });
    } 
    //...
    return await func(...args)
})
```
ofc there is code to deal with the timeout in your serverless database, and 
code for dealing with enqueuing multiple calls to your api

## conclusion
serverless rocks, just needs a bit of extra tlc
