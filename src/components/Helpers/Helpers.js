

const getCovidData = async (key) => {
    let total = await getTotal(key, "covid-19-data.p.rapidapi.com", 'https://covid-19-data.p.rapidapi.com/country/code?format=json&code=us', false)
    let local = await getTotal(key, 'covid-19-statistics.p.rapidapi.com', 'https://covid-19-statistics.p.rapidapi.com/reports?iso=USA&region_name=US&q=US%20Florida', true)
    return [extractCovidData(total), extractCovidData(local)]
} 

const getTotal = async (key, host, link, local) => {
    let response = fetch(link, {
        "headers": {
            "x-rapidapi-host": host,
            "x-rapidapi-key": key
        }
    })
    let json = await response
     .then(res =>  res.json())
    let output 
    local ? output = json.data[0] : output = json[0]
    return output
}

const extractCovidData = (json) => {
  let output = {
      confirmed: json.confirmed,
      critical: json.critical || Math.floor(json.confirmed_diff / 5),
      deaths: json.deaths,
      recovered: json.recovered, 
      lastUpdate: json.lastUpdate || json.last_update,
      fatalityRate: json.fatality_rate || 0.01
  }
  return output
}

export { getCovidData }