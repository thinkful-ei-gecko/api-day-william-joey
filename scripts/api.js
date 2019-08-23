'use strict';
const api = (function(){
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/joey';

  const getItems = function(){
    fetch(`${BASE_URL}/items`)
      .then(response => response.json())
      .then(responseJson => console.log(responseJson));
    return Promise.resolve('A successful response!');
  };

  /** 
   * @param {string} name is a shopping list item to be added
  */
  const createItem = function(name){
    let newItem = JSON.stringify( {
      name: name,
    });
    fetch(`${BASE_URL}/items`,{
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: newItem,
    })
    .then(response => response.json())
 .then((newItem) => {
    return api.getItems();
  })
  .then(res => res.json())
  .then((items) => {
    console.log(items);
  });




  return{
    getItems,
    createItem,
  };


}());
