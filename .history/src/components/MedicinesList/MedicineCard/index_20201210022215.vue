<template>
    <div class="card-container">
    <div>Назва:{{name}}</div>
    <div>Ціна:{{price}}</div>
    <div>Показання:{{requirements}}</div>
    <div>Виробник:{{maker}}</div>
    <button @click="onEditMedicine">Редагувати</button>
    <button @click="onDeleteMedicine(id)">Видалити</button>
    <button @click="onAddToCart({id,name,price,requirements,maker})">Додати до кошику</button>
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
</style>