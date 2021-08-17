<template>
  <div class="layout">
    <div class="header-box">
      <Header></Header>
    </div>
    <div class="main-box">
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from "@/components/index/Header.vue";

export default {
  name: "Layout",
  components: {
    Header
  }
};
</script>

<style scoped lang="scss">
.layout {
  min-height: 100vh;
  padding-top: 70px;
  box-sizing: border-box;
  display: flex;
  .header-box {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
  }
  .main-box{
    flex: 1;
    display: flex;
  }
}
</style>
