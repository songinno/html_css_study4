
const $btn = document.getElementById('change');
const $petBox = document.getElementById('my-pet');

$btn.onclick = e => {
    $petBox.textContent = '나쁜 거북이녀석';

};