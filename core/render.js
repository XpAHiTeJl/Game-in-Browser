// export const render = (currnetNode) => {
//   [...currnetNode.children].forEach((el) => {
//     el.remove();
//   });
// };
// export const render = (component, distPoint) => {
//   return distPoint.append(component);
// };

export const render = (node, children) => {
  [...node.children].forEach((child) => {
    child.remove();
  });

  if (!isArray(children)) return node.append(children);

  for (const child of children) node.append(child);
};
