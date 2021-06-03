baguetteBox.run('.gallery');

// provided filter const search = new Filter('search', 'data-caption');

function searchFunction() {

    // Declare variables
    let input = document.getElementById('search').value.toLowerCase();
    let anchor = document.getElementsByTagName('a');
  
    // Loop through all list items, and hide those who don't match the search query
    // indexOf() returns -1 if nothing found

    for (let i = 0; i < anchor.length; i++) {
        let description = anchor[i].getAttribute('data-caption').toLowerCase();
        let compare = description.indexOf(input);

        // personal reminder -  check if target works
        // console.log(description);
        // console.log(compare);

        if (compare > -1) {
            anchor[i].style.display = "";
        } else {
            anchor[i].style.display = "none";
        }
    }
}
    