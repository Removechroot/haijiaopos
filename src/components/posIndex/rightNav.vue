<template>
  <div>
    <!-- 就餐方式选项卡 -->
    <div class="topnav">
      <!-- 上层 -->
      <div class="topnav-1">
        <el-row>
          <el-col :span="3">我要加点料</el-col>
          <el-col :span="3">会员抢购</el-col>
          <el-col :span="3">超值套餐</el-col>
          <el-col :span="3">团餐</el-col>
          <el-col :span="3">外卖</el-col>
          <el-col :span="3">餐盒</el-col>
          <el-col :span="6">复选按钮</el-col>
        </el-row>
      </div>
      <el-divider></el-divider>
      <!-- 下层 -->

      <div class="topnav-2">
        <i>当前共有121个商品</i>
      </div>
    </div>
    <!-- 菜品点餐区域 -->
    <div>
      <!-- 横五下无限 -->
      <div class="memu-list">
        <!-- 点菜菜单 每一版不能超24个 -->
        <div class="memu-list-item" v-for="(item, index) in 24" :key="index">
          <i>酸菜牛肉面</i>
          <i style="margin-top: 90px; font-size: 18px">{{ item }}元起</i>
        </div>
      </div>
      <!-- 分页组件 40px-->
      <div class="page-list">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="121"
          page-size="24"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.topnav {
  background-color: #fff;
  width: 101%;
  height: 100px;
  margin-top: -8px;
  margin-left: -15px;
  border-radius: 5px;
}
.topnav-1 {
  width: 100%;
  text-align: center;
  padding-top: 15px;
  margin-bottom: -7px;
}
.el-divider {
  width: 90%;
  margin-left: 2%;
}
.topnav-2 {
  margin-top: -20px;
  font-size: 15px;
  text-align: left;
  padding-left: 15px;
}
.memu-list {
  width: 101%;
  height: 690px;
  margin-top: 10px;
  margin-left: -8px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: wrap;
  align-items: flex-start;
  justify-content: space-between;
}
.memu-list-item {
  width: 140px;
  height: 150px;
  border-radius: 5px;
  padding: 8px;
  margin-right: 20px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
}
.page-list {
  width: 100%;
  height: 40px;
  background-color: #fff;
  border-radius: 10px;
  margin-left: -15px;
  text-align: left;
  padding-top: 5px;
}
</style>