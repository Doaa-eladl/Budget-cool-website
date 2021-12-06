<template>
    <div class="row justify-content-center" id="Newsletter">
        <h4 class="h2">Stay up to date</h4>
        <p>Want to know what's coming to the app before anyone else? Subscribe to our newsletter below and you'll recieve exclusive email updates once or twice a month.</p>
        <form action="get">
            <input type="text" placeholder="email@domain.com" name="email">
            <button class="btn btn-primary" @click.prevent="isvalid()">Let's Go</button>
        </form>
    </div>
</template>

<script>
export default {
    methods:{
        isvalid(){
            var mail=document.getElementsByTagName('input')[0];
            if(mail==null || !mail.value.match(/^[^\s@]+@[^\s@]+\.com/)){
                console.log('not valid')
                mail.setAttribute("style",'border-bottom: 1px solid #ff150f;')
            }
            else{
                mail.setAttribute("style",'border-bottom: 1px solid #777f8833;')
                console.log('i am here')
                document.getElementsByTagName('button')[3].innerText='Subscribed 👍'
                //console.log(document.getElementsByTagName('button'))
            }
        }
    }
}

</script>
<style scoped>
    #Newsletter{
        margin: 2rem auto 8rem auto;
    }
    h4{
        font-size: 28px;
        margin: 0 0 1rem;
        color: #011F3F;
        font-family: 'Hind',sans-serif;
        font-weight: 400;
        text-align:center;
    }
    p{
        font-weight: 300;
        font-size: 16px;
        line-height: 1.5rem;
        color: #777F88;
        font-family: Roboto,sans-serif;
        width: 60vw;
        padding: 1.5rem 0px;
        text-align:center;
    }
    form{
        text-align:center;
    }
    input{
        font-family: Hind,sans-serif;
        font-weight: 400;
        font-size: 18px;
        color: #011F3F;
        border: none;
        border-bottom: 1px solid rgba(119,127,136,.2);
        padding: 1rem .75rem .5rem;
        transition: all .15s ease-in-out;
        border-radius: 0;
        box-sizing: border-box;
    }
    input:focus-visible{
        outline: none;
        border-bottom: 1px solid #777f8833;
    }
    button{
        margin-left: 2.8rem;
        border-radius: 25px;
        padding: .5rem 1.5rem;
    }
    button:focus,
    button:focus:active{
        box-shadow: none;
    }
    @media (max-width: 750px) {
        p{
            width: 90vw;
        }
        form{
            display: flex;
            flex-direction: column;
            width: 85vw;
        }
        button{
            margin-top: 2rem;
            margin-left: 0px;
        }
    }
</style>