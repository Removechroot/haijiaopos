<template>
  <div>
    <!-- 就餐方式选项卡 -->
    <div class="topnav">
      <!-- 上层 -->
      <div class="topnav-1">
        <el-row>
          <template v-if="topnav">
            <el-col
              :span="3"
              v-for="(item, index) in topnavlist1"
              :key="index"
              style="cursor: pointer"
              >{{ item }}</el-col
            >
          </template>
          <template v-else>
            <el-col
              :span="3"
              v-for="(item, index) in topnavlist2"
              :key="index"
              style="cursor: pointer"
              >{{ item }}</el-col
            >
          </template>

          <el-col :span="6">
            <el-button plain class="checkBox" @click="totopnav(1)"
              >＜</el-button
            >
            <el-button plain class="checkBox" @click="totopnav(2)"
              >＞</el-button
            >
          </el-col>
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
        <div
          class="memu-list-item"
          v-for="(item, index) in menulist"
          :key="index"
          @click="Addmenu(item)"
        >
          <span
            >{{ item.foodName }}
            <br />
            <br />
            <div class="outofprint" v-if="item.outofprint">已售完</div>
          </span>

          <span style="margin-top: 40%; font-size: 18px"
            >{{ item.price }}元起</span
          >
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
export default {
  data() {
    return {
      topnav: true,
      topnavlist1: [
        "全部",
        "嗨椒·小面",
        "嗨椒·米粉",
        "红薯粉",
        "河粉",
        "舌尖小吃",
      ],

      topnavlist2: [
        "我要加点料",
        "会员抢购",
        "超值套餐",
        "团餐",
        "外卖",
        "餐盒",
      ],
      menulist: [],
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    // 获取菜单数据
    async init() {
      let Data = await this.$http({
        url: "/menuall",
      });
      this.menulist = Data.result;
    },
    // 切换列表
    totopnav(number) {
      if (number == 1) {
        this.topnav = true;
      } else {
        this.topnav = false;
      }
    },
    // 添加到菜单
    Addmenu(value) {
      // 判断是否已售空
      if (value.outofprint) {
        this,
          this.$notify({
            title: "提示",
            message: "库存不足请添加库存",
          });
        return;
      }
      // 判断空列表情况
      if (this.$store.state.menulist.length == 0) {
        // 直接添加情况;
        this.$store.commit("Addmenu", value);
        this.$store.commit("totalPrices");
      } else {
        let newlist = this.$store.state.menulist;

        let number = newlist.findIndex((item) => {
          return item.number == value.number;
        });
        if (number != -1) {
          this.$store.commit("Addcount", number);
          this.$store.commit("totalPrices");
        } else {
          this.$store.commit("Addmenu", value);
          this.$store.commit("totalPrices");
        }
      }
    },
  },
};
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
  /* justify-content: space-between; */
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
  cursor: pointer;
}
.memu-list-item:hover {
  background-color: #dee2e6;
}
.memu-list-item:active {
  background-color: #e9ecef;
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
.checkBox {
  border: 1px solid rgb(189, 189, 189);
  width: 80px;
  float: left;
}
.outofprint {
  border: 1px solid black;
  border-radius: 5px;
  width: 80px;
  margin: 0 auto;
  text-align: center;
  pointer-events: none;
  cursor: default;
  opacity: 0.6;
}
</style>