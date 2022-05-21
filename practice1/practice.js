const colors = [
    "blue","green","red","pink"
];


const btn = document.getElementById('btn');
const color = document.querySelector('.color');
btn.addEventListener('click',function(){
    const randnum = randomnums();
    document.body.style.backgroundColor = colors[randnum];
    color.textContent = colors[randnum];
})

function randomnums(){
    return Math.floor(Math.random()* colors.length);
}