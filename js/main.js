//card animation size box
(() => {
  let items = document.querySelectorAll('.js_bestsellers_img');


  if (items) {
    for (let i = 0; i < items.length; i++) {
      items[i].addEventListener('mouseover', function () {
        this.querySelector('.bestsellers_box_item_size').classList.add('active')
      });
      items[i].addEventListener('mouseout', function () {
        this.querySelector('.bestsellers_box_item_size').classList.remove('active')
      })

    }
  }



})();

// city header choise

(() => {
  let city = document.querySelector('.js_header_place_item');
  let cityBox = document.querySelector('.js_header_place_hidden');
  let cityBoxItem = document.querySelectorAll('.js_header_place_hidden span');
  let cityBoxElem = document.querySelector('.js_header_place_hidden_box');

  if (city) {
    city.addEventListener('click', function () {
      cityBox.classList.toggle('active');
      if (cityBox.classList.contains('active')) {
        city.classList.add('active');
      } else {
        city.classList.remove('active');
      }
    })
    cityBox.style.height = document.body.scrollHeight - 96 + 'px';
  }

  if (cityBoxItem) {
    for (let i = 0; i < cityBoxItem.length; i++) {
      cityBoxItem[i].addEventListener('click', function () {
        cityBoxItem.forEach(el => {
          el.classList.remove('active');
        });
        this.classList.add('active');
        let a = this.textContent;
        city.textContent = a;
        cityBox.classList.remove('active');
        city.classList.remove('active');

      })
    }

  }

  document.addEventListener('click', (e) => {
    const lkEl = e.composedPath().includes(city);
    const gambLk = e.composedPath().includes(cityBoxElem);
    if (!lkEl && !gambLk) {
      cityBox.classList.remove('active');
      city.classList.remove('active');
    }

  })

  cityBox.addEventListener('click', (e) => {
    const lkEl = e.composedPath().includes(cityBoxElem);
    if (!lkEl) {
      cityBox.classList.remove('active');
      city.classList.remove('active');
    }

  })

})();

//menu burger

(() => {

  let burger = document.querySelector('.js_burger');
  let menu = document.querySelector('.js_menu');
  let menuDinamic = document.querySelector('.js_menu_dinamic')
  let menuBox = document.querySelector('.js_menu_box');
  let menuCloseMobail = document.querySelector('.js_menu_dinamic_mobail_close')


  if (burger) {
    burger.addEventListener('click', function () {
      menu.classList.toggle('active');
      menuDinamic.classList.remove('active');
    })
    menu.style.height = document.body.scrollHeight - 96 + 'px';
  }

  document.addEventListener('click', (e) => {
    const lkEl = e.composedPath().includes(burger);
    const gambLk = e.composedPath().includes(menuBox);
    if (!lkEl && !gambLk) {
      menu.classList.remove('active');
      menuDinamic.classList.remove('active');
    }

  })
  menu.addEventListener('click', (e) => {
    const lkEl = e.composedPath().includes(menuBox);
    if (!lkEl) {
      menu.classList.remove('active');
      menuDinamic.classList.remove('active');
    }

  })
  if(menuCloseMobail){
    menuCloseMobail.addEventListener('click',function(){
      menu.classList.remove('active');
      menuDinamic.classList.remove('active');
    })
  }


})();


//menu tab

(() => {

  let tabItems = document.querySelectorAll('.js_menu_tab_item');
  let links = document.querySelectorAll('.js_menu_link');
  let menuDinamic = document.querySelector('.js_menu_dinamic')

  if (tabItems) {
    for (let i = 0; i < tabItems.length; i++) {
      tabItems[i].addEventListener('click', function () {
        tabItems.forEach(el => {
          el.classList.remove('active');
        });
        links.forEach(el => {
          el.classList.remove('active');
        });
        this.classList.add('active');
        links[i].classList.add('active');
        menuDinamic.classList.remove('active');
      })
    }

  }

})();


//menu dinamic

(() => {

  let tabItemsElements = document.querySelectorAll('.js_menu_link span');
  let menuDinamic = document.querySelector('.js_menu_dinamic');
  let back = document.querySelector('.js_menu_dinamic_mobail_back');

  if (tabItemsElements) {
    for (let i = 0; i < tabItemsElements.length; i++) {
      tabItemsElements[i].addEventListener('click', function () {
        menuDinamic.classList.add('active');
      })
    }

  }

  if(back){
    back.addEventListener('click',function(){
      menuDinamic.classList.remove('active');
    })
  }

})();

//backer pop_up
(() => {

  let backerBox = document.querySelector('.js_backer');
  let backerClose = document.querySelector('.js_backer_box_head_close');
  let backerButton = document.querySelector('.js_header_box_right_backet');
  let backerBoxEl = document.querySelector('.js_backer_box');


  if (backerButton) {
    backerButton.addEventListener('click', function () {
      backerBox.classList.toggle('active');
    })
    backerClose.addEventListener('click', function () {
      backerBox.classList.remove('active');
    })
    backerBox.style.height = document.body.scrollHeight - 96 + 'px';
  }

  backerBox.addEventListener('click', (e) => {
    const lkEl = e.composedPath().includes(backerBoxEl);
    if (!lkEl) {
      backerBox.classList.remove('active');
    }

  })
  document.addEventListener('click', (e) => {
    const lkEl = e.composedPath().includes(backerBoxEl);
    const gambLk = e.composedPath().includes(backerButton);
    if (!lkEl && !gambLk) {
      backerBox.classList.remove('active');
    }

  })


})();




//like pop_up
(() => {

  let likeBox = document.querySelector('.js_like');
  let likeClose = document.querySelector('.js_like_box_head_close');
  let likeButton = document.querySelector('.js_button_like');
  let likeBoxEl = document.querySelector('.js_like_box');


  if (likeButton) {
    likeButton.addEventListener('click', function () {
      likeBox.classList.toggle('active');
    })
    likeClose.addEventListener('click', function () {
      likeBox.classList.remove('active');
    })
    likeBox.style.height = document.body.scrollHeight - 96 + 'px';
  }

  likeBox.addEventListener('click', (e) => {
    const lkEl = e.composedPath().includes(likeBoxEl);
    if (!lkEl) {
      likeBox.classList.remove('active');
    }

  })
  document.addEventListener('click', (e) => {
    const lkEl = e.composedPath().includes(likeBoxEl);
    const gambLk = e.composedPath().includes(likeButton);
    if (!lkEl && !gambLk) {
      likeBox.classList.remove('active');
    }

  })


})();


//search pop_up
(() => {

  let searchBox = document.querySelector('.js_search');
  let searchClose = document.querySelector('.js_search_box_flex_close');
  let searchButton = document.querySelector('.js_button_search');
  let searchBoxEl = document.querySelector('.js_search_box');


  if (searchButton) {
    searchButton.addEventListener('click', function () {
      searchBox.classList.toggle('active');
    })
    searchClose.addEventListener('click', function () {
      searchBox.classList.remove('active');
    })
    searchBox.style.height = document.body.scrollHeight + 'px';
  }

  searchBox.addEventListener('click', (e) => {
    const lkEl = e.composedPath().includes(searchBoxEl);
    if (!lkEl) {
      searchBox.classList.remove('active');
    }
  })


})();


//like pop_up
(() => {

  let profileBox = document.querySelector('.js_profile');
  let profileClose = document.querySelector('.js_profile_box_head_close');
  let profileButton = document.querySelector('.js_button_profile');
  let profileBoxEl = document.querySelector('.js_profile_box');


  if (profileButton) {
    profileButton.addEventListener('click', function () {
      profileBox.classList.toggle('active');
    })
    profileClose.addEventListener('click', function () {
      profileBox.classList.remove('active');
    })
    profileBox.style.height = document.body.scrollHeight - 96 + 'px';
  }

  profileBox.addEventListener('click', (e) => {
    const lkEl = e.composedPath().includes(profileBoxEl);
    if (!lkEl) {
      profileBox.classList.remove('active');
    }

  })
  document.addEventListener('click', (e) => {
    const lkEl = e.composedPath().includes(profileBoxEl);
    const gambLk = e.composedPath().includes(profileButton);
    if (!lkEl && !gambLk) {
      profileBox.classList.remove('active');
    }

  })


})();



//like pop_up




