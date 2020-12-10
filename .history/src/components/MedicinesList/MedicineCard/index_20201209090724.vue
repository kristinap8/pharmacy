<template>
    <div class="card-container">
    <div>Назва:</div>
    <div>Ціна:</div>
    <div>Показання:</div>
    <div>Виробник:</div>
    <button>Редагувати</button>
    <button>Видалити</button>
    </div>
</template>

<script>
import {mapActions} from "vuex"
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
    }
</script>

<style lang="scss" scoped>

</style>