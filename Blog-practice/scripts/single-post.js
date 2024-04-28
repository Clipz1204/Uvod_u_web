const postContainer = document.getElementById("post-container");

const params = new URLSearchParams(window.location.search);

const id = Number(params.get("id"));

// const postForId = photographyBlogPosts.filter((post) => id === post.id)[0];

function generatePost(imageLink, title, date, description, author) {
  return `
    <img src="${imageLink}" alt="${title}" />
    <div class="heading">
        <h1>${title}</h1>
        <p class="date">${date}</p>
    </div>
    <span class="author">Author: ${author}</span>
    <p class="blog-text">
        ${description}
    </p>
    `;
}

fetch(`https://dev-lab.dev/api/posts/${id}`)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    postContainer.innerHTML += generatePost(
      `https://dev-lab.dev/api/posts/${data["image"]}`,
      data["title"],
      formatDate(data["date_created"]),
      data["description"],
      data["author"]
    );
  });

// postContainer.innerHTML += generatePost(
//   postForId["imageLink"],
//   postForId["title"],
//   formatDate(postForId["date"]),
//   postForId["description"],
//   postForId["author"]
// );
