document.addEventListener("DOMContentLoaded", function () {
    const categorySelect = document.getElementById("subject");
    const startDemoBtn = document.getElementById("start-demo");
    const responseDisplay = document.getElementById("response");

    if (!categorySelect) {
        console.error("Category Select element not found!");
        return;
    }

    console.log("Category Select:", categorySelect);
    console.log("Start Demo Button:", startDemoBtn);
    console.log("Response Display:", responseDisplay);

    startDemoBtn.addEventListener("click", function () {
        console.log("Start Demo button clicked!");
        const selectedCategory = categorySelect.value;
        console.log("Selected Category:", selectedCategory);

        const userQuestion = prompt(`Ask me anything about ${selectedCategory}:`);

        if (userQuestion) {
            responseDisplay.textContent = `Thinking... 🤔`;

            setTimeout(() => {
                responseDisplay.textContent = `Great question! Here's something about ${selectedCategory}: "${userQuestion}"`;
            }, 1000);
        } else {
            responseDisplay.textContent = "Ask me a question to start learning!";
        }
    });
});
