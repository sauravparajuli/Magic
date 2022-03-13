let yesmsg = 'Lauda ka magic madarchod <i class="fa-solid fa-hand-middle-finger"></i>';
let nomsg = 'Yes daba na BSDK <i class="fa-solid fa-face-swear"></i>';
let footermsg = 'Directed By Robert B. Weide';
let footermsg2 = 'Designed By Saurav Parajuli'

function yes() {
    document.getElementById('after').innerHTML = yesmsg;
    document.getElementById('footer').innerHTML = footermsg;


}

function no() {
    document.getElementById('after').innerHTML = nomsg;
    document.getElementById('footer').innerHTML = footermsg2;


}

