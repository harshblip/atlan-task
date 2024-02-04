// utils.js
export function filterData(tempData, filterOption) {
    if (filterOption === 'Organization') {
        return tempData.filter(item => item.type === 'Organization');
    }
    if (filterOption === 'Person') {
        return tempData.filter(item => item.type === 'Person');
    }
    return tempData;
}

export function sortData(tempData, sortOption) {
    if (sortOption === 'Likes') {
        return tempData.sort((a, b) => b.likes - a.likes);
    }
    if (sortOption === 'Accuracy') {
        return tempData.sort((a, b) => b.accuracy - a.accuracy);
    }
    return tempData;
}