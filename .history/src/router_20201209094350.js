import Vue from "vue";
import VueRouter from "vue-router";
import AddMedicine from "@/pages/AddMedicine";
import EditMedicine from "@/pages/EditMedicine";
import AllMedicines from "@/pages/AllMedicines";

Vue.use(VueRouter);

const routes=[
    {
        path:'/',
        name:'all-medicines',
        component:AllMedicines
    },
    {
        path:'/edit_medicine/:medicine_id',
        name:'edit-medicine',
        component:EditMedicine
    },
    {
        path:'/add_medicine',
        name:'add-medicine',
        component:AddMedicine
    },
]

const router=new VueRouter({
    mode:"history",
    routes
});

export default router;