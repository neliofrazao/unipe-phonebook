const options = {
  mode: 'cors',
  headers: {
    'Content-type': 'application/json',
    credentials: 'include',
  },
}

const fetchData = (url, fetchOptions) => {
  const data = fetch(url, fetchOptions)
  .then(response => response.json())
  .catch(err => { console.error('Failed retrieving information', err)})


  return data
}

const get = url => {
  const optionsGet = {
    ...options,
    method: 'GET',
  }
  
  const data = fetchData(url, optionsGet)
  
  return data
}

export default { get }