$(document).ready(function(){
    $('.banner-carousel').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      arrows: true,
      dots: false,
      infinite: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            dots:true,
            arrows:false,
          }
        },

      ]
    });
  });
  function showContent(selected) {
    var contents = document.getElementsByClassName('category');
    for (var i = 0; i < contents.length; i++) {
      contents[i].style.display = 'none';
    }
    document.getElementById(selected).style.display = 'block';
  }
  function showContent(selected) {
    var contents = document.getElementsByClassName('category');
    for (var i = 0; i < contents.length; i++) {
      contents[i].style.display = 'none';
    }
    if (selected === 'all') {
      for (var i = 0; i < contents.length; i++) {
        contents[i].style.display = 'block';
      }
    } else {
      document.getElementById(selected).style.display = 'block';
    }
  }

  function showSelectedCategory() {
    var selectElement = document.getElementById('categorySelect');
    var selectedCategory = selectElement.options[selectElement.selectedIndex].value;
    showContent(selectedCategory);
  }
  function toggleAccordion(sectionId) {
    var content = document.getElementById(sectionId);
    content.style.display = (content.style.display === 'block') ? 'none' : 'block';

    // Diğer seksiyonların kapatılması
    var accordionItems = document.getElementsByClassName('accordion-item');
    for (var i = 0; i < accordionItems.length; i++) {
      var item = accordionItems[i];
      var itemId = item.getElementsByClassName('accordion-header')[0].getAttribute('onclick').split("'")[1];
      if (itemId !== sectionId) {
        document.getElementById(itemId).style.display = 'none';
      }
    }
  }
  function changeBigImage(event) {
    if (event.target.tagName === 'IMG') {
        var bigImage = document.getElementById('bigImage');
        bigImage.src = event.target.src;
    }
}
$(document).ready(function () {
  $("#loginBtn").click(function () {
      $("#loginPopup").show();
  });
});
$(document).ready(function () {
  $("#loginBtn_mobil").click(function () {
      $("#loginPopup").show();
  });
});

function closePopup(popupId) {
  $("#" + popupId).hide();
}

function showRegisterForm() {
  $("#loginPopup").hide();
  $("#registerPopup").show();
}
document.getElementById('mobile-menu-toggle').addEventListener('click', function() {
  document.querySelector('.menu-list').classList.toggle('show');
});