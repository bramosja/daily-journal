
const journalEntry = [
    {
        date: "07/24/2018",
        concept: "Array methods",
        entry: "We learned about 4 different array methods today. forEach made sense, but the others still confuse me.",
        mood: "Ok"
    },
    {
        date: "12/10/2018",
        concept: "For loops",
        entry: "We discussed for loops today. I feel confident in my ability to apply this method.",
        mood: "Positive"
    },
    {
        date: "11/28/2018",
        concept: "Inner HTML",
        entry: "Today we discussed adding to the DOM using inner HTML. Initially I felt good about it, but after discussing textContent as an alternative I started ",
        mood: "Ok"
    }
];

const container = document.createElement("div");
let element = document.querySelector(".entryLog");
element.appendChild(container);

journalEntry.forEach(entry => {
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