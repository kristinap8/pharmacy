<template>
    <div>
        <div class="search-filter">
          <input type="text" placeholder="Знайти..." v-model="search"/><br/>
        </div>
        <div class="price-filter">
          <label>
          Фільтер ціни (з якої ціни відображати товари):
          <input type="number" v-model="price"/>
          </label>
        </div>
        <div class="sort">
              <button id="s" @click="sortByPrice">Сортувати</button>
                за ціною ({{sortP}})
        </div>
    <div class="list-container">
    <medicine-card
    v-for="medicine in filteredMedicines"
    :key="medicine.id"
    :id="medicine.id"
    :name="medicine.name || undefined"
    :price="medicine.price|| undefined"
    :requirements="medicine.requirements|| undefined"
    :maker="medicine.maker|| undefined"
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
                sortByPriceDir:true,
                sortP:'за зростанням',
              }
        },
        components: {
        MedicineCard,
        },
        computed: {
            ...mapGetters(['getMedicines']),
            filteredMedicines(){
                var filtered=this.getMedicines
                .filter((m) => {
                    return (
                        m.name.toLowerCase().includes(this.search.toLowerCase()) ||
                        m.requirements.toLowerCase().includes(this.search.toLowerCase()) ||
                        m.maker.toLowerCase().includes(this.search.toLowerCase()) ||
                        m.price==Number(this.search)
                     );
                   })
                .filter((m) => {
                    return (
                        m.price>=this.price
                     );
                   });
                   var sorted;
                   if(!this.sortByPriceDir){
                       sorted=filtered.sort(function(a,b){
                           return a.price - b.price;
                   });}
                   else{
                       sorted=filtered.sort(function(a,b){
                           return b.price-a.price;
                       });
                   }
                    return sorted
                 } 
                },
           methods: {
               sortByPrice() {
                   this.sortByPriceDir = !this.sortByPriceDir
                   if(this.sortByPriceDir)
                   this.sortP = 'за зростанням'
                   else
                   this.sortP = 'за спаданням'
               }
           },
    }
</script>

<style lang="scss" scoped>
  .list-container{
      display: flex;
  }
  .search-filter{
      text-align: center;
      margin:10px;
      padding: 3px;
  }
  .price-filter{
      text-align: center;
      margin:10px;
      padding: 3px;
  }
  .sort{
      text-align: center;
  }
  #s{
      background:rgb(112, 56, 56);
  }
</style>