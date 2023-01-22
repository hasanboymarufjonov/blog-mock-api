import { domSelector } from "../utils/domSelector.js";

const postForm = domSelector("#post-form");

let dateNow = new Date().toJSON();

postForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = e.target.title.value;
  const author = e.target.author.value;
  const description = e.target.description.value;
  const article = e.target.article.value;
  const image = e.target.image.value;
  const date = e.target.date.value;

  const post = {
    title: title,
    description: description,
    name: author,
    image: image,
    article: article,
    createdAt: date,
  };

  fetch("https://63ca7efdf36cbbdfc7598588.mockapi.io/posts", {
    method: "POST",
    body: JSON.stringify(post),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((res) => res.json())
    .then((data) => {
      alert("Post published");
      window.location.href = "http://127.0.0.1:5500/index.html";
      postForm.reset();
    })
    .catch((err) => alert("Error.."));
});
