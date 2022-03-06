<template>
<nav>
  <div class="info">
    <slot name="info"/>
  </div>
  <div class="projects">
    <slot name="projects"/>
  </div>

  <div class="contact">
    <slot name="contact"/>
  </div>
</nav>
</template>

<script>

export default {
  name: "NavBar"
}
</script>

<style scoped>
nav {
  background: black;
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  height: 100%;
  width: 29px;

  padding-left: 5px;
  padding-right: 5px;
  color: whitesmoke;
  font-size: 0.7rem;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

div {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
}

.contact {
  margin-top: auto;
}

.projects {
  margin-top: auto;
}

</style>