<template>
    <div>
    {{getMedicinesInCart.price}}
    </div>
</template>

<script>
import {mapGetters} from "vuex"
    export default {
        name:"CartItem",
        props: {
           
        },
        methods: {
            ...mapGetters(['getMedicinesInCart']) 
        },
    }
</script>

<style lang="scss" scoped>

</style>