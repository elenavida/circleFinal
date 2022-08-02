window.addEventListener("load", () => {
  document
    .querySelector("#contact form")
    .addEventListener("submit", (event) => {
      event.preventDefault();

      const name = document.querySelector("input[name=name]").value;
      const email = document.querySelector("input[name=email]").value;
      const phone = document.querySelector("input[name=phone]").value;
      const message = document.querySelector("textarea[name=message]").value;

      fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, message }),
      }).then((response) => {
        if (response.status === 201) {
          alert("Form submitted correctly");
        }
      });
    });
});
