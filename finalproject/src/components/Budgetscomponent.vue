<template>
    <div>
        <div class="wrapper" style="margin: 1rem;">
            <div class="d-flex justify-content-between" style="padding: 0px 4px;">
                <h1 class="h2">Budgets</h1>
                <button type="button" class="btn btn-primary" @click='openmodel' style="padding: 2px 10px;">Add Budget</button>
            </div>
            <div v-if="this.Budgets.length==0" class="notransaction">
                <p>💸 Uh-oh, you don't have any transactions set up yet! Press <strong>New Transaction</strong> to get started.</p>
            </div>
            <div v-else class="row" style="padding:10px;flex-wrap: wrap;">
                <div class="col-sm-4 budge" v-for="budge in Budgets" :key="budge">
                    <div class="row" style="width: auto;justify-content: space-between;align-items: center;">
                        <h3 style="width:auto;padding: 0px;">{{budge.CATEGORY}}</h3>
                        <div class="d-flex" style="flex-direction: column;width: auto;"><p>$0.00 /</p><p>${{budge.Amount}}.00</p></div>
                    </div>
                    <div class="row">
                        <div class="progress">
                          <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div class="row" style="float: right;margin-top: 10px;">
                        <a href="#" class="buttons btn btn-primary text-white" style="opacity: 0;width: auto;" @click="edit(budge)">Edit</a>
                        <a href="#" class="buttons btn bg-danger text-white" style="opacity: 0;width: auto;" @click="deletee(budge)">Delete</a>
                    </div>
                </div>
                <div class="row" style="width: auto;height:fit-content;border-radius: .25rem;border: 1px solid #e6eaee;padding: 5px;margin-left: 10px;">
                    <h3>Total</h3>
                    <p>$0.00 / {{this.total}}.00</p>
                </div>
            </div>
        </div>

        <!--modal-->
        <div class="modal">
            <div class="modelbackground" @click="closemodel"></div>
            <div class="modelcontent bg-white">
                <form action="post">
                    <div class="field">
                        <div>
                            <label class="oldornewcategory">Category </label>
                            <a href="#" @click="addnewcategory">Add New</a>
                        </div>
                        <div class="oldornewcategorycontainer">
                            <select name="category" class="input" style="width: -webkit-fill-available;" required>
                                <option v-for="option in options" :key="option.value" value="{{option.value}}">{{option.name}}</option>
                            </select>
                            <input class="input" name="newcategory" style="width:-webkit-fill-available; display:none;" required/>
                        </div>
                    </div>
                    <div class="field">
                        <label>Amount</label>
                        <input type="tel" name="Amount" placeholder="$0.00" class="input" required/>
                    </div>
                    <p class="warning" style="display:none; padding:0px; margin:0px;">fill the form</p>
                    <div class="field" style="flex-direction:row; align-items:center; margin-top:20px; justify-content:end;">
                        <a href="#" class=" btn btn-primary mr-2" @click="saveandclose">Save + Close</a>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import {options} from './options'
import {Budgets} from './Budgets'

export default {
    data:()=>({
        Budgets:Budgets,
        ID:0,
        options:options,
        isedit:false,
        targetitem:null,
        notfull:false,
        total:0,
    }),
    methods:{
        openmodel(){
            document.getElementsByClassName('modal')[0].classList.add('active');
            //set defult values
            document.getElementsByTagName('form')[0].reset()

            document.getElementsByClassName('oldornewcategory')[0].innerHTML='Category ';
            document.getElementsByName('category')[0].setAttribute('style','display:block;width:-webkit-fill-available;')
            document.getElementsByName('newcategory')[0].setAttribute('style','display:none;')
        },
        closemodel(el){
            document.getElementsByClassName('modal')[0].classList.remove('active');
        },
        addnewcategory(el){
            var llabel=el.target.previousElementSibling;
            llabel.innerHTML='New Category';
            document.getElementsByName('category')[0].setAttribute('style','display:none;')
            document.getElementsByName('newcategory')[0].setAttribute('style','display:block;width:-webkit-fill-available;')
        },
        save(){
            //save new category
            if(document.getElementsByName('newcategory')[0].value!=''){
                this.options.push({name:document.getElementsByName('newcategory')[0].value,value:null})
            }
            //table
            //fill transaction array
            var category=null;
            document.querySelectorAll('option').forEach(function(elem){
                if(elem.selected==true){
                    category=elem.innerText
                }
            })
            if(document.getElementsByName('newcategory')[0].value!=''){
                category=document.getElementsByName('newcategory')[0].value
            }
            //check null values
            this.notfull=false
            if(typeof category=='undefined'||document.getElementsByName('Amount')[0].value==''){
                this.notfull=true
                document.getElementsByClassName('warning')[0].setAttribute('style','display:block;color:red')
            }
            else{
                //check edit
                if(!this.isedit){
                    //push to extrnal js file to reuse it in another component
                    this.Budgets.push({
                        CATEGORY:category,
                        Amount:document.getElementsByName('Amount')[0].value,
                        ID:this.ID++
                    })
                }
                else{
                    this.Budgets[this.targetitem].CATEGORY=category
                    this.Budgets[this.targetitem].Amount=document.getElementsByName('Amount')[0].value
                    this.isedit=false
                }
                document.getElementsByClassName('warning')[0].setAttribute('style','display:none;')
                this.Total()
            }
        },
        saveandclose(){
            //save
            this.save()
            //close modal
            if(!this.notfull) this.closemodel()
        },
        edit(budge){
            document.getElementsByClassName('modal')[0].classList.add('active');
            for(let i=0;i<this.Budgets.length;i++){
                if(budge.ID==this.Budgets[i].ID){
                    this.targetitem=i;
                    break;
                }
            }
            this.isedit=true
        },
        deletee(budge){
            //remove from dom
            //remove from transaction items array (i just decrease length by one here because it will not affect)
            for(let i=0;i<this.Budgets.length;i++){
                if(budge.ID==this.Budgets[i].ID){
                    this.targetitem=i;
                    break;
                }
            }
            this.Budgets.splice(this.targetitem,1);
        },
        Total(){
            this.total=0
            for(let i=0;i<this.Budgets.length;i++){
                this.total+=parseInt(this.Budgets[i].Amount)
            }
        }
    }
}
</script>

<style scoped>
.wraper{
padding: 20px;
margin: 20px 0px;
display:flex;
align-items:center;
justify-content: space-between;
width: 75vw;
}
a{
    text-decoration: none;
}
.notransaction{
    background: #fff;
    border-radius: .25rem;
    border: 1px solid #e6eaee;
    padding: .5rem 1rem;
    margin-top: 1rem;
}
.notransaction>p{
    padding: 1rem .75rem;
    font-weight: 400;
}
.modal{
    display: none;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    justify-content: center;
    align-items: center;
    transition: all .25s ease-in;
}
.active{
    display: flex;
    transition: all .25s ease-in;
}
.modelbackground{
    position: absolute;
    z-index: -1;
    background: #8f8f91e0;
    width: 100%;
    height: 100%;
}
.modelcontent{
    width: 30vw;
    height: 32vh;
    border-radius: .25rem;
    padding: 1rem 2rem;
}
.field{
    display: flex;
    flex-direction: column;
    margin-top: 10px;
}
label{
    font-size: 14px;
    color: #232d3b;
    font-family: 'Open Sans',sans-serif;
}
.budge{
    background: #fff;
    border-radius: .25rem;
    border: 1px solid #e6eaee;
    padding: 1.25rem 1.5rem;
}
.buttons:hover{
    opacity: 1!important;
}
</style>