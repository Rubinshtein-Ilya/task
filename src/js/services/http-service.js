const fetchData = async (url) => {
    let res = await fetch(url)

    if(!res.ok) {
        throw new Error(`Could not fetch data, status ${res.status}`)
    }

    

    return res.json()
}

export default fetchData