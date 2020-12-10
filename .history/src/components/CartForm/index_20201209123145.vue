<template>
    <div>
         Кошик порожній
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
       

    }
</script>

<style lang="scss" scoped>

</style>