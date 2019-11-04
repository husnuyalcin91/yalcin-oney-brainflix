// variables
let api = 'https://project-1-api.herokuapp.com';
// apiKey retrieved using the browser
let apiKey = 'aa9aa8c6-78b6-4300-8414-e8c9e176d654';

// axios get - showdates
getShows = () => {
    axios.get(`${api}/showdates?api_key=${apiKey}`)
    .then(response => {
        const showInfo = response.data;
        showInfo.forEach( show => {
            shows(show)
        })
    })
    .catch (error => {
        console.log(error);
    })
};

getShows();

shows = (object) => {
    // declare the shows wrap div
    let mainShowsWrap = document.querySelector(".main__shows-wrap");

    // creation of the main shows div
    let mainShow = document.createElement('div');
    mainShow.classList.add('main__show');
    mainShowsWrap.appendChild(mainShow);

    // creation of the date title header
    let mainDateTitle = document.createElement('h3');
    mainDateTitle.innerText = 'DATE';
    mainDateTitle.classList.add('main__date-title', 'main__h-three-font');
    mainShow.appendChild(mainDateTitle);

    // creation of the date element
    let mainDate = document.createElement('h2');
    mainDate.innerText = (object.date) + ", 2019";
    mainDate.classList.add('main__date');
    mainShow.appendChild(mainDate);

    // creation of the venue title header
    let mainVenueTitle = document.createElement('h3');
    mainVenueTitle.innerText = 'VENUE';
    mainVenueTitle.classList.add('main__venue-title', 'main__h-three-font');
    mainShow.appendChild(mainVenueTitle);

    // creation of the venue element
    let mainVenue = document.createElement('p');
    mainVenue.innerText = object.place;
    mainVenue.classList.add('main__venue', 'main__p-font');
    mainShow.appendChild(mainVenue);

    // creation of the location title header
    let mainLocationTitle = document.createElement('h3');
    mainLocationTitle.innerText = 'LOCATION';
    mainLocationTitle.classList.add('main__location-title', 'main__h-three-font');
    mainShow.appendChild(mainLocationTitle);

    // creation of the location element
    let mainLocation = document.createElement('p');
    mainLocation.innerText = object.location;
    mainLocation.classList.add('main__location', 'main__p-font');
    mainShow.appendChild(mainLocation);

    // creation of the button
    let mainTickets = document.createElement('button');
    mainTickets.innerText = 'BUY TICKETS';
    mainTickets.classList.add('main__tickets', 'main__p-font');
    mainShow.appendChild(mainTickets);
}