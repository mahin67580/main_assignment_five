function updateDate() {
    const dateElement = document.getElementById('date');
    const today = new Date();
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    dateElement.textContent = today.toLocaleDateString('en-US', options);
}
updateDate();