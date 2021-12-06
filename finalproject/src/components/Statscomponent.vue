<template>
<div class="accountdetils">
    <div class="d-flex justify-content-between" style="margin: 1rem;">
        <h1>Stats</h1>
        <button class="btn dropdown-toggle bg-white" type="button"><span>September 2021</span></button>
    </div>
    <div style="margin:2rem">
        <div class="row empty" style="margin-bottom:.5rem"><p>I shoud put canves and apply data from Budgets array and Transactions array on it, but i don't know how to apply data to canves ,i think we can do by using d3 library but i never use it before</p></div>
        <div class="row justify-content-between">
            <div class="empty" style="width:35%"></div>
            <div class="empty" style="width:60%; margin-left:1.5rem;"></div>
        </div>
    </div>
</div>
</template>

<style scoped>
.accountdetils{
    height: fit-content;
    margin: 010px;
}
.empty{
    background: #fff;
    border-radius: .25rem;
    border: 1px solid #e6eaee;
    padding: .5rem 1rem;
}
@media (max-width: 750px) {
.accountdetils>div{
    flex-direction: row;
}
}
</style>