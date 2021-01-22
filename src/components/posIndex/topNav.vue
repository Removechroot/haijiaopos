<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="14"
        ><div class="memu">
          <i class="el-icon-s-grid"></i>
          菜单
        </div></el-col
      >
      <el-col :span="6"
        ><div class="search">
          <el-input
            placeholder="请输入内容"
            prefix-icon="el-icon-search"
            v-model="input2"
            class="search2"
          >
          </el-input></div
      ></el-col>
      <el-col :span="4">
        <el-row :gutter="20">
          <el-col :span="4">
            <i class="el-icon-question mt-5"></i>
          </el-col>
          <el-col :span="4" class="el-icon-s-claim mt-5"></el-col>
          <el-col :span="4" class="el-icon-warning mt-5"></el-col>
          <el-col :span="4" class="el-icon-question mt-5"></el-col>
          <el-col :span="8" style="margin-top: 10px">
            <el-badge value="new">
              <el-avatar :size="30" :src="circleUrl"></el-avatar>
            </el-badge>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input2: "",
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
    };
  },
};
</script>

<style>
.memu {
  margin-top: 10px;
  color: #fff;
  font-size: 25px;
}
.search {
  margin-top: 10px;
  width: 300px;
  background-color: #41436a;
}
.search2 {
  font-size: 34px;
}
.mt-5 {
  margin-top: 10px;
  color: #c9cadd;
  font-size: 30px;
}
</style>