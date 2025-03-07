

// city header choise

(() => {
  let city = document.querySelector('.js_header_place_item');
  let cityBox = document.querySelector('.js_header_place_hidden');
  let cityBoxItem = document.querySelectorAll('.js_header_place_hidden span');
  let cityBoxElem = document.querySelector('.js_header_place_hidden_box');
  let cityButtonMobail = document.querySelector('.js_menu_mobail_point');
  let cityCloseMobail = document.querySelector('.js_header_box_right_place_hidden_box_head_close');
  let cityBack = document.querySelector('.js_header_box_right_place_hidden_box_head_back');
  let orderCityBtn = document.querySelector('.js_order_change_city');

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

  if (orderCityBtn) {
    orderCityBtn.addEventListener('click', function () {
      console.log('1')
      cityBox.classList.add('active');
    })
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
        if (orderCityBtn) {
          orderCityBtn.textContent = a;
        }
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
    const gambLkMobail = e.composedPath().includes(cityButtonMobail);
    const orderCityBtnBox = e.composedPath().includes(orderCityBtn);
    if (!lkEl && !gambLk) {
      if (!gambLkMobail && !orderCityBtnBox) {
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

  if (loyalty_program) {
    loyalty_program.addEventListener('click', (e) => {
      const lkEl = e.composedPath().includes(loyalty_programBox);
      if (!lkEl) {
        loyalty_program.classList.remove('active');
      }
    })
  }

  document.addEventListener('click', (e) => {
    if (loyalty_programBox) {
      const lkEl = e.composedPath().includes(loyalty_programBox);
      const gambLk = e.composedPath().includes(loyalty_programButton);
      if (!lkEl && !gambLk) {
        loyalty_program.classList.remove('active');
      }
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



//pickup pop_up
(() => {

  let pickUpBtn = document.querySelectorAll('.js_order_box_left_delivery_flex_pickup');
  let pickUpBox = document.querySelector('.js_pickup');
  let pickClose = document.querySelector('.js_pickup_box_info_head_close');
  let pickDetail = document.querySelector('.js_pickup_box_info_detail');
  let pickDetailBtn = document.querySelector('.js_pickup_box_info_detail_btn');
  let pickCity = document.querySelectorAll('.js_pickup_box_info_body_city');
  let pickUpBoxHead = document.querySelector('.js_pickup_box_info_head');
  let pickUpSearch = document.querySelector('.js_pickup_box_search');
  let pickUpSearchBtn = document.querySelector('.js_pickup_search');

  if (pickUpBtn) {
    for (let i = 0; i < pickUpBtn.length; i++) {
      pickUpBtn[i].addEventListener('click', function () {
        pickUpBox.classList.add('active');
        if (i == 0) {
          pickUpBoxHead.textContent = 'Самовывоз';
        } else {
          pickUpBoxHead.textContent = 'ПВЗ';
        }
      })
    }
  }
  if (pickClose) {
    pickClose.addEventListener('click', function () {
      pickUpBox.classList.remove('active');
      pickDetail.classList.remove('active')
      pickUpSearch.classList.remove('active');
    })
  }
  if (pickDetailBtn) {
    pickDetailBtn.addEventListener('click', function () {
      pickUpBox.classList.remove('active');
      pickDetail.classList.remove('active')
    })
  }
  if (pickUpSearchBtn) {
    pickUpSearchBtn.addEventListener('click', function () {
      pickUpSearch.classList.add('active');
    })
  }
  if (pickCity) {
    for (let i = 0; i < pickCity.length; i++) {
      pickCity[i].addEventListener('click', function () {
        pickDetail.classList.add('active');
        pickUpSearch.classList.remove('active');
      })
    }
  }

})();



//enter and registration
(() => {

  let registrationBtn = document.querySelector('.js_order_box_left_recipient_btn');
  let registrationBox = document.querySelector('.js_loyalty_program_registration');
  let registrationWrap = document.querySelector('.js_loyalty_program');

  if (registrationBtn) {
    registrationBtn.addEventListener('click', function () {
      registrationBox.classList.add('active');
      registrationWrap.classList.add('active');
    })
    registrationWrap.style.height = document.body.scrollHeight + 'px';
  }
})();




//change name order
(() => {

  let changeNameBox = document.querySelector('.js_changename');
  let changeNameClose = document.querySelector('.js_changename_close');
  let changeNameBtn = document.querySelector('.js_changename_btn');
  let changeNameBoxEl = document.querySelector('.js_changename_box');


  if (changeNameBtn) {
    changeNameBtn.addEventListener('click', function () {
      changeNameBox.classList.toggle('active');
    })
    changeNameClose.addEventListener('click', function () {
      changeNameBox.classList.remove('active');
    })
    changeNameBox.style.height = document.body.scrollHeight - 96 + 'px';
  }

  changeNameBox.addEventListener('click', (e) => {
    const lkEl = e.composedPath().includes(changeNameBoxEl);
    if (!lkEl) {
      changeNameBox.classList.remove('active');
    }
  })

  document.addEventListener('click', (e) => {
    const lkEl = e.composedPath().includes(changeNameBoxEl);
    const gambLk = e.composedPath().includes(changeNameBtn);
    if (!lkEl && !gambLk) {
      changeNameBox.classList.remove('active');
    }

  })

})();


//change name order
(() => {

  let courierBox = document.querySelector('.js_courier');
  let courierClose = document.querySelector('.js_courier_close');
  let courierBtn = document.querySelector('.js_courier_btn');
  let courierBoxEl = document.querySelector('.js_courier_box');
  let courierCloseAdd = document.querySelector('.js_courier_flex_close');
  let courierBtnAdd = document.querySelector('.js_delivery_courier_btn');


  if (courierBtn) {
    courierBtn.addEventListener('click', function () {
      courierBox.classList.toggle('active');
    })
    courierClose.addEventListener('click', function () {
      courierBox.classList.remove('active');
    })
    courierCloseAdd.addEventListener('click', function () {
      courierBox.classList.remove('active');
    })
    
    courierBox.style.height = document.body.scrollHeight - 96 + 'px';
  }

  courierBox.addEventListener('click', (e) => {
    const lkEl = e.composedPath().includes(courierBoxEl);
    if (!lkEl) {
      courierBox.classList.remove('active');
    }
  })

  document.addEventListener('click', (e) => {
    const lkEl = e.composedPath().includes(courierBoxEl);
    const gambLk = e.composedPath().includes(courierBtn);
    const gambLkCourier = e.composedPath().includes(courierBtnAdd);
    if (!lkEl && !gambLk) {
      if(!gambLkCourier){
        courierBox.classList.remove('active');
      }
    }

  })

})();


//checked form сhange name page order
(() => {
  let inpName = document.querySelector('.js_changename_name');
  let inpPhone = document.querySelector('.js_changename_tel');
  let inpSubmit = document.querySelector('.js_changename_submit');
  let inpError = document.querySelector('.js_changename_error');
  let inpSurname = document.querySelector('.js_changename_surname');
  let inpEmail = document.querySelector('.js_changename_email');

  let outputName = '';
  let outputPhone = '';
  let outputSurname = '';
  let outputEmail = '';
  let flagPhone = false;
  let flagName = false;
  let flagSurname = false;
  let flagEmail = false;


  if (inpSubmit) {
    inpSubmit.addEventListener('click', function (e) {
      //  name 
      if (inpName.value.length > 3) {
        flagName = true;
        outputName = '';
      }
      else {
        outputName = 'Недостаточное кол-во символов в поле Имя!';
        flagName = false;
      }
      //  Surname 
      if (inpSurname.value.length > 3) {
        flagSurname = true;
        outputSurname = '';
      }
      else {
        outputSurname = 'Недостаточное кол-во символов в поле Фамилия!';
        flagSurname = false;
      }
      //  email
      let em = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;;
      let valEmail = inpEmail.value;
      let validE = em.test(valEmail);
      if (validE) {
        flagEmail = true;
        outputEmail = '';
      }
      else {
        outputEmail = 'E-mail введен неправильно!';
        flagEmail = false;
      }
      //  tel
      let re = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/
      let valPhone = inpPhone.value;
      let valid = re.test(valPhone);
      if (valid) {
        flagPhone = true;
        outputPhone = '';
      }
      else {
        outputPhone = 'Номер телефона введен неправильно!';
        flagPhone = false;
      }



      inpError.innerHTML = outputName + ' ' + outputEmail + ' ' + outputSurname + ' ' + outputPhone;
      inpError.classList.add('active');

      if (flagName && flagEmail) {
        if (flagPhone && flagSurname) {
          e.preventDefault();
          e.stopPropagation();
          // сюда пишем функцию запуска ajax  пример functionAjax();

          return;
        }
      }
      e.preventDefault();
      e.stopPropagation();
      return;
    })
  }
})();



//checked form courier page order
(() => {
  let inpStreet = document.querySelector('.js_courier_street');
  let inpHouse = document.querySelector('.js_courier_house');
  let inpApartament = document.querySelector('.js_courier_apartament');
  let inpError = document.querySelector('.js_courier_error');
  let inpSubmit = document.querySelector('.js_courier_submit');

  let outputStreet = '';
  let outputHouse = '';
  let outputApartament = '';
  let flagHouse = false;
  let flagStreet = false;
  let flagApartament = false;


  if (inpSubmit) {
    inpSubmit.addEventListener('click', function (e) {
      //  Street 
      if (inpStreet.value.length > 3) {
        flagStreet = true;
        outputStreet = '';
      }
      else {
        outputStreet = 'Недостаточное кол-во символов в поле Улица!';
        flagStreet = false;
      }
       //  Apartament 
       if (inpApartament.value.length > 0) {
        flagApartament = true;
        outputApartament = '';
      }
      else {
        outputApartament = 'Заполните поле Квартира!';
        flagApartament = false;
      }
      //  House
      if (inpHouse.value.length > 0) {
        flagHouse = true;
        outputHouse = '';
      }
      else {
        outputHouse = 'Заполните поле Дом!';
        flagHouse = false;
      }



      inpError.innerHTML = outputStreet + ' ' + outputApartament + ' ' + outputHouse;
      inpError.classList.add('active');

      if (flagStreet && flagApartament) {
        if (flagHouse && flagSurStreet) {
          e.preventDefault();
          e.stopPropagation();
          // сюда пишем функцию запуска ajax  пример functionAjax();

          return;
        }
      }
      e.preventDefault();
      e.stopPropagation();
      return;
    })
  }
})();


//change delivery
(() => {

  let pickUpBtn = document.querySelector('.js_delivery_pickUp_btn');
  let pickUpBox = document.querySelector('.js_pickup');
  let courierBtn = document.querySelector('.js_delivery_courier_btn');
  let courierBox = document.querySelector('.js_courier');
  let pvzBtn     = document.querySelector('.js_delivery_pvz_btn');
  let headlingBox = document.querySelector('.js_pickup_box_info_head');


  if (pickUpBtn) {
    pickUpBtn.addEventListener('click', function () {
      pickUpBox.classList.add('active');
      headlingBox.innerHTML = 'Самовывоз'
    })
  }

  if (courierBtn) {
    courierBtn.addEventListener('click', function () {
      courierBox.classList.add('active');
    })
  }
  if ( pvzBtn) {
     pvzBtn.addEventListener('click', function () {
      pickUpBox.classList.add('active');
      headlingBox.innerHTML = 'ПВЗ'
    })
  }

})();


//change delivery box
(() => {

  let deliveryBox = document.querySelector('.js_delivery');
  let deliveryClose = document.querySelector('.js_delivery_close');
  let deliveryBtn = document.querySelector('.js_delivery_btn');
  let deliveryBoxEl = document.querySelector('.js_delivery_box');


  if (deliveryBtn) {
    deliveryBtn.addEventListener('click', function () {
      deliveryBox.classList.toggle('active');
    })
    deliveryClose.addEventListener('click', function () {
      deliveryBox.classList.remove('active');
    })
    
    deliveryBox.style.height = document.body.scrollHeight - 96 + 'px';
  }

  deliveryBox.addEventListener('click', (e) => {
    const lkEl = e.composedPath().includes(deliveryBoxEl);
    if (!lkEl) {
      deliveryBox.classList.remove('active');
    }
  })

  document.addEventListener('click', (e) => {
    const lkEl = e.composedPath().includes(deliveryBoxEl);
    const gambLk = e.composedPath().includes(deliveryBtn);
    if (!lkEl && !gambLk) {
      deliveryBox.classList.remove('active');
    }

  })

})();







