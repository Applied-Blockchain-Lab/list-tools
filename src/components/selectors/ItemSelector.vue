<script setup>
import { ListStore } from "../../listStore";
const listId = new URL(import.meta.url).searchParams.get("listId");

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});

const listStore = ListStore(listId);
</script>

<template>
  <input type="checkbox" :value="props.item" v-model="listStore.selectedItems" />
</template>
