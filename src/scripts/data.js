// oject with methods that will access the desired apis
const data = {
    getJournalEntry() {
        return fetch("http://localhost:8088/journalEntry")
        .then(response => response.json())
    },
    addToJournalEntry(newPost) {
        return fetch("http://localhost:8088/journalEntry", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPost)
        })
        .then(response => response.json())
    }
};
