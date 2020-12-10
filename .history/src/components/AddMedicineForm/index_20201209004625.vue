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
            ...mapActions(['addMedicine'])
            onAddMedicine() {
                
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>