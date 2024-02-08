let slider = document.querySelector( '.fa-sliders' );
let control = document.querySelector( '.control' );

let status = false;
slider.addEventListener('click', function() {
    
    if(status === false){
        control.classList.add("slide");
        slider.classList.add("fa-xmark");
        console.dir(control.classList);
        status = true;
    }else{
        control.classList.remove("slide");
        slider.classList.remove("fa-xmark");
        status = false;
    }













});  //adds a click event to the sliders icon