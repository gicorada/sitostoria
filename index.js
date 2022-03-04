document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
  
      	// Add a click event on each of them
      	$navbarBurgers.forEach( el => {
        	el.addEventListener('click', () => {
  
        	// Get the target from the "data-target" attribute
          	const target = el.dataset.target;
          	const $target = document.getElementById(target);
  
          	// Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          	el.classList.toggle('is-active');
          	$target.classList.toggle('is-active');
  
        	});
      	});
    }
});

// ^ bulma

// ---------------------------------------------------------------------------------------------------------------------------




//FOOTER 		|||
//				VVV

var footer = '<div class="content has-text-centered"><img src="/assets/undraw_book_lover_mkck.svg" alt="" class="vectorial-image is-centered"><p>Sito creato da <a href="https://github.com/GicoProgram" target="_blank">Giacomo R.</a> , Nicolò B., Federico T., Fabio F.</p></div>';

document.getElementById("footer").innerHTML = footer;




//HEADER

//var header = '<header class="py-3"><nav class="navbar" role="navigation" aria-label="main navigation"><div class="navbar-brand"><a class="my-logo" href="/index.html"></a><a role="button" class="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false"><span aria-hidden="true"></span><span aria-hidden="true"></span><span aria-hidden="true"></span></a></div><div class="navbar-menu" id="navMenu"><div class="navbar-end"><a href="/index.html" class="navbar-item"><i class="fa fa-home" aria-hidden="true"></i>&nbsp;Home</a></div></div></div></div></nav></header>';
//document.getElementById("header").innerHTML = header;
