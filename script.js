const randomPara = document.getElementById("para");
const randomAuthor = document.getElementById("writer");
const randomButton = document.getElementById("btn");

const randomQuotes = () => {
  fetch("https://dummyjson.com/quotes/random")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      randomPara.textContent = `${data.quote}`;
      randomAuthor.textContent = `${data.author}`;
    });
};

randomQuotes();
randomButton.addEventListener("click", randomQuotes);
