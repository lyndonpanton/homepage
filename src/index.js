// console.log("Webpack configured successfully");

import crowImage from "./asset/image/crow.jpg";

import "./css/styles.css";

const image = document.createElement("img");
image.classList.add("image", "image-3");
image.alt = "A black crow";
image.src = crowImage;

document.getElementsByTagName("main")[0].appendChild(image);
