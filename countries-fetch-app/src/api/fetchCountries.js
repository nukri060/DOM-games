// fetchCountries.js
export async function fetchCountries() {
    const url = "https://restcountries.com/v3.1/all";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const countries = await response.json();
        return countries;
    } catch (error) {
        console.error("Error fetching countries:", error.message);
        return []; 
    }
}
