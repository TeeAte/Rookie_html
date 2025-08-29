import { printLog } from "./utils.js";
import {createApp} from '../vue.js';

//删除 按钮的js脚本如下，要求按下删除后，那一行直接消失


// document.querySelector('.search-form').addEventListener("keydown",function(){
//     console.log("keydown")
// })

// document.querySelector('.formdiv').addEventListener("mouseenter",function(){
//     console.log("鼠标进入了表格")
// })

document.querySelector('.name').addEventListener('focus',
    function(){
        printLog(">>>输入姓名中...")
    }
)



      createApp({
         data() {
          return {
            
            searchForm: {//定义数据模型,采集表单数据
                name: '',
                gender: '',
                job: ''
            },

            empList: [
            ]
          }
        },





mounted() {
  this.search()
},//解释：当组件挂载完成后，执行 search 方法





        //方法
    methods: {
  async search(){
    // 这里是异步请求
    // axios.get(`https://web-server.itheima.net/emps/list?name=${this.searchForm.name}&gender=${this.searchForm.gender}&job=${this.searchForm.job}`).then((result) => {
    //   this.empList=result.data.data;
    // }).catch((err) => {
    //   alert(err.message)
    // });
    let result1 = await axios.get(`https://web-server.itheima.net/emps/list?name=${this.searchForm.name}&gender=${this.searchForm.gender}&job=${this.searchForm.job}`);
    this.empList = result1.data.data;
    //这里是异步转成同步，因为axios是异步的，所以await等待axios执行完毕，再执行下面的代码
  },
  clear(){
      //清空表单项数据
      this.searchForm = {name:'', gender:'', job:''}
      this.search()
  },
deleteEmp(index) {// 使用 splice 方法直接从数组中删除指定索引的元素
this.empList.splice(index, 1);}
      
  },



  



}).mount('body')

