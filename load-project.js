window.addEventListener("load", () => {
  const titleElement = document.querySelector("#project h1");
  const subheadingTitleElement = document.querySelector(
    "#project .subheading-title"
  );
  const projectBodyElement = document.querySelector("#project .project-body");

  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => {
      return response.json();
    })
    .then((project) => {
      const titleSplit = project.body.split("\n");
      titleElement.innerHTML = project.title;
      subheadingTitleElement.innerHTML = titleSplit.splice(0, 1);
      projectBodyElement.innerHTML = titleSplit.join("<br />");
    });
});
