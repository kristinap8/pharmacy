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
    <button @click="onAddMedicine">
        Додати медичний препарат
    </button>
    </div>
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