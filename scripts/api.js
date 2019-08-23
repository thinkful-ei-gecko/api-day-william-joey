'use strict';
const api = (function(){
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/joey';

  const getItems = function(){
    return fetch(`${BASE_URL}/items`);
    
  };

  /** 
   * @param {string} name is a shopping list item to be added
  */
  const createItem = function(name){
    let newItem = JSON.stringify({
      name,
    });
    return fetch(`${BASE_URL}/items`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: newItem,
    });

  };




  return{
    getItems,
    createItem,
  };


}());
