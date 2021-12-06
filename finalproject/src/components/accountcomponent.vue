<template>
<div>
    <header class="headerformuniscreen">
        <h1>budget <span class="logo">.cool</span></h1>
        <div class="dropdown">
            <button class="btn text-white" type="button" @click="opendropdownmenu"><i class="fas fa-bars"></i></button>
        </div>
        <ul class="list-group mt-3 dropdown-menu">
            <li class="menu-title list-group-item"><span style="padding-left: 20px;">Manage</span></li>
            <li class="list-group-item activeitem" @click.prevent="activeitem"><a href="#"><i class="fas fa-tachometer-alt" style="margin-right:.5rem;"></i>Dashboard</a></li>
            <li class="list-group-item" @click.prevent="activeitem"><a href="#"><i class="fas fa-university" style="margin-right:.5rem;"/>Transactions</a></li>
            <li class="list-group-item"><a href="#" @click.prevent="activeitem"><i class="fas fa-balance-scale" style="margin-right:.5rem;"></i>Budgets</a></li>
            <li class="list-group-item"><a href="#" @click.prevent="activeitem"><i class="fas fa-chart-line" style="margin-right:.5rem;"></i> Stats</a></li>
            <li class="menu-title list-group-item"><span style="padding-left: 20px;">Account</span></li>
            <li class="list-group-item" @click.prevent="activeitem"><a href="#"><i class="fas fa-user" style="margin-right:.5rem;"></i>Account Settings</a></li>
            <li class="list-group-item"><router-link to="/signIn"><i class="fas fa-sign-out-alt" style="margin-right:.5rem;"></i> Sign Out</router-link></li>
        </ul>
    </header>
    <main>
        <keep-alive>
            <component :is="targetcomponent"/>
        </keep-alive>
    </main>
    <aside class="miniscreen">
        <header class="row text-center align-items-center pt-3 pb-3"><h1>budget <span class="logo">.cool</span></h1></header>
        <ul class="list-group mt-3">
            <li class="menu-title list-group-item"><span style="padding-left: 20px;">Manage</span></li>
            <li class="list-group-item activeitem" @click.prevent="activeitem"><a href="#"><i class="fas fa-tachometer-alt" style="margin-right:.5rem;"></i>Dashboard</a></li>
            <li class="list-group-item" @click.prevent="activeitem"><a href="#"><i class="fas fa-university" style="margin-right:.5rem;"/>Transactions</a></li>
            <li class="list-group-item"><a href="#" @click.prevent="activeitem"><i class="fas fa-balance-scale" style="margin-right:.5rem;"></i>Budgets</a></li>
            <li class="list-group-item"><a href="#" @click.prevent="activeitem"><i class="fas fa-chart-line" style="margin-right:.5rem;"></i> Stats</a></li>

            <li class="menu-title list-group-item"><span style="padding-left: 20px;">Account</span></li>
            <li class="list-group-item" @click.prevent="activeitem"><a href="#"><i class="fas fa-user" style="margin-right:.5rem;"></i>Account Settings</a></li>
            <li class="list-group-item"><router-link to="/signIn"><i class="fas fa-sign-out-alt" style="margin-right:.5rem;"></i> Sign Out</router-link></li>
        </ul>
    </aside>
</div>
</template>

<script>
import Dashboardcomponent from './Dashboardcomponent.vue'
import Transactionscomponent from './Transactionscomponent.vue'
import Budgetscomponent from './Budgetscomponent.vue'
import Statscomponent from './Statscomponent.vue'
import AccountSettingscomponent from './AccountSettingscomponent.vue'

export default {
data(){
    return{
        targetcomponent:Dashboardcomponent,
        evenopen:0,
    }
},
components:{
    Dashboardcomponent,
    Transactionscomponent,
    Budgetscomponent,
    Statscomponent,
    AccountSettingscomponent,
},
methods:{
    activeitem(el){
        document.querySelectorAll('li').forEach(function(singleli){
            singleli.classList.remove('activeitem');
        })
        document.querySelectorAll('li>a').forEach(function(singleanckor){
            singleanckor.classList.remove('activeitem');
        })
        el.target.classList.add('activeitem');
        this.targetcomponent=el.target.innerText.replace(/ /g, "")+'component';
        document.getElementsByClassName('dropdown-menu')[0].classList.remove('manuformuniscreen')
    },
    opendropdownmenu(el){
        document.getElementsByClassName('dropdown-menu')[0].classList.toggle('manuformuniscreen')
        el.currentTarget.innerHTML='<i class="fas fa-times"></i>'
        this.evenopen++
        this.checkclose(el)
    },
    checkclose(el){
        if(this.evenopen%2==0) el.currentTarget.innerHTML='<i class="fas fa-bars"></i>'
    }
}
}
</script>
<style scoped>
*{
    padding: 0px;
    margin: 0px;
}
aside{
    background: #232d3b;
    width: 24vw;
    height: 100vh;
    float: left;
}
main{
    float: right;
    width: 76vw;
    height: 100vh;
    background: #eff3f6;
    color: #232d3b;
}
.headerformuniscreen{
    display: none;
}
header{
    border-bottom: 1px solid hsla(0,0%,100%,.1);
}
.miniscreen{
    display: flex;
    flex-direction: column;
    width: 24vw;
}
h1{
    font-family: 'Hind',sans-serif;
    font-weight: 600;
    font-size: 24px;
    color: #fff;
    margin: 0px 0px 2px 0px;
}
.logo{  
    background: #2962ff;
    color: #fff;
    font-size: .92rem;
    text-transform: uppercase;
    border-radius: 3px;
    font-weight: 400;
    padding: 4px 6px 2px 6px;
    margin-left: 4px;
}
li{
    background-color: transparent;
    border: none;
    color: white;
    padding: 5px 0px;
}
li>a{
    color: hsla(0,0%,100%,.75);
    border-left: 3px solid #232d3b;
    display: block;
    padding: 1rem 0;
    transition: all .15s ease-in;
    text-decoration: none;
    padding-left: 20px;
}
li:hover{
    background: rgba(0,0,0,.1);
}
li>a>i{
    width: 22px;
    text-align: center;
}
.activeitem{
    background: rgba(0,0,0,.1);
    color: #fff;
    border-left: 3px solid #2962ff;
}
@media (max-width: 750px) {
.miniscreen{
    display: none;;
}
main{
    width: 100vw;
    display: flex;
    justify-content: center;
}
.headerformuniscreen{
    display: flex;
    background: #232d3b;
    height: 14vh;
    width: 97.8vw;
    justify-content: space-between;
    align-items: center;
    padding: 0px 15px;
}
ul{
    display: none;
}
.manuformuniscreen{
    display: block;
    width: 97.8vw;
    height: 62vh;
    position: absolute;
    top: 89px;
    left: 0px;
    background: #232d3b;
    border-radius: 0px;
    display: flex;
    justify-content: center;
}
}
</style>