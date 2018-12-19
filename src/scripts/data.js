// oject with methods that will access the desired apis
const data = {
    journalEntry() {
        return fetch("http://localhost:3000/journalEntry")
        .then(response => response.json())
    }
}
