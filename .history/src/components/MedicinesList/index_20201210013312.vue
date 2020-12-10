<template>
    <div>
        <h1 class="header">Аптека</h1>
     <div class="list-container">
    <medicine-card
    v-for="medicine in getMedicines"
    :key="medicine.id"
    :id="medicine.id"
    :name="medicine.name"
    :price="medicine.price"
    :requirements="medicine.requirements"
    :maker="medicine.maker"
    />
     </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import MedicineCard from "./MedicineCard"
    export default {
        name:"MedicinesList",
        components: {
       MedicineCard,
        },
        computed: {
            ...mapGetters(['getMedicines']),
        },
    }
//var sortByName = function (d1, d2) {return (d1.name.toLowerCase() > d2.name.toLowerCase()) ? 1 : -1;};
//var sortByPrice = function (d1, d2) { return (d1.price > d2.price) ? 1 : -1; };
</script>

<style lang="scss" scoped>
  .list-container{
      display: flex;
  },
  .header{
      text-align: center;
  }
</style>