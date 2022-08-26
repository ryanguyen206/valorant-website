export const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPIDKEY,
        'X-RapidAPI-Host': 'valorant-agents-maps-arsenal.p.rapidapi.com'
    }
    
}

export const fetchData = async (url, options) => {
    const response = await fetch(url,options)
    const data = await response.json()
    return data
}
