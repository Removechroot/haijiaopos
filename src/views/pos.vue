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
        <el-main>
          <right-nav></right-nav>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import topnav from "../components/posIndex/topNav";
import LetfNav from "../components/posIndex/letfNav.vue";
import rightNav from "../components/posIndex/rightNav";
export default {
  components: {
    topnav,
    LetfNav,
    rightNav,
  },
};
</script>

<style scoped>
.el-header {
  background-color: #000;
}
</style>