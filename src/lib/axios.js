import axios from 'axios';

const url = 'http://ec2-3-84-3-123.compute-1.amazonaws.com:3000/';

const config = {
  baseURL: url,
  headers: {
    'Content-Type': 'application/json',
  },
};
export default axios.create(config);
