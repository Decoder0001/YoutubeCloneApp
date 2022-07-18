import axios from "axios";

const KEY = "AIzaSyCBITlnHbZ3GeHGVOzJi2CWJxWolQZWmYs";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
