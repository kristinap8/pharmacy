<template>
    <div>
        <h1 class="header">Аптека</h1>
        <router-link to="/add_medicine" tag="button">Додати медичний перпарат</router-link>
        <router-link to="/cart" tag="button">Перейти до кошику</router-link>
        <p class="cart-count">В кошику {{this.$store.state.cartItemsCount}} шт. медичних препаратів</p>
     <medicines-list/>
    </div>
</template>

<script>

import MedicinesList from "../../components/MedicinesList"
    export default {
        name:"AllMedicine",
        components: {
            MedicinesList,
        },
        
    }
</script>

<style lang="scss" scoped>
 .header{
      text-align: center;
  }
  .cart-count{
   text-align: center;
  }
</style>