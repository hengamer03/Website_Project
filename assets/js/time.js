document.addEventListener('DOMContentLoaded', function() {
    const dateElement = document.getElementById('date');
    if (dateElement) {
        const d = new Date();
        dateElement.innerHTML = `Today's date is ${d.toDateString()}`;
    } else {
        console.error("Date element not found in the document.");
    }
});
