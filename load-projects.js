function getProjectHTML(id, title, description, url) {
  return `<div class="project">
            <img src="/assets/Rectangle ${id}.png" alt="${title} logo" />
            <div class="project-text">
            <div class="project-title body-medium">${title}</div>
            <p class="project-description headline-regular">
                ${description}
            </p>
            <a
                class="headline-regular"
                href="${url}"
                >Learn More</a
            >
            </div>
        </div>`;
}

window.addEventListener("load", () => {
  const projectsElement = document.querySelector("#projects .projects");

  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      return response.json();
    })
    .then((projects) => {
      for (let i = 0; i < 3; i++) {
        console.log(projects[i]);
        const project = projects[i];
        projectsElement.innerHTML += getProjectHTML(
          project.id,
          project.title,
          project.body.split("\n")[0],
          "/project.html"
        );
      }
    });
});
