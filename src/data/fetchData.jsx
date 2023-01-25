
import Data from './logements.json'

export const fetchAll = () => {
    return Data
}

export const fetchId = (id) => {
    return Data.find(element => element.id === id)
}