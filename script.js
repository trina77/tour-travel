let navbar = document.querySelector('.header .navbar');

menu.onclick = () =>{
    menu.classlist.toggle('fa-times');
    menu.classlist.toggle('active');
};

window.onclick = () =>{
    menu.classlist.remove('fa-times');
    menu.classlist.remove('active');
}

