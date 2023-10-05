export const render = (currnetNode) => {
  [...currnetNode.children].forEach((el) => {
    el.remove();
  });
};
