export default {
  install: (app, _options) => {
    // let handleClick = function (tools, key) {
    //   console.log("asd");
    //   tools.sortUtils.sortBy(key);
    // };
    app.directive("sort", (el, binding) => {
      // const listTools = useGlobalComposable(binding.value.id);

      el.addEventListener("click", binding.value.tools.sortUtils.handler(binding.value.key));
    });
  },
};
