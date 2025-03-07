import { renderSongs } from "./ui.js";

//*! sayfa yüklendiği anda çalışır
const url = 'https://shazam.p.rapidapi.com/search?term=kiss%20the%20rain&locale=en-US&offset=0&limit=10';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'ac0d0704e5msh99a9cf09ac1cc69p19d3c0jsn703015f34d2d',
		'x-rapidapi-host': 'shazam.p.rapidapi.com'
	}
};

// const url = 'https://shazam.p.rapidapi.com/search?term=kiss%20the%20rain&locale=en-US&offset=0&limit=5';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': '0220830e48msh2f2d37adce7e8f8p174336jsn77b75d7d4b4c',
// 		'x-rapidapi-host': 'shazam.p.rapidapi.com'
// 	}
// };
//*! apis isteklerini yönettiğimiz class yapısı
export class API {
    constructor() {
        this.songs = [];
    }
 //*! popüler müzikleri getirir   
    async getPopular() {
      const res = await fetch (url, options);
      const data = await res.json();
//*! apiden aldığımız şarkıları song dizisine aktardık
      this.songs = data.tracks;
//*! ekrana popüler müzikleri aktaracak foksiyona songs dizisini yazdırdık
      renderSongs(this.songs);
      
    }
    //* arama methodu
   async searchMusic (query) {
      const res = await fetch (`https://shazam.p.rapidapi.com/search?term=${query}&locale=tr-TR&offset=0&limit=5`, options);
      const data = await res.json();
      //* veriyi istediğimiz hale çevirme
      //* song.track yerine songa çevirme
      const newData = data.tracks.hits;
      
      newData = newData.map((song) => ({...song.track}));
    
      this.songs = newData;
      //* aratılan şarkıyı ekrana basar
      renderSongs(this.songs);
   } 
}
