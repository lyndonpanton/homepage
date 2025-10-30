// console.log("Webpack configured successfully");

import "./css/styles.css";

import UI from "./js/UI.js";

const body = document.getElementsByTagName("body")[0];

const UserInterface = new UI("Lyndon Mykal Panton", body);

UserInterface.createUI();
