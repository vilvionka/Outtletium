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
  let cityButtonMobail = document.querySelector('.js_menu_mobail_point');
  let cityCloseMobail = document.querySelector('.js_header_box_right_place_hidden_box_head_close');
  let cityBack = document.querySelector('.js_header_box_right_place_hidden_box_head_back');

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
  if (cityButtonMobail) {
    cityButtonMobail.addEventListener('click', function () {
      cityBox.classList.add('active');
    })
  }
  if (cityCloseMobail) {
    cityCloseMobail.addEventListener('click', function () {
      cityBox.classList.remove('active');
    })
  }
  if (cityBack) {
    cityBack.addEventListener('click', function () {
      cityBox.classList.remove('active');
    })
  }

  document.addEventListener('click', (e) => {
    const lkEl = e.composedPath().includes(city);
    const gambLk = e.composedPath().includes(cityBoxElem);
    const gambLkMobail = e.composedPath().includes(cityButtonMobail)
    if (!lkEl && !gambLk) {
      if (!gambLkMobail) {
        cityBox.classList.remove('active');
        city.classList.remove('active');
      }
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
  let menuCloseMobail = document.querySelector('.js_menu_dinamic_mobail_close');
  let profileBack = document.querySelector('.js_profile_box_head_back');
  let searchBack = document.querySelector('.js_search_box_flex_back');
  let cityBack = document.querySelector('.js_header_box_right_place_hidden_box_head_back');


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
    const profileBackM = e.composedPath().includes(profileBack);
    const searchBackM = e.composedPath().includes(searchBack);
    const cityBackM = e.composedPath().includes(cityBack);
    if (!lkEl && !gambLk) {
      if (!profileBackM && !searchBackM) {
        if (!cityBackM) {
          menu.classList.remove('active');
          menuDinamic.classList.remove('active');
        }
      }
    }

  })
  menu.addEventListener('click', (e) => {
    const lkEl = e.composedPath().includes(menuBox);
    if (!lkEl) {
      menu.classList.remove('active');
      menuDinamic.classList.remove('active');
    }

  })
  if (menuCloseMobail) {
    menuCloseMobail.addEventListener('click', function () {
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

  if (back) {
    back.addEventListener('click', function () {
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
  let likeButtonMobail = document.querySelector('.js_menu_mobail_like');


  if (likeButton) {
    likeButton.addEventListener('click', function () {
      likeBox.classList.toggle('active');
    })
    likeClose.addEventListener('click', function () {
      likeBox.classList.remove('active');
    })
    likeBox.style.height = document.body.scrollHeight - 96 + 'px';
  }

  if (likeButtonMobail) {
    likeButtonMobail.addEventListener('click', function () {
      likeBox.classList.add('active');
    })
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
    const likeButtonM = e.composedPath().includes(likeButtonMobail);
    if (!lkEl && !gambLk) {
      if (!likeButtonMobail) {
        likeBox.classList.remove('active');
      }
    }

  })


})();


//search pop_up
(() => {

  let searchBox = document.querySelector('.js_search');
  let searchClose = document.querySelector('.js_search_box_flex_close');
  let searchButton = document.querySelector('.js_button_search');
  let searchBoxEl = document.querySelector('.js_search_box');
  let searchBack = document.querySelector('.js_search_box_flex_back');
  let searchButtonMobail = document.querySelector('.js_menu_mobail_search')


  if (searchButton) {
    searchButton.addEventListener('click', function () {
      searchBox.classList.toggle('active');
    })
    searchClose.addEventListener('click', function () {
      searchBox.classList.remove('active');
    })
    searchBox.style.height = document.body.scrollHeight + 'px';
  }
  if (searchBack) {
    searchBack.addEventListener('click', function () {
      searchBox.classList.remove('active');
    })
  }

  if (searchButtonMobail) {
    searchButtonMobail.addEventListener('click', function () {
      searchBox.classList.add('active');
    })
  }

  searchBox.addEventListener('click', (e) => {
    const lkEl = e.composedPath().includes(searchBoxEl);
    if (!lkEl) {
      searchBox.classList.remove('active');
    }
  })


})();


//profile pop_up
(() => {

  let profileBox = document.querySelector('.js_profile');
  let profileClose = document.querySelector('.js_profile_box_head_close');
  let profileButton = document.querySelector('.js_button_profile');
  let profileBoxEl = document.querySelector('.js_profile_box');
  let profileButonMobail = document.querySelector('.js_menu_mobail_profile');
  let profileBack = document.querySelector('.js_profile_box_head_back')


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

  if (profileButonMobail) {
    profileButonMobail.addEventListener('click', function () {
      profileBox.classList.add('active');
    })
  }
  if (profileBack) {
    profileBack.addEventListener('click', function () {
      profileBox.classList.remove('active');
    })
  }



  document.addEventListener('click', (e) => {
    const lkEl = e.composedPath().includes(profileBoxEl);
    const gambLk = e.composedPath().includes(profileButton);
    const profileButtonM = e.composedPath().includes(profileButonMobail);
    if (!lkEl && !gambLk) {
      if (!profileButtonM) {
        profileBox.classList.remove('active');
      }

    }

  })


})();

//delivery pop_up
(() => {

  let delivery = document.querySelector('.js_delivery');
  let deliveryClose = document.querySelector('.js_delivery_box_head_close');
  let deliveryButton = document.querySelector('.js_delivery_button');
  let deliveryBox = document.querySelector('.js_delivery_box');


  if (deliveryButton) {
    deliveryButton.addEventListener('click', function () {
      delivery.classList.toggle('active');
    })
    deliveryClose.addEventListener('click', function () {
      delivery.classList.remove('active');
    })
    delivery.style.height = document.body.scrollHeight - 96 + 'px';
  }

  delivery.addEventListener('click', (e) => {
    const lkEl = e.composedPath().includes(deliveryBox);
    if (!lkEl) {
      delivery.classList.remove('active');
    }

  })
  document.addEventListener('click', (e) => {
    const lkEl = e.composedPath().includes(deliveryBox);
    const gambLk = e.composedPath().includes(deliveryButton);
    if (!lkEl && !gambLk) {
      delivery.classList.remove('active');
    }

  })


})();



//returnGoods pop_up
(() => {

  let returnGoods = document.querySelector('.js_returnGoods');
  let returnGoodsClose = document.querySelector('.js_returnGoods_box_head_close');
  let returnGoodsButton = document.querySelector('.js_returnGoods_button');
  let returnGoodsBox = document.querySelector('.js_returnGoods_box');


  if (returnGoodsButton) {
    returnGoodsButton.addEventListener('click', function () {
      returnGoods.classList.toggle('active');
    })
    returnGoodsClose.addEventListener('click', function () {
      returnGoods.classList.remove('active');
    })
    returnGoods.style.height = document.body.scrollHeight - 96 + 'px';
  }

  returnGoods.addEventListener('click', (e) => {
    const lkEl = e.composedPath().includes(returnGoodsBox);
    if (!lkEl) {
      returnGoods.classList.remove('active');
    }

  })
  document.addEventListener('click', (e) => {
    const lkEl = e.composedPath().includes(returnGoodsBox);
    const gambLk = e.composedPath().includes(returnGoodsButton);
    if (!lkEl && !gambLk) {
      returnGoods.classList.remove('active');
    }

  })


})();


//payment pop_up
(() => {

  let payment = document.querySelector('.js_payment');
  let paymentClose = document.querySelector('.js_payment_box_head_close');
  let paymentButton = document.querySelector('.js_payment_button');
  let paymentBox = document.querySelector('.js_payment_box');


  if (paymentButton) {
    paymentButton.addEventListener('click', function () {
      payment.classList.toggle('active');
    })
    paymentClose.addEventListener('click', function () {
      payment.classList.remove('active');
    })
    payment.style.height = document.body.scrollHeight - 96 + 'px';
  }

  payment.addEventListener('click', (e) => {
    const lkEl = e.composedPath().includes(paymentBox);
    if (!lkEl) {
      payment.classList.remove('active');
    }

  })
  document.addEventListener('click', (e) => {
    const lkEl = e.composedPath().includes(paymentBox);
    const gambLk = e.composedPath().includes(paymentButton);
    if (!lkEl && !gambLk) {
      payment.classList.remove('active');
    }

  })


})();


//loyalty_program pop_up
(() => {

  let loyalty_program = document.querySelector('.js_loyalty_program');
  let loyalty_programClose = document.querySelector('.js_loyalty_program_box_head_close');
  let loyalty_programButton = document.querySelector('.js_loyalty_program_button');
  let loyalty_programBox = document.querySelector('.js_loyalty_program_box');


  if (loyalty_programButton) {
    loyalty_programButton.addEventListener('click', function () {
      loyalty_program.classList.toggle('active');
    })
    loyalty_programClose.addEventListener('click', function () {
      loyalty_program.classList.remove('active');
    })
    loyalty_program.style.height = document.body.scrollHeight - 96 + 'px';
  }

  loyalty_program.addEventListener('click', (e) => {
    const lkEl = e.composedPath().includes(loyalty_programBox);
    if (!lkEl) {
      loyalty_program.classList.remove('active');
    }

  })
  document.addEventListener('click', (e) => {
    const lkEl = e.composedPath().includes(loyalty_programBox);
    const gambLk = e.composedPath().includes(loyalty_programButton);
    if (!lkEl && !gambLk) {
      loyalty_program.classList.remove('active');
    }

  })


})();


//loyalty_program_registration pop_up
(() => {

  let loyalty_program_registrarion = document.querySelector('.loyalty_program_registration');
  let loyalty_programRegistrationClose = document.querySelector('.js_loyalty_program_registration_box_head_close');
  let loyalty_programRegistrationButton = document.querySelector('.js_loyalty_program_registration_button');



  if (loyalty_programRegistrationButton) {
    loyalty_programRegistrationButton.addEventListener('click', function () {
      loyalty_program_registrarion.classList.toggle('active');
    })
    loyalty_programRegistrationClose.addEventListener('click', function () {
      loyalty_program_registrarion.classList.remove('active');
    })

  }


})();





