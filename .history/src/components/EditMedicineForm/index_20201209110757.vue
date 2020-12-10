<template>
    <div>
    <div>
    <label>
        Назва медичного препарату:
        <input type="text" v-model="name"/>
    </label>
    </div>
    <div>
    <label>
        Ціна:
        <input type="number" v-model="price"/>
    </label>
    </div>
    <div>
    <label>
        Показання до застосування:
        <input type="text" v-model="requirements"/>
    </label>
    </div>
    <div>
    <label>
        Виробник:
        <input type="text" v-model="maker"/>
    </label>
    <router-link to="/" tag="button">Повернутися</router-link>
    <button @click="onAddMedicine">
        Додати медичний препарат
    </button>
    </div>
    </div>
</template>

<script>
    export default {
        name:"EditMedicineForm",

    }
</script>

<style lang="scss" scoped>

</style>