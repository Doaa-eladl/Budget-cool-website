<template>
    <body>
        <header class="row text-center align-items-center bg-dark pt-2 pb-2"><h1>budget <span class="logo">.cool</span></h1></header>
        <main>
            <h2 class="h3 text-center mt-4 mb-2">Let's get you a new password.</h2>
            <form action="/account" method="Get" class="row" @click="checkvalid">
                
                <!---->
                <!--need to ask about auto focus-->
                <!---->

                <input type="email" name="email" id="email" placeholder="Email" class="form-control" required autofocus>
                <div>The email field is required.</div>
                <button class="btn btn-primary text-white" type="submit">Send Password Reset</button>
            </form>
        </main>
        <footer class="row text-center mt-4">
            <p><router-link to="/signIn" style="text-decoration:none; color: #232d3b80; font-weight: 700;" class="formrouterlink">Sign In</router-link>
            <span style="margin:0px 8px;">•</span>
            <router-link to="/register" style="text-decoration:none; color: #232d3b80; font-weight: 700;" class="formrouterlink">Sign Up</router-link>
            </p>
        </footer>
    </body>
</template>

<script>
export default {
    methods:{
        checkvalid(){
            if(document.getElementsByName('email')[0].value==''){
                document.querySelectorAll('div')[1].classList.add('invalid')
                document.getElementsByName('email')[0].classList.add('nullvalue')
            }
            else{
                //not null check form
                if(document.getElementsByName('email')[0].value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)){
                    document.querySelectorAll('div')[1].classList.add('invalid')
                    document.querySelectorAll('div')[1].innerText='If you are registered, you will receive an email soon.'
                    document.querySelectorAll('div')[1].setAttribute('style','color: #232d3b;')
                }
            }
        }
    }    
}
</script>

<style scoped>
*{
    padding: 0px;
    margin: 0px;
}
body{
    font-family: 'Open Sans', sans-serif;
    background: #eff3f6;
    height: 100vh;
}
header{
    width: 100vw;
    margin: 0px;
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
    padding: 3px 6px 0 4px;
    margin-left: 4px;
}
h2{
    font-weight: 500;
    font-size: 1rem;
}
form{
    width: 96%;
    margin: 0 auto;
    max-width: 420px;
    background: #fff;
    border: 1px solid #e6eaee;
    border-radius: .25rem;
    padding: 1.25rem 1.5rem 1.5rem;
}
input{
    width: 100%;
    box-sizing: border-box;
    border: 1px solid #e6eaee;
    background: #fff;
    border-radius: .25rem;
    padding: .5rem .75rem;
    font-size: 1rem;
    font-weight: 300;
    margin: 5px 0;
    padding-left: 10px;
}
button{
    width: auto;
    margin-left: 5px;
    margin-top: 10px;
    padding: 0px 10px;
}
button:focus,
button:focus-visible{
    box-shadow: none;
}
div{
    display: none;
}
.invalid{
    display: block;
    color: #fc3c63;
    margin: 0rem;
    font-size: 12px;
    font-weight: 600;
    margin: .5rem 0rem;
}
.nullvalue{
    box-shadow: none;
    border: 1px solid red;
}
.formrouterlink:hover{
    color: #232d3b!important;
}
</style>