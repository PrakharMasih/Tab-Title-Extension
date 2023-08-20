document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const getTitleButton = document.getElementById("getTitleButton");
    const titleContainer = document.getElementById("titleContainer");

    darkModeToggle.addEventListener("change", function () {
        document.body.classList.toggle("dark-mode", darkModeToggle.checked);
    });

    getTitleButton.addEventListener("click", function () {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            const tabTitle = tabs[0].title;
            titleContainer.textContent = "Current Tab Title: " + tabTitle;
        });
    });
});