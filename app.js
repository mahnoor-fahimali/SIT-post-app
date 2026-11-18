
function post() {

    var title = document.getElementById("title").value;
    var dec = document.getElementById("description").value;

    var postContainer = document.getElementById("postcontainer");

    postContainer.innerHTML = `
         <div class="card shadow-sm border rounded-3 mb-3">
            <div class="card-body">

                <h5 class="card-title">${title}</h5>

                <p class="card-text">${dec}</p>

                <div class="d-flex justify-content-end gap-2">

                    <button class="btn btn-outline-primary btn-sm"
                        onclick="editPost(this)">
                        Edit
                    </button>

                    <button class="btn btn-outline-danger btn-sm"
                        onclick="deletePost(this)">
                        Delete
                    </button>

                </div>

            </div>
        </div>
    `;

    document.getElementById("title").value = ""
    document.getElementById("description").value = "";

}


function deletePost(btn) {
    var card = btn.parentNode.parentNode.parentNode;
    card.remove();
}


function editPost(btn) {

    var card = btn.parentNode.parentNode.parentNode;

    var title = card.querySelector(".card-title");
    var dec = card.querySelector(".card-text");

    document.getElementById("title").value = title.innerText;
    document.getElementById("description").value = dec.innerText;

    card.remove();

}
