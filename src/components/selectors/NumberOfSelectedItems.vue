<script setup>
import { computed } from "vue";
import { ListStore } from "../../listStore";

const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
});

const listStore = ListStore(props.id);

const itemCountMsg = computed(() => {
  return listStore.selectedItems.length > 1
    ? `${listStore.selectedItems.length} items selected`
    : `${listStore.selectedItems.length} item selected`;
});
</script>

<template>
  <span>{{ itemCountMsg }}</span>
</template>
