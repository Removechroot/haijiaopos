<template>
  <div>
    <el-card class="box-card" body-style="padding:25px">
      <el-row>
        <!-- 上层 -->
        <el-col :span="20" class="border-letf">
          <div>
            <el-row>
              <el-col :span="8">
                <el-button type="text" @click="openVip">
                  <span
                    class="iconfont icon-huangguan"
                    style="font-size: 25px; color: #a67552"
                  ></span>
                  <span style="font-size: 25px; margin-left: 5px"
                    >会员登陆</span
                  >
                </el-button>
              </el-col>
              <el-col :span="8">
                <el-button
                  type="text"
                  size="default"
                  style="font-size: 25px"
                  @click="menunumber"
                  >输入餐牌号</el-button
                >
              </el-col>
              <el-col :span="8">
                <el-button
                  type="text"
                  size="default"
                  style="font-size: 25px"
                  @click="clearmuen"
                  >清空</el-button
                >
              </el-col>
            </el-row>
            <div>
              <!-- 点餐系统 -->
              <el-table
                :data="tableData"
                border
                style="width: 100%"
                class="mb-3"
                highlight-current-row
                @current-change="handleCurrentChange"
              >
                <el-table-column
                  prop="number"
                  label="序号"
                  width="70"
                  :resizable="false"
                >
                </el-table-column>
                <el-table-column
                  prop="foodName"
                  label="菜品"
                  width="180"
                  :resizable="false"
                >
                </el-table-column>
                <el-table-column
                  prop="price"
                  label="单价"
                  width="100"
                  :resizable="false"
                >
                </el-table-column>
                <el-table-column
                  prop="count"
                  label="数量"
                  width="100"
                  :resizable="false"
                >
                </el-table-column>
                <el-table-column label="操作">
                  <template slot-scope="scope">
                    <ElButton
                      type="danger"
                      style="font-size: 20px"
                      @click="delmuem(scope.row.numer)"
                      >删除
                    </ElButton>
                  </template>
                </el-table-column>
              </el-table>
              <div class="pay">
                <el-row>
                  <el-col :span="14">
                    <el-checkbox
                      style="float: left"
                      label="整单打包"
                      border
                      size="medium"
                      class="checkbox"
                    ></el-checkbox>
                  </el-col>
                  <el-col
                    :span="4"
                    style="color: #dfddd7; font-size: 24px; line-height: 40px"
                    >共{{ menucount }}项</el-col
                  >
                  <el-col :span="6" style="font-size: 30px"
                    >￥{{ $store.state.totalPrices }}</el-col
                  >
                </el-row>
              </div>
            </div>
            <div>
              <div class="t-centen">
                <div>
                  <i class="iconfont icon-xianjin"></i>
                  <i>现金</i>
                </div>
                <div>
                  <i class="iconfont icon-REXsaomazhifu_"></i>
                  <i>扫码支付</i>
                </div>
                <div>
                  <i class="iconfont icon-huiyuan"></i>
                  <i>会员支付</i>
                </div>
                <div>
                  <i class=""></i>
                  <i>更多支付</i>
                </div>
              </div>
            </div>
          </div>
        </el-col>
        <!-- 下层 -->
        <el-col :span="4">
          <div class="handle">
            <div class="number">
              <el-button class="number-button" @click="handleClickSub">
                <i>-</i>
              </el-button>
              <div class="numer-count">{{ selectedData.count || null }}</div>
              <el-button class="number-button" @click="handleClickAdd">
                <i>+</i>
              </el-button>
            </div>
            <el-button
              plain
              class="mt-size"
              @click="specificationVisible = true"
              >规格/做法</el-button
            >
            <el-button plain class="mt-size" @click="reinforcedVisible = true"
              >加料</el-button
            >
            <el-button plain class="mt-size" @click="discount"
              >打折/减免</el-button
            >
            <el-button plain class="mt-size" @click="delitem">删除</el-button>
            <el-button plain class="mt-size" @click="operation"
              >批量操作</el-button
            >
            <el-divider>
              <i class="centen-text">订单操作</i>
            </el-divider>
            <el-button plain class="mt-size" @click="comment"
              >整单备注</el-button
            >
          </div>
        </el-col>
      </el-row>
    </el-card>
    <!-- 规格/做法 -->
    <el-dialog
      title="规格/做法"
      :visible.sync="specificationVisible"
      width="30%"
    >
      <div class="radio">
        <el-radio v-model="radio1" label="1" border class="radioitem"
          >粗面</el-radio
        >
        <el-radio v-model="radio1" label="2" border class="radioitem"
          >细面</el-radio
        >
        <el-radio v-model="radio1" label="3" border class="radioitem"
          >米粉</el-radio
        >
        <el-radio v-model="radio1" label="4" border class="radioitem"
          >河粉</el-radio
        >
        <el-radio v-model="radio1" label="5" border class="radioitem"
          >刀切面</el-radio
        >
        <el-radio v-model="radio1" label="6" border class="radioitem"
          >干捞</el-radio
        >
        <el-radio v-model="radio1" label="7" border class="radioitem"
          >干捞</el-radio
        >
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="specificationVisible = false">取 消</el-button>
        <el-button type="primary" @click="specificationVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
    <!-- 加料 -->
    <el-dialog title="加料" :visible.sync="reinforcedVisible" width="30%">
      <div class="radio">
        <el-radio v-model="radio2" label="1" border class="radioitem"
          >鱼蛋</el-radio
        >
        <el-radio v-model="radio2" label="2" border class="radioitem"
          >潮州牛丸</el-radio
        >
        <el-radio v-model="radio2" label="3" border class="radioitem"
          >米饭</el-radio
        >
        <el-radio v-model="radio2" label="4" border class="radioitem"
          >鸡排</el-radio
        >
        <el-radio v-model="radio2" label="5" border class="radioitem"
          >牛肉</el-radio
        >
        <el-radio v-model="radio2" label="6" border class="radioitem"
          >羊肉</el-radio
        >
        <el-radio v-model="radio2" label="7" border class="radioitem"
          >猪肉</el-radio
        >
        <el-radio v-model="radio2" label="7" border class="radioitem"
          >辣椒酱</el-radio
        >
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="reinforcedVisible = false">取 消</el-button>
        <el-button type="primary" @click="reinforcedVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menucount: 1,
      price: 0,
      specificationVisible: false,
      reinforcedVisible: false,
      radio1: 1,
      radio2: 2,
      tableData: [],
      selectedData: {},
    };
  },
  computed: {},
  updated() {
    this.tableData = this.$store.state.menulist;
    this.amount();
    this.$store.commit("totalPrices");
  },
  mounted() {
    this.amount();
  },

  methods: {
    // 菜单增减操作
    handleClickAdd() {
      if (this.selectedData == {} || this.selectedData.count >= 99) {
        return;
      }

      this.selectedData.count++;
      this.$store.commit("totalPrices");
    },
    handleClickSub() {
      if (this.selectedData == {} || this.selectedData.count <= 1) return;
      this.selectedData.count--;
      this.$store.commit("totalPrices");
    },
    // 会员登陆
    openVip() {
      this.$prompt("请输入会员编号", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputPattern: /^[0-9]*$/,
      }).then(({ value }) => {
        if (value == 123) {
          this.$notify({
            title: "认证成功",
            message: `尊贵${value}的黑卡会员,享受8.5折优惠`,
          });
        } else {
          this.$notify({
            title: "认证失败",
            message: `请重新检查会员卡卡号及有效期是否失效`,
          });
        }
      });
    },
    // 输入餐牌号
    menunumber() {
      this.$prompt("请输入就餐牌号", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputPattern: /^[0-9]*$/,
      }).then(({ value }) => {
        this.$message({
          type: "success",
          message: value,
        });
      });
    },
    // 清空列表功能
    clearmuen() {
      this.$confirm("此操作将清空菜单,是否继续?", "继续", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        this.$message({
          message: "清空成功",
          type: "success",
        });
        this.tableData = [];
        this.$store.commit("totalPrices");
        this.selectedData.count = 0;
      });
    },
    // 删除操作
    delmuem(number) {
      let tablist = this.tableData;
      let res = tablist.findIndex((item) => {
        return item.numer == number;
      });
      this.$message({
        type: "success",
        message: "删除成功",
      });
      this.tableData.splice(res, 1);
      this.$store.commit("totalPrices");

      this.selectedData.count = null;
    },
    // 共计统计方法
    amount() {
      let count = 0;
      for (const item of this.tableData) {
        count += parseInt(item.count);
      }
      this.menucount = count;
    },
    // 选择数据方法
    handleCurrentChange(e) {
      this.selectedData = e;
    },
    // 规格/做法
    specification() {},
    // 加料
    // 打折/减免
    discount() {
      this.$notify({
        title: "该功能未完善",
        message:
          "反正这个功能没做好,别看了!反正这个功能没做好,别看了!反正这个功能没做好,别看了!",
      });
    },
    // 删除
    delitem() {
      this.$notify({
        title: "该功能未完善",
        message:
          "反正这个功能没做好,别看了!反正这个功能没做好,别看了!反正这个功能没做好,别看了!反正这个功能没做好,别看了!",
      });
    },
    // 批量操作
    operation() {
      this.$notify({
        title: "该功能未完善",
        message:
          "反正这个功能没做好,别看了!反正这个功能没做好,别看了!反正这个功能没做好,别看了!反正这个功能没做好,别看了!",
      });
    },
    // 整单备注
    comment() {
      this.$prompt("请输入备注信息", "整单备注", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
      }).then(({ value }) => {
        this.$message({
          type: "success",
          message: `备注 ${value} 成功`,
        });
      });
    },
  },
};
</script>

<style scoped>
.radio {
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: start;
  align-items: start;
}
.radioitem {
  width: 100px;
  margin-top: 0px !important;
  margin-top: 20px !important;
}
.item {
  margin-top: 10px;
  margin-right: 40px;
  border: 1px solid black;
}
.box-card {
  margin: 10px;
  height: 850px;
}
.mb-3 {
  font-size: 22px !important;
  margin-top: 30px;
}
.border-letf {
  text-align: center;
}
.t-centen {
  margin-top: 15px;
  text-align: center;
}
.t-centen div {
  width: 120px;
  height: 120px;
  border: 1px solid #000;
  float: left;
  margin-right: 28px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  color: black;
}
.t-centen div:nth-of-type(1) {
  background-color: #f56c6c;
  cursor: pointer;
}
.t-centen div:nth-of-type(2) {
  background-color: #5faefc;
  cursor: pointer;
}
.t-centen div:nth-of-type(3) {
  background-color: #e64980;
  cursor: pointer;
}
.t-centen div:nth-of-type(4) {
  display: block;
  background-color: #fff;
}
.t-centen div i:nth-of-type(1) {
  height: 80px;
  font-size: 60px;
  align-items: center;
  justify-content: center;
  color: rgb(105, 5, 5);
}
.t-centen div i:nth-of-type(2) {
  align-items: center;
  justify-content: center;
  font-size: 24px;
}

.handle {
  margin-top: 70px;
  margin-left: 8px;
  float: left !important;
  text-align: right !important;
}
.mt-size {
  margin-top: 20px !important;
  width: 120px !important;
  font-size: 20px !important;
}
.el-divider__text {
  padding-top: -2px !important;
  padding-bottom: -2px !important;
  font-size: 8px !important;
}
.number {
  margin-top: 13px;
  margin-left: 15px;
  width: 110px;
  height: 162px;
  background-color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
.numer-count {
  width: 110px;
  height: 50px;
  border-radius: 0;
  border-left: 1px solid rgb(219, 219, 219);
  border-right: 1px solid rgb(219, 219, 219);
  text-align: center;
  font-size: 38px;
}

.number-button:nth-of-type(1) {
  border: 1px solid rgb(219, 219, 219);
  border-radius: 0;
  border-top-left-radius: 10px !important;
  border-top-right-radius: 10px !important;
}
.number-button:nth-of-type(2) {
  border: 1px solid rgb(219, 219, 219);
  border-radius: 0;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
.number-button i {
  font-size: 30px !important;
}
.pay {
  width: 605px;
  height: 30px;
  padding: 10px 0;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  border-bottom: 1px solid #ebeef5;
  border-left: 1px solid #ebeef5;
  border-right: 1px solid #ebeef5;
}
.checkbox {
  border: 1px solid #fff !important;
}
.checkbox > span {
  width: 80px !important;
}
</style>