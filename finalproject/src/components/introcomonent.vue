<template>
    <div class="row align-items-center justify-content-center" id="introcomponent">
        <div class="col-6 personimgdescription">
            <h1 style="font-weight:bold;">Control your spending.</h1>
            <p class="col-7">With a manual-only entry mode, create customizable budgets and build better money management habits.</p>
            <button class="btn btn-primary registretionbtn"><router-link to="/register" class="text-white" style="text-decoration:none;">Sign Up For Free</router-link></button>
        </div>
        <div class="col-6 personimgcontainer">
            <img src="../assets/vesa.svg" alt="pay by vesa">
        </div>
    </div>
</template>

<style scoped>
    p{   
        font-family: Roboto,sans-serif;
        font-weight: 300;
        font-size: 18px;
        line-height: 1.75rem;
        margin-top:20px;
        color: #92989e;
    }
    .registretionbtn{
        border-radius: 1.2rem;
        padding:.5rem 1.2rem;
        font-weight:bold;
    }
    /*.registretionbtn>a{
        text-decoration: none;
    }*/
    img{
        width: 43vw;
    }
    button:focus,
    button:focus:active{
        box-shadow: none;
    }
    #introcomponent{
        margin-top: 100px;
    }
    .personimgcontainer{
        width: 50%;
    }
    .personimgdescription>p{
        width: 50vw;
    }
    .personimgdescription{
        width: 50%;
    }
    @media (max-width: 750px) {
        #introcomponent{
            margin:3rem 0 ;
        }
        .personimgcontainer{
            width: 100vw!important;   
            display: flex;
            justify-content: center;
        }
        .personimgcontainer>img{
            width: 75vw;
        }
        .personimgdescription>p{
            width: 95vw;
        }
        .personimgdescription{
            width: 100vw!important;
        }
    }
</style>