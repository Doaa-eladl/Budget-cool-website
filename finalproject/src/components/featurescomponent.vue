<template>
    <div class="row" id="Feature">
        <h2 class="text-center">What can it do?</h2>
        <div class="d-flex justify-content-around budgetoptionlinks">
            <a href="" @click.prevent="activebtn" class="active">Manage Budgets</a>
            <a href="" @click.prevent="activebtn">View Analytics</a>
            <a href="" @click.prevent="activebtn">Track Spending</a>
            <a href="" @click.prevent="activebtn">Introduce Habits</a>
        </div>
    </div>
    <component :is="targetcomponent"/>
</template>

<script>
import ManageBudgetscomponent from './ManageBudgetscomponent.vue'
import ViewAnalyticscomponent from './ViewAnalyticscomponent.vue'
import TrackSpendingcomponent from './TrackSpendingcomponent.vue'
import IntroduceHabitscomponent from './IntroduceHabitscomponent.vue'

export default {
    data(){
        return{
            targetcomponent:'ManageBudgetscomponent',
        }
    },
    components:{
        ManageBudgetscomponent,
        ViewAnalyticscomponent,
        TrackSpendingcomponent,
        IntroduceHabitscomponent,
    },

    methods:{
        activebtn(el){
            document.querySelectorAll('div>a').forEach(function(btn){
                btn.classList.remove('active');
            })
            el.target.classList.add('active');
            this.targetcomponent=el.target.innerText.replace(/ /g, "")+'component';
        }
    }
}
</script>

<style scoped>
    h2{
        margin-bottom: 60px;
    }
    #Feature{
        margin-top: 60px;
    }
    a{
        font-family: 'Roboto',sans-serif;
        font-weight: 400;
        width: 160px;
        height: 60px;
        line-height: 62px;
        text-align: center;
        border-radius: .5rem;
        margin: 0 0 1rem;
        border: 1px solid rgba(119,127,136,.2);
        transition: all .15s ease-in-out;
        background-color: white;
        text-decoration: none;
        color: #777F88;
    }
    .active{   
        border: 1px solid #777f88;
        color: #2962FF;
    }
    @media (max-width: 750px) {
        a{
            width: 35vw;
        }
        .budgetoptionlinks{
            width: 100vw;
            flex-wrap: wrap;
        }
    }
</style>