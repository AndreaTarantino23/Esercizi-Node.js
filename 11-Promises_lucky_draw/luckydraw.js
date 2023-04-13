const playersArray = ["Joe", "Carolina", "Sabrina"];

function luckyDraw(player) {
    return new Promise((resolve, reject) => {
        const win = Boolean(Math.round(Math.random()));

        process.nextTick(() => {
            if (win) {
                resolve(`${player} won a prize in the draw!`);
            } else {
                reject(new Error(`${player} lost the draw.`));
            }
        });
    });
}

const playRound = () =>
    playersArray.forEach((el) =>
        luckyDraw(el)
            .then(function (result) {
                console.log(result);
            })
            .catch(function (error) {
                console.error(error);
            })
    );

playRound();