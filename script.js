var p_header = document.getElementsByClassName("province-header");
var p_header_opened = document.getElementsByClassName("opened")[0].children;
p_header_opened[1].innerHTML = '<img src="./assets/arrow-circle-up.png" alt="dropdown menu up arrow">';


var i;

for (i = 0; i < p_header.length; i++) {

  p_header[i].addEventListener("click", function() {

    var p_body = this.nextElementSibling;
    var child = this.children;

    if (this.classList.contains('opened')) {

      p_body.style.display = "none";
      this.classList.remove("opened");
      child[1].innerHTML = '<img src="./assets/arrow-circle-down.png" alt="dropdown menu down arrow">';
    }

    else {

      for (i = 0; i < p_header.length; i++) {
        p_header[i].classList.remove('opened');
        p_header[i].nextElementSibling.style.display = 'none';
        p_header[i].children[1].innerHTML = '<img src="./assets/arrow-circle-down.png" alt="dropdown menu down arrow">';

      }

      p_body.style.display = "block";
      this.classList.add("opened");
      child[1].innerHTML = '<img src="./assets/arrow-circle-up.png" alt="dropdown menu up arrow">';
    }


  });
}
