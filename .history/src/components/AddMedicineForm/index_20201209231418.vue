<template>
    <div> 
        <h1>Додати медичний препарат</h1>
    <p>
    <label>
        Назва медичного препарату:
        <input type="text" v-model="name"/>
    </label>
    </p>
    <p>
    <label>
        Ціна:
        <input type="number" v-model="price"/>
    </label>
    </p>
    <p>
    <label>
        Показання до застосування:
        <input type="text" v-model="requirements"/>
    </label>
    </p>
    <p>
    <label>
        Виробник:
        <input type="text" v-model="maker"/>
    </label>
    </p>
    <p>
    <router-link to="/" tag="button" >Повернутися</router-link>
    <button @click="onAddMedicine" >
        Додати медичний препарат
    </button>
    </p>
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