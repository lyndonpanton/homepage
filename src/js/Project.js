import userIcon from "../asset/icon/icon-user.svg";
import previewIcon from "../asset/icon/icon-preview.svg";

class Project {
    constructor(title, description, imageFile, profileLink, previewLink) {
        this.title = title;
        this.description = description;
        this.imageFile = imageFile;
        this.profileLink = profileLink;
        this.previewLink = previewLink;

        this.component = this.createProject();
    }

    createProject() {
        const parentContainer = document.createElement("article");
        parentContainer.classList.add("project");

        const projectImage = document.createElement("img");
        projectImage.classList.add("project-image");
        projectImage.alt = "";
        projectImage.src = this.imageFile;

        const projectDetails = document.createElement("section");
        projectDetails.classList.add("project-details");

        const projectHeading = document.createElement("h3");
        projectHeading.classList.add("project-heading");
        projectHeading.textContent = this.title;

        const projectDescription = document.createElement("p");
        projectDescription.classList.add("project-description");
        projectDescription.textContent = this.description;

        const projectProfile = document.createElement("a");
        projectProfile.classList.add("project-profile");
        projectProfile.href = this.profileLink;
        projectProfile.target = "_blank";
        const projectProfileImage = document.createElement("img");
        projectProfileImage.classList.add("project-profile-icon");
        projectProfileImage.alt = "Open artist profile";
        projectProfileImage.src = userIcon;
        projectProfile.appendChild(projectProfileImage);
        
        const projectPreview = document.createElement("a");
        projectPreview.classList.add("project-preview");
        projectPreview.href = this.previewLink;
        projectPreview.target = "_blank";
        const projectPreviewImage = document.createElement("img");
        projectPreviewImage.classList.add("project-preview-icon");
        projectPreviewImage.alt = "Open artwork page";
        projectPreviewImage.src = previewIcon;
        projectPreview.appendChild(projectPreviewImage);

        projectDetails.appendChild(projectHeading);
        projectDetails.appendChild(projectDescription);
        projectDetails.appendChild(projectProfile);
        projectDetails.appendChild(projectPreview);

        parentContainer.appendChild(projectImage);
        parentContainer.appendChild(projectDetails);

        return parentContainer;
    }
}

export default Project;
