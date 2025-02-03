const quotes = {
    "Success": [
        "The only limit to our realization of tomorrow is our doubts of today.",
        "Success is not final, failure is not fatal: It is the courage to continue that counts."
    ],
    "Growth": [
        "Growth is the only evidence of life.",
        "The best way to predict the future is to create it."
    ],
    "Motivation": [
        "The only way to do great work is to love what you do.",
        "Believe you can and you're halfway there."
    ],
    "Perseverance": [
        "Perseverance is not a long race; it is many short races one after the other.",
        "It does not matter how slowly you go as long as you do not stop."
    ]
};

// Function to generate a personalized quote
function generateQuote() {
    const goalInput = document.getElementById("goalInput").value.trim().toLowerCase();
    const quoteSection = document.getElementById("quote");

    if (goalInput === "") {
        quoteSection.innerText = "Please enter a goal to receive a motivational quote!";
        return;
    }

    let quoteCategory = "Motivation"; // Default category
    if (goalInput.includes("success")) quoteCategory = "Success";
    else if (goalInput.includes("growth")) quoteCategory = "Growth";
    else if (goalInput.includes("perseverance")) quoteCategory = "Perseverance";

    const randomQuote = getRandomQuote(quotes[quoteCategory]);
    quoteSection.innerText = randomQuote;
}

// Function to pick a random quote
function getRandomQuote(category) {
    const randomIndex = Math.floor(Math.random() * category.length);
    return category[randomIndex];
}
