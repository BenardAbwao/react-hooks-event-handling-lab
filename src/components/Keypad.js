// Code Keypad Component Here
function Keypad(){
    return (
      <input 
        onChange={ () => console.log(`Entering password...`)} 
        style = {{ width : "250px", height : "50px", buttonColor : "blue"}} 
        placeholder = "Password"
        type= "password"
      />
    )
  }
  
  export default Keypad;