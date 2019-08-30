import React from 'react';

export const onClickRadios = (event : React.MouseEvent) : void => {
  const element = (event.target as Element);
  const value = element.getAttribute('value');
  const parent = element.parentElement;
  const childrens = parent.children;
  const arr = [];
  for (let child in childrens) {
    if (typeof(childrens[child]) === 'object' &&
      childrens[child].getAttribute('type') === 'radio') {
      arr.push(childrens[child]);
    }
  }
  arr.forEach(el => {
    el.removeAttribute('checked');
  });
  if (element.getAttribute('checked') === 'checked') {
    element.removeAttribute('checked');
  } else {
    element.setAttribute('checked', 'checked');
  }
  if (value) {
    parent.setAttribute('data-value', value);
  }
}

export const onClickCheckbox = (event : React.MouseEvent) : void => {
  const element = (event.target as Element);
  let value;
  if (element.getAttribute('checked') === 'checked') {
    element.removeAttribute('checked');
    value = false;
  } else {
    element.setAttribute('checked', 'checked');
    value = true;
  }
  const parent = element.parentElement.parentElement;
  parent.setAttribute('data-value', value);
};

export const initRadios = (refElement: HTMLInputElement, value: string) : void => {
  if (value && value !== '') {
    refElement.setAttribute('data-value', value);
    const childrens = refElement.children;
    const arr = [];
    for (let child in childrens) {
      if (typeof(childrens[child]) === 'object' &&
        childrens[child].getAttribute('type') === 'radio') {
        arr.push(childrens[child]);
      }
    }
    arr.forEach(el => {
      if (el.getAttribute('value') === value) {
        el.setAttribute('checked', 'checked');
      } else {
        el.removeAttribute('checked');
      }
    });
  }
};

export const initCheckbox = (refElement: HTMLInputElement, value: boolean) : void => {
  if (value) {
    refElement.setAttribute('checked', 'checked');
    refElement.parentElement.parentElement.setAttribute('data-value', 'true');
  } else {
    refElement.removeAttribute('checked');
    refElement.parentElement.parentElement.setAttribute('data-value', 'false');
  }
};
