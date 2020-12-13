<template>
  <div id="app">
    <div id="nav">
      <router-link to="/" >Home  </router-link>/
      <router-link to="/vendas" >Vendas  </router-link>/
      <router-link to="/estoques" >Estoques</router-link>
     
    </div>
    <div data-app>
      <router-view />
    </div>
   
  </div>
</template>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>




