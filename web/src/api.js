import Frisbee from 'frisbee';

const baseURI = 'http://localhost:8081';
const headers = {
  Accepts: 'application/json',
  'Content-Type': 'application/json'
};

let internalAPI = new Frisbee({ baseURI, headers });

export const api = () => internalAPI;

export const setAPIHeader = (name, value) => {
  headers[name] = value;
  internalAPI = new Frisbee({ baseURI, headers });
};

export const removeAPIHeader = (name) => {
  delete headers[name];
  internalAPI = new Frisbee({ baseURI, headers });
};
