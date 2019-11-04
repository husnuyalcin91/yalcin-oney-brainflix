// variables
let api = 'https://project-1-api.herokuapp.com';
// apiKey retrieved using the browser
let apiKey = 'aa9aa8c6-78b6-4300-8414-e8c9e176d654';

// axios - get comments
getComments = () => {
    axios.get(`${api}/comments?api_key=${apiKey}`)
    .then(result => {
        const defaultComments = result.data;
        defaultComments.forEach( item => {
            displayComments(item)
        })
    })
    .catch (error => {
        console.log(error);
    })
};

getComments();

// post a comment to the website
const mainForm = document.querySelector(".main__form");

mainForm.addEventListener("submit", (event => {
    event.preventDefault();

    let nameInput = event.target.name.value;
    let commentInput = event.target.comment.value; 

        axios.get(`${api}/comments?api_key=${apiKey}`)
        .then(result => {
            const defaultComments = result.data;
            
            defaultComments.push({
                name: nameInput,
                comment: commentInput
            });
            defaultComments.forEach( item => {
                displayComments(item)
            });
// store the comment-posted in the api
            axios.post(`${api}/comments?api_key=${apiKey}`, {
                name: nameInput,
                comment: commentInput
            })
            .then(() => {
                event.target.name.value = '';
                event.target.comment.value = ''
            })
        })
        .catch (error => {
            console.log(error);
        })
}));

displayComments = (object) => {
    // declare the section variable
    let mainNewComments = document.querySelector(".main__new-comments");

    // creation of the main comment container
    let mainCommentContainer = document.createElement("div");
    mainCommentContainer.classList.add('main__comment-container');
    mainNewComments.prepend(mainCommentContainer);

    // creation of the form image
    let mainFormImage = document.createElement("img");
    mainFormImage.setAttribute('src', 'assets/Images/Mohan-muruge.jpg');
    mainFormImage.classList.add('main__form-image');
    mainCommentContainer.appendChild(mainFormImage);

    // creation of the comment div
    let mainComment = document.createElement("div");
    mainComment.classList.add('main__comment');
    mainCommentContainer.appendChild(mainComment);

    // creation of the secondary comment container
    let mainCommentOneContainer = document.createElement("div");
    mainCommentOneContainer.classList.add('main__comment-one-container');
    mainComment.appendChild(mainCommentOneContainer);

    // creation of the commentator name
    let mainCommentName = document.createElement("p");
    mainCommentName.innerText = object.name;
    mainCommentName.classList.add('main__comment-name');
    mainCommentOneContainer.appendChild(mainCommentName);

    // creation of the comment date
    let mainCommentDate = document.createElement("p");
    let d = object.timestamp;
    let newD = moment(d).calendar();
    mainCommentDate.innerText = newD;
    mainCommentDate.classList.add('main__comment-date');
    mainCommentOneContainer.appendChild(mainCommentDate);

    // creation of the comment
    let mainCommentComment = document.createElement("p");
    mainCommentComment.innerText = object.comment;
    mainCommentComment.classList.add('main__comment-comment');
    mainComment.appendChild(mainCommentComment);
};