<template>
<div>
    <div class="d-flex justify-content-between" style="margin: 1rem;">
        <h1>Account Settings</h1>
    </div>
    <form action="post">
        <div style="display: flex;flex-direction: column;">
            <label for="email" class="input">Email Address</label>
            <input type="email" name="email" disabled class="input" :placeholder="mail">
            <select name="notify_when" class="input">
                <option value="monthly">Email Updates Monthly</option>
                <option value="weekly">Email Updates Weekly</option>
                <option value="never">Email Updates Never</option>
            </select>
            <select name="money_format" id="money_format" class="input">
                <option value="USD">U.S. Dollar</option>
                <option value="AUD">Australian Dollar</option>
                <option value="BRL">Brazilian Real</option>
                <option value="GBP">British Pound</option>
                <option value="CAD">Canadian Dollar</option>
                <option value="CLP">Chilean Peso</option>
                <option value="CNY">Chinese Yuan</option>
                <option value="THB">Thai Baht</option>
                <option value="DKK">Danish Krone</option>
                <option value="EUR">Euro</option>
                <option value="HKD">Hong Kong Dollar</option>
                <option value="INR">Indian Rupee</option>
                <option value="IDR">Indonesian Rupiah</option>
                <option value="JPY">Japanese Yen</option>
                <option value="KRW">Korean Won</option>
                <option value="MXN">Mexican Peso</option>
                <option value="NZD">New Zealand Dollar</option>
                <option value="NOK">Norwegian Krone</option>
                <option value="PHP">Philippine Peso</option>
                <option value="RUB">Russian Ruble</option>
                <option value="SGD">Singapore Dollar</option>
                <option value="SEK">Swedish Krona</option>
                <option value="CHF">Swiss Franc</option> 
            </select>
        </div>
        <div style="display: flex;flex-direction: column;">
            <label for="password" class="input">Change Password</label>
            <input type="password" placeholder="New Password" class="input">
            <input type="password" placeholder="Repeat New Password" class="input">
            <a href="#" class="btn btn-primary color-white" style="width: fit-content;align-self: self-end;margin-top: 5rem;">Save Settings</a>
        </div>
    </form>
</div>
</template>

<script>
export default {
    data:()=>({
        mail:''
    }),
    methods:{
        loadmail(){
            this.mail=location.search.substr(1).split("&")[0].split("=")[1]
        },
        //we should do method for change password and check identification bettwen password and repeted one 
        //and send it to database so i think i backend task so i don't create it
    },
    beforeMount(){
        this.loadmail()
    }
}
</script>

<style scoped>
form{
    background: #fff;
    border-radius: .25rem;
    padding: 1.5rem 1rem;
    display: flex;
    justify-content: space-around;
    width: 75vw;
    margin: auto;
}
.input{
    margin: 10px;
    padding: 5px 0px;
    width: 30vw;
}
</style>