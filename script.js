//* Calculator Script 

let str = "";

const buttons = document.querySelectorAll('.btn');

Array.from(buttons).forEach((buttons) => {
    buttons.addEventListener('click', (e) => {
        // = btn
        if (e.target.innerHTML == '=') {
            str = eval(str);
            document.querySelector('.screen').value = str;
        // AC btn
        } else if (e.target.innerHTML == 'AC') {
            str = "";
            document.querySelector('.screen').value = str;
        // DE btn
        } else if (e.target.innerHTML == 'DE') {
            str = str.slice(0, str.length - 1);
            document.querySelector('.screen').value = str;
        // other btn
        }
        else {
            // console.log(e.target);
            str = str + e.target.innerHTML;
            document.querySelector('.screen').value = str;
        }
    })
})