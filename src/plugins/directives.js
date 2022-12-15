import useGlobalComposable from "../composables/globalComposable";

export default {
  install: (app, _options) => {
    app.directive("sort", (el, binding) => {
      const listTools = useGlobalComposable(binding.value.id);

      el.addEventListener("click", () => {
        listTools.sortUtils.sortBy(binding.value.key);
        // console.log("here2");
      });
    });
  },
};
