import Carousel from "./ImgCarousel";
import alexImg from "../assets/alexander.jpg";
import aliImg from "../assets/ali.jpg";
import pavelImg from "../assets/pavel.jpg";
import tuImg from "../assets/tu.jpg";
import yiImg from "../assets/yi.jpg";

const imgs = [alexImg, aliImg, pavelImg, tuImg, yiImg];
const content = document.querySelector("#content");
const carousel = Carousel(imgs, content);

carousel.update();
