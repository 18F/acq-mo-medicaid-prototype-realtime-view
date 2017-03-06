import Frisbee from 'frisbee';

const baseURI = 'http://localhost:8081';
const headers = {
  'Accepts': 'application/json',
  'Content-Type': 'application/json'
};

let internalAPI = new Frisbee({ baseURI, headers });

export const api = () => {
  return internalAPI;
};

export const setHeader = (name, value) => {
  headers[name] = value;
  internalAPI = new Frisbee({ baseURI, headers });
};
