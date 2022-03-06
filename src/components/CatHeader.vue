<template>
  <div class="header">
    <h1>{{title}}</h1>
    <slot/>
  </div>
</template>

<script>
export default {
  name: "CatHeader",
  props:{
    title:String
  }
}
</script>

<style scoped>
  .header {
    text-align: center;
    padding-bottom: 10px;
  }
</style>