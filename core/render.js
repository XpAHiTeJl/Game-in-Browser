// export const render = (currnetNode) => {
//   [...currnetNode.children].forEach((el) => {
//     el.remove();
//   });
// };
export const render = (component, distPoint) => {
  return distPoint.append(component);
};
