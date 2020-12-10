<template>
    <div class="card-container">
    <div>Назва:{{name}}</div>
    <div>Ціна:{{price}}</div>
    <div>Показання:{{requirements}}</div>
    <div>Виробник:{{maker}}</div>
    <button @click="onEditMedicine(id)">Редагувати</button>
    <button @click="onDeleteMedicine">Видалити</button>
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
            onDeleteMedicine() {
                this.$store.dispatch("deleteMedicine",id)
                this.$router.push('/')
            },
            onEditMedicine(id){

            }
        },
    }
</script>

<style lang="scss" scoped>

</style>