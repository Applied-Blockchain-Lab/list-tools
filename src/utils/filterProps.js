import { ref } from "vue";
import { ListStore } from "../listStore.js";
// import { useFilterUtils } from "../../utils";
import useFilterUtils from "./filterUtils.js";
import { defineProps } from "vue";

export const useFilterProps = (props) => {
  const listStore = ListStore(props.listId);
  const filters = useFilterUtils(listStore);
  const isApplied = ref(false);

  const compProps = {
    filterKey: {
      type: String,
      required: true,
    },
    compare: {
      type: String,
      required: true,
    },
  };

  const applyFilter = (getComparator) => {
    filters.applyFilter(getComparator, props.type, props.compare, props.filterKey);
    isApplied.value = true;
  };

  const removeFilter = (getComparator) => {
    filters.removeFilter(getComparator, props.type, props.compare, props.filterKey);
    isApplied.value = false;
  };

  return { compProps, isApplied, applyFilter, removeFilter };
};

export const useFilterPropsModel = () => {
  // const props = {
  //     filterKey: {
  //         type: String,
  //         required: true,
  //     },
  //     compare: {
  //         type: String,
  //         required: true,
  //     },
  // };
  const props = defineProps({
    filterKey: {
      type: String,
      required: true,
    },
    compare: {
      type: String,
      required: true,
    },
  });
  return { props };
};
