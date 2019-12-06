<template>
  <div id="app">
    
    <router-view/>

    <footer>
      <router-link to="/">首页</router-link>
      <router-link to="/my">我的</router-link>
    </footer>
  </div>
</template>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
html,body,#app{
  width: 100%;
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
}

#app>div{
  flex: 1;
}
footer{
  height: 50px;
  border-top: 1px solid #999;
  display: flex;
  justify-content: space-around;
  align-items: center;
  a{
    text-decoration: none;
  
  }
}





</style>
