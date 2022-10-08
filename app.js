let mybody = document.querySelector('body');

let Toxir = document.querySelector('.col-bla');

let manyblow = document.querySelector('.col-blow');


 console.log(mybody, Toxir, manyblow);

 Toxir.addEventListener('click', function(){
mybody.classList.add('dark');
 });

 manyblow.addEventListener('click', function(){
    mybody.classList.remove('dark');
 });


let kurs = 12000
let kurs2 = 10440
let kurs3 = 182
let wrapperForm = document.querySelector('.from')
let dollarin = document.querySelector('.input')
let onput = document.querySelector('.off')
let onput2 = document.querySelector('.off2')
let onput3 = document.querySelector('.off3')
let btnb = document.querySelector('.sumbit')

wrapperForm.addEventListener('submit',function(n){
    n.preventDefault()

    onput.value = (parseFloat(dollarin.value)*kurs).toFixed(2)
    dollarin.value = ''
})
wrapperForm.addEventListener('submit',function(n){
    n.preventDefault()

    onput2.value = (parseFloat(dollarin.value)*kurs2).toFixed(2)
    dollarin.value = ''
})

wrapperForm.addEventListener('submit',function(n){
    n.preventDefault()

    onput3.value = (parseFloat(dollarin.value)*kurs3).toFixed(2)
    dollarin.value = ''
})