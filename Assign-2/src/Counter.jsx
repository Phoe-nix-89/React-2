function Counter(props) {
    return (
        <div style={{border : '2px solid black' , width : '450px', height : '400px' , borderRadius : '20px' , backgroundColor : '#eb4b49'}}>
            <div style={{border : '2px solid red' , height : '100px' , textAlign : 'center' , paddingTop : '80px' , fontSize : '100px' , color : 'white'}}>{props.count}</div>
            <div style={{display : 'flex' , justifyContent : 'space-around' , alignItems : 'center' , height : '190px'}}>
                <button onClick={() => {
                    props.setCount(props.count+1);
                }} style={{height : '50px' , width : '160px'}}>Increment</button>
                <button onClick={() => {
                    props.setCount(props.count-1);
                }} style={{height : '50px' , width : '160px'}}>Decrement</button>
            </div>
        </div>
    );
}

export default Counter;