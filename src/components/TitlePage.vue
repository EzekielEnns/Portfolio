<template>
  <div class="header">
    <div id="name">
      <h1>{{name}}</h1>
    </div>

    <div id="about">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "TitlePage",
  props: {
    name:String
  }
}
</script>

<style scoped>

.header {
  align-items: center;
  display: flex;
  gap: 5vw;
  width: 100%;
  margin: 10%;
}

@media (max-width: 700px) {
  .header {
    flex-direction: column;
    align-items: flex-start;
  }
}

div>*{
  margin: 0px;
}


</style>