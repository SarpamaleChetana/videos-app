import axios from 'axios';

const KEY= 'AIzaSyCXfa02qB1kobTJ0iBxME0iTrVryd7gEg4';

export default axios.create({
    baseURL: ' https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 10,
        key: KEY
    }
})