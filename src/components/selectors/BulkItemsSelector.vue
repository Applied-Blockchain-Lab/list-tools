<script setup>
import { ref, computed } from "vue";
import { ListStore } from "../../listStore";

const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
});

const listStore = ListStore(props.id);

const isChecked = ref();

const isIndeterminate = computed(() => {
  if (listStore.selectedItems.length >= 1 && listStore.selectedItems.length <= listStore.getAllItems.length - 1) {
    return true;
  }

  return false;
});

function bulkCheckChange() {
  if (isChecked.value) {
    listStore.setSelectedItems(listStore.getAllItems);
  } else {
    listStore.setSelectedItems([]);
  }
}
</script>

<template>
  <input type="checkbox" :indeterminate="isIndeterminate" @change="bulkCheckChange" v-model="isChecked" />
</template>
