<script setup>
import { ref, computed } from "vue";
import { ListStore } from "../../listStore";
const listId = new URL(import.meta.url).searchParams.get("listId");

const listStore = ListStore(listId);

const isChecked = ref();

const isIndeterminate = computed(() => {
  if (listStore.selectedItems.length >= 1 && listStore.selectedItems.length <= listStore.getFilteredItems.length - 1) {
    return true;
  }

  return false;
});

function bulkCheckChange() {
  if (isChecked.value) {
    listStore.setSelectedItems(listStore.getFilteredItems);
  } else {
    listStore.setSelectedItems([]);
  }
}
</script>

<template>
  <input type="checkbox" :indeterminate="isIndeterminate" @change="bulkCheckChange" v-model="isChecked" />
</template>
