//initial value
let count = 0;
//select the value and all the button buttons
 const value = document.querySelector('#count');
 const btns = document.querySelectorAll('.button');

 //select each button and asign them a function

 btns.forEach(function(button){
    button.addEventListener("click", function(e){
        const classes  = e.currentTarget.id;
        if(classes.includes("decrease")){
            count--;
        }
        else if(classes.includes("increase")){
            count++;
        }
        else{
            count=0;
        }
        if (count<0){
            value.style.color = "red";
        }
        if(count>0){
            value.style.color="green";
        }
        if(count==0){
            value.style.color = "black";
        }
        value.textContent = count;
    })
 });{

 }
