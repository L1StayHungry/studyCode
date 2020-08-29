
const app = new Vue({
  el: '#app',
  data:{
    list:[
      {
        id:1,
        name:'Java',
        data:'2020-0503',
        price:83.00,
        count:1
      },
      {
        id:2,
        name:'Python',
        data:'2020-0501',
        price:85.00,
        count:1
      },
      {
        id:3,
        name:'Linux',
        data:'2010-0503',
        price:93.00,
        count:1
      },
      {
        id:4,
        name:'JavaScript',
        data:'2020-0111',
        price:83.60,
        count:1
      },
    ]
  },
  methods:{ 
    // getFinalPrice(price){
    //   return '￥'+price.toFixed(2)
    // }
    increment(index){
      this.list[index].count++;
    },
    decrement(index){
      this.list[index].count--;
    },
    removeBook(index){
      this.list.splice(index,1)
    },
  },
  computed:{
    totalPrice(){
      // let totalPrice = 0
      // for(let book of this.list){
      //   totalPrice += book.price*book.count;
      // }
      // return totalPrice
      return this.list.reduce(function(preValue,book){
        return preValue+book.price*book.count
      },0)//0初始化preValue
    }
  },
  // 过滤器
  filters:{
    showPrice(price){
      return '￥'+price.toFixed(2)
    }
  }
})

