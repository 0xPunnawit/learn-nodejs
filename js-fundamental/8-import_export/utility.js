exports.getRandomNumber = (max = 1) => {
    const random = Math.random();
    return Math.floor(random * max) + 1;
}

