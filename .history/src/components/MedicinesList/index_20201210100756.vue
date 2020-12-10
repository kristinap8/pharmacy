<template>
    <div>
        <div>
          <input type="text" placeholder="Знайти..." v-model="search"/>
          <label>
          Фільтер ціни:(до якої ціни відображати товари):
          <input type="number" v-model="price"/>
          </label>
        </div>
        <div>
            <label>
                Сортування:
                <button>Сортувати</button>
                за ціною 
                <button>Сортувати</button>
                за назвою
            </label>
        </div>
    <div class="list-container">
    <medicine-card
    v-for="medicine in filteredMedicines"
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
        data() {
            return {
                search:"",
                price:0,
            }
        },
        components: {
        MedicineCard,
        },
        computed: {
            ...mapGetters(['getMedicines']),
            filteredMedicines() {
           return this.getMedicines
             .filter((m) => {
              return (
              m.name.toLowerCase().includes(this.search.toLowerCase()) ||
              m.maker.toLowerCase().includes(this.search.toLowerCase()) ||
              m.requirements.toLowerCase().includes(this.search.toLowerCase())||
              m.price==this.search
            );})
            },
            filteredMedicines= filteredMedicines.filter(medicine => medicine.price >= this.price)
        }
       }

//var sortByName = function (d1, d2) {return (d1.name.toLowerCase() > d2.name.toLowerCase()) ? 1 : -1;};
//var sortByPrice = function (d1, d2) { return (d1.price > d2.price) ? 1 : -1; };
</script>

<style lang="scss" scoped>
  .list-container{
      display: flex;
  }
</style>