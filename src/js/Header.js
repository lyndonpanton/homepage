class Header {
    constructor() {
        this.component = this.createHeader();
    }

    createHeader() {
        const parentContainer = document.createElement("header");

        const heading = document.createElement("h1");
        heading.textContent = "Homepage";

        parentContainer.appendChild(heading);

        return parentContainer;
    }

}

export default Header;
