const imgSrcBtns = document.querySelectorAll('.imgSrcBtn');
const imgBox = document.querySelector('.imgBox');

imgSrcBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const imgSrc = btn.dataset.src;
    imgBox.setAttribute('src', imgSrc);
  });
});
