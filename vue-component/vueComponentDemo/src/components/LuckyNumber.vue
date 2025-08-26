<template>
  <div class="float-end">
    <button class="btn btn-outline-danger" @click="generateLuckNumber()">
      <span v-if="luckyNumber === 0">
        Generate Luck Number <br />
        Range(1-{{ maxNumber }})
      </span>
      <span v-else>
        Luck Number: {{ luckyNumber }} <br />
        Click to generate new luck number
      </span>
    </button>
  </div>
</template>

<script setup>
import { ref , inject} from "vue";

const luckyNumber = ref(0);

//inject
//Let a descendant retrieve those provided values/services from any ancestor, skipping intermediate components.
const maxNumber  =inject("maxLuckyNumber")

// 1..maxNumber (inclusive)
function generateLuckNumber() {
  luckyNumber.value = Math.floor(Math.random() * maxNumber.value) + 1;
  console.log(luckyNumber.value);
}
</script>
