<template>
  <div id="app">
    <div id="nav">
      <router-link to="/" >Home | </router-link>
      <router-link to="/Vendas" >Vendas | </router-link>
      <router-link to="/Estoques" >Estoques</router-link>
      <router-view />
    </div>
   
  </div>
</template>

<script>


</script>
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




