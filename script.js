const triggerOpen = document.querySelectorAll('[trigger-button]');
const triggerClose = document.querySelectorAll('[close-button]');
const overlay = document.querySelector('[data-overlay]');


for (let i=0;i< triggerOpen.length;i++){
    let currentId=triggerOpen[i].dataset.target,
    targetEl=document.querySelector(`#${currentId}`)

    const openData = function(){
        targetEl.classList.remove('active');
        overlay.classList.remove('active');
    }
    triggerOpen[i].addEventListener('click',function(){
        targetEl.classList.add('active');
        overlay.classList.add('active');
    })

    targetEl.querySelector('[close-button]').addEventListener('click',openData);
    overlay.addEventListener('click', openData)
}


//sorter
const  sorter =document.querySelector('.sort-list')
if(sorter){
    const sortList = sorter.querySelectorAll('li');
    sorter.querySelector('.opt-trigger').addEventListener('click',function(){
        sorter.querySelector('ul').classList.toggle('show');
    });

    sortList.forEach((item)=>item.addEventListener('click',function(){
        sortList.forEach((li)=>li != this ? li.classList.remove('active') : null);

        this.classList.add('active');
        sorter.querySelector('.opt-trigger span.value').textContent=this.textContent;
        sorter.querySelector('ul').classList.toggle('show')
    }))
}

//tabbed
const trigger = document.querySelectorAll('.tabbed-trigger'),
content =document.querySelectorAll('.tabbed > div')
trigger.forEach((btn) =>{
    btn.addEventListener('click',function(){
        let dataTraget = this.dataset.id,
        body =document.querySelector(`#${dataTraget}`);

        trigger.forEach((b) => b.parentNode.classList.remove('active'));
        content.forEach((s) => s.classList.remove('active'));
        this.parentNode.classList.add('active');
        body.classList.add('active');
    })
})

// Mobile-menu submenu
const submenu = document.querySelectorAll('.child-trigger')
submenu.forEach((menu) => menu.addEventListener('click',function(e){
    e.preventDefault();
    submenu.forEach((item)=>item != this ? item.closest('.has-child').classList.remove('active'): null)
    if(this.closest('.has-child').classList != 'active'){
        this.closest('.has-child').classList.toggle('active')
    } 
}))

//slider


const swiper = new Swiper('.sliderbox', {
    
    loop: true,
    // effect: 'fade',
    autoHeight: true,
    // If we need pagination
    pagination: {
    el: '.swiper-pagination',
  clickable: true,
    },
  });

//carousel

  const carousel = new Swiper('.carouselbox', {
    
   
    spaceBetween:30,
    slidesPerView: 'auto',
    centeredSlides: true,
    // If we need pagination
    navigation: {
    nextEl:'.swiper-button-next',
    prevEl:".swiper-button-prev"
    },
    breakpoints: {
        481: {
            slidesPerView: 2,
            slidesPerGroup: 1,
            centeredSlides:false,
        },
        680: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            centeredSlides:false,
        },
        992: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            centeredSlides:false,
        }
    }
  });


//product image > page-single

const thumImage = new Swiper('.thumbnail-image ', {
    
  
    direction: 'vertical',
    spaceBetween:15,
    slidePerVeiw:1,
    freeMode:true,
    watchSlidesProgress:true,
    
    });

const mainImage = new Swiper('.main-image ', {
        loop: true,
        autoHeight:true,

        pagination:{
            el:'.swiper-pagination',
            clickable:true,
        },
        thumbs:{
            swiper: thumImage,
        },
        
});