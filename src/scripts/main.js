// call function that will create the container for the journal entries
entriesDOM.createSectionContainer();
// call function that will create and apply HTML elements for each journal entry
entriesDOM.populateTheDom();
// add event listener to the submit button
eventListener.submitJournalEntryClick();