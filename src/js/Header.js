import portfolioPortrait from "../asset/image/portfolio-portrait-1.jpg";

import githubIcon from "../asset/icon/icon-github.svg";
import linkedInIcon from "../asset/icon/icon-linkedIn.svg";
import twitterIcon from "../asset/icon/icon-twitter.svg";

class Header {
    constructor() {
        this.component = this.createHeader();
    }

    createHeader() {
        const component = document.createElement("header");

        const containerSmall = document.createElement("section");
        containerSmall.classList.add("header-small");

        containerSmall.appendChild(this.createPortrait());
        containerSmall.appendChild(this.createAbout());
        containerSmall.appendChild(this.createIcons());

        const containerLarge = this.createHeaderLarge();
        containerLarge.classList.add("header-large");

        component.appendChild(containerSmall);
        component.appendChild(containerLarge);

        return component;
    }

    createPortrait() {
        const component = document.createElement("article");
        component.classList.add("portrait");

        const heading = document.createElement("h1");
        heading.classList.add("portrait-heading");
        heading.textContent = "Ashley Williams";

        component.appendChild(heading);

        return component;
    }

    createAbout() {
        const component = document.createElement("article");
        component.classList.add("about");

        const heading = document.createElement("h2");
        heading.classList.add("about-heading");
        heading.textContent = "About Me";

        const details = document.createElement("p");
        details.classList.add("about-details");
        details.textContent = "Lorem ipsum dolor sit amet, consectetur"
                + " adipiscing elit. In quis erat venenatis erat tempor"
                + " viverra. Pellentesque pharetra felis orci, et tristique"
                + " arcu efficitur nec. Pellentesque sed vehicula tortor,"
                + " vitae tempor nisl. Praesent mollis ipsum sed purus"
                + " hendrerit, sit amet sagittis justo euismod. Nunc venenatis"
                + " tristique elit, vel sagittis ipsum luctus a. Duis eu lectus"
                + " efficitur, dignissim lacus blandit, eleifend lacus.";

        component.appendChild(heading);
        component.appendChild(details);

        return component;
    }

    createIcons() {
        const component = document.createElement("article");
        component.classList.add("icons");

        const github = document.createElement("a");
        github.classList.add("icons-link");
        github.href = "https://github.com";
        github.target = "_blank";
        const githubImage = document.createElement("img");
        githubImage.classList.add("icons-icon");
        githubImage.alt = "Github icon";
        githubImage.src = githubIcon;
        github.appendChild(githubImage);

        const linkedIn = document.createElement("a");
        linkedIn.classList.add("icons-link");
        linkedIn.href = "https://linkedn.com";
        linkedIn.target = "_blank";
        const linkedInImage = document.createElement("img");
        linkedInImage.classList.add("icons-icon");
        linkedInImage.alt = "LinkedIn icon";
        linkedInImage.src = linkedInIcon;
        linkedIn.appendChild(linkedInImage);

        const twitter = document.createElement("a");
        twitter.classList.add("icons-link");
        twitter.href = "https://twitter.com";
        twitter.target = "_blank";
        const twitterImage = document.createElement("img");
        twitterImage.classList.add("icons-icon");
        twitterImage.alt = "Twitter icon";
        twitterImage.src = twitterIcon;
        twitter.appendChild(twitterImage);

        component.appendChild(github);
        component.appendChild(linkedIn);
        component.appendChild(twitter);

        return component;
    }

    createHeaderLarge() {
        const component = document.createElement("section");
        component.classList.add("header-large"); 

        const heading = document.createElement("h1");
        heading.classList.add("header-large-heading");
        heading.textContent = "Ashley Williams";

        component.appendChild(heading);
        component.appendChild(this.createHeaderLargeContainer());

        return component;
    }

    createHeaderLargeContainer() {
        const component = document.createElement("div");
        component.classList.add("header-large-container");

        const image = document.createElement("img");
        image.classList.add("header-large-container-image");
        image.alt = "Portrait of author";
        image.src = portfolioPortrait;

        component.appendChild(image);
        component.appendChild(this.createHeaderLargeContainerText());

        return component;
    }

    createHeaderLargeContainerText() {
        const component = document.createElement("div");
        component.classList.add("header-large-container-text");

        const heading = document.createElement("h2");
        heading.classList.add("header-large-container-heading");
        heading.textContent = "About Me";

        const message = document.createElement("p");
        message.classList.add("header-large-container-message");
        message.textContent =
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu"
                + " lacus interdum, tincidunt mi eget, bibendum dui. Morbi"
                + " aliquet posuere nulla, quis blandit felis pharetra vel."
                + " Morbi faucibus posuere nisi. Maecenas sollicitudin est"
                + " velit, a tempus nisi mattis nec. Ut pharetra mi at"
                + " fringilla condimentum. Suspendisse non ultrices tellus."
                + " Duis a dui vel leo bibendum mattis non sit amet ipsum."
                + " Pellentesque pellentesque, nisi vel pellentesque tristique,"
                + " neque nibh elementum nunc, vel posuere sapien nunc in"
                + " ligula. Vestibulum in feugiat nisi.";

        component.appendChild(heading);
        component.appendChild(message);

        return component;
    }
}

export default Header;
