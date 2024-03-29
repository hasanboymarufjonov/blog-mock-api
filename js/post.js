import { domSelector } from "../utils/domSelector.js";

const postForm = domSelector("#post-form");

let dateNow = new Date().toJSON().slice(0, 10);

postForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = e.target.title.value;
  const author = e.target.author.value;
  const description = e.target.description.value;
  const article = e.target.article.value;
  let image = e.target.image.value;
  let date = e.target.date.value;

  if (image === "") {
    image =
      "https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=2000";
  }
  if (date === "") {
    date = dateNow;
  }

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
      window.location = "/index.html";
      postForm.reset();
    })
    .catch((err) => alert("Error.."));
});
