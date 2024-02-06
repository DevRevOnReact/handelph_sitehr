function playVideo() {
    var poster = document.querySelector('.video__poster');
    var playIcon = document.querySelector('.play__icon');
    var video = document.getElementById('myVideo');
    
    poster.style.display = 'none';
    playIcon.style.display = 'none';
    video.style.display = 'block';

    video.play();
  }

  new Glide('.glide', {
    type: 'carousel',
    startAt: 0,
    perView: 4,
    autoplay: 2000,
    hoverpause: true,
    animationTimingFunc: 'ease-in-out',
    animationDuration: 1000,
    gap:'63',
    breakpoints: {
        768: {
          perView: 2
        },
        576: {
          perView: 1
        }
      }
    }).mount()

    document.addEventListener('DOMContentLoaded', function () {
        const accordionItems = document.querySelectorAll('.accordion__item');
    
        accordionItems.forEach(function (item) {
            const header = item.querySelector('.accordion__header');
    
            header.addEventListener('click', function () {
                item.classList.toggle('open');
                const content = item.querySelector('.accordion__content');
                if (item.classList.contains('open')) {
                    content.style.display = 'block';
                } else {
                    content.style.display = 'none';
                }
    
                accordionItems.forEach(function (otherItem) {
                    if (otherItem !== item) {
                        otherItem.classList.remove('open');
                        const otherContent = otherItem.querySelector('.accordion__content');
                        otherContent.style.display = 'none';
                    }
                });
            });
        });
    });


    function validateField(input) {
        var regex = /^[a-zA-Zа-яА-Я\s]+$/;
        var value = input.value.trim();
        
        if (value === '' || !regex.test(value)) {
            input.classList.add('error');
            input.classList.remove('correctly');
        } else {
            input.classList.remove('error');
            input.classList.add('correctly');
        }
    }
    
    function validatePhone(input) {
        var regex = /^\+7\d{10}$/;
        var value = input.value.trim();
        
        if (value === '' || !regex.test(value)) {
            input.classList.add('error');
            input.classList.remove('correctly');
        } else {
            input.classList.remove('error');
            input.classList.add('correctly');
        }
    }
    
    function validateEmail(input) {
        var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        var value = input.value.trim();
        
        if (value === '' || !regex.test(value)) {
            input.classList.add('error');
            input.classList.remove('correctly');
        } else {
            input.classList.remove('error');
            input.classList.add('correctly');
        }
    }
    
    
    function submitForm(event) {
        event.preventDefault();
        
        var nameInput = document.getElementById('name');
        var phoneInput = document.getElementById('phone');
        var emailInput = document.getElementById('email');
        var positionInput = document.getElementById('position');
        
        validateField(nameInput);
        validatePhone(phoneInput);
        validateEmail(emailInput);
        validateField(positionInput);
        var checkboxes = document.querySelectorAll('input[type="checkbox"]');
        var checked = false;
        
        for (var i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].checked) {
                checked = true;
                break;
            }
        }
        
        
        if (nameInput.classList.contains('correctly') && phoneInput.classList.contains('correctly') && emailInput.classList.contains('correctly') && positionInput.classList.contains('correctly') && checked) {
            event.target.submit();
        }
    }
    
    var form = document.querySelector('form');
    form.addEventListener('submit', submitForm);

    document.addEventListener('DOMContentLoaded', function () {
        const menuBtn = document.getElementById('menuBtn');
        const menuOverlay = document.getElementById('menuOverlay');
        const closeBtn = document.getElementById('closeBtn');
      
        menuBtn.addEventListener('click', function () {
          menuOverlay.style.display = 'flex';
        });
      
        function closeMenu() {
          menuOverlay.style.display = 'none';
        }
      
        closeBtn.addEventListener('click', closeMenu);
      
        document.addEventListener('click', function (event) {
          if (!menuOverlay.contains(event.target) && event.target !== menuBtn) {
            closeMenu();
          }
        });
      });
      