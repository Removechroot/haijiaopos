<template>
  <div>
    <el-card class="box-card" body-style="padding:25px">
      <el-row>
        <!-- 上层 -->
        <el-col :span="20" class="border-letf">
          <div>
            <el-row>
              <el-col :span="8">
                <el-button
                  type="text"
                  size="300"
                  icon="el-icon-user-solid"
                  style="font-size: 25px"
                  >会员登陆</el-button
                >
              </el-col>
              <el-col :span="8">
                <el-button type="text" size="default" style="font-size: 25px"
                  >输入餐牌号</el-button
                >
              </el-col>
              <el-col :span="8">
                <el-button type="text" size="default" style="font-size: 25px"
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
              >
                <el-table-column
                  prop="numer"
                  label="序号"
                  width="70"
                  :resizable="false"
                >
                </el-table-column>
                <el-table-column
                  prop="dishes"
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
                  <template>
                    <ElButton type="danger" style="font-size: 20px"
                      >删除
                    </ElButton>
                  </template>
                </el-table-column>
              </el-table>
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
                  <i id="price-1">共</i>

                  <i id="price-2">98元</i>
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
              <div class="numer-count">{{ number }}</div>
              <el-button class="number-button" @click="handleClickAdd">
                <i>+</i>
              </el-button>
            </div>
            <el-button plain class="mt-size">规格/做法</el-button>
            <el-button plain class="mt-size">加料</el-button>
            <el-button plain class="mt-size">打折/减免</el-button>
            <el-button plain class="mt-size">删除</el-button>
            <el-button plain class="mt-size">批量操作</el-button>
            <el-divider>
              <i class="centen-text">订单操作</i>
            </el-divider>
            <el-button plain class="mt-size">整单备注</el-button>
          </div>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      number: 1,
      tableData: [
        {
          numer: "1",
          dishes: "红枣波轻薄",
          name: "王小虎",
          price: "18元",
          count: "1",
        },
        {
          numer: "1",
          dishes: "红枣波轻薄",
          name: "王小虎",
          price: "18元",
          count: "1",
        },
        {
          numer: "1",
          dishes: "红枣波轻薄",
          name: "王小虎",
          price: "18元",
          count: "1",
        },
        {
          numer: "1",
          dishes: "红枣波轻薄",
          name: "王小虎",
          price: "18元",
          count: "1",
        },
        {
          numer: "1",
          dishes: "红枣波轻薄",
          name: "王小虎",
          price: "18元",
          count: "1",
        },
        {
          numer: "1",
          dishes: "红枣波轻薄",
          name: "王小虎",
          price: "18元",
          count: "1",
        },
        {
          numer: "1",
          dishes: "红枣波轻薄",
          name: "王小虎",
          price: "18元",
          count: "1",
        },
      ],
    };
  },
  methods: {
    handleClickAdd() {
      if (this.number == 0 || this.number >= 99) {
        this.number = 1;
      } else {
        this.number++;
      }
    },
    handleClickSub() {
      if (this.number <= 1 || this.number >= 99) {
        this.number = 1;
      } else {
        this.number--;
      }
    },
  },
};
</script>

<style scoped>
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
  float: left;
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
  background-color: #f76707;
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
#price-1 {
  font-size: 50px;
}
#price-2 {
  font-size: 40px;
  color: red;
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
</style>