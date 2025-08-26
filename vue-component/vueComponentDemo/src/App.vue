<template>
  <div class="bg-black text  pt-6" :style="{ height: '150vh' }">
    <h1 class="text-center text-success">ContactOPedia</h1>
    <div class="container">
      <div class="row text-white p-2 mb-2">
        <div class="col-6">
          <div>Owner Name : <input v-model="ownerName" /></div>
        </div>
        <div class="col-6 text-end">
          Max Lucky Number: <input v-model.number="maxNumber" />
        </div>
      </div>

      <br /><br />

      <AddContact @add-contact="onAddContact($event)" />

      <div class="row">
        <div class="col-12" v-for="contact in contacts" :key="contact.name">
          <Contact
            :name="contact.name"
            :phone="contact.phone"
            :owner-name="contact.ownerName"
            :email="contact.email"
            :is-favorite="contact.isFavorite"
            :max-lucky-number="maxNumber"
            @update-favorite="contact.isFavorite = onUpdateFavorite($event)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ButtonCounter from './components/ButtonCounter.vue'
import Contact from './components/contact.vue'
import AddContact from './components/AddContact.vue'
import { ref, reactive, provide } from 'vue'

const maxNumber = ref(100)
const ownerName = ref('eda')

//Let an ancestor component expose reactive values/services to its entire subtree without prop-drilling.
provide("maxLuckyNumber", maxNumber);

const contacts = reactive([
  { name: 'eda',   phone: 1357636373,   ownerName: ownerName, email: '', isFavorite: false },
  { name: 'nut',   phone: 636374775853, ownerName: ownerName, email: '', isFavorite: true },
  { name: 'cihan', phone: 905763463,    ownerName: ownerName, email: '', isFavorite: false }
])

function onAddContact(contact){
  contact.ownerName = ownerName.value
  contact.isFavorite = false
  contacts.push(contact)
}

function onUpdateFavorite(isFavFromChildComponent){
  return !isFavFromChildComponent
}
</script>

<style>
/* your styles */
</style>
