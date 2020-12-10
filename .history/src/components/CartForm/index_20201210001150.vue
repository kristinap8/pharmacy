<template>
    <div>
        <div v-if="getMedicinesInCart.length>0">
            <div class="item-container" v-for="item in getMedicinesInCart"
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
            <button @click="onDeleteItemFromCart(item)">Видалити</button>
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
                for(let medicine of this.getMedicinesInCart){
                    sum+=Number(medicine.totalPrice)
                }
                return sum.toFixed(2)
            }
         },
         methods: {
             onDeleteItemFromCart(medicine) {
                 this.$store.dispatch('deleteItemFromCart',medicine)
             }
         },
       

    }
</script>

<style lang="scss" scoped>
.item-container {
  width: 400px;
  height: 100px;
  border: 2px solid rgb(89, 97, 89);
  border-radius: 5px;
  background: #ccc;
  padding: 5px;
  margin: 5px;
  text-align: left;
}
</style>