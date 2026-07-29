function Card(props){
    return(
        <div className="card">
            <h1>THis card's value is {props.num}</h1>
            <p>This card is:{props.num > 50 ? "High" : "Low"}</p>
        </div>
    );

    
}
export default Card;