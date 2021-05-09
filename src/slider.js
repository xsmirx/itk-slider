export const slider = {
  imageUrls: [],
  currentImageIndex: 0,
  showPrevBtn: document.querySelector("#show-prev-btn"),
  showNextBtn: document.querySelector("#show-next-btn"),
  slideImage: document.querySelector("#slide-img"),
  start() {
    this.showNextBtn.addEventListener("click", (event) =>
      this.onShowNextBtnClick(event)
    );
    this.showPrevBtn.addEventListener("click", (event) =>
      this.onShowPrevBtnClick(event)
    );

    this.imageUrls.push(
      "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
    );
    this.imageUrls.push(
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
    );
    this.imageUrls.push(
      "https://images.unsplash.com/photo-1542319150-fb62a2e8c476?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
    );
    this.slideImage.src = this.imageUrls[this.currentImageIndex];
    this.showPrevBtn.disabled = true;
  },
  onShowPrevBtnClick(event) {
    console.dir(event);
    this.currentImageIndex--;
    this.slideImage.src = this.imageUrls[this.currentImageIndex];
    this.showNextBtn.disabled = false;

    if (this.currentImageIndex === 0) {
      this.showPrevBtn.disabled = true;
    }
  },
  onShowNextBtnClick(event) {
    this.currentImageIndex++;
    this.slideImage.src = this.imageUrls[this.currentImageIndex];
    this.showPrevBtn.disabled = false;

    if (this.currentImageIndex === this.imageUrls.length - 1) {
      this.showNextBtn.disabled = true;
    }
  },
};
