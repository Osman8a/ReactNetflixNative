import data from '../data.json'

export const getAll = () => (data)

const getTwoList = json => {
    var array = json.slice(0);
    var val = Math.floor(array.length / 2);
    var newArray = array.splice(0, val);

    return [array, newArray];
}

export const getTwoItems = getTwoList(data);



