const  mycv = () => {
  const menu = document.getElementById('cv');
  menu.appendChild(document.createElement('a'));
  menu.id = 'anchor-id';
  menu.setAttribute('href', 'pdf/resume.pdf');
  menu.setAttribute('download', 'demo_cv.pdf')
}

// Back To Top Button

var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 500) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

// Mobile Menu

const  mobileMenu = () => {
  const menu = document.querySelector('ul');

  menu.classList.toggle('mobilemenu')
} 