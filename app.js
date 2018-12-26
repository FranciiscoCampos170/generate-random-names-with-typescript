let lottery = {
    names: ["Leonel Messi", "Cristiano Ronaldo", "Neymar", "Gelson Dala"],
    createPlayersPicker: function () {
        return () => {
            let ppne = Math.floor(Math.random() * 4);
            return { Player: this.names[ppne] };
        };
    }
};
let playerName = lottery.createPlayersPicker();
let pickedPlayer = playerName();
let appDiv = document.getElementById('app');
console.log(pickedPlayer);
appDiv.innerHTML = JSON.stringify(pickedPlayer);
