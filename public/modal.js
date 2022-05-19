const modal = document.getElementById("myModal");
const btn = document.querySelector(".btn.back");
const span = document.getElementsByClassName("close")[0];
let options = document.querySelectorAll(".container_radio");
let boxes = document.querySelectorAll(".s-modal");
options = [options[0], options[1], options[2]];
boxes = [boxes[0], boxes[1], boxes[2]];
const content = document.querySelectorAll("modal-content");
btn.onclick = () => modal.style.display = "block";
span.onclick = () => modal.style.display = "none";
window.onclick = (e) => { if (e.target == modal) modal.style.display = "none"; }
// Modal Suffs
options.forEach((e) => {
    e.addEventListener('click', () => {
        const allC = document.querySelectorAll(`.pledge`);
        const allb = document.querySelectorAll(`.s-modal`);
        const c = document.querySelector(`.pledge[data-plan="${e.dataset.plan}"]`);
        const b = document.querySelector(`.s-modal[data-plan="${e.dataset.plan}"]`);
        allC.forEach((e) => e.style.display = 'none');
        allb.forEach((e) => e.classList.remove('selected'));
        c.style.display = 'block';
        b.classList.add('selected');
    });
});
// Modal confirm
let confirmBtn = document.querySelectorAll('.btn.continue');
confirmBtn = [confirmBtn[0], confirmBtn[1], confirmBtn[2]];
confirmBtn.forEach((e) => {
    let isConfirmed = false;
    e.onclick = () => {
        isConfirmed = true;
        const modalContent = document.querySelector('.modal-content');
        modalContent.classList.add('confirm');
        modalContent.innerHTML = `
        <div class="modal_confirm">
            <img src="./images/icon-check.svg" alt="" class="c">
            <h1 class="title">Thanks for your support!</h1>
            <p class="desc">Your pledge brings us one step closer to sharing
            Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our
            campaign is completed.</p>
            <button class="btn continue confirm">Got it!</button>
        </div>  
    `;
        const conf = document.querySelector('.btn.confirm');
        conf.addEventListener('click', () => modal.style.display = "none");
    }
});


