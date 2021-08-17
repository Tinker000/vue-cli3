<template>
  <div class="home">
    <div class="title">SEARCH TRADE HUB</div>
    <div class="num-text">69000+ Pharmaceutical brands, suppliers, UPC</div>
    <div class="search-box">
      <input v-model="search" placeholder="请输入内容" class="search-input" />
      <el-button class="search-btn" @click="searchPlay()">搜索</el-button>
    </div>
    <ul class="recommend-box">
      <li>
        <img src="@/assets/icon/home-icon1.png" class="icon-img" />
        <p class="icon-text">熱賣商品</p>
      </li>
      <li>
        <img src="@/assets/icon/home-icon2.png" class="icon-img" />
        <p class="icon-text">最新資訊</p>
      </li>
      <li>
        <img src="@/assets/icon/home-icon3.png" class="icon-img" />
        <p class="icon-text">優惠商品</p>
      </li>
      <li>
        <img src="@/assets/icon/home-icon4.png" class="icon-img" />
        <p class="icon-text">幫助</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      search: ""
    };
  },
  mounted() {
    console.log(this.$store.state);
  },
  methods: {
    searchPlay() {
      this.$store.commit("stateChange", {
        label: "token",
        value: Math.ceil(Math.random() * 10)
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.home {
  display: flex;
  width: 100%;
  flex: 1;
  background-image: url("~@/assets/images/home-bg.png");
  background-size: 100% 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .title {
    font-size: 36px;
    font-family: Arial;
    font-weight: bold;
    color: #0a2b48;
    margin-top: -60px;
  }
  .num-text {
    font-size: 22px;
    font-weight: 400;
    color: #0a2b48;
    margin-top: 16px;
    margin-bottom: 60px;
  }
  .search-box {
    .search-input {
      width: 400px;
      height: 60px;
      line-height: 60px;
      padding: 0 24px;
      box-sizing: border-box;
      background: #ffffff;
      box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
      opacity: 1;
      border-radius: 8px;
      border: none;
      margin-right: 20px;
      color: #cfd8e0;
      font-size: 14px;
      outline: none;
      margin-bottom: 50px;
      &::-webkit-input-placeholder {
        color: #cfd8e0;
      }
    }
    .search-btn {
      width: 120px;
      height: 60px;
      background: #ffc428;
      box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
      border-radius: 8px;
      border-color: #ffc428;
      color: #fff;
      &:hover {
        opacity: 0.8;
      }
    }
  }
  .recommend-box {
    list-style: none;
    display: flex;
    justify-content: center;
    text-align: center;
    li {
      margin: 0 20px;
    }
    .icon-text {
      font-size: 12px;
      font-weight: 400;
      color: #0a2b48;
    }
  }
}
</style>
