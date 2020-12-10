<template>
    <div>
    <h1>Додати медичний препарат</h1>
    <form id="form" class="form-inline">
    <div class="form-group">
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
    <button @click="onAddMedicine" class="sucess">
        Додати медичний препарат
    </button>
    </div>
    </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

    export default {
        name:"AddMedicineForm",
        data() {
            return {
            name: null,
            price: null,
            requirements: null,
            maker: null,
            }
        },
        methods: {
            ...mapActions(['addMedicine']),
            onAddMedicine() {
                const{name,price,requirements,maker}=this
                this.addMedicine({
                    name,
                    price,
                    requirements,
                    maker
                })
                this.$router.push('/')
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>