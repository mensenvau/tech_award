
export let ToDateFormat = (dt) => {
    const date = new Date(dt);
    const formattedDate = date.toLocaleString();

    return formattedDate
}

export let AddZero = (num) => {
    num = num.toString();
    while (num.length < 4) {
        num = '0' + num;
    }
    return num
}