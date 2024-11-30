let board = {
    players: [
        { money: 1500, doubles: 0, space: 0, turnsInJail: 0, name: 'B' },
        { money: 1500, doubles: 0, space: 0, turnsInJail: 0, name: 'J' },
        { money: 1500, doubles: 0, space: 0, turnsInJail: 0, name: 'I' },
        { money: 1500, doubles: 0, space: 0, turnsInJail: 0, name: 'M' },
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

function interact(board) {
    const player = getPlayer(board);
    if (isProperty(getSpace(board))) {
        const property = getProperty(board);
        if (isOwned(property)) {
            // TODO transer rent from player to owner
        } else {
            // TODO buy if have enough money and transer money to bank
        }
        // TODO implement buying houses on monopolies
        console.log(player.name, "landed on", property);
    } else {
        // TODO implement all the special squares you can land on
        console.log(player.name, "landed on", getSpace(board));
    }
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
    if (!double) {
        getPlayer(board).doubles = 0;
        board.currentPlayer += 1;
        if (board.currentPlayer === board.players.length) {
            board.currentPlayer = 0;
        }
    }
    // TODO implement speeding 3 times goes to jail
}

function playTurn(board) {
    const roll = getDiceRoll();
    console.log(getPlayer(board).name, "rolled", roll.amount);
    if (roll.double) {
        console.log(getPlayer(board).name, "got doubles!");
    }
    getPlayer(board).space += roll.amount;
    getPlayer(board).doubles += roll.double;
    interact(board);
    calculateNextPlayer(roll.double === 1, board);
}

function getDisplayMoney(board, playerNumber) {
    return board.players[playerNumber].money.toString().padStart(7, ' ');
}

function getDisplayPlayersOnSpace(board, space) {
    let output = '';
    for (let i = 0; i < 4; i++) {
        if (board.players[i].space === space) {
            output += board.players[i].name;
        }
    }
    return output.padStart(3, ' ');
}

function renderBoard(board) {
    console.log(`;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;`);
    console.log(`;     |   |   |   |   |   |   |   |   |   |     ;`);
    console.log(`; ${getDisplayPlayersOnSpace(board, 10)} |${getDisplayPlayersOnSpace(board, 11)}|${getDisplayPlayersOnSpace(board, 12)}|${getDisplayPlayersOnSpace(board, 13)}|${getDisplayPlayersOnSpace(board, 14)}|${getDisplayPlayersOnSpace(board, 15)}|${getDisplayPlayersOnSpace(board, 16)}|${getDisplayPlayersOnSpace(board, 17)}|${getDisplayPlayersOnSpace(board, 18)}|${getDisplayPlayersOnSpace(board, 19)}| ${getDisplayPlayersOnSpace(board, 20)} ;`);
    console.log(`;_____|___|___|___|___|___|___|___|___|___|_____;`);
    console.log(`; ${getDisplayPlayersOnSpace(board, 9)} |                                   | ${getDisplayPlayersOnSpace(board, 21)} ;`);
    console.log(`;_____|                                   |_____;`);
    console.log(`; ${getDisplayPlayersOnSpace(board, 8)} |                                   | ${getDisplayPlayersOnSpace(board, 22)} ;`);
    console.log(`;_____|                                   |_____;`);
    console.log(`; ${getDisplayPlayersOnSpace(board, 7)} |                                   | ${getDisplayPlayersOnSpace(board, 23)} ;`);
    console.log(`;_____|                                   |_____;`);
    console.log(`; ${getDisplayPlayersOnSpace(board, 6)} |              monopoly             | ${getDisplayPlayersOnSpace(board, 24)} ;`);
    console.log(`;_____|                                   |_____;`);
    console.log(`; ${getDisplayPlayersOnSpace(board, 5)} |            B: $${getDisplayMoney(board, 0)}            | ${getDisplayPlayersOnSpace(board, 25)} ;`);
    console.log(`;_____|            J: $${getDisplayMoney(board, 1)}            |_____;`);
    console.log(`; ${getDisplayPlayersOnSpace(board, 4)} |            I: $${getDisplayMoney(board, 2)}            | ${getDisplayPlayersOnSpace(board, 26)} ;`);
    console.log(`;_____|            M: $${getDisplayMoney(board, 3)}            |_____;`);
    console.log(`; ${getDisplayPlayersOnSpace(board, 3)} |                                   | ${getDisplayPlayersOnSpace(board, 27)} ;`);
    console.log(`;_____|                                   |_____;`);
    console.log(`; ${getDisplayPlayersOnSpace(board, 2)} |                                   | ${getDisplayPlayersOnSpace(board, 28)} ;`);
    console.log(`;_____|                                   |_____;`);
    console.log(`; ${getDisplayPlayersOnSpace(board, 1)} |                                   | ${getDisplayPlayersOnSpace(board, 29)} ;`);
    console.log(`;_____|___________________________________|_____;`);
    console.log(`;     |   |   |   |   |   |   |   |   |   |     ;`);
    console.log(`; ${getDisplayPlayersOnSpace(board, 0)} |${getDisplayPlayersOnSpace(board, 39)}|${getDisplayPlayersOnSpace(board, 38)}|${getDisplayPlayersOnSpace(board, 37)}|${getDisplayPlayersOnSpace(board, 36)}|${getDisplayPlayersOnSpace(board, 35)}|${getDisplayPlayersOnSpace(board, 34)}|${getDisplayPlayersOnSpace(board, 33)}|${getDisplayPlayersOnSpace(board, 32)}|${getDisplayPlayersOnSpace(board, 31)}| ${getDisplayPlayersOnSpace(board, 30)} ;`);
    console.log(`;_____|___|___|___|___|___|___|___|___|___|_____;`);
    console.log(`;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;`);
}

renderBoard(board);

// TODO make a loop so the game plays until someone runs out of money
playTurn(board);
renderBoard(board);
playTurn(board);
renderBoard(board);
playTurn(board);
renderBoard(board);
playTurn(board);
renderBoard(board);
playTurn(board);
renderBoard(board);
playTurn(board);
renderBoard(board);
playTurn(board);
renderBoard(board);
