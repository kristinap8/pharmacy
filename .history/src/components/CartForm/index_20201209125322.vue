<template>
    <div>
        <div v-if="getMedicinesInCart.length>0">
            <cart-item v-for="medicine in getMedicinesInCart"
            :key="medicine.id" 
            :id="medicine.id"
            :name="medicine.name"
            :price="medicine.price"
            :requirements="medicine.requirements"
            :maker="medicine.maker"/>
        </div>
        <div v-else>
         Кошик порожній
        </div>
    </div>
</template>

<script>
import {mapGetters} from "vuex"
import CartItem from "./CartItem"
 export default {
        name:"CartForm",
        components: {
            CartItem
        },
        computed: {
            ...mapGetters(['getMedicinesInCart']) 
         },
       

    }
</script>

<style lang="scss" scoped>

</style>