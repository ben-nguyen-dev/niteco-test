window.addEventListener("DOMContentLoaded", (evt) => {
  const inputElement = document.getElementById("search-input");
  const resultElement = document.getElementById("search-result");
  let timeout = null;

  inputElement.addEventListener("keyup", async (event) => {
    if (timeout !== null) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(async () => {
      const value = event.target.value;
      const response = await fetch("data.json");
      const data = await response.json();

      if (!value || value.trim() === "") {
        return (resultElement.innerHTML = null);
      }

      const results = data.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      resultElement.innerHTML = results
        .map((item) => `<li>${item}</li>`)
        .join("");
    }, 3000);
  });
});
