<template>
    <div>
        <router to="/add_medicine">Додати медичний перпарат</router>
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