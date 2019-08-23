'use strict';
/* global shoppingList, store, Item */
// eslint-disable-next-line no-unused-vars
$(document).ready(function() {
  shoppingList.bindEventListeners();
  api.getItems()
    .then(res => res.json())
    .then((items) => {
      items.forEach(item => store.addItem(item));
      // const item = store.items[0];
      // console.log('current name: ' + item.name);
      // store.findAndUpdate(item.id, { name: 'joey' });
      // console.log('new name: ' + item.name);
      shoppingList.render();
    });
});

// store.items.push(Item.create('apples'));


// api.getItems()
//   .then(res => res.json())
//   .then(jsonRes => {
//     jsonRes.forEach(item => store.addItem(item));
//     shoppingList.render();
//   });
  
  
// api.createItem('pears')
//   .then(res => res.json())
//   .then((newItem) => {
//     return api.getItems();
//   })
//   .then(res => res.json())
//   .then((items) => {
//     console.log(items);
//   });

// api.getItems()
//   .then(res => res.json()) // [{id: sfasdfafd, names: apples, checked: false}
//   .then((items) => {
//     const item = items[0];
//     return api.updateItem(item.id, { hello: true });
//   })
//   .then(res => res.json())
//   .then(() => console.log('updated!'));