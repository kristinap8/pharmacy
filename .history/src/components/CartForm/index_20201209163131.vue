<template>
    <div>
        <div v-if="getMedicinesInCart.length>0">
            <div v-for="item in getMedicinesInCart"
            :key="item.id"
            >
            Назва медичного препарату:
            {{ item.name }} 
            Кількість:
            {{ item.quantity }} 
            Ціна:
             ${{ item.totalPrice }}
            </div>
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