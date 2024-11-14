function getAttr(node, prop) {
  if (isString(node)) node = getNode(node);
  if (!isString(prop)) throw typeError('에러래');

  return node.getAttribute(prop);
}
