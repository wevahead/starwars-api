const API = 'http://star-cors.herokuapp.com';
const endpoints = ['people', 'films', 'vehicles', 'starships'];
const urls = endpoints.map( endpoint => {
    return `${API}/${endpoint}`;
});
const promises = urls.map( url => {
    return fetch(url)
        .then( response => response.json())
});

const rendPeople = (people)=> {
    const div = document.querySelector('#people');
    let html = people.results.map( person => {
        return `
            <li>
                ${person.name} has ${person.eye_color} eyes.
            </li>
        `
    }).join('');
    html = `<h2>People</h2><ul>${html}</ul>`;
    div.innerHTML = html;
};

const rendFilms = (films)=> {
    const div = document.querySelector('#films');
    let html = films.results.map( film => {
        return `
            <li>
                Star Wars: ${film.title} is episode ${film.episode_id} in the series.
            </li>
        `
    }).join('');
    html = `<h2>Films</h2><ul>${html}</ul>`;
    div.innerHTML = html;
};

const rendVehicles = (vehicles)=> {
    const div = document.querySelector('#vehicles');
    let html = vehicles.results.map( vehicle => {
        return `
            <li>
                ${vehicle.name} is made by ${vehicle.manufacturer}.
            </li>
        `
    }).join('');
    html = `<h2>Vehicles</h2><ul>${html}</ul>`;
    div.innerHTML = html;
};

const rendStarships = (starships)=> {
    const div = document.querySelector('#starships');
    let html = starships.results.map( starship => {
        return `
            <li>
                ${starship.name} costs ${starship.cost_in_credits} credits.
            </li>
        `
    }).join('');
    html = `<h2>Starships</h2><ul>${html}</ul>`
    div.innerHTML = html;
};

Promise.all(promises)
    .then(result => {
        const [ people, films, vehicles, starships] = result;
        rendPeople(people);
        rendFilms(films);
        rendVehicles(vehicles);
        rendStarships(starships); 
    });

