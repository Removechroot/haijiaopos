'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async menuall() {
    const result = await this.app.mysql.select('Menu')
    this.ctx.body= {
      code:200,
      msg:'查询成功',
      result
    }
  }
  async vipcard(){
     let cardid = this.ctx.query.card_id
    
    const post = await this.app.mysql.get('VipCard', { cardNumber: cardid });
    if (post){
      this.ctx.body= {
        code:200,
        msg:'查询成功',
        post
      }
    }else{
      this.ctx.body= {
        code:404,
        msg:'查无此码'
      }
    }
  }
  async addmenu(){
    let {foodName,price,number} = this.ctx.request.body;
    const sql = await this.app.mysql.insert('Menu',{
      foodName,
      price,
      number,
      outofprint:0,
      haltSales:0,
      count:99

    })
    // 判断插入成功
const insertSuccess = sql.affectedRows === 1;
   this.ctx.body={
     code:200,
     result:insertSuccess
   }
  }

}

module.exports = HomeController;
