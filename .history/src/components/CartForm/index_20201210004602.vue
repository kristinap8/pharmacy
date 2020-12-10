<template>
    <div>
        <div v-if="getMedicinesInCart.length>0">
            <div class="item-container" v-for="item in getMedicinesInCart"
            :key="item.id"
            >
            <b> Назва медичного препарату:</b>
            {{ item.name }} <br/>
           <b> Ціна за одиницю:</b>
            {{item.price}} грн.<br/>
            <b>Кількість:</b>
            {{ item.quantity }} шт.<br/>
            <b>Ціна:</b>
            {{ item.totalPrice }} грн.<br/>
           <button class='delete-btn' @click="onDeleteItemFromCart(item)">Видалити</button>
            </div>
            <div class="total">
           <b> Всього:{{total}} грн.</b>
           </div>
        </div>
        <div v-else class="empty-cart">
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
  margin:10px;
  text-align: left;
}
.delete-btn{
    background: rgb(119, 80, 80);
}
.total{
    text-align: center;
    font-size: 30px;
    text-decoration: underline;
}
.empty-cart{
    text-align: center;
    color:rgb(126, 26, 26);
    font-size: 30px;
    text-decoration: underline;
}
</style>