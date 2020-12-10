<template>
    <div>

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