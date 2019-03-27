import axios from 'axios';

const endpoins = {
    login: 'https://jocelio.auth0.com/oauth/token'
}

export default {
    login: data => axios.post(endpoins.login, data)
}