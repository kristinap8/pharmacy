<template>
    <div>
        <h1 class="header">Аптека</h1>
        <router-link to="/add_medicine">Додати медичний перпарат</router-link>
        <router-link to="/cart">Перейти до кошику</router-link>
        В кошику {{this.$store.state.cartItemsCount}} шт. медичних препаратів
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
</style>