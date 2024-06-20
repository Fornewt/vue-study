<!-- App.vue 的 template 部分通常包含了整个应用的共享布局结构，
  这意味着无论用户访问应用中的哪个路径，都会看到这一共有的布局。 -->
<template> 
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/rock">Rock</router-link> |
    <router-link to="/dpList">DP</router-link>

  </nav>
  <router-view/>
  <div class="container">
    <div class="text">
      <p>老子是App.vue里的，所以所有网页都公有！</p>
    </div>
  </div>

  
</template>

<script>
// import rock from './components/ICanDo.vue'
export default{
  components: {// 不注册就不能在模板里用
    // rock // 注册组件，命名为 Rock，可以在模板中使用 <rock></rock>
  }
  
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.container {
    display: flex;
    flex-direction: column; /* 文字从上到下排列 */
    align-items: flex-end; /* 右侧对齐 */
    background-color: #f0f0f0;
    padding: 20px;
    width: 80px; /* 自定义容器宽度 */
    height: 300px; /* 自定义容器高度 */
    background-color: white;
}

.text {
    writing-mode: vertical-rl; /* 竖排文字 */
    text-orientation: mixed; /* 竖排文字方向 */
    // transform: rotate(-180deg); /* 旋转文字 */
    white-space: nowrap; /* 防止文字换行 */
    color: red;
    font-size: large;
    }
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
