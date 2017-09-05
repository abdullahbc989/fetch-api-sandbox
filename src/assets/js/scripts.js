var getTextBtn = document.getElementById('getText');
var getUsersBtn = document.getElementById('getUsers');
var getPostsBtn = document.getElementById('getPosts');
var addPostForm = document.getElementById('addPost');

var output = document.getElementById('output');


// Listeners
getTextBtn.addEventListener('click', getText);

getUsersBtn.addEventListener('click', getUsers);

getPostsBtn.addEventListener('click', getPosts);

addPostForm.addEventListener('submit', addPost);



// Functions
function getText() {
    // fetch('assets/sample.txt')
    // .then(function(res) {
    //     return res.text();
    // })
    // .then(function(data){
    //     console.log(data);
    // })

    fetch('assets/sample.txt')
    .then((res) => res.text())
    .then((data) => {
        output.innerHTML = data;
    })
    .catch((err) => console.log(err))
    // .then((data) => console.log(data))
}

function getUsers() {
    fetch('assets/users.json')
    .then((res) => res.json())
    .then((data) => {
        let outputText = '<h2 class="mb-4">Users</h2>';
        data.forEach(function(user) {
            outputText += `
                <ul class="list-group mb-3">
                    <li class="list-group-item">ID: ${user.id}</li>
                    <li class="list-group-item">Name: ${user.name}</li>
                    <li class="list-group-item">Email> ${user.email}</li>
                </ul>
            `;
        });
        output.innerHTML = outputText;
    })
}

function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => {
        let outputText = '<h2 class="mb-4">Posts</h2>';
        data.forEach(function(post) {
            outputText += `
                <div class="card card-body mb-3">
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                </div>
            `;
        });
        output.innerHTML = outputText;
    })
}

function addPost(e) {
    e.preventDefault();

    let title = document.getElementById('title').value;
    let body = document.getElementById('body').value;

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type': 'application/json',
        },
        body: JSON.stringify({title:title, body:body})
    })
    .then((res) => res.json())
    .then((data) => console.log(data))
}