<template>
  <div class="main">
    <div class="centent">
      <el-card class="box-card">
        <div class="text item">
          <span style="font-size: 40px">销售记录</span>
        </div>
      </el-card>
      <el-card class="box-card">
        <div class="text item" @click="dialogVisible = true">
          <span style="font-size: 40px">添加菜品</span>
        </div>
      </el-card>
    </div>

    <el-dialog title="添加菜品" :visible.sync="dialogVisible" width="240">
      <div>
        <el-form ref="form" :model="munudata" :rules="rules" label-width="80px">
          <el-form-item label="菜品名称">
            <el-input v-model="munudata.foodName"></el-input>
          </el-form-item>
          <el-form-item label="菜品序号">
            <el-input v-model="munudata.number"></el-input>
          </el-form-item>
          <el-form-item label="菜品价格" prop="number">
            <el-input v-model="munudata.price"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <div slot="footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="Addmenu">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "admin",
      password: "admin",
      dialogVisible: false,
      munudata: {
        foodName: "测试菜品",
        number: 0,
        price: 0,
      },
      rules: {
        number: [
          {
            required: true,
            type: "number",
            message: "请选择活动区域",
          },
        ],
      },
    };
  },
  methods: {
    Addmenu() {
      let result = this.$refs.form.model;

      this.$http({
        url: "/addmenu",

        method: "POST",
        data: result,
      }).then((res) => {
        if (res.result) {
          this.$message({
            type: "success",
            message: "添加菜品成功",
          });
          this.dialogVisible = false;
        }
      });
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

.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.box-card {
  width: 280px;
  float: left;
  margin: 250px;
  cursor: pointer;
  text-align: center;
}
</style>