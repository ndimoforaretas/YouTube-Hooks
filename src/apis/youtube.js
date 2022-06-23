import axios from "axios";

const KEY = "AIzaSyDX50ivkFCxIxf8nYbmb3_oosPlOmzHpEs";

export default axios.create({
	baseURL: "https://www.googleapis.com/youtube/v3",
	params: {
		part: "snippet",
		maxResults: 5,
		key: KEY,
	},
});
