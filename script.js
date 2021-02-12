// const datetime = document.querySelector('.datetime');
// const monthArray = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December"
// ];

// const date = new Date();
// let month = date.getUTCMonth() + 1;
// let year = date.getUTCFullYear();

// datetime.innerHTML = "(" + monthArray[month - 1] + ", " + year + ")";



function randomBackground() {
    //grab h1 with id of name
    const name = document.getElementById('name');

    //set all 3 rgb values
    let rgb1 = Math.floor(Math.random() * 256);
    let rgb2 = Math.floor(Math.random() * 256);
    let rgb3 = Math.floor(Math.random() * 256);

    name.style.background = `rgb(${rgb1}, ${rgb2}, ${rgb3})`;
    name.style.color = 'white';
}

// setInterval(randomBackground, 1500);

const requestUserRepos = (name) => {

    // create new XMLHttpRequest object
    const xhr = new XMLHttpRequest();

    // github endpoint for getting users repo
    const url = 'https://api.github.com/users/dainr/repos';

    // open a connection, and use GET request to retrieve data
    xhr.open('GET', url, true);

    // when the request is recieved process it here
    xhr.onload = () => {
        //parse API data into JSON
        const data = JSON.parse(xhr.response);

        console.log(data);

        for (let i in data) {
            let ul  = document.querySelector('.user-repos');
            let li = document.createElement('li');

            console.log(data[i])

            li.innerHTML = (`
                <p class="repo-name">Name: <span>${data[i].name}</span></p>
                <p class="repo-desc">Description: ${data[i].description}</p>
                <p class="repo-url">URL: <a href="${data[i].html_url}">${data[i].html_url}</a></p>
            `);

            ul.appendChild(li);
        }
    }

    xhr.send();
}

requestUserRepos();