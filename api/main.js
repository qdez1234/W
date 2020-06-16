
import App from './App'
import router from './router'
import '@/assets/iconfont.css'
import '@/styles/index.scss'
import store from '@/vuex/store'
import { formatDate, dateFormat,changeTime } from '@/common/formtDate.js'
import { dataToTree, toTree } from '@/common/dataToTree.js'
import { get, post,patch,del,location } from '@/api/common.js'
import cdn from '@/common/cdnhelper.js'
Vue.prototype.formatDate = formatDate
Vue.prototype.dateFormat = dateFormat
Vue.prototype.dataToTree = dataToTree
Vue.prototype.changeTime = changeTime
Vue.prototype.toTree = toTree
Vue.prototype.getkeybyfile = cdn.getkeybyfile

Vue.prototype.get = get
Vue.prototype.post = post
Vue.prototype.patch = patch
Vue.prototype.del = del
Vue.prototype.location = location

Vue.config.devtools = true
Vue.config.productionTip = false
var vm = new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})
  //小数点如果大于4位,则进行第五位四舍五入操作
Vue.prototype.mathR=function(value){
    var num = value;
    var x = String(num).indexOf('.') + 1; //小数点的位置
    var y = String(num).length - x; //小数的位数
    if(y>4){
      return num.toFixed(4)
    }else{
      return num
    }
}
