import Vue from "vue";
import Vuex from "vuex";
import { v4 as uuid_v4 } from 'uuid'

Vue.use(Vuex)

const store=new Vuex.Store({
    state:{
      medicinesList:[
          {
              id:1,
              name:'Но-шпа',
              price:60.48,
              requirements:"Спазми гладкої мускулатури, пов'язані з захворюваннями біліарного тракту: холецистолітіаз, холангіолітіаз, холецистит, перихолецистит, холангіт, папіліт. Спазми гладкої мускулатури при захворюваннях сечового тракту: нефролітіаз, уретролітіаз, пієліт, цистит, тенезми сечового міхура.",
              maker:"Chinoin (Угорщина)"

          },
          {
            id:2,
            name:"Діазолін",
            price:19.19,
            requirements:"Профілактика і лікування сезонного та алергічного риніту, полінозу, кропив'янки, харчової та медикаментозної алергії, дерматозів, що супроводжуються свербежем шкіри (екзема, нейродерміт).",
            maker:"Фармак ОАО (Україна, Київ)"

        },
        {
            id:3,
            name:"Амоксил",
            price:81.77,
            requirements:"Інфекції органів дихання, сечостатевої системи, травного тракту (у тому числі у комбінації з метронідазолом або кларитроміцином застосовують для лікування захворювань, асоційованих із Helicobacter pylori), шкіри та м’яких тканин, спричинені чутливими до лікарського засобу мікроорганізмами.",
            maker:"Киевмедпрепарат ОАО (Україна, Київ)"

        }
      ],
      cart:[]
    },
    mutations:{
        addMedicine(state, data) {
            state.medicinesList.push({
             id: uuid_v4(),
             ...data,
           })
         },
         deleteMedicine(state,id){
             let medicines=state.medicinesList.filter(medicine=>medicine.id!=id)
             state.medicinesList=medicines;
         },
         editMedicine(state,medicine){
             state.medicinesList.forEach(m=>{
                 if(m.id==medicine.id){
                     m=medicine;
                 }
             } )
         },
         addToCart(state,medicine){
             if(state.cart)
             {
                 let isMedicineExists=false;
                 state.cart.map(function (item) {
                     
                 })
             }
             else{
                state.cart.push(medicine)
             }
             
         }
    },
    actions:{
        addMedicine({ commit }, medicine) {
            commit('addMedicine', medicine)
          },
          deleteMedicine({commit},id){
              commit('deleteMedicine',id)
          },
          editMedicine({commit},medicine){
              commit('editMedicine',medicine)
          },
          addToCart({commit},medicine){
              commit('addToCart',medicine)
          }
    },
    getters:{
        getMedicines:(state)=> state.medicinesList,
        getMedicineById:(state)=>(id)=>{return state.medicinesList.find(m=>m.id===id)},
        getMedicinesInCart:(state)=>state.cart
    },
    modules:{

    }
})

export default store