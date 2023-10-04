// import axios from "axios";

// const Instance = axios.create({
// 	baseURL: "https://youtube-search-and-download.p.rapidapi.com/channel/about",
// 	headers: {
// 		"X-RapidAPI-Key": "b99679feeemshe00ee4c5e2a44aep15d080jsn93943c37dce4",
// 		"X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
// 	},
// });

// export default Instance;


import axios from "axios";

const Instance = axios.create({
	baseURL: "https://youtube-search-and-download.p.rapidapi.com",
	headers: {
		"X-RapidAPI-Key": "262cf58710mshc375870cb9ea1f3p1d34d9jsnb2243f9c22d9",
		"X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
	},
});

export default Instance;