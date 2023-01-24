export function addIndex(el, index, key) {
  const collection = document.getElementsByClassName(`index.${key}`);

  if (collection.length === 0) {
    if (index !== undefined) {
      const newEl = document.createElement("div");
      const newContent = document.createTextNode(index);
      newEl.appendChild(newContent);
      newEl.classList.add(`index.${key}`);
      el.append(newEl);
    }
  } else {
    if (index !== undefined) {
      collection[0].innerHTML = index;
    } else {
      collection[0].remove();
    }
  }
}
