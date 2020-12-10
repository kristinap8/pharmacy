<template>
    <div>
        <h1 class="header">Аптека</h1>
        <div class='btns'>
        <router-link to="/add_medicine" tag="button" class='add-btn'>Додати медичний перпарат</router-link>
        <router-link to="/cart" tag="button" class='cart-btn'>Перейти до кошику</router-link>
        </div>
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
  .btns{
      text-align: center;
  }
  .add-btn{
      background:rgb(139, 69, 69)
  }
  .cart-btn{
      background:rgb(139, 69, 69)
  }
</style>