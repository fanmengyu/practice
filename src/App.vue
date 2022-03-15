<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  // components: {},
};
</script>

<style >
html,body {
  margin: 0px;
  padding: 0px;
  border:0;
  height: 100vh;
}
#app {
  height: 100vh;
}
</style>
