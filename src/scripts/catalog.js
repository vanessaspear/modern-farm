
export const catalog = (harvest) => {
    let htmlString = "";
    for (const food of harvest) {
        htmlString += `<section class="plant">${food.type}</section>`
    }
    return htmlString;
}