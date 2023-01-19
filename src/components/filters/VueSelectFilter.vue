<template>
  <div>
    <v-select :options="options" v-model="selectedOption"></v-select>
  </div>
</template>

<script>
import "vue-select/dist/vue-select.css";
export default {
  data() {
    return {
      options: ["Option 1", "Option 2", "Option 3"],
      selectedOption: "",
    };
  },
};
</script>
