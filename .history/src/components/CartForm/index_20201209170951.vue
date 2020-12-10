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
            Всього:{{total}} грн.
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
        computed: {
            ...mapGetters(['getMedicinesInCart']),
            total(){
                let sum=0
                for(let medicine in this.getMedicinesInCart){
                    sum+=medicine.totalPrice
                }
                return sum.toFixed(2)
            }
         },
       

    }
</script>

<style lang="scss" scoped>

</style>