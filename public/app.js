const bookmark = document.querySelector('.bookmark');
const rBtns = document.querySelectorAll('.btn.reward:not(.btn.reward:nth-child(3))');
const a = [rBtns[0], rBtns[1]];
const open = document.querySelector('.togglem');
const close = document.querySelector('.togglem-close');
const menu = document.querySelector('.menu');
bookmark.onclick = () => bookmark.classList.toggle('bookmarked');
a.forEach((e) => {
    e.onclick = () => modal.style.display = "block";
});

open.onclick = () => {
    open.style.display = 'none';
    close.style.display = 'block';
    menu.style.display = 'flex';
}
close.onclick = () => {
    open.style.display = 'block';
    close.style.display = 'none';
    menu.style.display = 'none';
}

