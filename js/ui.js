import { elements } from "./helpers.js";

export const renderSongs = (songs) => {
    
    elements.list.innerHTML = "";
    
    songs.hits.forEach((song) => {
       
    //*! kart datasına kart elemanına bazı veriler ekleme
        const div = document.createElement("div");
        div.dataset.url = song.track.hub?.actions?.pop().uri;
        div.dataset.title = song.track.title;
        div.dataset.img = song.track.images?.coverart;
        div.className = "card";
        div.innerHTML = `
         <figure>
            <img src="${song.track.images?.coverart}"
            alt=""/>
            <div class="play">
            <i class="bi bi-play-fill"id="play-btn"></i>
            </div>
        </figure>
        <h4>${song.track.subtitle}</h4>
        <h4>${song.track.title}</h4> 
        `;
        elements.list.appendChild(div);    
     });
     
     
    };
export const renderPlayingInfo = (song) => {
    console.log(song);
    elements.playingInfo.innerHTML = `
     <img src="${song.img}"id="info-img"class="" alt=""/>
        
        <div>
            <p>Şuan oynatılıyor...</p>
            <h3>${song.title}</h3>
        </div>
    `;
};
//* başlığı günceller
export const updateTitle = (message) => {
    
      elements.title.innerText = message ; 
};