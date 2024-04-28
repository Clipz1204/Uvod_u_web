const cardWrapperElement = document.querySelector(".card-wrapper");

// console.log(cardWrapperElement.innerHTML);
// console.log(cardWrapperElement.textContent);

function generatePost(imageLink, title, date, description, id) {
  return `
  <div class="blog-card">
    <img src="${imageLink}" alt="${title}" />
    <div class="card-content">
        <h2>${title}</h2>
        <span>${date}</span>
        <p>${description}</p>
        <a href="./single-post.html?id=${id}">Read More >></a>
    </div>
  </div>`;
}

fetch("https://dev-lab.dev/api/posts/")
  .then((res) => res.json())
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      console.log(data[i]["image"]);
      cardWrapperElement.innerHTML += generatePost(
        `https://dev-lab.dev/api/${data[i]["image"]}`,
        data[i]["title"],
        formatDate(data[i]["date_created"]),
        data[i]["description"],
        data[i]["id"]
      );
    }
  });

// for (let i = 0; i < photographyBlogPosts.length; i++) {
//   cardWrapperElement.innerHTML += generatePost(
//     photographyBlogPosts[i]["imageLink"],
//     photographyBlogPosts[i]["title"],
//     formatDate(photographyBlogPosts[i]["date"]),
//     photographyBlogPosts[i]["description"],
//     photographyBlogPosts[i]["id"]
//   );
// }
