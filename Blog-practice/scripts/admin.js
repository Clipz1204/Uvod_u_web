const createPostBtn = document.getElementById("createPostBtn");

createPostBtn.addEventListener("click", () => {
  const formData = new FormData();

  const imageField = document.getElementById("image");
  const titleField = document.getElementById("title");
  const descriptionField = document.getElementById("description");

  const title = titleField.value;
  const description = descriptionField.value;
  const image = imageField.files[0];

  formData.append("title", title);
  formData.append("description", description);
  formData.append("image", image);

  const accessToken = localStorage.getItem("accessToken");

  fetch("https://dev-lab.dev/api/posts/", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    body: formData,
  });
});
