console.log(data);
// create container that will hold all of the journal entries and nest it into the existing article tag
const container = document.createElement("div");
let element = document.querySelector(".entryLog");
element.appendChild(container);

// add journal entries to the dom from my local json database: entries.json
data.journalEntry().then( eachEntry => {
    eachEntry.forEach(entry => {
        // create the html tags that will contain all of the journal entry items
        const section = document.createElement("section");
        const h1 = document.createElement("h1");
        const h2 = document.createElement("h2");
        const paragraph = document.createElement("p")
        const paragraphMood = document.createElement("p")

        // add the section to the existing container

        container.appendChild(section);

        // add text content to each element and add it to the section
        h1.textContent = entry.date;
        section.appendChild(h1);
        h2.textContent = entry.concept;
        section.appendChild(h2);
        paragraph.textContent = entry.entry;
        section.appendChild(paragraph);
        paragraphMood.textContent = entry.mood;
        section.appendChild(paragraphMood);
    });
});