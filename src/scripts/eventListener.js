const eventListener = {
    submitJournalEntryClick(){
        // target the submit button
        let button = document.getElementById("submitButton");
        button.addEventListener("click", eventListener.submitEventListener);
    },
    submitEventListener(){
        // get user input
        let dateField = document.getElementById("journalDate").value;
        let conceptField = document.getElementById("inputConcepts").value;
        let entryField = document.getElementById("journalArea").value;
        let moodField = document.getElementById("moodElements").value;

        // add user input into an object that will be passed into the database
        let newEntry = {
            date: dateField,
            concept: conceptField,
            entry: entryField,
            mood: moodField
        };

        // call function that passes input into database
        data.addToJournalEntry(newEntry);
    }
};