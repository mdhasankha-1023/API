const loadData = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayData(data))
}

const displayData = countries => {
    const allCountriesData = document.getElementById('all-countries-data');
    // Use for loop
    // for(const country of countries){
    //     console.log(country)
    // }

    // use forEach
    countries.forEach(country => {
        // console.log(country.cca2)
      const newDiv = document.createElement('div');
      newDiv.classList.add('country');
      newDiv.innerHTML = `
            <h4>Name : ${country.name.common}</h4>
            <p>Capital : ${country.capital ? country.capital[0] : 'No capital'}</p>
            <button onclick="displayCountryCode('${country.cca2}')">Details</button>
      `  
      allCountriesData.appendChild(newDiv)
    })
}
const displayCountryCode = code => {
    const url = `https://restcountries.com/v3.1/alpha/${code}
    `
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetails(data))
}

const displayCountryDetails = country => {
    console.log(country[0].flags.png)
    const countryDetails = document.getElementById('country-details');
    countryDetails.innerHTML = `
            <p>Name : ${country[0].name.common}</p>
            <img src="${country[0].flags.png}">
    `
}




loadData();