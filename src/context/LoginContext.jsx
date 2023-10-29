import { useState, createContext } from "react";
import axios from "axios";

export const LoginContext = createContext();

const LoginContextProvider = (props) => {

  const [user, setUser] = useState(); // Default value is "Ib"

  // Post to api - send email and password
  // If the user is valid, save the user in state
  // If the user is not valid, show an error message
  const login = async (email, password) => {
    try {
      const response = await axios.post("http://localhost:5333/login/login", {
        email,
        password,
      });

      // Assuming your API returns user data upon successful login
      const userData = response.data;

      // Set the user state with the user data
      setUser(userData);

    } catch (error) {
      // Handle login error (e.g., show an error message)
      alert("Forkert brugernavn eller password");
    }
  };



  const signIn = (email, password) => {
    if(!user) {
      login(email, password)
    } 
  }

  const signOut = () => {
    setUser()
  }


  return (
    <LoginContext.Provider value={{user, signIn, signOut}}>
      {props.children}
    </LoginContext.Provider>
  )
};

export default LoginContextProvider;
