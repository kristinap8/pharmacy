<template>
    <div class="form">
        <h1>Додати медичний препарат</h1>
      <p class="form-row">
    <label>
        Назва медичного препарату:
        <input type="text" v-model="name"/>
    </label>
    </p>
    <p class="form-row">
    <label>
        Ціна:
        <input class="form-row-1" type="number" v-model="price"/>
    </label>
    </p>
    <p class="form-row">
    <label>
        Показання до застосування:
        <input type="text" v-model="requirements"/>
    </label>
    </p>
    <p class="form-row">
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
.form{
    padding: 50px;
    background: #ccc;
    position: fixed;
    top: 50%; left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    
}
.form-row-1{
    text-align: right: inherit;;
}


</style>