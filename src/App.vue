<template>
  <div id="app">
    <!-- <Header/>
    <Main/> -->
    <Page/>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import Page from './components/Page.vue';

export default {
  name: 'app',
  components: {
    Header,
    Main,
    Page,
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* padding-top: 60px; */
  background-color: #F7F7F5;
}
body {
  margin: 0;
}
</style>
