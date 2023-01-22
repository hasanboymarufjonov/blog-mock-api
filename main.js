import { domSelector } from "./utils/domSelector.js";
import { convertDate } from "./utils/convertDate.js";

const cardContainer = domSelector(".card-container");
const templateCard = domSelector(".card");

let posts = [];

fetch("https://63ca7efdf36cbbdfc7598588.mockapi.io/posts")
  .then((res) => res.json())
  .then((data) => {
    posts = data;
    console.log(posts);
    renderPosts(posts);
  })
  .catch((err) => {
    console.log(err);
  });

function renderPosts(posts, parent = cardContainer) {
  parent.textContent = "";

  const fragmentPost = document.createDocumentFragment();

  posts.reverse().forEach((post) => {
    const template = templateCard.cloneNode(true);
    template.setAttribute("id", `card-${post.id}`);

    const title = domSelector(".title", template);
    const author = domSelector(".author", template);
    const date = domSelector(".date", template);
    const description = domSelector(".description", template);
    const image = domSelector("img", template);

    const convertedDate = convertDate(post.createdAt);

    title.textContent = post.title;
    author.textContent = post.name;
    date.textContent = convertedDate;
    description.textContent = post.description;
    // article.textContent = post.article;
    image.setAttribute("src", post.image);
    // readMoreBtn.setAttribute("data-text", post.article);

    const readMoreBtn = domSelector(".read-more-btn", template);
    readMoreBtn.setAttribute("data-text", post.article);

    console.log(template);
    fragmentPost.appendChild(template);
  });

  parent.appendChild(fragmentPost);
}

// posts.forEach(function (post) {
//   //...
//   const readMoreBtn = domSelector(`#card-${post.id} .read-more-btn`);
//   readMoreBtn.addEventListener("click", function (event) {
//     var textData = post.article;
//     alert(textData);
//   });
//   //...
// });

/*Modal.js*/

// const readMoreBtns = document.querySelector(`#card-${post.id} .read-more-btn`);

// readMoreBtns.addEventListener("click", function (event) {
//   var textData = readMoreBtns.getAttribute("data-text");
//   console.log(textData);
// });

/* Modal.js*/
