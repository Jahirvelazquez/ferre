document.addEventListener("DOMContentLoaded", function () {
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    const slidesContainer = document.querySelector(".slides-container");

    let currentIndex = 0;

    prevBtn.addEventListener("click", function () {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = slidesContainer.children.length - 1;
        }
        updateSlidePosition();
    });

    nextBtn.addEventListener("click", function () {
        if (currentIndex < slidesContainer.children.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateSlidePosition();
    });

    function updateSlidePosition() {
        const newPosition = -currentIndex * 100 + "%";
        slidesContainer.style.transform = `translateX(${newPosition})`;
    }
});
