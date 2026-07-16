
const form = document.querySelector(".search-form");
const searchInput = document.getElementById("search");
const loading = document.getElementById("loading");
const emptyState = document.querySelector(".empty-state");
const gridContainer = document.querySelector(".grid-container");
const menuItems = document.querySelectorAll(".box");
const networkStatus = document.getElementById("network-status");

// Show loading message when page opens
window.addEventListener("load", () => {
    loading.style.display = "block";

    setTimeout(() => {
        loading.style.display = "none";
    }, 1000);
});

// Search menu
form.addEventListener("submit", (event) => {
    event.preventDefault();

    loading.style.display = "block";

    setTimeout(() => {
        const searchText = searchInput.value.trim().toLowerCase();
        let found = false;

        menuItems.forEach((item) => {
            const itemName = item.querySelector("h2").textContent.toLowerCase();

            if (itemName.includes(searchText)) {
                item.style.display = "block";
                found = true;
            } else {
                item.style.display = "none";
            }
        });

        loading.style.display = "none";

        if (found) {
            emptyState.style.display = "none";
        } else {
            emptyState.style.display = "block";
        }
    }, 500);
});

// Show network status
function checkNetwork() {
    if (navigator.onLine) {
        networkStatus.hidden = true;
    } else {
        networkStatus.hidden = false;
    }
}

window.addEventListener("online", checkNetwork);
window.addEventListener("offline", checkNetwork);

checkNetwork();