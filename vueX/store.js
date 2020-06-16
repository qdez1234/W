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
