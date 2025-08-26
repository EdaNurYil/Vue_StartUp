
<!--TEMPLATE-->
<template>
  <div class="bg-info rounded p-1 pb-4 m-2">
    <div class="row">
      <div class="col-6">
        <h3>Name: {{ name }}</h3>
        <p>Email: {{ email }}</p>
        <p>Phone: {{ phone }}</p>
      </div>

      <div class="col-3">
        <button 
            @click="toggleFavorite()"
            :class="['btn', isFavorite ? 'btn-warning' : 'btn-success']">
          {{ isFavorite ? "Remove From" : "Add To" }} Favorite
        </button>
      </div>
    </div>

    <div class = "col-12 col-md-3 d-flex gap-2 justify-content-md-end">
        <LuckyNumber />
    </div>    

    <span class="float-end small" v-if="ownerName">
      *this contact info belong to {{ ownerName }}
    </span>
  </div>
</template>

<!--SCRIPT-->
<script setup>
import LuckyNumber from "./LuckyNumber.vue";
import { ref , defineProps} from 'vue';

    
    //local global
    //const email = ref("vue@example.com");
    const props = defineProps({
        name: { type: String, required: true },
        phone: Number, 
        ownerName: String,
        email: {type: String, required:false, default: "-n/a"},
        isFavorite: Boolean
        });

        const emit = defineEmits(["update-favorite"]);

        function toggleFavorite(){
           emit("update-favorite", props.isFavorite)
        }
</script>

