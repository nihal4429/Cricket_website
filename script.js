// Array of API keys
const apiKeys = [
  "18a8090d4b7bd6961db06b638af4e968",
  "7d33e162cf7bc54701c48f5d7ab1ed6d",
  "ed37cfe0561be2af124bb906cba10b35",
  "b35e31cc33edd2bac5fd4f5812b09e49",
  "b13dcb66ec198c67fc3c1e335462fd76",
  "2c566418f1fdd735d35d4524f14ec025",
  "33d9253a1c715996884d1e75d32e5bab",
  "6528b5364d17ada564b13b6600d5cdbd",
  "48a88b49232984c98c356034f74657bd",
  "71b03dd182278c91529c147f1593a46b",
  "a132ab541faa22e431c878fc9102eeeb"
];

let currentApiKeyIndex = 0; // Index of the currently used API key
let apiUrl = `https://gnews.io/api/v4/search?q=cricket&lang=en&country=in&topic=sports&token=${apiKeys[currentApiKeyIndex]}`;

// Function to make the API request and populate the marquee element
function fetchCricketNews() {
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      // Process the received data
      const articles = data.articles;
      let newsMarquee = document.getElementById("newsMarquee"); // Get the marquee element

      for (let i = 0; i < articles.length; i++) {
        const title = articles[i].title.toLowerCase();
        const description = articles[i].description.toLowerCase();
        const url = articles[i].url;

        // Filter only cricket-related news
        if (title.includes("cricket") || description.includes("cricket")) {
          // Create a link element for the news
          let link = document.createElement("a");
          link.href = url;
          link.target = "_blank";
          link.textContent = articles[i].title;

          // Append the link to the marquee element
          newsMarquee.appendChild(link);
        }
      }

      // Start the marquee animation after adding the news
      newsMarquee.start();
    })
    .catch(error => {
      console.log("Error fetching cricket news:", error);
      // Switch to the next API key if an error occurs
      currentApiKeyIndex = (currentApiKeyIndex + 1) % apiKeys.length;
      apiUrl = `https://gnews.io/api/v4/search?q=cricket&lang=en&country=in&topic=sports&token=${apiKeys[currentApiKeyIndex]}`;
      // Retry fetching cricket news with the new API key
      fetchCricketNews();
    });
}

// Call the function to fetch cricket news and populate the marquee element
fetchCricketNews();
