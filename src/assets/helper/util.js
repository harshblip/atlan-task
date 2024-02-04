// utils.js

export function filterData(data, filterOption) {
    if (filterOption === 'organization') {
        return data.filter(item => item.type === 'organization');
    } else if (filterOption === 'people') {
        return data.filter(item => item.type === 'people');
    }
    return data;
}

export function sortData(data, sortOption) {
    if (sortOption === 'likes') {
        return [...data].sort((a, b) => b.likes - a.likes);
    } else if (sortOption === 'accuracy') {
        return [...data].sort((a, b) => b.accuracy - a.accuracy);
    }
    return data;
}
