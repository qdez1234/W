// import Vue from 'vue'
//  import Router from 'vue-router'
import basic from './basic'
import member from './member'
import card from './card'
import goods from './goods'
import order from './order'
import activity from './activity'
import wx from './wx'
import tencentPayment from './tencentPayment'
import report from './report'
import wms from './wms';
import business from './business';

//  Vue.use(Router)
const router = new VueRouter({
    routes: [{
            path: '/',
            name: 'login',
            component: resolve => require(['@/views/login'], resolve),
            meta: {
                keepAlive: true
            }
        },
        {
            path: '/login',
            name: '登录',
            component: resolve => require(['@/views/login'], resolve),
            meta: {
                keepAlive: true
            }
        },
        ...member,
        ...basic,
        card,
        ...goods,
        order,
        activity,
        wx,
        tencentPayment,
        report,
        wms,
        business
    ]
})
router.beforeEach((to, from, next) => {
    let host = window.location.host
    router.app.$options.store.dispatch('getdbinfo')
    if (to.path.startsWith('/login')) {
        next()
    } else {
        var xtoken = localStorage.getItem(host + "X-Token")
        var token = to.query.token;
        var username = to.query.userName;
		if(to.query.tenantCode!= undefined){
			var tenantCode = to.query.tenantCode.replace(' ','+');
			localStorage.setItem(host + "tenantCode", tenantCode);
		}
        if (!xtoken) {
            if (!token) {
                next({ path: '/login' })
            } else {
                //标识是从客户端过来
                localStorage.setItem(host + "X-router", 1);
                localStorage.setItem(host + "X-Token", token);
                localStorage.setItem(host + "X-User", username);
                next();
            }
        } else {
            if (token) {
                localStorage.setItem(host + "X-router", 1);
                if (token != xtoken) {
                    localStorage.setItem(host + "X-Token", token);
                    localStorage.setItem(host + "X-User", username);
                }
            }

            next()
        }
    }
})
export default router
