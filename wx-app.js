app.js是一个全局js文件    里面方法以及属性可以被全局调用
无论是方法还是属性都是要放在APP({})对象中这样才能被全局调用
APP({
   localValue:  "value";
   localFunction:function(){}
})


在别的文件中我如果想要调取 app.js中的属性以及方法

const app=getApp()   //获取应用实例

然后通过 app.   方法直接调用



模块化开发   common.js           

       function sayHello(){}

             module.exports.sayHello=sayHello;

             
             app.js   
 
                      var common=require("common.js")
                      common.sayHello()   //调用requier过来的sayHellow函数
