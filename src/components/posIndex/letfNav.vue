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
                <el-button type="primary" class="mr-2" style="font-size: 30px"
                  >现金</el-button
                >
                <el-button type="primary" class="mr-2" style="font-size: 30px"
                  >扫码支付</el-button
                >
                <el-button type="primary" class="mr-2" style="font-size: 30px"
                  >会员支付</el-button
                >
              </div>
            </div>
          </div>
        </el-col>
        <!-- 下层 -->
        <el-col :span="4">
          <div class="handle">
            <!-- <el-input-number size="small" v-model="num3"></el-input-number> -->
            <div class="number">
              <el-button class="number-button">
                <i>-</i>
              </el-button>
              <div class="numer-count">{{ number }}</div>
              <el-button class="number-button">
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
.mr-2 {
  margin-right: 20px !important;
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
  font-size: 45px;
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