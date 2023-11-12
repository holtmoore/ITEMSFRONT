const URL = "https://finalitemsbackend.onrender.com"


export const indexLoader = async () => {
    const response = await fetch(URL + "/items/")
    const items = await response.json()
    return items
}


export const showLoader = async ({params}) => {
    const response = await fetch(URL + `/items/${params.id}/`)
    const item = await response.json()
    return item
}