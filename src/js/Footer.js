class Footer {
    constructor() {
        this.component = this.createFooter();
    }

    createFooter() {
        const parentContainer = document.createElement("footer");

        const copyright = document.createElement("p");
        copyright.textContent =
                "Copyright 2025 Lyndon Mykal Panton | All Rights Reserved";
        
        parentContainer.appendChild(copyright);

        return parentContainer;
    }

    createContact() {
        
    }

}

export default Footer;
