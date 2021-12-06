<template>
<div class="d-flex accountdetils" style="margin:1rem; padding:10px; width:74vw">
    <div class="row" style="background: #fff;border: 1px solid #e6eaee;border-radius: .25rem;padding:1rem .5rem;margin: 0px 1rem;">
        <h3 class="h5">Spent Today</h3>
        <p>Activity on September 16, 2021</p>
        <h2>$0.00</h2>
        <p>That's <strong>the same</strong> as yesterday</p>
    </div>
    <div class="row" style="background: #fff;border: 1px solid #e6eaee;border-radius: .25rem;padding:1rem .5rem;margin: 0px 1rem;">
        <h3 class="h5">Spent This Month</h3>
        <p>Activity for September, 2021</p>
        <h2>$0.00</h2>
        <p>That's <strong>100%</strong> of your total budget</p>
    </div>
    <div class="row" style="background: #fff;border: 1px solid #e6eaee;border-radius: .25rem;padding:1rem .5rem;margin: 0px 1rem;">
        <h3 class="h5" style="padding:0px; margin:0px;">Budget Remaining</h3>
        <p>For September, 2021</p>
        <h2>${{this.Total()}}</h2>
        <p>You've exceeded <strong>0</strong> budgets this month</p>
    </div>
</div>
<div class="row" v-for="budge in Budgets" :key="budge" style="width: 70vw;">
    <div class="budget">
        <div style="display:flex;flex-direction: column;">
            <h3>{{budge.CATEGORY}}</h3>
            <p>$0.00 / ${{budge.Amount}}.00</p>
        </div>
        <div class="progress" style="width: 40vw;">
          <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
    </div>
</div>
</template>

<script>
import {Budgets} from './Budgets'

export default {
    data:()=>({
        total:0,
        Budgets:Budgets,
    }),
    methods:{
        Total(){
            this.total=0
            for(let i=0;i<this.Budgets.length;i++){
                this.total+=parseInt(this.Budgets[i].Amount)
            }
            return this.total
        }
    }
}
</script>
<style scoped>
div{
    display: flex;
    justify-content: center;
}
.budget{
    background: #fff;
    border-radius: .25rem;
    border: 1px solid #e6eaee;
    padding: 1.25rem 1.5rem;
    margin-left: 6rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
}
.accountdetils{
    height: fit-content;
}
</style>