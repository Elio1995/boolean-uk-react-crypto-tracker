function cryptoItemList(props) {
    return (
        <li 
        key={props.index} 
        className={props.isSelectedCripto(props.coin.id) ? "selected" : ""} 
        onClick={() => props.setSelectedCripto(props.coin)}>
            <button>{props.capitliseWord(props.coin.id)}</button>
        </li>
    )
}

export default cryptoItemList