//card animation size box
(() => {
  let items = document.querySelectorAll('.js_bestsellers_img');
  

  if (items) {
    for(let i = 0; i < items.length; i++){
      items[i].addEventListener('mouseover', function(){
        this.querySelector('.bestsellers_box_item_size').classList.add('active')
      });
      items[i].addEventListener('mouseout', function(){
        this.querySelector('.bestsellers_box_item_size').classList.remove('active')
      })

    }
  }

})();

(() => {
   let city        = document.querySelector('.js_header_place_item');
   let cityBox     = document.querySelector('.js_header_place_hidden');
   let cityBoxItem = document.querySelectorAll('.js_header_place_hidden span')

   if(city){
    city.addEventListener('click', function(){
      cityBox.classList.toggle('active');
      if(cityBox.classList.contains('active')){
        city.classList.add('active');
      }else{
        city.classList.remove('active');
      }
    })
   }

   if(cityBoxItem){
    for(let i = 0; i < cityBoxItem.length; i++){
      cityBoxItem[i].addEventListener('click', function(){
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

})();
