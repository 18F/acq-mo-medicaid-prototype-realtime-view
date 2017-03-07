import Frisbee from 'frisbee';

const baseURI = 'http://localhost:8081';
let headers = {
  'Accepts': 'application/json',
  'Content-Type': 'application/json'
};

let internalAPI = new Frisbee({ baseURI, headers });

export const api = () => {
  return internalAPI;
};

export const setAPIHeader = (name, value) => {
  headers[name] = value;

  // Do this to remove any headers that have been set
  // to a non-JSONy value (e.g., undefined)
  headers = JSON.parse(JSON.stringify(headers));

  internalAPI = new Frisbee({ baseURI, headers });
};
