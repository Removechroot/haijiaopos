<template>
  <div>
    <el-card>
      <el-row>
        <!-- 上层 -->
        <el-col :span="20" class="border-letf">
          <div>
            <el-row>
              <el-col :span="8">
                <el-button type="primary" size="default">会员登陆</el-button>
              </el-col>
              <el-col :span="8">
                <el-button type="primary" size="default">输入餐牌号</el-button>
              </el-col>
              <el-col :span="8">
                <el-button type="primary" size="default">清空</el-button>
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
                    <ElButton type="danger">删除 </ElButton>
                  </template>
                </el-table-column>
              </el-table>
            </div>
            <div>
              <div class="t-centen">
                <el-button type="primary" class="mr-2">现金</el-button>
                <el-button type="primary" class="mr-2">扫码支付</el-button>
                <el-button type="primary" class="mr-2">会员支付</el-button>
              </div>
            </div>
          </div>
        </el-col>
        <!-- 下层 -->
        <el-col :span="4">
          <div class="handle">
            <el-input-number size="small" v-model="num3"></el-input-number>
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

<style>
.el-card {
  margin: 10px;
  height: 850px;
}
.el-table {
  font-size: 22px !important;
}
.border-letf {
  text-align: center;
  /* border-right: 0.5px solid rgb(172, 172, 172) !important; */
}
.mb-3 {
  margin-top: 30px;
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
</style>