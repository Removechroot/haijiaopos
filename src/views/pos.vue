<template>
  <div>
    <el-container>
      <el-header>
        <topnav></topnav>
      </el-header>
      <el-container>
        <el-aside width="800px">
          <letf-nav></letf-nav>
        </el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import topnav from "../components/posIndex/topNav";
import LetfNav from "../components/posIndex/letfNav.vue";
export default {
  components: {
    topnav,
    LetfNav,
  },
};
</script>

<style scoped>
.el-header {
  background-color: #000;
}
</style>