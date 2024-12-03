document.addEventListener("DOMContentLoaded", () => {
    const shareButton = document.getElementById("share-button");

    if (navigator.share) {
        shareButton.addEventListener("click", async () => {
            try {
                await navigator.share({
                    title: document.title,
                    text: "Check out this article:",
                    url: window.location.href,
                });
                console.log("Content shared successfully!");
            } catch (error) {
                console.error("Error sharing content:", error);
            }
        });
    } else {
        // Hide the share button if Web Share API is not supported
        shareButton.style.display = "none";
    }
});
