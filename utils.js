const curry = (func) => {
    return function curried(...args) {
      if (args.length >= func.length) {
        return func(...args);
      }
      return function (...args2) {
        return curried(...args, ...args2);
      };
    };
  };
  
  const getType = (val) => {
    if (val instanceof Array) return "array";
    if (isNaN(val)) return "NaN";
    if (val === null) return "null";
  
    return typeof val;
  };
  
  const reverseCall = (func) => (par1, par2) => func(par2, par1);
  
  const querySelector = (selector) => document.querySelector(selector);
  
  const querySelectorAll = (selector) => [...document.querySelectorAll(selector)];
  
  const createElement = (tag, params = {}) => {
    const el = document.createElement(tag);
  
    
  
    Object.entries(params).forEach(([key, value]) => {
      if (key === "text") {
        el.innerText = value;
        return;
      }
  
      if (key === "classList") {
        value.forEach((cl) => el.classList.add(cl));
        return;
      }
  
      if (key === "dataSet") {
        Object.entries(value).forEach(
          ([key, value]) => (el.dataset[key] = value)
        );
        return;
      }
  
      if (key === "style") {
        Object.entries(value).forEach(([key, value]) => (el.style[key] = value));
        return;
      }
  
      el.setAttribute(key, value); //el[key] = value
    });
    return el;
  };
  
  const curriedCreateElement = curry(createElement);
  
  
  const appendElements = (elements, parent) => {
    elements.forEach((element) => {
      if (getType(element) !== "array") {
        parent.append(element);
        return;
      }
      parent.append(element[0]);
      appendElements(element.slice(1), element[0]); // ( [p], div )
    });
  };
  
  
  
  export default {
    querySelector,
    querySelectorAll,
    createElement,
    curry,
    curriedCreateElement,
    appendElements,
    reverseCall,
  };