<template>
  <div class="main">
    <div class="centent">
      <div>登陆嗨椒面馆</div>
      <div class="item2">
        <span>用户名:</span>
        <el-input style="width: 450px" v-model="username"></el-input>
        <div style="height: 30px"></div>
        <span style="font-size: 26px">密码:</span>&nbsp;&nbsp;&nbsp;
        <el-input
          style="width: 450px"
          v-model="password"
          show-password
        ></el-input>
      </div>
      <div class="buttonitem">
        <el-button size="medium" @click="login_in">登陆</el-button>
        <el-button size="medium" @click="clear - all">清空</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "admin",
      password: "admin",
    };
  },
  methods: {
    login_in() {
      if (this.username === "admin" && this.password === "admin") {
        this.$router.push("/pos");
      } else {
        this.$message("账号或者密码错误");
      }
    },
  },
};
</script>

<style scoped>
.main {
  width: 100%;
  height: 100%;
  background-color: #000;
}
.centent {
  width: 550px;
  height: 400px;
  border-radius: 5%;
  background-color: rgb(238, 95, 131);
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
}
.centent div:nth-child(1) {
  text-align: center;
  font-size: 30px;
  margin-bottom: 60px;
}
.centent div:nth-child(2) span {
  line-height: 20px;
  font-size: 20px;
  margin-left: 15px;
  margin-right: 5px;
}
.buttonitem {
  width: 100%;
  margin-left: 180px;
}
.item2 {
  margin-bottom: 80px;
}
</style>