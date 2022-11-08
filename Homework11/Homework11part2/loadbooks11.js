function loadBooks() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "/booos.json", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState != 4) return;
        button.parentNode.removeChild(button);
        if (xhr.readyState != 200) {
            alert(xhr.status + " " + xhr.statusText);
        } else {
            let books;
            try {
                books = JSON.parse(xhr.responseText);
                books.map(book => document.querySelector("#list").innerHTML += `<li>${book.author}</li>`)
            } catch (e) {
                alert("Invalid answer " + e.message);
            }
        }
      }
    xhr.send();
    button.innerHTML = "Loading ...";
    // button.disabled = true;
}