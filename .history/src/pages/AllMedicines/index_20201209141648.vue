<template>
    <div>
        <router-link to="/add_medicine">Додати медичний перпарат</router-link>
        <router-link to="/cart">Перейти до кошику</router-link>
        В кошику {{this.$store.state.cartItemsCount}} медичних препаратів
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

</style>