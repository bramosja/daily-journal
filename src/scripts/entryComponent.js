const entryComponent = {
    createTag(elementType, journalInfo){

        // create tags for every journal component
        let component = document.createElement(elementType);

        // add content string
        component.textContent = `${journalInfo}`;

        // attach the tag to section
        document.querySelector("section").appendChild(component);
    }
}