<script setup>
import { ref, computed } from "vue";
import { useListStore } from "../../listStore";

const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
});

const listStore = useListStore(props.id);

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
<style scoped></style>
