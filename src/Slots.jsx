import './Slots.css'

export default function Slots ( {val1, val2, val3}) {
    let isWinner = '';
    if (val1 === val2 && val2 ===val3 )
        isWinner = <div class='winner'><span>You win!</span> <br></br>Congrats</div>
    else
        isWinner = <span class='loser'>You Lose</span>
    return (
        <div className='slots'>
            <h1>{val1} {val2} {val3}</h1>
            <p>{isWinner}</p>
        </div>
    )
}