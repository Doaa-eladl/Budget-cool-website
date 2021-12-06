<template>
    <div id="Pricing">
        <h3 class='text-center h2'>What's it cost?</h3>
        <div class="d-flex mt-2">
            <div>
                <h4>Free</h4>
                <p>Unlimited Transactions <br>50 Custom Categories<br> Email Updates</p>
            </div>
            <div>
                <h4>Coming Soon</h4>
                <p>Self-Hosted Installation <br>Multiple Accounts Support <br>And More!</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
    #Pricing{
        background: url(../assets/pricing.svg) center left no-repeat;
        margin-top: -34px;
        position: relative;
        /*width: 100vw;*/
        height: 38rem;
        background-size: cover;
        display: flex;
        flex-direction: column;
        align-items:center;
        justify-content:center;
        font-family: 'Hind',sans-serif;
        font-weight: 400;
        padding: .5rem 0rem 0rem 0rem;
    }
    h3{
        color: #fff;
        font-size: 28px;
    }
    #Pricing>div{
        flex-wrap: wrap;
        justify-content: center;
        gap: 3rem;
    }
    #Pricing>div>div{
        margin: 0;
        background: #fff;
        border-radius: .5rem;
        padding: 1.2rem 0rem;
        box-shadow: 0 1px 7px rgb(1 31 63 / 15%);
        justify-content: center;
        align-items: center;
        width: 23vw;
        height: auto;
    }
    #Pricing>div>div>h4{ 
        font-size: 40px;
        color: #2962FF;
        margin: 0;
        text-align: center;
    }
    #Pricing>div>div>p{
        font-size: 16px;
        color: #777F88;
        line-height: 1.75rem; 
        padding: 16px 0px;
        text-align: center;
        margin: 0px;
    }
    @media (max-width: 750px) {
        #Pricing>div>div{
            width: 75vw;
        }
    }
</style>