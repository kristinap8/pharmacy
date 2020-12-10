<template>
    <div class="card-container">
    <div>Назва:{{name}}</div>
    <div>Ціна:{{price}}</div>
    <div>Показання:{{requirements}}</div>
    <div>Виробник:{{maker}}</div>
    <button @click="onEditMedicine">Редагувати</button>
    <button @click="onDeleteMedicine(id)">Видалити</button>
    <button @click="onAddToCart">Додати до кошику</button>
    </div>
</template>

<script>
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
            onAddToCart(){
                
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>