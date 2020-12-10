<template>
    <div class="form">
        <h1>Редагувати медичний препарат</h1>
    <p>
   <label>
        Назва медичного препарату:
        <input type="text" v-model="medicineToEdit.name"/>
    </label>
    </p>
    <p>
    <label>
        Ціна:
        <input type="number" v-model="medicineToEdit.price"/>
    </label>
    </p>
    <p>
    <label>
        Показання до застосування:
        <input type="text" v-model="medicineToEdit.requirements"/>
    </label>
    </p>
    <p>
    <label>
        Виробник:
        <input type="text" v-model="medicineToEdit.maker"/>
    </label>
    <router-link to="/" tag="button">Повернутися</router-link>
    <button @click="onEditMedicine">
        Редагувати
    </button>
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
.form{
    text-align: right;
    padding: 50px;
    background: #ccc;
    position: fixed;
    top: 50%; left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}
</style>