// access the data and to convert the response into JSON 
export function fetchGrants() {
  return fetch('https://www.sbir.gov/api/solicitations.json?keyword=sbir')
    .then(response => response.json())
}