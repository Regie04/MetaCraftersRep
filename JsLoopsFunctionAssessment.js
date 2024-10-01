/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const pbaPlayers = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function createPlayerNFT (_playerName, _team, _position, _jerseyNumber) {
    const playerNFT = {
        "playerName": _playerName,
        "team": _team,
        "position": _position,
        "jerseyNumber": _jerseyNumber
    };
    pbaPlayers.push(playerNFT);
    console.log("New PBA Player NFT Created: " + _playerName);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listPlayerNFTs () {
    pbaPlayers.forEach((playerNFT, index) => {
        console.log(`\nNFT ID: ${index + 1}`);
        console.log("Player Name: \t" + playerNFT.playerName);
        console.log("Team: \t" + playerNFT.team);
        console.log("Position: \t" + playerNFT.position);
        console.log("Jersey Number: \t" + playerNFT.jerseyNumber);
    });
}

// print the total number of NFTs we have minted to the console
function getTotalPlayers() {
    return pbaPlayers.length;
}

// call your functions below this line

createPlayerNFT("June Mar Fajardo", "San Miguel Beermen", "Center", 15);
createPlayerNFT("LA Tenorio", "Barangay Ginebra San Miguel", "Point Guard", 5);
createPlayerNFT("Paul Lee", "Magnolia Hotshots", "Shooting Guard", 3);
createPlayerNFT("Jayson Castro", "TNT Tropang Giga", "Point Guard", 17);

listPlayerNFTs();
console.log("\nTotal PBA Player NFTs Created: " + getTotalPlayers());