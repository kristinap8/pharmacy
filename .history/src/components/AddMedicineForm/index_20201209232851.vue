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
.form{
    text-align: center;
}
.form-row {
  display: flex;
  justify-content: flex-end;
  padding: .5em;
}
.form-row > label {
  padding: .5em 1em .5em 0;
  flex: 1;
}
.form-row > input {
  flex: 2;
}
.form-row > input {
  padding: .5em;
}
</style>