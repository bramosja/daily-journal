const entryComponent = {
    createTag(elementType, journalInfo){
        let component = document.createElement(elementType);
        component.textContent = `${journalInfo}`;
        document.querySelector("section").appendChild(component);
    }
}