<template>
  <div class="project">
    <span><h3>{{title}}</h3> <a v-if="link" target="_blank" :href="link">{{desc}}</a></span>
    <slot/>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Project",
  props: {
    title:String,
    link:String,
    desc:{
      type:String,
      default:'@github'
    }
  }
}
</script>

<style scoped>
  span {
    display: flex;
    gap: 10px;
    align-items: center;
  }
  .project {
    display: flex;
    flex-wrap: wrap;
  }
</style>