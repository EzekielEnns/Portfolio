<template>
  <div class="outside">
      <div class="t2">
    <slot name="header">
    </slot>
    <div class="programs">
      <slot name="programs"></slot>
    </div>
  </div>
    </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "CategoryPage",
  props: {
    icon: {
      type:String,
      default:'logo.png'
    },
  },
}
</script>

<style scoped>
.projects {
  border: paleturquoise 5px solid;
  border-radius: 5px;
}

.outside {
  display: flex;
  justify-content: center;
  width: calc(100% - 29px);
}

.programs {
  display: flex;
  flex-direction: column;
  font-size: smaller;
}

</style>