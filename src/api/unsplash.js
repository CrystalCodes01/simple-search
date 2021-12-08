import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
    'Client-ID rCkN0m-130H9znt2lphHdgo7EnUFMdz9d7wWkpAelVI'
  }
});
