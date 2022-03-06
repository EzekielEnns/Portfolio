<template>
  <!--
   - Write content
   - deploy to github
          https://medium.com/swlh/deploy-vue-app-to-github-pages-2ada48d7397e
   - link to resume
   - for fun could add infinite scroll?
        https://codepen.io/CSWApps/pen/aVoBPW
   - Fix hacky css
   - add personal flair, maybe dark mode support?
   - refactor redirects
  -->

  <NavBar>
    <template v-slot:info>
      <Button page="about" icon="about.png"/>
      <Button page="edu" icon="edu.png"/>
    </template>

    <template v-slot:projects>
      <Button page="rust" icon="rust.png"/>
      <Button page="webdev" icon="Webdev.png"/>
      <Button page="Csharp" icon="Csharp.png"/>
      <Button page="python" icon="python.png"/>
    </template>

    <template v-slot:contact>
      <Button page="git" icon="git.png"/>
      <Button page="linkedin" icon="linkedin.png"/>
      <Button page="resume" icon="resume.png"/>
    </template>

  </NavBar>
  <div id="app">
    <div class="content">

      <CategoryPage v-if="store.page === 'about' ">
        <template v-slot:header>
        <CatHeader title="Ezekiel Enns">
          <p>
            Networks, Web development and learning cool things
            is my jam. I love what I do and I hope to do it for you.
          </p>
        </CatHeader>
        </template>
      </CategoryPage>
      <CategoryPage v-if="store.page === 'edu' ">
        <template v-slot:header>
          <CatHeader title="Education">
            <p>
              Leaning new tech has been a life long passion of mine.
              it started with a small curiosity and
              then grew into something i couldn't get enough of.

            </p>
          </CatHeader>
        </template>
        <template v-slot:programs>
          <Project title="Linux Professional Institute -1">
            <p>
              I got this for a job back in 2015 and I haven't gotten
              enough of linux since, its come in handy and stands to
              prove I know my way around a terminal.
            </p>
          </Project>
          <Project title="Computer Engineering Diploma" desc="@Nait">
            <div>
            <p>
              this was a 2 year course. The most useful skills I learned
              from this program was how to independently learn new tools
              and time management.
            </p>
              <label><u>Topics covered:</u></label>
            <ul>
              <li>
                C#: this was 90% of the course work
              </li>
              <li>PHP: we went over RESTful and managing databases</li>
              <li>C: were we programmed microprocessors</li>
              <li>SQL: we worked with both relational and Non-Relational covering topics like normalization</li>
            </ul>
            </div>
          </Project>
          <Project title="Bachelors in Computer Science" desc="@DalHousie">
            <p>
              currently finishing up my second year of this course and I
              Love every bit of it. I've never thought about abstracting problems
              the way my professors teach. It gets me excited trying to put these
              theoretical ideas to the test. the primary language is <b>Java</b>
            </p>
          </Project>
        </template>
      </CategoryPage>
      <CategoryPage v-if="store.page === 'rust' ">
        <template v-slot:header>
          <CatHeader title="Rust">
            <p>
              Nobody shuts up about this language and after finally
              caving I see why. To me rust embodies a lot of key practices
              often found in good C programing and it takes away a lot of bloat common to C++.
              I look forward to experimenting and learning all the
              neat tricks with this functional language
            </p>
          </CatHeader>
        </template>

        <template v-slot:programs>
          <Project title="DFA simulation" link="https://github.com/EzekielEnns/DFA_Rust">
            <p>
              This was my very first attempt at the language. The project
              itself was done as a way of understanding DFA's and how they work
              in programs like grep. A really great learning experience
              and one that has gotten me exited about rust its application in
              <i>WebAsm</i>
            </p>
          </Project>
        </template>
      </CategoryPage>
      <CategoryPage v-if="store.page === 'webdev'">
        <template v-slot:header>
          <CatHeader title="Web-Dev">
            <p>
              From the first time I started managing Apache servers
              caught a fascination with web development. Then over the years
              I learned about SQL and really fell in love with backend development
              My frontend skills still need a bit of work but I just love being able
              to publish stuff to the web.
            </p>
          </CatHeader>
        </template>
        <template v-slot:programs>
          <Project title="Portfolio" link="https://github.com/EzekielEnns/Portfolio">
            <p>
              This project actually started from a desire to learn
              react, it was fun and well worth it. but I found a lot of
              basic features had to be implemented from external packages
              so that lead me to do the whole thing over again in vue.
            </p>
          </Project>
        </template>
      </CategoryPage>
      <CategoryPage v-if="store.page === 'Csharp' ">
        <template v-slot:header>
          <CatHeader title="C#">
            <p>
              Probably one of the best OOP languages out there aside from
              java, At my time in NAIT I spent 2 years learning this
              language inside and out. I've done AWS, Sockets and ASP.NET
            </p>
          </CatHeader>
        </template>

        <template v-slot:programs>
          <Project title="Drawing Board" link="https://github.com/EzekielEnns/NAIT_Projects/blob/main/DrawingClient.pdf">
            <p>
             this was a class assignment were we made a
              socket application (server and client)
              that allowed clients to draw on a window together.
            </p>
          </Project>
          <Project title="ASP.Net Site" link="https://github.com/EzekielEnns/NAIT_Projects/tree/main/ASP_Net">
            <p>
              A nice easy to use web development platform. I personally
              prefer more freedom when setting up my own projects but
              for a enterprise or small business this is an excellent way
              to have all your code under one toolset. This project was
              done as a final for a ASP.net unit at NAIT and style was
              not the primary goal
            </p>
          </Project>
        </template>
      </CategoryPage>
      <CategoryPage v-if="store.page === 'python' ">
        <template v-slot:header>
          <CatHeader title="Python">
            <p>
              this has been my go to language for years, not becuase
              its fast or nice to look at but because its easy to
              prototype ideas in, well at least ideas that dont use pointers.
            </p>
          </CatHeader>
        </template>

        <template v-slot:programs>
          <Project title="IZ-Kit Capstone Project" link="https://github.com/EzekielEnns/IZ-KIT">
            <p>
              this was a group project done to finalize my diploma in
              computer engineering technology. I all the web communications:
              This project was a lot of fun and gave me some insight on websockets
              and the applications they hold for IOT devices
            </p>
          </Project>
        </template>
      </CategoryPage>
    </div>
  </div>
</template>

<script>
import CategoryPage from '@/components/CategoryPage.vue'
import NavBar from "@/components/NavBar";
import Button from "@/components/Button";

import {store} from "./store";
import CatHeader from "@/components/CatHeader";
import Project from "@/components/Project";


export default {
  name: 'App',
  components: {
    Project,
    CatHeader,
    NavBar,
    Button,
    CategoryPage,  //project displays

  },
  watch: {
    //TODO this should be a feature of Button.vue
    'store.page'(newVal){
      var url = ''
      switch (newVal) {
        case 'git':
          url = 'https://github.com/EzekielEnns'
          break;
        case 'linkedin':
          url= 'https://www.linkedin.com/in/ezekiel-enns/'
          break;
        case 'resume':
          url='https://github.com/EzekielEnns/Portfolio/blob/main/myResume.pdf'
          break;
        default:
          break;
      }
      if(url) {
        window.open(url,'_blank').focus();
        store.page = store.last;
      }
      else {
        store.last = newVal;
      }
    }
  },
  data(){
    return {
      store
    }
  },
}
</script>

<style>

.content {
  position: fixed;
  display: flex;
  justify-content: center;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.warning {visibility: hidden}

@media (max-width: 700px) {
  .content>*{
    font-size: 0.7em !important;
  }
  .content{width: 80%}
}
</style>
