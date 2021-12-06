import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createWebHistory ,createRouter } from 'vue-router'

import { dom } from '@fortawesome/fontawesome-svg-core'
dom.watch()

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTachometerAlt ,faUniversity,faBalanceScale,faChartLine,faUser,faSignOutAlt,faPencilAlt,faTrash,faBars,faTimes} from '@fortawesome/free-solid-svg-icons'
//import { faTachometerAlt } from '@fortawesome/free-brands-svg-icons'

library.add(faTachometerAlt,faUniversity,faBalanceScale,faChartLine,faUser,faSignOutAlt,faPencilAlt,faTrash,faBars,faTimes)

//Vue.config.productionTip = false

import budgetapp from './budgetapp.vue'

import homecomponent from './components/homecomponent.vue'
import signIncomponent from './components/signIncomponent.vue'
import registercomponent from './components/registercomponent.vue'
import forgotpasswordcomponent from './components/forgotpasswordcomponent.vue'
import accountcomponent from './components/accountcomponent.vue'

const routes=[
    {path:'/',component:homecomponent},
    {path:'/signIn',component:signIncomponent},
    {path:'/register',component:registercomponent},
    {path:'/forgot-password',component:forgotpasswordcomponent},
    {path:'/account',component:accountcomponent},
];
const router=createRouter({history:createWebHistory(),routes});

createApp(budgetapp).use(router).component('fa', FontAwesomeIcon).mount('#app')
