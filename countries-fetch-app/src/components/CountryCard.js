// CountryCard.js
export function createCountryCard(country) {
    const card = document.createElement("div");
    card.classList.add("country");
  
    card.innerHTML = `
    <div class="flag" style="background-image: url('${country.flags.svg}')"></div>
    <p>${country.name.common}</p>
    <p>Population: <span>${country.population.toLocaleString()}</span></p>
    <p>Region: <span>${country.region}</span></p>
    `;
  
    return card;
}
