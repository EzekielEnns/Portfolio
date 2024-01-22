---
layout: ../../layouts/markdown.astro
title: "Template with Swagger"
tags: [ Swagger, Rest, Terraform, Aws, Lambda]
git: https://github.com/EzekielEnns/Terraform-Rest-Aws
---

# Problem 
using AWS's open api integration is hard, esspially since you need to add your 
lambda arn's to your swagger doc. No real good examples are shown of how to 
do this efficantly in Terraform

# Outcome
using Terraform's templating system, and a local array, I created a nice format 
for pushing all of your arns into swagger into a nice and easy to read format
```hcl
resource "aws_lambda_function" "health" {
  //...
}

locals {
  lambdas = [
    aws_lambda_function.health
  ]

}

resource "aws_api_gateway_rest_api" "example_api" {
  //...
  body = templatefile("./api.yaml",
    { for lambda in local.lambdas : lambda.handler 
        => lambda.invoke_arn }
  )
}
```
and then in the swagger doc
```yaml

openapi: 3.0.3
#...
paths:
  "/health/{name}":
    get:
      x-amazon-apigateway-integration:
        # and when deployed your lambda automatically is setup
        uri: "${health}"
        httpMethod: "POST"
        passthroughBehavior: "when_no_match"
        type: "aws_proxy"
#...
```

# Conclusion
at the time this code was great, but I was looking for a backend solution a solo dev
could fully maintain, and several hundreds of lines of swagger didnt match the team
size at SaySo, So I eneded up pivioting to WebGRPC, but thought this trick was really
cool and someday maybe we can spread syntax ([this issue](https://github.com/hashicorp/terraform/issues/19931#))
