import headerImage from "../asset/image/portfolio-portrait.jpg"
import githubIcon from "../asset/icon/icon-github.svg";
import linkedInIcon from "../asset/icon/icon-linkedIn.svg";
import twitterIcon from "../asset/icon/icon-twitter.svg";

class Header {
    constructor() {
        this.component = this.createHeader();
    }

    createHeader() {
        const container = document.createElement("header");

        container.appendChild(this.createPortrait());
        container.appendChild(this.createAbout());
        container.appendChild(this.createIcons());

        return container;
    }

    createPortrait() {
        const container = document.createElement("article");

        const heading = document.createElement("h1");
        heading.textContent = "Ashley Williams";

        return container;
    }

    createAbout() {
        const container = document.createElement("article");

        const heading = document.createElement("h2");
        heading.textContent = "About Me";

        const about = document.createElement("p");
        about.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing"
                + " elit. In quis erat venenatis erat tempor viverra."
                + " Pellentesque pharetra felis orci, et tristique arcu"
                + " efficitur nec. Pellentesque sed vehicula tortor, vitae"
                + " tempor nisl. Praesent mollis ipsum sed purus hendrerit, sit"
                + " amet sagittis justo euismod. Nunc venenatis tristique elit,"
                + " vel sagittis ipsum luctus a. Duis eu lectus efficitur,"
                + " dignissim lacus blandit, eleifend lacus. Aenean vel arcu"
                + " vitae mauris fringilla hendrerit eu quis lacus. Ut eu"
                + " lobortis magna, ac malesuada urna. Mauris ultrices orci vel"
                + " arcu convallis, et mattis lacus porttitor. Donec in mollis"
                + " ex. Suspendisse iaculis nunc eu ex condimentum dapibus."
                + " Vestibulum sed purus ante."

        container.appendChild(heading);
        container.appendChild(about);

        return container;
    }

    createIcons() {
        const container = document.createElement("article");

        const github = document.createElement("a");
        github.href = "https://github.com";
        github.target = "_blank";
        const githubImage = document.createElement("img");
        githubImage.alt = "Github icon";
        githubImage.src = githubIcon;
        github.appendChild(githubImage);

        const linkedIn = document.createElement("a");
        linkedIn.href = "https://linkedn.com";
        linkedIn.target = "_blank";
        const linkedInImage = document.createElement("img");
        linkedInImage.alt = "LinkedIn icon";
        linkedInImage.src = linkedInIcon;
        linkedIn.appendChild(linkedInImage);

        const twitter = document.createElement("a");
        twitter.href = "https://twitter.com";
        twitter.target = "_blank";
        const twitterImage = document.createElement("img");
        twitterImage.alt = "Twitter icon";
        twitterImage.src = twitterIcon;
        twitter.appendChild(twitterImage);

        container.appendChild(github);
        container.appendChild(linkedIn);
        container.appendChild(twitter);

        return container;
    }
}

export default Header;
