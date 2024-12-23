let board = {
    players: [
        { money: 1500, doubles: 0, space: 0, turnsInJail: 0, name: 'B', number: 0},
        { money: 1500, doubles: 0, space: 0, turnsInJail: 0, name: 'J', number: 1},
        { money: 1500, doubles: 0, space: 0, turnsInJail: 0, name: 'I', number: 2},
        { money: 1500, doubles: 0, space: 0, turnsInJail: 0, name: 'M', number: 3},
    ],
    currentPlayer: 0,
    spaces: [
        "Go",
        "0",
        "Community Chest",
        "1",
        "Income Tax",
        "22",
        "2",
        "Chance",
        "3",
        "4",
        "Jail",
        "5",
        "26",
        "6",
        "7",
        "23",
        "8",
        "Community Chest",
        "9",
        "10",
        "Free Parking",
        "11",
        "Chance",
        "12",
        "13",
        "24",
        "14",
        "15",
        "27",
        "16",
        "Go To Jail",
        "17",
        "18",
        "Community Chest",
        "19",
        "25",
        "Chance",
        "20",
        "Luxury Tax",
        "21",
    ],
    properties: [
        { color: 0, price: 60, houseCost: 50, numHouses: 0, owner: -1, name: "Mediterranian Ave", rent: [2,10,30,90,160,250] }, // 0
        { color: 0, price: 60, houseCost: 50, numHouses: 0, owner: -1, name: "Baltic Ave", rent: [4,20,60,180,320,450] }, // 1
        { color: 1, price: 100, houseCost: 50, numHouses: 0, owner: -1, name: "Oriental Ave", rent: [6,30,90,270,400,550] }, // 2
        { color: 1, price: 100, houseCost: 50, numHouses: 0, owner: -1, name: "Vermont Ave", rent: [6,30,90,270,400,550] }, // 3
        { color: 1, price: 120, houseCost: 50, numHouses: 0, owner: -1, name: "Conneticut Ave", rent: [8,40,100,300,450,600] }, // 4
        { color: 2, price: 140, houseCost: 100, numHouses: 0, owner: -1, name: "St. Charles Place", rent: [10,50,150,450,625,750] }, // 5
        { color: 2, price: 140, houseCost: 100, numHouses: 0, owner: -1, name: "States Ave",  rent: [10,50,150,450,625,750] }, // 6
        { color: 2, price: 160, houseCost: 100, numHouses: 0, owner: -1, name: "Virginia Ave",  rent: [12,60,180,500,700,900] }, // 7
        { color: 3, price: 180, houseCost: 100, numHouses: 0, owner: -1, name: "St. James Place",  rent: [14,70,200,550,750,950] }, // 8
        { color: 3, price: 180, houseCost: 100, numHouses: 0, owner: -1, name: "Tennessee Ave",  rent: [14,70,200,550,750,950] }, // 9
        { color: 3, price: 200, houseCost: 100, numHouses: 0, owner: -1, name: "New York Ave",  rent: [16,80,220,600,800,1000] }, // 10
        { color: 4, price: 220, houseCost: 150, numHouses: 0, owner: -1, name: "Kentucky Ave",  rent: [18,90,250,700,875,1050] }, // 11
        { color: 4, price: 220, houseCost: 150, numHouses: 0, owner: -1, name: "Indiana Ave",  rent: [18,90,250,700,875,1050] }, // 12
        { color: 4, price: 240, houseCost: 150, numHouses: 0, owner: -1, name: "Illinois Ave",  rent: [20,100,300,750,925,1100] }, // 13
        { color: 5, price: 260, houseCost: 150, numHouses: 0, owner: -1, name: "Atlantic Ave",  rent: [22,110,330,800,975,1150] }, // 14
        { color: 5, price: 260, houseCost: 150, numHouses: 0, owner: -1, name: "Ventor Ave",  rent: [22,110,330,800,975,1150] }, // 15
        { color: 5, price: 280, houseCost: 150, numHouses: 0, owner: -1, name: "Marvin Gardens",  rent: [24,120,360,850,1025,1200] }, // 16
        { color: 6, price: 300, houseCost: 200, numHouses: 0, owner: -1, name: "Pacific Ave",  rent: [26,130,390,900,1100,1275] }, // 17
        { color: 6, price: 300, houseCost: 200, numHouses: 0, owner: -1, name: "North Carolina Ave",  rent: [26,130,390,900,1100,1275] }, // 18
        { color: 6, price: 320, houseCost: 200, numHouses: 0, owner: -1, name: "Pennsylvania Ave",  rent: [28,150,450,1000,1200,1400] }, // 19
        { color: 7, price: 350, houseCost: 200, numHouses: 0, owner: -1, name: "Park Place",  rent: [35,175,500,1100,1300,1500] }, // 20
        { color: 7, price: 400, houseCost: 200, numHouses: 0, owner: -1, name: "Boardwalk",  rent: [50,200,600,1400,1700,2000] }, // 21
        { color: 8, price: 200, houseCost: undefined, numHouses: 0, owner: -1, name: "Reading Railroad",  }, // 22
        { color: 8, price: 200, houseCost: undefined, numHouses: 0, owner: -1, name: "Pennsylvania Railroad",  }, // 23
        { color: 8, price: 200, houseCost: undefined, numHouses: 0, owner: -1, name: "B&0 Railroad",  }, // 24
        { color: 8, price: 200, houseCost: undefined, numHouses: 0, owner: -1, name: "Short Line",  }, // 25
        { color: 9, price: 150, houseCost: undefined, numHouses: 0, owner: -1, name: "Electric Company",  }, // 26
        { color: 9, price: 150, houseCost: undefined, numHouses: 0, owner: -1, name: "Water Works",  }, // 27
    ],
}

function getDiceRoll() {
    const dice1 =  1 + Math.floor(Math.random() * 6);
    const dice2 =  1 + Math.floor(Math.random() * 6);
    return { double: dice1 === dice2 ? 1 : 0, amount: dice1 + dice2 };
}

function buyProperty(property, player) {
    if (player.money < property.price) {
        throw new Error("player does not have enough money", property, player);
    }
    player.money -= property.price;
    property.owner = player.number;
}

function isBankrupt(board) {
    if (board.players.filter(player => player.money < 0).length > 0) {
        return true;
    }
    return false;
}

function bankrupt(board) {
    const player = getPlayer(board)
    if (player.money < 0) {
        board.properties.forEach(property => {
            if (property.owner === player.number) {
                property.owner = -1;
                property.numHouses = 0;
            }
        });
        board.players = board.players.filter(p => p.name !== player.name)
    }
}

// Need to consider buying houses logic (buying until negative money) as well as mortgaging/selling houses to get out of bankrupcy before losing.

function getRentAmount(property, rollAmount) {
    if (property.houseCost === undefined) {
        if (property.color === 8) { // Railroad
            const numRailroadsOwned = board.properties.filter(p => p.color === 8 && p.owner === property.owner).length;
            const rent = [0, 25, 50, 100, 200];
            return rent[numRailroadsOwned];
        }
        if (property.color === 9) { // Utilities
            const numUtilitiesOwned = board.properties.filter(p => p.color === 9 && p.owner === property.owner).length;
            return (numUtilitiesOwned === 2 ? 10 : 4) * rollAmount;
        }
    }
    return property.rent[property.numHouses];
}

function transferRent(player, owner, rent) {
    player.money -= rent;
    owner.money += rent;
}

function getMonopolies(board, player) {
    let colors = [];
    for (let color = 0; color <= 7; color++) {
        if (board.properties.filter(property => property.color === color).every(property => property.owner === player.number)) {
            colors.push(color);
        }
    }
    return colors;
}

function buyHouse(property, player) {
    if (property.houseCost > player.money) {
        throw new Error('player does not have enough money for house');
    }
    property.numHouses++;
    player.money -= property.houseCost;
}

function buyHouses(board, monopolyColor, player) {
    const properties = board.properties.filter(property => property.color === monopolyColor);
    for (let tries = 0; tries < 4; tries++) {
        for (let i = 0; i < properties.length; i++) {
            if (properties[i].numHouses < 4 && player.money > properties[i].houseCost) {
                buyHouse(properties[i], player);
            }
        }
    }
}

function interact(board, rollAmount) {
    const player = getPlayer(board);
    if (isProperty(getSpace(board))) {
        const property = getProperty(board);
        console.log(player.name, "landed on", property.name);
        if (isOwned(property)) {
            transferRent(player, board.players.find(player => property.owner === player.number), getRentAmount(property, rollAmount));
            console.log(player.name, "paid", board.players.find(player => property.owner === player.number).name, getRentAmount(property, rollAmount));
        } else {
            if (player.money > property.price) {
                buyProperty(property, player);
            }
            console.log(player.name, "bought", property.name);
        }
        const monopolies = getMonopolies(board, player);
        if (monopolies.length > 0) {
            monopolies.forEach((monopolyColor) => {
                buyHouses(board, monopolyColor, player);
            });
        }
    } else {
        console.log(player.name, "landed on", getSpace(board));
        const space = getSpace(board);
        if (space === "Income Tax" || space === "Luxury Tax") {
            console.log(player.name, "lost 200 dollars");
            player.money -= 200;
        }
        // TODO Chance
            // 1. Advance to Boardwalk.
            // 2. Advance to Go (Collect $200).
            // 3. Advance to Illinois Avenue. If you pass Go, collect $200.
            // 4. Advance to St. Charles Place. If you pass Go, collect $200.
            // 5. Advance to the nearest Railroad. If unowned, you may buy it from the Bank. If owned, pay wonder twice the rental to which they are otherwise entitled.
            // 6. Advance to the nearest Railroad. If unowned, you may buy it from the Bank. If owned, pay wonder twice the rental to which they are otherwise entitled.
            // 7. Advance token to nearest Utility. If unowned, you may buy it from the Bank. If owned, throw dice and pay owner a total ten times amount thrown.
            // 8. Bank pays you dividend of $50.
            // 9. Get Out of Jail Free.
            // 10. Go Back 3 Spaces.
            // 11. Go to Jail. Go directly to Jail, do not pass Go, do not collect $200.
            // 12. Make general repairs on all your property. For each house pay $25. For each hotel pay $100.
            // 13. Speeding fine $15.
            // 14. Take a trip to Reading Railroad. If you pass Go, collect $200.
            // 15. You have been elected Chairman of the Board. Pay each player $50.
            // 16. Your building loan matures. Collect $150
        // TODO Community chest
            // 1. Advance to Go (Collect $200)
            // 2. Bank error in your favor. Collect $200
            // 3. Doctor's fee. Pay $50
            // 4. From sale of stock you get $50
            // 5. Get Out of Jail Free
            // 6. Go to Jail. Go directly to jail, do not pass Go, do not collect $200
            // 7. Holiday fund matures. Receive $100
            // 8. Income tax refund. Collect $20
            // 9. It is your birthday. Collect $10 from every player
            // 10. Life insurance matures. Collect $100
            // 11. Pay hospital fees of $100
            // 12. Pay school fees of $50
            // 13. Receive $25 consultancy fee
            // 14. You are assessed for street repair. $40 per house. $115 per hotel
            // 15. You have won second prize in a beauty contest. Collect $10
            // 16. You inherit $100
        if (space === "Go To Jail") {
            goToJail(board, player);
        }
    }
}

function goToJail(board, player) {
    player.turnsInJail = 3;
    player.space = 10; // JAIL
}

function isOwned(property) {
    return property.owner !== -1;
}

function getPlayer(board) {
    return board.players[board.currentPlayer];
}

function isProperty(space) {
    return !isNaN(parseInt(space));
}

function getSpace(board) {
    return board.spaces[getPlayer(board).space];
}

function getProperty(board) {
    return board.properties[parseInt(getSpace(board))];
}

function calculateNextPlayer(double, board) {
    const player = getPlayer(board);
    if (isBankrupt(board)) {
        bankrupt(board);
    } else if (!double) {
        player.doubles = 0;
        board.currentPlayer += 1;
    }
    if (board.currentPlayer === board.players.length) {
        board.currentPlayer = 0;
    }
    // TODO implement speeding 3 times goes to jail
}

function playTurn(board) {
    const roll = getDiceRoll();
    const player = getPlayer(board);
    console.log(player.name, "rolled", roll.amount);
    if (roll.double) {
        console.log(player.name, "got doubles!");
    }
    if (player.turnsInJail === 0) {
        if (player.doubles === 2 && roll.double === 1) {
            console.log(player.name, "was caught speeding");
            goToJail(board, player);
        }
        player.space += roll.amount;
        if (player.space >= 40) {
            console.log(player.name, "passed go and got $200!");
            player.money += 200;
            player.space %= 40;
        }
        player.doubles += roll.double;
        interact(board, roll.amount);
    } else {
        if (roll.double === 1) {
            console.log(player.name, "got free!");
            player.turnsInJail = 0;
        } else {
            player.turnsInJail--;
        }
        console.log(player.name, "has", player.turnsInJail, "turns left in jail");
    }
    calculateNextPlayer(roll.double === 1, board);
}

function getDisplayMoney(board, playerNumber) {
    if (!board.players[playerNumber]) {
        return '0'.padStart(7, ' ');
    }
    return board.players[playerNumber].money.toString().padStart(7, ' ');
}

function getDisplayOwned(board, propertyNumber) {
    if (isOwned(board.properties[propertyNumber])) {
        return '\x1b[32m' + board.players.find(player => player.number === board.properties[propertyNumber].owner).name + '\x1b[0m';
    }
    return ' ';
}

function getDisplayName(board, playerNumber) {
    if (!board.players[playerNumber]) {
        return 'X';
    }
    return board.players[playerNumber].name;
}

function getDisplayPlayersOnSpace(board, space, visiting) {
    let output = '';
    for (let i = 0; i < board.players.length; i++) {
        const player = board.players[i];
        if (player.space === space) {
            if (visiting === true) {
                if (player.turnsInJail === 0) {
                    output += board.players[i].name;
                }
            } else if (visiting === false) {
                if (player.turnsInJail > 0) {
                    output += board.players[i].name;
                }
            } else {
                output += board.players[i].name;
            }
        }
    }
    return output.padStart(3, ' ');
}

function printMonopolies(board) {
    for (let i = 0; i < board.players.length; i++) {
        console.log(board.players[i].name, getMonopolies(board, { number: i }));
    }
}

function renderBoard(board) {
    console.log(`  ${getDisplayPlayersOnSpace(board, 10, false)}     ${getDisplayOwned(board, 5)}   ${getDisplayOwned(board, 26)}   ${getDisplayOwned(board, 6)}   ${getDisplayOwned(board, 7)}   ${getDisplayOwned(board, 23)}   ${getDisplayOwned(board, 8)}       ${getDisplayOwned(board, 9)}   ${getDisplayOwned(board, 10)}         `);
    console.log(`      |   |   |   |   |   |   |   |   |   |      `);
    console.log(`  ${getDisplayPlayersOnSpace(board, 10, true)} |${getDisplayPlayersOnSpace(board, 11)}|${getDisplayPlayersOnSpace(board, 12)}|${getDisplayPlayersOnSpace(board, 13)}|${getDisplayPlayersOnSpace(board, 14)}|${getDisplayPlayersOnSpace(board, 15)}|${getDisplayPlayersOnSpace(board, 16)}|${getDisplayPlayersOnSpace(board, 17)}|${getDisplayPlayersOnSpace(board, 18)}|${getDisplayPlayersOnSpace(board, 19)}| ${getDisplayPlayersOnSpace(board, 20)}  `);
    console.log(` _____|\x1b[35m___\x1b[0m|___|\x1b[35m___\x1b[0m|\x1b[35m___\x1b[0m|___|\x1b[38;2;255;165;0m___\x1b[0m|___|\x1b[38;2;255;165;0m___\x1b[0m|\x1b[38;2;255;165;0m___\x1b[0m|_____ `);
    console.log(`${getDisplayOwned(board, 4)} ${getDisplayPlayersOnSpace(board, 9)} \x1b[0;36m|\x1b[0m                                   \x1b[31m|\x1b[0m ${getDisplayPlayersOnSpace(board, 21)} ${getDisplayOwned(board, 11)}`);
    console.log(` _____\x1b[0;36m|\x1b[0m                                   \x1b[31m|\x1b[0m_____ `);
    console.log(`${getDisplayOwned(board, 3)} ${getDisplayPlayersOnSpace(board, 8)} \x1b[0;36m|\x1b[0m                                   | ${getDisplayPlayersOnSpace(board, 22)}  `);
    console.log(` _____\x1b[0;36m|\x1b[0m                                   |_____ `);
    console.log(`  ${getDisplayPlayersOnSpace(board, 7)} |                                   \x1b[31m|\x1b[0m ${getDisplayPlayersOnSpace(board, 23)} ${getDisplayOwned(board, 12)}`);
    console.log(` _____|                                   \x1b[31m|\x1b[0m_____ `);
    console.log(`${getDisplayOwned(board, 2)} ${getDisplayPlayersOnSpace(board, 6)} \x1b[0;36m|\x1b[0m              monopoly             \x1b[31m|\x1b[0m ${getDisplayPlayersOnSpace(board, 24)} ${getDisplayOwned(board, 13)}`);
    console.log(` _____\x1b[0;36m|\x1b[0m                                   \x1b[31m|\x1b[0m_____ `);
    console.log(`${getDisplayOwned(board, 22)} ${getDisplayPlayersOnSpace(board, 5)} |            ${getDisplayName(board, 0)}: $${getDisplayMoney(board, 0)}            | ${getDisplayPlayersOnSpace(board, 25)} ${getDisplayOwned(board, 24)}`);
    console.log(` _____|            ${getDisplayName(board, 1)}: $${getDisplayMoney(board, 1)}            |_____ `);
    console.log(`  ${getDisplayPlayersOnSpace(board, 4)} |            ${getDisplayName(board, 2)}: $${getDisplayMoney(board, 2)}            \x1b[33m|\x1b[0m ${getDisplayPlayersOnSpace(board, 26)} ${getDisplayOwned(board, 14)}`);
    console.log(` _____|            ${getDisplayName(board, 3)}: $${getDisplayMoney(board, 3)}            \x1b[33m|\x1b[0m_____ `);
    console.log(`${getDisplayOwned(board, 1)} ${getDisplayPlayersOnSpace(board, 3)} \x1b[38;2;139;69;19m|\x1b[0m                                   \x1b[33m|\x1b[0m ${getDisplayPlayersOnSpace(board, 27)} ${getDisplayOwned(board, 15)}`);
    console.log(` _____\x1b[38;2;139;69;19m|\x1b[0m                                   \x1b[33m|\x1b[0m_____ `);
    console.log(`  ${getDisplayPlayersOnSpace(board, 2)} |                                   | ${getDisplayPlayersOnSpace(board, 28)} ${getDisplayOwned(board, 27)}`);
    console.log(` _____|                                   |_____ `);
    console.log(`${getDisplayOwned(board, 0)} ${getDisplayPlayersOnSpace(board, 1)} \x1b[38;2;139;69;19m|\x1b[0m                                   \x1b[33m|\x1b[0m ${getDisplayPlayersOnSpace(board, 29)} ${getDisplayOwned(board, 16)}`);
    console.log(` _____\x1b[38;2;139;69;19m|\x1b[0m\x1b[34m___\x1b[0m_____\x1b[34m___\x1b[0m_________\x1b[32m___\x1b[0m_____\x1b[32m___\x1b[0m_\x1b[32m___\x1b[0m\x1b[33m|\x1b[0m_____ `);
    console.log(`      |   |   |   |   |   |   |   |   |   |      `);
    console.log(`  ${getDisplayPlayersOnSpace(board, 0)} |${getDisplayPlayersOnSpace(board, 39)}|${getDisplayPlayersOnSpace(board, 38)}|${getDisplayPlayersOnSpace(board, 37)}|${getDisplayPlayersOnSpace(board, 36)}|${getDisplayPlayersOnSpace(board, 35)}|${getDisplayPlayersOnSpace(board, 34)}|${getDisplayPlayersOnSpace(board, 33)}|${getDisplayPlayersOnSpace(board, 32)}|${getDisplayPlayersOnSpace(board, 31)}| ${getDisplayPlayersOnSpace(board, 30)}  `);
    console.log(`      |   |   |   |   |   |   |   |   |   |      `);
    console.log(`        ${getDisplayOwned(board, 21)}       ${getDisplayOwned(board, 20)}       ${getDisplayOwned(board, 25)}   ${getDisplayOwned(board, 19)}       ${getDisplayOwned(board, 18)}   ${getDisplayOwned(board, 17)}         `);
}

console.log('########################################################################################################################');
console.log('########################################################################################################################');
console.log('########################################################################################################################');
console.log('######################################              GAME START               ###########################################');
console.log('########################################################################################################################');
console.log('########################################################################################################################');
console.log('########################################################################################################################');
playTurn(board);
renderBoard(board);

process.stdin.on('data', (data) => {
    playTurn(board);
    renderBoard(board);
    if (board.players.length === 1) {
        console.log("GAME OVER");
        process.exit(0);
    }
});
