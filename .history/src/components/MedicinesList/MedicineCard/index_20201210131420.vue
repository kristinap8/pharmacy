<template>
    <div class="card-container">
    <div><b>Назва:</b>{{name}}</div>
    <div><b>Ціна:</b>{{price}}</div>
    <div><b>Показання:</b>{{requirements}}</div>
    <div><b>Виробник:</b>{{maker}}</div>
    <button @click="onEditMedicine" class="edit-btn">Редагувати</button>
    <button @click="onDeleteMedicine(id)" class="delete-btn">Видалити</button>
    <button @click="onAddToCart({id,name,price,requirements,maker})" class="add-btn">Додати до кошику</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
  export default {
        name:"MedicineCard",
        props: {
            id: {
                type: [String,Number],
                required:true,
            },
            name: {
                type: String,
                default:"Назва препарату не вказана"
            },
            price:{
                type:[String,Number],
                default:0
            },
            requirements:{
                type:String,
                default:"Показань до застосування не вказано"
            },
            maker:{
                type:String,
                default:"Виробника не вказано"
            }

        },
        methods: {
            onDeleteMedicine(id) {
                this.$store.dispatch("deleteMedicine",id)
             },
            onEditMedicine(){
                this.$router.push({
                    name:'edit-medicine',
                    params:{medicine_id:this.id}
                })
            },
            ...mapActions(['addToCart']),
            onAddToCart(item){
                this.$store.dispatch('addToCart',item)
            }
        },
    }
</script>

<style lang="scss" scoped>
.card-container{
  width: 400px;
  height: 200px;
  border: 5px solid rgb(87, 26, 39);
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  text-align: left;
}
.add-btn{
    background:rgb(75, 138, 91)
}
.edit-btn{
    background:rgb(114, 75, 177)
}
.delete-btn{
    background:rgb(153, 21, 21)
}
</style>