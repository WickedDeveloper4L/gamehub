window.onload = function () {
    let hamburger = document.querySelector('.hamburger');
    let menu = document.querySelector('.mobile')
    let subscribe_button = document.querySelector('.subscribebttn');
    let firstbttn = document.querySelector('.first-button')
    subscribe_button.addEventListener('mouseenter', function () {
        this.classList.add('clicked');
    })
    subscribe_button.addEventListener('mouseleave', function () {
        this.classList.remove('clicked');
        
    })

    // firstbttn.addEventListener('mouseenter', function () {
    //     this.classList.add('clicked');
    // })
    
    // firstbttn.addEventListener('mouseleave', function () {
    //     this.classList.remove('clicked');
    // })
    
    

    hamburger.addEventListener('click', function () {
        this.classList.toggle('is-active');
        menu.classList.toggle('is-active');
    })
}