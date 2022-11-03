import './App.css';
import {useEffect, useState} from "react";

function App() {
    const [players, setPlayers] = useState([
        {number: 13, name: "Termos", key: "m", keyNumber: 77, points: 0, active: true},
        {number: 12, name: "Gosia", key: "l", keyNumber: 76, points: 0, active: true},
        {number: 11, name: "Śliwa", key: "k", keyNumber: 75, points: 0, active: true},
        {number: 10, name: "Błażej", key: "j", keyNumber: 74, points: 0, active: true},
        {number: 9, name: "Michał", key: "i", keyNumber: 73, points: 0, active: true},
        {number: 8, name: "Mateusz", key: "h", keyNumber: 72, points: 0, active: true},
        {number: 7, name: "Liz", key: "g", keyNumber: 71, points: 0, active: true},
        {number: 6, name: "Karolina", key: "f", keyNumber: 70, points: 0, active: true},
        {number: 5, name: "Radek", key: "e", keyNumber: 69, points: 0, active: true},
        {number: 4, name: "Cinko", key: "d", keyNumber: 68, points: 0, active: true},
        {number: 3, name: "Kasia", key: "c", keyNumber: 67, points: 0, active: true},
        {number: 2, name: "Christian", key: "b", keyNumber: 66, points: 0, active: true},
        {number: 1, name: "Timo", key: "a", keyNumber: 65, points: 0, active: true},
    ]);

    const keyNumbers = players.map((player) => player.keyNumber);

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown)
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    const handleKeyDown = (event) => {
        if (!keyNumbers.includes(event.keyCode)) {
            return;
        }
        event.preventDefault();
        if (event.ctrlKey) {
            setPlayers(prevPlayers => ([...prevPlayers.map((player) => player.keyNumber === event.keyCode ? {
                ...player,
                active: !player.active
            } : player)]));
            return;
        }

        if (event.shiftKey === true) {
            setPlayers(prevPlayers => ([...prevPlayers.map((player) => player.keyNumber === event.keyCode ? {
                ...player,
                points: player.points - 1
            } : player)]));
            return;

        }
        setPlayers(prevPlayers => ([...prevPlayers.map((player) => player.keyNumber === event.keyCode ? {
            ...player,
            points: player.points + 1
        } : player)]));
    }
    const Player = (player) => {
        // console.log(player);
        return <div style={{opacity: player.player.active ? '100%' : '30%'}} className="playerContainer">
            <div className="playerBar"><img alt={`player bar of ${player.player.name}`}
                                            src={`images/PASEK${player.player.key.toUpperCase()}.png`}/></div>
            <div className="playerPoints">{player.player.points}</div>
            <div className="playerImage" style={{paddingLeft: 40 * player.player.points}}><img
                src={`images/ZAWODNIK${player.player.key.toUpperCase()}.png`}/></div>
        </div>
    }

    return (
        <div className="background">
            <img className="maestro" alt="maestro" src="images/MAESTRO.png"/>
            <div className="players">
                {players.sort((a, b) => a.points === b.points ? (a.number > b.number ? 1 : -1) : (a.points < b.points ? 1 : -1)).map((player, key) =>
                    <Player player={player}/>)}
            </div>
        </div>
    );
}

export default App;
