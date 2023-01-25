<script setup>
import { computed } from "vue";
import { ListStore } from "../../listStore";
const listId = new URL(import.meta.url).searchParams.get("listId");

const listStore = ListStore(listId);

const itemCountMsg = computed(() => {
  return listStore.selectedItems.length > 1
    ? `${listStore.selectedItems.length} items selected`
    : `${listStore.selectedItems.length} item selected`;
});
</script>

<template>
  <span>{{ itemCountMsg }}</span>
</template>
