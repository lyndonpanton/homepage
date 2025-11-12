import footerImage from "../asset/image/portfolio-portrait-2.jpg";

import githubIcon from "../asset/icon/icon-github.svg";
import linkedInIcon from "../asset/icon/icon-linkedIn.svg";
import twitterIcon from "../asset/icon/icon-twitter.svg";
import phoneIcon from "../asset/icon/icon-phone.svg";
import mailIcon from "../asset/icon/icon-mail.svg";

class Footer {
    constructor() {
        this.component = this.createFooter();
    }

    createFooter() {
        const parentContainer = document.createElement("footer");

        // const copyright = document.createElement("p");
        // copyright.textContent =
        //         "Copyright 2025 Lyndon Mykal Panton | All Rights Reserved";
        
        // parentContainer.appendChild(copyright);

        parentContainer.appendChild(this.createContact());
        parentContainer.appendChild(this.createImage());

        return parentContainer;
    }

    createContact() {
        const container = document.createElement("address");
        container.classList.add("contact");

        const heading = document.createElement("h2");
        heading.classList.add("contact-heading");
        heading.textContent = "Contact Me";

        const message = document.createElement("p");
        message.classList.add("contact-message");
        message.textContent =
                "Please get in touch if you think our work could be mutually"
                + " beneficial!";

        container.appendChild(heading);
        container.appendChild(message);
        container.appendChild(this.createContactAddress());
        container.appendChild(this.createContactSocial());

        return container;
    }

    createContactAddress() {
        const container = document.createElement("article");
        container.classList.add("contact-address");

        const houseAddress = document.createElement("section");
        houseAddress.classList.add("contact-address-house");

        const houseAddressLineOne = document.createElement("p");
        houseAddressLineOne.classList.add("contact-address-house-line");
        houseAddressLineOne.textContent = "1234 Random Road";
        const houseAddressLineTwo = document.createElement("p");
        houseAddressLineTwo.classList.add("contact-address-house-line");
        houseAddressLineTwo.textContent = "Random Town, California 67890";

        houseAddress.appendChild(houseAddressLineOne);
        houseAddress.appendChild(houseAddressLineTwo);

        const phoneNumber = document.createElement("p");
        phoneNumber.classList.add("contact-address-phone");
        const phoneNumberIcon = document.createElement("img");
        phoneNumberIcon.classList.add("contact-address-phone-icon");
        phoneNumberIcon.alt = "";
        phoneNumberIcon.src = phoneIcon;
        phoneNumberIcon.tabIndex = "-1";
        const phoneNumberText = document.createElement("span");
        phoneNumberText.classList.add("contact-address-phone-text");
        phoneNumberText.textContent = "012-345-6789";
        phoneNumber.appendChild(phoneNumberIcon);
        phoneNumber.appendChild(phoneNumberText);

        const emailAddress = document.createElement("p");
        emailAddress.classList.add("contact-address-email");
        const emailAddressIcon = document.createElement("img");
        emailAddressIcon.classList.add("contact-address-email-icon");
        emailAddressIcon.alt = "";
        emailAddressIcon.src = mailIcon;
        emailAddressIcon.tabIndex = "-1";
        const emailAddressText = document.createElement("a");
        emailAddressText.classList.add("contact-address-email-text");
        emailAddressText.textContent = "ashleywilliams.is.not.real@gmail.com";
        emailAddress.appendChild(emailAddressIcon);
        emailAddress.appendChild(emailAddressText);

        container.appendChild(houseAddress);
        container.appendChild(phoneNumber);
        container.appendChild(emailAddress);

        return container;
    }

    createContactSocial() {
        const container = document.createElement("section");
        container.classList.add("contact-social");

        const githubLink = document.createElement("a");
        githubLink.classList.add("contact-social-link");
        githubLink.href = "https://github.com";
        githubLink.tabIndex = "1";
        githubLink.target = "_blank";
        const githubImage = document.createElement("img");
        githubImage.classList.add("contact-social-image");
        githubImage.src = githubIcon;
        githubImage.alt = "Github link (opens in new tab)";
        githubLink.appendChild(githubImage);

        const linkedInLink = document.createElement("a");
        linkedInLink.classList.add("contact-social-link");
        linkedInLink.href = "https://linkedin.com";
        linkedInLink.tabIndex = "1";
        githubLink.target = "_blank";
        const linkedInImage = document.createElement("img");
        linkedInImage.classList.add("contact-social-image");
        linkedInImage.src = linkedInIcon;
        linkedInImage.alt = "LinkedIn link (opens in new tab)";
        linkedInLink.appendChild(linkedInImage);

        const twitterLink = document.createElement("a");
        twitterLink.classList.add("contact-social-link");
        twitterLink.href = "https://twitter.com";
        twitterLink.tabIndex = "1";
        githubLink.target = "_blank";
        const twitterImage = document.createElement("img");
        twitterImage.classList.add("contact-social-image");
        twitterImage.src = twitterIcon;
        twitterImage.alt = "Twitter link (opens in new tab)";
        twitterLink.appendChild(twitterImage);

        container.appendChild(githubLink);
        container.appendChild(linkedInLink);
        container.appendChild(twitterLink);

        return container;
    }

    createImage() {
        const container = document.createElement("div");
        container.classList.add("contact-image")
        // container.alt = "Girl holding colouring pencils";
        // container.src = footerImage;

        return container;
    }

}

export default Footer;
