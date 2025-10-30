import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";

class UI {
    constructor(name, container) {
        this.name = name;
        this.container = container;
    }

    createUI() {
        this.container.appendChild(new Header().component);
        // this.container.appendChild(new Main().component);
        // this.container.appendChild(new Footer().component);
    }
}

export default UI;
