// access the data and to convert the response into JSON 
export function fetchDogs() {
  let bodyData = {
    'apikey': process.env.REACT_APP_RESCUE_GROUPS_API_KEY,
    'objectType': 'animals',
    'objectAction': 'publicSearch',
    'search': {
      'resultStart': '0',
      'resultLimit': '100',
      'resultSort': 'animalID',
      'resultOrder': 'asc',
      'filters':
      [
        {
          'fieldName': 'animalSpecies',
          'operation': 'equals',
          'criteria': 'Dog'
        },
        {
          'fieldName': 'animalStatus',
          'operation': 'equals',
          'criteria': 'Available'
        }
      ],
      'fields':
      [
        'animalID','animalName', 'animalBreed', 'animalDescriptionPlain', 
        'animalSex', 'animalLocation', 'animalGeneralAge', 'animalPictures'
      ]
    }
  }

  let configObject = {
    method: 'POST',
    body: JSON.stringify(bodyData)
  }

  return fetch('https://api.rescuegroups.org/http/v2.json', configObject)
    .then(response => response.json())
}