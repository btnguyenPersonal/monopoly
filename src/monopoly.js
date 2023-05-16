let board = {
    players: [
        { money: 1500, doubles: 0, space: 0, turnsInJail: 0, name: 'ben' },
        { money: 1500, doubles: 0, space: 0, turnsInJail: 0, name: 'josh' },
        { money: 1500, doubles: 0, space: 0, turnsInJail: 0, name: 'isabel' },
        { money: 1500, doubles: 0, space: 0, turnsInJail: 0, name: 'mom' },
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
    if (!isNaN(parseInt(getSpace(board)))) {
        // TODO implement transfer money to owner of property if property is owned
        // TODO implement buying properties if have enough money
        console.log(getPlayer(board).name, "just bought", getProperty(board).name);
        // TDOD implement buying houses on monopolies
    } else {
        // TODO implement all the special squares you can land on
        console.log(getPlayer(board).name, "landed on", getSpace(board));
    }
}

function getPlayer(board) {
    return board.players[board.currentPlayer];
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
    getPlayer(board).space += roll.amount;
    getPlayer(board).doubles += roll.double;
    interact(board);
    calculateNextPlayer(roll.double === 1, board);
}

// TODO make a loop so the game plays until someone runs out of money
playTurn(board);
playTurn(board);
playTurn(board);
playTurn(board);
playTurn(board);
playTurn(board);
playTurn(board);
