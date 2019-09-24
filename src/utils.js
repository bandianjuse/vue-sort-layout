export const addClassName = (node, name) => {
  const className = node.getAttribute('class');
  node.setAttribute('class', className.concat(` ${name}`));
};

export const setAttribute = (node, attrName, attrValue) => {
  node.setAttribute(attrName, attrValue);
};