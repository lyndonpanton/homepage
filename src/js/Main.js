import projectImageOne from "../asset/image/portfolio-project-01.jpg";
import projectImageTwo from "../asset/image/portfolio-project-02.jpg";
import projectImageThree from "../asset/image/portfolio-project-03.jpg";
import projectImageFour from "../asset/image/portfolio-project-04.jpg";
import projectImageFive from "../asset/image/portfolio-project-05.jpg";
import projectImageSix from "../asset/image/portfolio-project-06.jpg";

import Project from "./Project";

class Main {
    constructor() {
        this.component = this.createMain();
    }

    createMain() {
        const parentContainer = document.createElement("main");
        parentContainer.classList.add("main");

        parentContainer.appendChild(this.createShowcase());

        return parentContainer;
    }

    createShowcase() {
        const container = document.createElement("section");
        container.classList.add("showcase");

        const heading = document.createElement("h2");
        heading.classList.add("showcase-heading");
        heading.textContent = "My Work";

        container.appendChild(heading);
        container.appendChild(this.createProjects());

        return container;
    }

    createProjects() {
        const container = document.createElement("article");
        container.classList.add("projects");
        
        container.appendChild(new Project(
            "Orange Red and Green Abstract Painting",
            "A clash of red, yellow, green, and white. Colours are splayed"
            + " across the canvas in a method with is both random and"
            + " controlled.",
            projectImageOne,
            "https://www.pexels.com/@steve/",
            "https://www.pexels.com/photo/orange-red-and-green-abstract-painting-1585325/"
        ).component);
        container.appendChild(new Project(
            "Multicolored Abstract Painting",
            "Blue stripes overlapping each other, with patches of purple, green"
            + " and yellow.",
            projectImageTwo,
            "https://www.pexels.com/@steve/",
            "https://www.pexels.com/photo/multicolored-abstract-painting-1509534/"
        ).component);
        container.appendChild(new Project(
            "Multicolored Abstract Painting 2",
            "A plain white canvas with an explosion of red, pink, orange, gold,"
            + " and black splotches in the center.",
            projectImageThree,
            "https://www.pexels.com/@paduret/",
            "https://www.pexels.com/photo/photo-of-multicolored-abstract-painting-1193743/"
        ).component);
        container.appendChild(new Project(
            "Blue Shade Painting",
            "A painting made from shadees of blue which combine to the give the"
            + " impression of multiple waves.",
            projectImageFour,
            "https://www.pexels.com/@suzyhazelwood/",
            "https://www.pexels.com/photo/blue-shade-painting-1762973/"
        ).component);
        container.appendChild(new Project(
            "Teal and Pink Cherry Print Garment",
            "A foreground comprised of primarily pink with white vases within,"
            + " along with a background comprised of primarily teal with some"
            + " some black vases within.",
            projectImageFive,
            "https://www.pexels.com/@eberhardgross/",
            "https://www.pexels.com/photo/teal-and-pink-cherry-print-garment-2086361/"
        ).component);
        container.appendChild(new Project(
            "Multicolored Abstract Painting 3",
            "Square patches of orange, light green, and dark blue. Lines of the"
            + " patches drip down onto each other to blend slightly.",
            projectImageSix,
            "https://www.pexels.com/@steve/",
            "https://www.pexels.com/photo/multicolored-abstract-painting-1269968/"
        ).component);

        return container;
    }

}

export default Main;
