import { domSelector } from "./utils/domSelector.js";

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

  posts.forEach((post) => {
    const template = templateCard.cloneNode(true);

    const title = domSelector(".title", template);
    title.textContent = post.title;

    console.log(template);

    fragmentPost.appendChild(template);
  });

  parent.appendChild(fragmentPost);
}
