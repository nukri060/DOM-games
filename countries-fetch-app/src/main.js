import { fetchCountries } from "./api/fetchCountries.js";
import { createCountryCard } from "./components/CountryCard.js";

const container = document.querySelector(".countries-container");

fetchCountries()
    .then(countries => {
        countries.forEach(country => {
            const card = createCountryCard(country);
            container.appendChild(card);
        });
    })
    .catch(err => {
        console.error("Failed to fetch countries:", err.message);
    });
