const Carousel = (images, content) => {
  let imgIndex = 0;
  let imgs = images;
  let skipCarousel = false

  const scafolding = () => {
    removeEvents();
    removeScafolding();

    const mainDiv = document.createElement("div");
    mainDiv.classList.add("main-frame");
    mainDiv.id = "scafolding";

    const sideDivL = document.createElement("div");
    sideDivL.classList.add("carousel-side");
    sideDivL.classList.add("left");
    sideDivL.id = "side-div-l";

    const sideDivR = document.createElement("div");
    sideDivR.classList.add("carousel-side");
    sideDivR.classList.add("right");
    sideDivR.id = "side-div-r";

    const imgFrame = displayImg();

    const picker = displayPicker();

    mainDiv.appendChild(sideDivL);
    mainDiv.appendChild(imgFrame);
    mainDiv.appendChild(sideDivR);
    mainDiv.appendChild(picker);

    return mainDiv;
  };

  const removeScafolding = () => {
    const mainDiv = document.querySelector("#scafolding");

    if (mainDiv) {
      mainDiv.remove();
    }
  };

  const displayPicker = () => {
    const displayDiv = document.createElement("div");
    displayDiv.id = "display-div";

    const pickL = document.createElement("div");
    pickL.id = "pick-l";
    pickL.classList.add("picker-img");

    const pickC = document.createElement("div");
    pickC.id = "pick-c";
    pickC.classList.add("picker-img");

    const pickR = document.createElement("div");
    pickR.id = "pick-r";
    pickR.classList.add("picker-img");

    let indexL = imgIndex - 1;
    if (indexL < 0) indexL = imgs.length - 1;

    let indexR = imgIndex + 1;
    if (indexR >= imgs.length) indexR = 0;

    const imgL = document.createElement("img");
    imgL.src = imgs[indexL];

    const imgC = document.createElement("img");
    imgC.src = imgs[imgIndex];

    const imgR = document.createElement("img");
    imgR.src = imgs[indexR];

    pickL.appendChild(imgL);
    pickC.appendChild(imgC);
    pickR.appendChild(imgR);

    displayDiv.appendChild(pickL);
    displayDiv.appendChild(pickC);
    displayDiv.appendChild(pickR);

    return displayDiv;
  };

  const displayImg = () => {
    const div = document.createElement("div");
    div.classList.add("img-frame");

    const image = document.createElement("img");
    image.src = imgs[imgIndex];

    div.appendChild(image);

    return div;
  };

  const update = () => {
    if (imgIndex >= imgs.length) {
      imgIndex = 0;
    } else if (imgIndex < 0) {
      imgIndex = imgs.length - 1;
    }

    const carousel = scafolding();
    content.appendChild(carousel);
    addEvents();
    slideshow();
  };

  const sideClickHandler = (direction = 1, skip = true) => {
    return () => {
      if (skip === false && skipCarousel == true) return
      skipCarousel = skip
      imgIndex += direction;
      update();
    };
  };

  const addEvents = () => {
    const sideL = document.querySelector("#side-div-l");
    const sideR = document.querySelector("#side-div-r");
    const pickL = document.querySelector("#pick-l");
    const pickR = document.querySelector("#pick-r");

    sideL.addEventListener("click", sideClickHandler(-1));
    sideR.addEventListener("click", sideClickHandler(1));
    pickL.addEventListener("click", sideClickHandler(-1));
    pickR.addEventListener("click", sideClickHandler(1));
  };

  const removeEvents = () => {
    const sideL = document.querySelector("#side-div-l");
    const sideR = document.querySelector("#side-div-r");
    const pickL = document.querySelector("#pick-l");
    const pickR = document.querySelector("#pick-r");

    if (sideL) {
      sideL.removeEventListener("click", sideClickHandler);
    }
    if (sideR) {
      sideR.removeEventListener("click", sideClickHandler);
    }
    if (pickL) {
      pickL.removeEventListener("click", sideClickHandler);
    }
    if (pickR) {
      pickR.removeEventListener("click", sideClickHandler);
    }
  };

  const slideshow = () => {
    setTimeout(()=>{
        sideClickHandler(1, false)()
        skipCarousel = false
    }, 5000)
  }

  return { update };
};

export default Carousel;
