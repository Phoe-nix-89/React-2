function Btn1(props) {
    return (
        <button style={{height : '35px' , width : '120px' , borderRadius : '20px' , fontSize : '15px' , backgroundColor : '#3483eb' , color : 'white' , border : 'none'}} onClick={
            () => {
                // setV(<Two />);
                props.set1(false);
                props.set2(false);
                props.setbot(false);
            }
        }>Sign In</button>
    );
}
export default Btn1;