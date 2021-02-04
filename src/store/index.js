import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    totalPrices:0,
    menulist: [
      
    ]

  },
  mutations: {
    Addmenu(state,arry){
      state.menulist.push(arry)
    },
    Addcount(state,index){
        state.menulist[index].count ++
    },
    totalPrices(state){
      let count = 0;
      let list = state.menulist;
      for (const item of list) {
        console.log(item);

        count += parseInt(item.price) * parseInt(item.count);
      }
      state.totalPrices = count;
      
    },
    delmuem(state,number){
      state.menulist.splice(number,1)
    }


  },
  actions: {},
  modules: {}
});
