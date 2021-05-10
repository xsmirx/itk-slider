export class Slider {
  constructor() {
    this.imageUrls = [];
    this.currentImageIndex = 0;
    this.showPrevBtn = null;
    this.showNextBtn = null;
    this.slideImage = null;
  }
  start(selector) {
    let el = document.querySelector(selector);

    // create elements and add elements to maim container
    this.slideImage = document.createElement("img");
    this.slideImage.classList.add("slide-img");
    this.showNextBtn = document.createElement("button");
    this.showNextBtn.classList.add("show-next-btn");
    this.showNextBtn.innerText = ">";
    this.showPrevBtn = document.createElement("button");
    this.showPrevBtn.classList.add("show-prev-btn");
    this.showPrevBtn.innerText = "<";
    el.append(this.showPrevBtn, this.slideImage, this.showNextBtn);

    // add test urls in imageUrls
    this.imageUrls.push(
      "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
    );
    this.imageUrls.push(
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
    );
    this.imageUrls.push(
      "https://images.unsplash.com/photo-1542319150-fb62a2e8c476?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
    );

    // add events on buttons
    this.showNextBtn.addEventListener("click", (event) =>
      this.onShowNextBtnClick(event)
    );
    this.showPrevBtn.addEventListener("click", (event) =>
      this.onShowPrevBtnClick(event)
    );
    this.slideImage.src = this.imageUrls[this.currentImageIndex];
    this.showPrevBtn.disabled = true;
  }

  onShowPrevBtnClick() {
    this.currentImageIndex--;
    this.slideImage.src = this.imageUrls[this.currentImageIndex];
    this.showNextBtn.disabled = false;

    if (this.currentImageIndex === 0) {
      this.showPrevBtn.disabled = true;
    }
  }

  onShowNextBtnClick() {
    this.currentImageIndex++;
    this.slideImage.src = this.imageUrls[this.currentImageIndex];
    this.showPrevBtn.disabled = false;

    if (this.currentImageIndex === this.imageUrls.length - 1) {
      this.showNextBtn.disabled = true;
    }
  }
}
