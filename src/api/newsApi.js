import Axios from 'axios';

const KEY = 'acca9b1f157c45d485cc3d256689de77';

export default Axios.create({
    baseURL: 'http://newsapi.org/v2',
    headers: {
        "x-api-key": KEY
    }
});