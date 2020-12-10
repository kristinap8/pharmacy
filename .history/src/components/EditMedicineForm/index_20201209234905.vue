<template>
    <div>
        <h1>Редагувати медичний препарат</h1>
    <div>
    <label>
        Назва медичного препарату:
        <input type="text" v-model="medicineToEdit.name"/>
    </label>
    </div>
    <div>
    <label>
        Ціна:
        <input type="number" v-model="medicineToEdit.price"/>
    </label>
    </div>
    <div>
    <label>
        Показання до застосування:
        <input type="text" v-model="medicineToEdit.requirements"/>
    </label>
    </div>
    <div>
    <label>
        Виробник:
        <input type="text" v-model="medicineToEdit.maker"/>
    </label>
    <router-link to="/" tag="button">Повернутися</router-link>
    <button @click="onEditMedicine">
        Редагувати
    </button>
    </div>
    </div>
</template>

<script>
    export default {
        name:"EditMedicineForm",
        computed: {
            medicineToEdit() {
                return this.$store.getters.getMedicineById(this.$route.params.medicine_id)
            }
        },
        methods: {
            onEditMedicine() {
                this.$store.dispatch("editMedicine",this.medicineToEdit)
                this.$router.push('/')
            }
        },

    }
</script>

<style lang="scss" scoped>

</style>