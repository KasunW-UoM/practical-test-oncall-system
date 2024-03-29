const queryString = require("query-string");

const create = (params, credentials, product) => {
  console.log(" ------- ");
  return fetch("http://localhost:3002/api/v1/products/by/" + params.shopId, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: "Bearer " + credentials.t
    },
    body: product
  })
    .then(response => {
      console.log("called .... ");
      return response.json();
    })
    .catch(err =>
      console.log(err));
};

const listByShop = params => {
  return fetch("http://localhost:3002/api/v1/products/by/" + params.shopId, {
    method: "GET"
  })
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log(err);
    });
};

const update = (params, credentials, product) => {
  return fetch("http://localhost:3002/api/v1/products/" + params.shopId + "/" + params.productId, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      Authorization: "Bearer " + credentials.t
    },
    body: product
  })
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log(err);
    });
};

const remove = (params, credentials) => {
  return fetch("http://localhost:3002/api/v1/products/" + params.shopId + "/" + params.productId, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + credentials.t
    }
  })
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log(err);
    });
};
const read = params => {
  return fetch("http://localhost:3002/api/v1/products/" + params.productId, {
    method: "GET"
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

const list = params => {
  const query = queryString.stringify(params);
  return fetch("http://localhost:3002/api/v1/products?" + query, {
    method: "GET"
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

const listLatest = () => {
  return fetch(`http://localhost:3002/api/v1/products/latest/${new Date().getTime()}`, {
    method: "GET"
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

const listRelated = params => {
  return fetch("http://localhost:3002/api/v1/products/related/" + params.productId, {
    method: "GET"
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

const listCategories = () => {
  return fetch(`http://localhost:3002/api/v1/products/categories/${new Date().getTime()}`, {
    method: "GET"
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

module.exports = {
  create,
  read,
  update,
  remove,
  listByShop,
  listLatest,
  listRelated,
  listCategories,
  list
};
