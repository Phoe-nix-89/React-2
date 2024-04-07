function One() {
    let c = "phone no."
    return (
        <div style={{backgroundColor : '' , height : '120px' , width : '290px' , margin : 'auto' , marginTop : '45px' , marginBottom : '20px' , display : 'flex' , flexDirection : 'column' , justifyContent : 'space-evenly'}}>
            <input type="text" style={{width : '98%' , height : '35px' , borderRadius : '5px' , paddingLeft : '5px' , paddingRight : '0px' , fontSize : '15px' , borderStyle : 'none' , border : '1px solid #686962'}} placeholder="Phone no. , username , email" />
            <input type="text" style={{width : '98%' , height : '35px' , borderRadius : '5px' , paddingLeft : '5px' , paddingRight : '0px' , fontSize : '15px' , borderStyle : 'none' , border : '1px solid #686962'}} placeholder="Password" />
        </div>
    );
}
export default One;