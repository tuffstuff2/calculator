let d = document;
let calc_dis = d.querySelector('.calc_dis')
let AC = d.querySelector('.AC');
let aver = d.querySelector('.aver');
let proc = d.querySelector('.proc');
let del = d.querySelector('.del');
let one = d.querySelector('.one');
let btn = d.querySelectorAll('.btn')
let two = d.querySelector('.two');
let three = d.querySelector('.three');
let umn = d.querySelector('.umn');
let four = d.querySelector('.four');
let five = d.querySelector('.five');
let six = d.querySelector('.six');
let min = d.querySelector('.min');
let seven = d.querySelector('.seven');
let eght = d.querySelector('.eght');
let nine = d.querySelector('.nine');
let plu = d.querySelector('.plu');
let zero = d.querySelector('.zero');
let poin = d.querySelector('.poin');
let rov = d.querySelector('.rov');
let count = d.querySelector('.count');





btn = Array.from(btn)
btn.map((btn) => {
     btn.addEventListener('click', (e) => {
    
     if (e.target.textContent === 'AC') {
     calc_dis.textContent = '0'
     } else if (e.target.textContent === '=') {
     calc_dis.textContent = eval(calc_dis.textContent)
     } else if (e.target.textContent === '%') {
     let proc = calc_dis.textContent + '/100'
     calc_dis.textContent = eval(proc)
     } else if (e.target.textContent === '+/-') {
     calc_dis.textContent = '-' + calc_dis.textContent
     } else {
     if (calc_dis.textContent === '0' && e.target.textContent !== '.') {
     calc_dis.textContent = e.target.textContent
     } else {
     calc_dis.textContent += e.target.textContent
     }
     }
    
     })
    })




    
















