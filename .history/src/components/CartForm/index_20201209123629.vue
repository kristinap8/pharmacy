<template>
    <div>
        <div v-if="getMedicinesInCart.length>0">
            
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
            }
        },
       

    }
</script>

<style lang="scss" scoped>

</style>