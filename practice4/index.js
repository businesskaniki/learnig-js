 const navTogle = document.querySelector('.nav-toggle');
 const links = document.querySelector('.links');
 const social = document.querySelector('.social-icons');
 navTogle.addEventListener('click' , function(){
     links.classList.toggle("show-links");
 })