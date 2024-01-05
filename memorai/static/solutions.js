function search() {
    input = document.getElementById("search");
    filter = input.value.toUpperCase().replace(/\s+/g, "");;
    images = document.getElementById("images");
    total = images.getElementsByClassName("hidden");
    for (i = 0; i < total.length; i++) {
        text = total[i].getElementsByTagName("p")[0];
        image = total[i].getElementsByTagName("img")[0];
        if (text.innerHTML.indexOf(filter) > -1) {
            total[i].style.display = "";
        } else {
            total[i].style.display = "none";
        }
    }
}