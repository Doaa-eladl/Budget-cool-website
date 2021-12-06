<template>
    <div class="row justify-content-center">
        <p class="text-center">Create budgets from any category with any amount of money. They're updated automatically after each expense.</p>
        <div class="image_container">
            <img src="../assets/screenshotbudgetsone.png" alt="screen for manage budget">
        </div>
    </div>
</template>

<style scoped>
    p{
        margin:4rem 0rem;
        font-weight:500;
        font-size: 16px;
        line-height: 1.5rem;
        color: #92989e;
        font-family: 'Roboto',sans-serif;
        width: 100%;
    }
    .image_container{
        margin:0rem;
        padding: 2.5rem 2.5rem 0;
        border-top-left-radius: 1.5rem;
        border-top-right-radius: 1.5rem;
        background: #011F3F;
        width: 76%;
    }
    img{
        max-width: 100%;
    }
    @media (max-width: 750px) {
        p{
            width: 85vw;
        }
        .image_container{
            width: 85vw;
        }
    }
</style>