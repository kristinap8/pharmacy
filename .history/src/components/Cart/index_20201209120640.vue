<template>
    <div>
        <div v-if="getMedicinesInCart>0">
        <cart-item/>
        </div>
        <div v-else>
            Кошик порожній
        </div>
    </div>
</template>

<script>
import CartItem from "./CartItem"
import {mapGetters} from "vuex"
    export default {
        name:"Cart",
        components: {
            CartItem,
        },
        computed: {
            ...mapGetters(['getMedicinesInCart'])
        },

    }
</script>

<style lang="scss" scoped>

</style>