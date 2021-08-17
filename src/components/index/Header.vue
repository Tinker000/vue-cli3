<template>
  <el-row :gutter="20" class="head">
    <el-col :span="4">
      <div class="logo">TRADE HUB</div>
    </el-col>
    <el-col :span="16">
      <el-row type="flex" justify="center" class="nav-conter">
        <el-col :span="4">
          <div>全部商品</div>
        </el-col>
        <el-col :span="4">
          <div>寻找/上传商品</div>
        </el-col>
        <el-col :span="4">
          <div>加盟/分享商品</div>
        </el-col>
      </el-row>
    </el-col>
    <el-col :span="4">
      <el-row type="flex" justify="center">
        <el-col :span="6">
          <div>
            <img src="@/assets/icon/layout-icon2.png" />
          </div>
        </el-col>
        <el-col :span="6">
          <div>
            <img src="@/assets/icon/layout-icon3.png" />
          </div>
        </el-col>
        <el-col :span="6">
          <div>
            <img src="@/assets/icon/layout-icon1.png" />
          </div>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped lang="scss">
.head {
  height: 70px;
  background: #ffc428;
  text-align: center;
  line-height: 70px;
  .logo {
    font-size: 16px;
    font-weight: bold;
    color: #213e59;
  }
  .nav-conter {
    font-size: 12px;
    color: #0a2b48;
    font-weight: bold;
  }
}
</style>
