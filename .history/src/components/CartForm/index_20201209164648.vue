<template>
    <div>
        <div v-if="getMedicinesInCart.length>0">
            <div v-for="item in getMedicinesInCart"
            :key="item.id"
            >
            Назва медичного препарату:
            {{ item.name }} <br/>
            Ціна за одиницю:
            {{item.price}} грн.<br/>
            Кількість:
            {{ item.quantity }} шт.<br/>
            Ціна:
            {{ item.totalPrice }} грн.<br/>
            </div>
            Всього:
        </div>
        <div v-else>
         Кошик порожній
        </div>
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