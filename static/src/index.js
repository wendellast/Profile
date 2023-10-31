// Get all the tabs
const tabs = document.querySelectorAll(".tab");

// Loop through the tabs
tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        if (tab.classList.contains("selected")) {
            return;
        }
        selectTab(tab);
        showTab(tab);
    });
});

// Function to select the tab
function selectTab(tab) {
    // Get the currently selected tab
    const selectedTab = document.querySelector(".tab.selected");

    // Remove the "selected" class from the currently selected tab
    if (selectedTab) {
        selectedTab.classList.remove("selected");
    }

    // Add the "selected" class to the clicked tab
    tab.classList.add("selected");
}


function showTab(tab) {

    const selectedInformation = document.querySelector(".information.selected");

    if (selectedInformation) {
        selectedInformation.classList.remove("selected");
    }

    // Get the id of the information for the clicked tab
    const informationId = `information-${tab.id}`;

    // Get the information for the clicked tab
    const information = document.getElementById(informationId);

    // Add the "selected" class to the information for the clicked tab
    information.classList.add("selected");
}
