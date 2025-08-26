//删除 按钮的js脚本如下，要求按下删除后，那一行直接消失
document.querySelectorAll('.del').forEach(function(btn){
    btn.addEventListener('click',function(){
        this.parentNode.parentNode.remove()     
    })
})

// document.querySelector('.search-form').addEventListener("keydown",function(){
//     console.log("keydown")
// })

// document.querySelector('.formdiv').addEventListener("mouseenter",function(){
//     console.log("鼠标进入了表格")
// })

document.querySelector('.name').addEventListener('focus',
    function(){
        console.log(">>>输入姓名中...")
    }
)