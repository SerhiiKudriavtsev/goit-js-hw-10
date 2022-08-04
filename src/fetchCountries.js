export default function fetchCountries(name) {
  return fetch(`https://restcountries.com/v2/name/${name}?fields=name,capital,population,flag,languages`)
    .then(response => {
      // console.log('=====', response.json());
      return response.json();
  })
}