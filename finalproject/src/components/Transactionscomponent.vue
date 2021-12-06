<template>
<div class="d-flex justify-content-between accountdetils" style="margin: 1rem;">
    <h1>Transactions</h1>
    <div class="d-flex" style="height: fit-content;">
        <div class="dropdown" style="padding-right:5px;">
            <button class="btn dropdown-toggle bg-white" type="button"><span>September 2021</span></button>
        </div>
        <button type="button" class="btn btn-primary" @click='openmodel'>New Transaction</button>
    </div>
</div>
<div v-if="this.transaction.items.length==0" class="notransaction" style="margin: 0px 10px;">
    <p>💸 Uh-oh, you don't have any transactions set up yet! Press <strong>New Transaction</strong> to get started.</p>
</div>
<div v-else style="padding:.5rem 1rem;background: #fff;overflow-x: scroll;border-radius: .25rem;border: 1px solid #e6eaee;margin: 0px 10px;">
   <table>
     <thead>
         <tr>
             <th>Date</th>
             <th>Title</th>
             <th>Category</th>
             <th>Amount</th>
             <th></th>
         </tr>
     </thead>
     <tbody>
         <tr v-for="item in transaction.items" :key="item.Date">
             <td>{{item.Date}}</td>
             <td>{{item.TITLE}}</td>
             <td>{{item.CATEGORY}}</td>
             <td><span style="color:red; font-weight:bolder;">{{item.Type}}</span>${{item.Amount}}</td>
             <td><a href="#" style="opacity: 0; padding-right:5px;" @click="edit(item)"><i class="fas fa-pencil-alt" style="size:12px; color:#2962ff;"></i></a> <a href="#" style="opacity: 0;" @click="deletee(item)"><i class="fas fa-trash" style="size:12px; color:red;"></i></a></td>
         </tr>
     </tbody>
  </table>
</div>
<div class="modal">
    <div class="modelbackground" @click="closemodel"></div>
    <div class="modelcontent bg-white">
        <form action="post">
            <div class="field">
                <label>Title</label>
                <input type="text" name="title" placeholder="Lunch at Taco Dive" class="input">
            </div>
            <div class="field">
                <div>
                    <label class="oldornewcategory">Category </label>
                    <a href="#" @click="addnewcategory">Add New</a>
                </div>
                <div class="oldornewcategorycontainer">
                    <select name="category" class="input" style="width: 42.5vw">
                        <option v-for="option in options" :key="option.value" value="{{option.value}}">{{option.name}}</option>
                    </select>
                    <input class="input" name="newcategory" style="width:-webkit-fill-available; display:none;" required/>
                </div>
            </div>
            <div class="field">
                <label>Amount</label>
                <input type="tel" name="Amount" placeholder="$0.00" class="input" required/>
            </div>
            <div class="field" style="flex-direction:row; align-items:center;">
                <input type="radio" name="type" value="expense" checked="checked" style="margin: 0px 10px;">Expense
                <input type="radio" name="type" value="income" style="margin: 0px 10px;">Income
            </div>
            <div class="field">
                <label>Date</label>
                <input type="date" name="date" placeholder="" class="input" required/>
            </div>
            <p class="warning" style="display:none; padding:0px; margin:0px;">fill the form</p>
            <div class="field" style="flex-direction:row; align-items:center; margin-top:20px; justify-content:end;">
                <a href="#" class=" btn btn-light" style="width:auto; border:solid 1px #0d6efd; margin-right:5px;" @click="saveandclose">Save + Close</a>
                <a href="#" class=" btn btn-primary mr-2" @click="saveandnew">Save + Add New</a>
            </div>
        </form>
    </div>
</div>
</template>

<script>
import {options} from './options'

export default {
    data:()=>({
        transaction:{
            items:[],
            ID:0
        },
        options:options,
        isedit:false,
        targetitem:null,
        notfull:false,
    }),
    methods:{
        openmodel(){
            document.getElementsByClassName('modal')[0].classList.add('active');
            //clear modal in open to save data if client want to edit ,it should loaded from database
            document.getElementsByTagName('form')[0].reset()
            
            //set defult values
            document.getElementsByClassName('oldornewcategory')[0].innerHTML='Category ';
            document.getElementsByName('category')[0].setAttribute('style','display:block;width:-webkit-fill-available;')
            document.getElementsByName('newcategory')[0].setAttribute('style','display:none;')
        },
        closemodel(targetitem){
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
            var typee='';
            document.querySelectorAll('input[type="radio"]').forEach(function(elem){
                if(elem.checked==true){
                    if(elem.value=='expense') typee='-'
                    else typee='+'
                }
            })
            //check null values
            this.notfull=false
            if(typeof category=='undefined'||document.getElementsByName('Amount')[0].value==''||document.getElementsByName('date')[0].value==''||document.getElementsByName('title')[0].value==''){
                this.notfull=true
                document.getElementsByClassName('warning')[0].setAttribute('style','display:block;color:red')
            }
            else{
                if(!this.isedit){
                    this.transaction.items.push({
                        Date:document.getElementsByName('date')[0].value,
                        TITLE:document.getElementsByName('title')[0].value,
                        CATEGORY:category,
                        Amount:document.getElementsByName('Amount')[0].value,
                        Type:typee,
                        ID:this.transaction.ID++
                    })
                }else{
                    this.transaction.items[this.targetitem].Date=`${document.getElementsByName('date')[0].value}`
                    this.transaction.items[this.targetitem].TITLE=document.getElementsByName('title')[0].value
                    this.transaction.items[this.targetitem].CATEGORY=category
                    this.transaction.items[this.targetitem].Amount=document.getElementsByName('Amount')[0].value
                    this.transaction.items[this.targetitem].Type=typee
                    this.isedit=false
                }  
                document.getElementsByClassName('warning')[0].setAttribute('style','display:none;')
            }
        },
        saveandclose(){
            //save
            this.save()
            //close modal
            if(!this.notfull) this.closemodel()
        },
        saveandnew(){
            //save
            this.save()
            //clear modal
            document.getElementsByTagName('form')[0].reset()
            
            //set defult values
            document.getElementsByClassName('oldornewcategory')[0].innerHTML='Category ';
            document.getElementsByName('category')[0].setAttribute('style','display:block;width:-webkit-fill-available;')
            document.getElementsByName('newcategory')[0].setAttribute('style','display:none;')
        },
        edit(item){
            document.getElementsByClassName('modal')[0].classList.add('active');
            for(let i=0;i<this.transaction.items.length;i++){
                if(item.ID==this.transaction.items[i].ID){
                    this.targetitem=i;
                    break;
                }
            }
            this.isedit=true
        },
        deletee(item){
            //remove from dom
            //remove from transaction items array (i just decrease length by one here because it will not affect)
            for(let i=0;i<this.transaction.items.length;i++){
                if(item.ID==this.transaction.items[i].ID){
                    this.targetitem=i;
                    break;
                }
            }
            this.transaction.items.splice(this.targetitem,1);
        }
    }
}
</script>
<style scoped>
.accountdetils{
    height: fit-content;
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
    width: 48vw;
    height: 50vh;
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
table{
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
}
table>tbody>tr:hover{
    background: rgba(239,243,246,.5);
}
table>thead>tr>th{
    padding: 0 .75rem;
    font-size: .75rem;
    text-transform: uppercase;
    font-weight: 600;
    color: rgba(35,45,59,.5);
}
tbody>tr:hover a{
    opacity: 1!important;
}
</style>