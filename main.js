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

  posts.forEach((post) => {
    const template = templateCard.cloneNode(true);

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
    image.setAttribute("src", post.image);

    console.log(template);
    fragmentPost.appendChild(template);
  });

  parent.appendChild(fragmentPost);
}
