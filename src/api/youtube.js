import axios from 'axios';

export default axios.create({
    baseUrl: 'http://www.googleapis.com/youtube/v3',
});
