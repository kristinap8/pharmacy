<template>
    <div>
        <div v-if="getMedicinesInCart.length>0">
            <div v-for="item in getMedicinesInCart"
            :key="item.id"
            >
            Назва медичного препарату:<br/>
            {{ item.name }} <br/>
            Кількість:<br/>
            {{ item.quantity }} <br/>
            Ціна:<br/>
            {{ item.totalPrice }}<br/>
            </div>
        </div>
        <div v-else>
         Кошик порожній
        </div>
        Всього:{{total}}
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