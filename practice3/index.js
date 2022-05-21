// all the reviews
const reviews = [
    {
        id:1,
        name:"nicholas",
        job:"webd dev",
        description:"It , and even before keyboard phones, texters were working with a limited number of characters—160, to be exact—and before “unlimited” plans became the law of the land, each text cost ",
        img:"https://images.pexels.com/photos/12132204/pexels-photo-12132204.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
        id:2,
        name:"kamau",
        job:"web designer",
        description:"It , and even before keyboard phones, texters were working with a limited number of characters—160, to be exact—and before “unlimited” plans became the law of the land, each text cost ",
        img:"https://images.pexels.com/photos/11929908/pexels-photo-11929908.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
        id:3,
        name:"maina",
        job:"software engeneer",
        description:"It , and even before keyboard phones, texters were working with a limited number of characters—160, to be exact—and before “unlimited” plans became the law of the land, each text cost ",
        img:"https://images.pexels.com/photos/8027615/pexels-photo-8027615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        id:4,
        name:"nicholas maina",
        job:"webd dev",
        description:"It , and even before keyboard phones, texters were working with a limited number of characters—160, to be exact—and before “unlimited” plans became the law of the land, each text cost ",
        img:"https://images.pexels.com/photos/12132204/pexels-photo-12132204.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
        id:5,
        name:"nicholas kamau",
        job:"webd dev",
        description:"It , and even before keyboard phones, texters were working with a limited number of characters—160, to be exact—and before “unlimited” plans became the law of the land, each text cost ",
        img:"https://images.pexels.com/photos/7589890/pexels-photo-7589890.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        id:6,
        name:"nicholas maina kamau",
        job:"webd dev",
        description:"It , and even before keyboard phones, texters were working with a limited number of characters—160, to be exact—and before “unlimited” plans became the law of the land, each text cost ",
        img:"https://images.pexels.com/photos/5365737/pexels-photo-5365737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
]


// select all items required

const image = document.getElementById('img');
const names = document.getElementById('name');
const job = document.getElementById('job');
const description = document.getElementById('description');


// select the buttons

const nextbtn = document.querySelector('.btn-next');
const prevbtn = document.querySelector('.btn-prev');
const randbtn = document.querySelector('.random');

//set inital doc item

let currentItem = 0;

// load initial item


window.addEventListener('DOMContentLoaded', function(){
   show()

});

function show (){
    const item = reviews[currentItem];
    image.src = item.img;
    names.textContent = item.name;
    job.textContent = item.job;
    description.textContent = item.description;
}
// next artical functionality
nextbtn.addEventListener('click' , function(){
    currentItem++;
    if( currentItem > reviews.length-1){
        currentItem = 0;
    }

    show();
});
// previous artical functinality
prevbtn.addEventListener('click' , function(){
    currentItem--;
    if( currentItem < 0){
        currentItem = reviews.length-1;
    }

    show();
});
// randon artical functinality
 randbtn.addEventListener('click', function(){
   currentItem =  Math.floor(Math.random()*reviews.length);
   show()
 })