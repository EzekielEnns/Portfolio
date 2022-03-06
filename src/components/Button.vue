<template>
  <div :class="store.page === page?'selected':''" @click="store.page = page">
  <img
       :src="require(`@/assets/${icon}`)" >
    <text v-if="desc">{{desc}}</text>
  </div>
</template>

<script>

import {store} from "@/store";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Button",
  props:{
    page:{
      type:String,
      default:'about'
    },
    icon:{
      type:String,
      default:'logo.png'
    },
    desc:String,
  },
  data() {
    return {
      store
    }
  }
}
</script>


<style scoped>
img {
  width: 25px;
  height: 25px;
  padding: 1px;
}
div {
  display: flex;
  flex-direction: column;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.selected {

  border: white 2px solid;
  border-radius: 5px;
}

</style>