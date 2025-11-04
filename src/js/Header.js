import portfolioPortrait from "../asset/image/portfolio-portrait-1.jpg";

import githubIcon from "../asset/icon/icon-github.svg";
import linkedInIcon from "../asset/icon/icon-linkedIn.svg";
import twitterIcon from "../asset/icon/icon-twitter.svg";

class Header {
    constructor() {
        this.component = this.createHeader();
    }

    createHeader() {
        const container = document.createElement("header");
        container.classList.add("header");

        const headerSmall = document.createElement("section");
        headerSmall.classList.add("header-small");

        headerSmall.appendChild(this.createPortrait());
        headerSmall.appendChild(this.createAbout());
        headerSmall.appendChild(this.createIcons());

        const headerLarge = document.createElement("section");
        headerLarge.classList.add("header-large");

        headerLarge.appendChild(this.createAboutLarge());

        container.appendChild(headerSmall);
        container.appendChild(headerLarge);

        return container;
    }

    createPortrait() {
        const container = document.createElement("article");
        container.classList.add("portrait");

        const heading = document.createElement("h1");
        heading.classList.add("portrait-heading");
        heading.textContent = "Ashley Williams";

        container.appendChild(heading);

        return container;
    }

    createAbout() {
        const container = document.createElement("article");
        container.classList.add("about");

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

        container.appendChild(heading);
        container.appendChild(details);

        return container;
    }

    createIcons() {
        const container = document.createElement("article");
        container.classList.add("icons");

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

        container.appendChild(github);
        container.appendChild(linkedIn);
        container.appendChild(twitter);

        return container;
    }

    createAboutLarge() {
        /*
            Container
                Main Heading (position: absolute)
                Content
                    Image (float: left)
                        About Heading ()
                        About Text ()
        */
        const container = document.createElement("section");
        container.classList.add("header-large-content");

        const heading = document.createElement("h1");
        heading.classList.add("header-large-heading");
        heading.textContent = "Ashley Williams";

        const image = document.createElement("img");
        image.classList.add("header-large-image");
        image.alt = "";
        image.src = portfolioPortrait;

        const about = document.createElement("section");
        about.classList.add("header-large-about");

        const aboutHeading = document.createElement("h2");
        aboutHeading.classList.add("header-large-about-heading");
        aboutHeading.textContent = "About Me";

        const aboutMessage = document.createElement("p");
        aboutMessage.classList.add("header-large-about-message");
        aboutMessage.textContent = "Lorem ipsum dolor sit amet, consectetur"
                + " adipiscing elit. In quis erat venenatis erat tempor"
                + " viverra. Pellentesque pharetra felis orci, et tristique"
                + " arcu efficitur nec. Pellentesque sed vehicula tortor,"
                + " vitae tempor nisl. Praesent mollis ipsum sed purus"
                + " hendrerit, sit amet sagittis justo euismod. Nunc venenatis"
                + " tristique elit, vel sagittis ipsum luctus a. Duis eu lectus"
                + " efficitur, dignissim lacus blandit, eleifend lacus.";

        about.appendChild(aboutHeading);
        about.appendChild(aboutMessage);

        container.appendChild(heading);
        container.appendChild(image);
        container.appendChild(about);

        return container;
    }
}

export default Header;
