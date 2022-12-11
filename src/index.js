//alert('rendering renderFilmsList');

function fetchFilmsList() {
    fetch('http://localhost:3000/films/').then((response) => response.json()).then((films)=>renderFilmsList(films));
        
    }
    
function fetchSingleFilm(id){
    let url = 'http://localhost:3000/films/'+id;
    fetch(url).then((response) => response.json()).then((film)=>renderSingleFilm(film));
}
    
    function renderFilmsList(films) {
        films.forEach(film => {
            const filmList =document.getElementById('sidebar')
            const a = document.createElement('a');
            a.innerHTML=film.title;
            if(film.id == 1){
                a.className = "active";
            }
            filmList.appendChild(a);
    
        });
      }
       
    
    
      function renderSingleFilm(film){
        const divFilmContents = document.getElementById('film-content');
        //title
        const h2 = document.createElement('h2')
        h2.innerHTML = film.title;
        divFilmContents.appendChild(h2);
    
        //Description
        const ParagraphForDescription = document.createElement('P');
        ParagraphForDescription.innerHTML = "<b>Description: </b>"+film.description;
        divFilmContents.appendChild(ParagraphForDescription);
    
        //poster
        const img = document.createElement('img');
        //img.innerHTML = "<b>Description: </b>"+film.description;
        img.setAttribute("src", film.poster);
        img.setAttribute("height", "300");
        img.setAttribute("width", "300");
    
        divFilmContents.appendChild(img);
        
        //runtime
        const R =document.createElement('R')
        R.innerHTML ="<b>Runtime: </b>" + film.runtime
        divFilmContents.appendChild(R)
    
        //Showtime
        const x =document.createElement('x')
        x.innerHTML ="<b>Showtime: </b>" + film.showtime
        divFilmContents.appendChild(x)
        
        //available tickets
        const paragraphAvailableTickets = document.createElement('p');
        const availableTickets = film.capacity - film.tickets_sold;
        paragraphAvailableTickets.innerHTML = "<b>Available tickets: </b>"+availableTickets;
        /* availableTicket = capacity - tickets_sold
        {
"id": "1",
"title": "The Giant Gila Monster",
"runtime": "108",
"capacity": 30,
"showtime": "04:00PM",
"tickets_sold": 27,
"description": "A giant lizard terrorizes a rural Texas community and a heroic teenager attempts to destroy the creature.",
"poster": "https://www.gstatic.com/tv/thumb/v22vodart/2157/p2157_v_v8_ab.jpg"
}
       
        paragraphAvailableTickets = <p> ? </p>
        paragraphAvailableTickets.innerHTML = fil
        
        availableTickets = (capacity)30 - (tickets_sold)27 = 3
        availableTicket.innerHTML ="<b>Available tickets: </b>" + film.availableTicket
        */
        divFilmContents.appendChild(paragraphAvailableTickets)
       
      }
      
      /*document.addEventListener('DomContentLoaded', function() {
        alert('DomContentLoaded');
        //fetchSingleFilm('http://localhost:3000/films/1');
        //fetchFilmsList();
      })
      */

      document.addEventListener('DOMContentLoaded', (event) => {
        fetchSingleFilm(1);
        fetchFilmsList();
      });
    