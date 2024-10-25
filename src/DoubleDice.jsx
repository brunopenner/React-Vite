// export default function DoubleDice() {
//     const num1 = Math.floor((Math.random() * 3)) + 1;
//     const num2 = Math.floor((Math.random() * 3)) + 1;
//     let winner;
//     if (num1>num2) winner = "You win! :D"
//         else if (num1<num2) winner = "You lose :("
//         else winner = "Draw!!"

//     return (
//         <div>
//             <h2>{winner}</h2>
//             <p>Num1: {num1}</p>
//             <p>Num2: {num2}</p>
//         </div>
//     )
// }

// export default function DoubleDice() {
//     const num1 = Math.floor((Math.random() * 3)) + 1;
//     const num2 = Math.floor((Math.random() * 3)) + 1;

//     return (
//         <div>
//             <h2>{num1===num2 ? "you win!" : "You lose :("}</h2>
//             <p>Num1: {num1}</p>
//             <p>Num2: {num2}</p>
//         </div>
//     )
// }

// export default function DoubleDice() {
//     const num1 = Math.floor((Math.random() * 3)) + 1;
//     const num2 = Math.floor((Math.random() * 3)) + 1;

//     return (
//         <div>
//             <h2>Double Dice</h2>
//             {num1===num2 ? <h3>You win!</h3> : null}
//             <p>Num1: {num1}</p>
//             <p>Num2: {num2}</p>
//         </div>
//     )
// }


export default function DoubleDice() {
    const num1 = Math.floor((Math.random() * 3)) + 1;
    const num2 = Math.floor((Math.random() * 3)) + 1;

    return (
        <div>
            <h2>Double Dice</h2>
            {num1===num2 && <h3>You win!</h3>}
            <p>Num1: {num1}</p>
            <p>Num2: {num2}</p>
        </div>
    )
}