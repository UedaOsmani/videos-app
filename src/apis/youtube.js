import axios from 'axios';
const KEY = "AIzaSyBQzfsMNl65wM04VYDeTZZ8CY2ULIw3i5Y";


export default axios.create ({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults:'5',
        key: KEY
        }

})