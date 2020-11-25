const BASE_URL = 'https://thinkful-list-api.herokuapp.com/kasperkain';

function listAPIFetch(...args) {
  let error = undefined;

  return fetch(...args){}
}

function getItems() {
  return fetch(`${BASE_URL}/items`);
}

function createItem(name) {
  let newItem = JSON.stringify({ name: name });

  return fetch(`${BASE_URL}/items`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: newItem,
  });
}

function updateItem(id, data) {
  return fetch(`${BASE_URL}/items/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
}

export default {
  getItems,
  createItem,
  updateItem,
};
