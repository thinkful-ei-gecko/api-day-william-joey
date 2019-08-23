'use strict';
/* global shoppingList, store, Item */
// eslint-disable-next-line no-unused-vars
$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
});

store.items.push(Item.create('apples'));


api.getItems()
  .then(res => res.json())
  .then(jsonRes=>{
    jsonRes.forEach(item => store.addItem(item));
    shoppingList.render();

  });
  
  
