import dbinfo from './modules/dbinfo'
import toolslist from './modules/tools'
export default new Vuex.Store(
    {
        modules: {
          dbinfo,
          toolslist
        }
    }
)

//调用的时候

import {mapState,mapActions} form vuex


computed:{...mapState({ishow:state=>state.toolslist.dialogshow})}

methods:{...mapActions({setdialogshow:"setdialogshow"})}
