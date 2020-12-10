<template>
    <div>
        <router-link to="/add_medicine">Додати медичний перпарат</router-link>
        <router-link to="/cart">Перейти до кошику</router-link>
        В кошику {{getCartMedicinesCount}} медичних препаратів
     <medicines-list/>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import MedicinesList from "../../components/MedicinesList"
    export default {
        name:"AllMedicine",
        components: {
            MedicinesList,
        },
        computed: {
            ...mapGetters(['getCartMedicinesCount']),
        },
    }
</script>

<style lang="scss" scoped>

</style>