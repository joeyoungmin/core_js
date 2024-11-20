<<<<<<< HEAD
/* global typeError */

function getAttr(node, prop) {
  if (isString(node)) node = getNode(node);

  if (!isString(prop))
    throw typeError(
      'getAttr 함수에 전달된 두 번째 인수는 문자 타입 이어야 합니다.'
    );

  return node.getAttribute(prop);
}

function setAttr(node, prop, value) {
  if (isString(node)) node = getNode(node);
  if (!isString(prop))
    throw typeError('setAttr 함수의 두 번째 인수는 문자 타입 이어야 합니다.');
  if (isUndefined(value) || value === '') {
=======


function getAttr(node,prop){

  if(isString(node)) node = getNode(node);
  // if(typeof node === 'string') node = document.querySelector(node);

  if(!isString(prop)) throw new TypeError('getAttr 함수의 두 번째 인수는 문자 타입 이어야 합니다.')

  return node.getAttribute(prop);

}

function typeError(message){
  return new TypeError(message + '문자 타입 이어야 합니다.');
}

function setAttr (node,prop,value){
  
  if(isString(node)) node = getNode(node);



  if(value === ''){
>>>>>>> upstream/main
    node.removeAttribute(prop);
    return;
  }

<<<<<<< HEAD
  if (prop.startsWith('data')) {
    prop = prop.slice(5);
=======
  if(prop.startsWith('data')){
    prop = prop.slice(5)
>>>>>>> upstream/main
    node.dataset[prop] = value;
    return;
  }

<<<<<<< HEAD
  node.setAttribute(prop, value);
}

// function attr(node,prop,value){

//   if(!value){
//     return getAttr(node,prop)
//   }else{
//     setAttr(node,prop)
//   }
// }

const attr = (node, prop, value) =>
  !value ? getAttr(node, prop) : setAttr(node, prop, value);

// attr('.about','id') // getter
// attr('.about','id','star') // setter
=======

  if(!value) throw new ReferenceError('setAttr 함수의 세 번째 인수는 필수 입력값 입니다.');

  node.setAttribute(prop,value);
}


// function attr(node,prop,value){
//   if(!value){
//     return getAttr(node,prop)
//   }else{
//     setAttr(node,prop,value)
//   }
// }

const attr = (node,prop,value) => !value ? getAttr(node,prop) : setAttr(node,prop,value)
>>>>>>> upstream/main
