// task_11_12  AJAX request - respresponse

function vote() {
    button.innerHTML = " ... ";

    const reques = new XMLHttpRequest();
    reques.open("GET", "/vote", true);
    reques.onreadystatechange = function() {
        if (reques.readyState != 4) return;
        if (reques.status != 200) {
            alert("Error " + reques.status + " " + reques.statusText);
            return;
        }
        // handle result
        button.innerHTML = reques.responseText;
    }
    reques.send();
  }