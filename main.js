window.onload = init;

function init() {
    
    // console.log('requesting data');
    document.getElementById("btn").addEventListener("click", sendRequest);
    // console.log()
    
}

function sendRequest(event) {
    event.preventDefault();
    const whatever = document.getElementById("input").value;
    whatever.replace('%20',' ');
    
    const xhr = new XMLHttpRequest();
    const url = `https://www.refugerestrooms.org/api/v1/restrooms/search?page=1&per_page=100&offset=0&ada=false&unisex=false&query=${whatever}`;
    xhr.open('GET', url);
    //xhr.on();
    xhr.onload = toHandle;
    xhr.send();
}
function toHandle(event) {
    
    const city = JSON.parse(event.target.responseText);
    
    const {name} = city;
    
    const content = document.getElementById("content");
    console.log(city);
    renderContent(city, content);
    
}
const renderContent = (city, content) => {
    city.forEach(d => {
        //creates a new element "ul" and storing it 
        let contentList = document.createElement("ul");
        //displays more data from the api.
        contentList.innerText = `*${d.name}
        ${d.comment}
        ${d.street}
        'created'${d.created_at}`;
        //ass child element.
        content.append(contentList);
    })
}
//gets value of the search input field and stores it 
// const searchInput = document.getElementById("input").value;
// //makes fetch call to the api using the search input field as query string
// const checkApi = event => {
//     event.preventDefault();
//     fetch(`https://www.refugerestrooms.org/api/v1/restrooms/search?page=1&per_page=10&offset=0&ada=false&unisex=false&query=${searchInput}`).then(res => res.json())
//     .then(data => {
//         const content = document.getElementById("content");
//         console.log(data);
//         renderContent(data, content);
//     });
// }

// document.getElementById("btn").addEventListener("click", checkApi);




