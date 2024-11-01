const box = document.getElementById("input-box");
const from = document.querySelector("form");
const div = document.createElement("div");

async function getAllUser(movie) {
  try {
    const apikey = "68fbf626";
    const url = `https://www.omdbapi.com/?i=tt3896198&apikey=${apikey}&t=${
      movie || "Adipurush"
    }`;

    const response = await fetch(url);

    const data = await response.json();
    console.log(data);
    const newsData = data;

    const {
      Title,
      Awards,
      Director,
      imdbRating,
      Released,
      Plot,
      Poster,
      Actors,
      BoxOffice,
    } = data;

    div.className = "card";
    div.id = "1";

    const box = document.getElementById("input-box");
    const from = document.querySelector("form");

    document.body.appendChild(div);
    const card = document.getElementById("1");
    card.innerHTML = `  <div class="infocard">
       <img class="img" src="${Poster}" />
      </div>

      <div class="infocard-two">

       <h1 class="title">${Title}</h1>

       <h1 class="title">imdbRating ⭐ ${imdbRating}</h1>

        <h1 class="ct"> 
         <span class="info-movie">
         Director : <span>${Director}</span>
         </span></h1>

         <h1 class="ct"> 
           <span class="info-movie">
             BoxOffice : <span>${BoxOffice}</span>
           </span></h1>

         <p class="p">Released Date : <span class="s">${Released}</span> </p>

         <p  class="p">Awards: <span class="s">${Awards}</span></p>

         <p  class="p">Cast : <span class="s">${Actors}</span></p>

         <p  class="p">Plot : <span class="s">${Plot}</span></p>

      </div>`;
  } catch (error) {
    console.log("E :", error);
  }
}
getAllUser();

from.addEventListener("submit", (e) => {
  e.preventDefault();
  const movieName = box.value.trim();
  if (movieName !== "") {
    getAllUser(movieName);
  } else {
    alert("Please Enter Movie Name");
  }
});