<template>
    <div>
        <div v-if="getMedicinesInCart.length>0">
            <div v-for="item in getMedicinesInCart"
            :key="item.id"
            >
            Назва медичного препарату:<br/>
            {{ item.name }} <br/>
            Ціна за одиницю:<br/>
            {{item.price}}<br/>
            Кількість:<br/>
            {{ item.quantity }} шт.<br/>
            Ціна:<br/>
            {{ item.totalPrice }} грн.<br/>
            </div>
        </div>
        <div v-else>
         Кошик порожній
        </div>
        Всього:
    </div>
</template>

<script>
import {mapGetters} from "vuex"
 export default {
        name:"CartForm",
        components: {
            
        },
        computed: {
            ...mapGetters(['getMedicinesInCart']) 
         },
       

    }
</script>

<style lang="scss" scoped>

</style>