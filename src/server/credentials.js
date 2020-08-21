let days = 2
let currentTime = new Date()
let oneWeekAgo = new Date(currentTime.getTime() - (days * 24 * 60 * 60 * 1000))
let now = currentTime.toLocaleDateString().split('/')
let weekAgo = oneWeekAgo.toLocaleDateString().split('/')

module.exports = [
  {
    url : "https://community-open-weather-map.p.rapidapi.com/weather?id=2172797&units=%2522metric%2522%20or%20%2522imperial%2522&mode=xml%252C%20html&q=Key West",
    options: {
	    headers: {
		    "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
	      "x-rapidapi-key": "bd0b30ab4dmsh22d059c15a32a28p1c4cd5jsn33d087f197cf",
		    useQueryString: true
      }
    },
    path: "./data/weather.json"
  },
  {
    url : "https://covid-19-statistics.p.rapidapi.com/reports?iso=USA&region_name=US&q=US%20Florida",
    options : {
	  headers: {
	    "x-rapidapi-host": "covid-19-statistics.p.rapidapi.com",
	    "x-rapidapi-key": "bd0b30ab4dmsh22d059c15a32a28p1c4cd5jsn33d087f197cf",
		useQueryString: true
      }
    },
    path: "./data/covid-florida.json"
  },
  {
    url : "https://covid-19-data.p.rapidapi.com/country/code?format=json&code=us",
    options : {
	    headers: {
	    	"x-rapidapi-host": "covid-19-data.p.rapidapi.com",
		    "x-rapidapi-key": "bd0b30ab4dmsh22d059c15a32a28p1c4cd5jsn33d087f197cf",
		    useQueryString: true
      }
    },
    path: "./data/covid-usa.json"
  },
  {
    url: `https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=florida&facet_field=day_of_week&facet=true&begin_date=${weekAgo[2] + weekAgo[1] + weekAgo[0]}&end_date=${now[2] + now[1] + now[0]}&api-key=hHpSXf4LThosaDW9nPwBSWZELStt18hU`,
    options: {},
    path: './data/news.json'
  },
  {
    url : "https://api.twitter.com/1.1/search/tweets.json?q=Covid19&result_type=mixed&count=20&lang=en",
    options : {
	    headers: {
        "Content-Type" : "application/x-www-form-urlencoded",
        "Authorization" : "Bearer AAAAAAAAAAAAAAAAAAAAAGCAGAEAAAAA6gUQBfcT6wa2DNI0fRTbP926Gys%3D8597rffGWW5gaPiGyVQyrYTM5eQNJrZzl0zULqdb6F05l4Gryi",
	  	  useQueryString: true
      }
    },
    path: "./data/tweets/Covid19.json"
  },
  {
    url : "https://api.twitter.com/1.1/search/tweets.json?q=KeyWest&result_type=mixed&count=20&lang=en",
    options : {
	    headers: {
        "Content-Type" : "application/x-www-form-urlencoded",
        "Authorization" : "Bearer AAAAAAAAAAAAAAAAAAAAAGCAGAEAAAAA6gUQBfcT6wa2DNI0fRTbP926Gys%3D8597rffGWW5gaPiGyVQyrYTM5eQNJrZzl0zULqdb6F05l4Gryi",
	  	  useQueryString: true
      }
    },
    path: "./data/tweets/KeyWest.json"
  },
  {
    url : "https://api.twitter.com/1.1/search/tweets.json?q=Florida&result_type=mixed&count=20&lang=en",
    options : {
	    headers: {
        "Content-Type" : "application/x-www-form-urlencoded",
        "Authorization" : "Bearer AAAAAAAAAAAAAAAAAAAAAGCAGAEAAAAA6gUQBfcT6wa2DNI0fRTbP926Gys%3D8597rffGWW5gaPiGyVQyrYTM5eQNJrZzl0zULqdb6F05l4Gryi",
	  	  useQueryString: true
      }
    },
    path: "./data/tweets/Florida.json"
  }
]