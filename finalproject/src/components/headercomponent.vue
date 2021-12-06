<template>
    <div class="row justify-content-between" id="headercomponent" style="margin-top:30px">
        <div class="col-6 imgcontainer">
            <img src="../assets/budgetlogo.png" alt="logo image">
            <ul class="nav">
                <li class="nav-item"><a class="nav-link text-secondary"  href="#Feature">Feature</a></li>
                <li class="nav-item"><a class="nav-link text-secondary" href="#Pricing">Pricing</a></li>
                <li class="nav-item"><a class="nav-link text-secondary" href="#Newsletter">Newsletter</a></li>
                <li class="nav-item"><a class="nav-link text-secondary" href="https://trello.com/b/abGJfCQv/budgetcool" target="_blank">Roadmap</a></li>
            </ul>
        </div>
        <div class="col-4 offset-2 d-flex justify-content-end align-items-center buttons">
            <!-- Routing -->
            <button class="btn signinbtn"><router-link to="/signIn" class="text-secondary" style="text-decoration:none;" exact>Sign In</router-link></button>
            <button class="btn btn-primary registretionbtn"><router-link to="/register" class="text-white" style="text-decoration:none;">Register</router-link></button>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>
    img{
        width: 174px;
    }
    ul{
        display: inline-flex;
        margin-left:1rem;
    }
    ul>li>a:hover{
        border-bottom: solid black 3px;
    }
    button:focus,
    button:focus-visible{
        box-shadow: none;
    }
    .registretionbtn{
        border-radius: 1.5rem;
        padding:0.6rem 1.6rem;
        font-weight:bold;
        margin-left:1.5rem;
        height: fit-content;
    }
    button:focus,
    button:focus:active{
        box-shadow: none;
    }
    .signinbtn:hover{
        border-bottom: solid black 3px;
    }
    .imgcontainer{
        justify-content: end;
        width: 50%;
    }
    .buttons{
        width: auto;
    }
@media (max-width: 750px) {
ul{
    display: none;
}
.imgcontainer{
    justify-content: center;
    margin: 10px auto;
    padding: 0px;
    width: 35vw;
}
.buttons{
        justify-content: center!important;;
        margin: 10px 0px;
        padding: 0px;
        width: 90%;
    }
}
</style>