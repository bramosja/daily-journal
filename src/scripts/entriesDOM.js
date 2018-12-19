const entriesDOM = {

}
// create container that will hold all of the journal entries and nest it into the existing article tag
const container = document.createElement("div");
let element = document.querySelector(".entryLog");
element.appendChild(container);

// add journal entries to the dom from my local json database: entries.json
data.journalEntry().then( eachEntry => {
    eachEntry.forEach(entry => {
        // create section for each journal entry
        const section = document.createElement("section");
        container.appendChild(section);

        // add the section to the existing container
        entryComponent.createTag("h1", entry.date);
        entryComponent.createTag("h3", entry.concept);
        entryComponent.createTag("p", entry.entry);
        entryComponent.createTag("p", entry.mood);

    });
});