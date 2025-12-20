import { createContext, useContext, useEffect, useState } from "react";
import { GoogleAuthProvider, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import {auth} from "../../firebase"

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
   const provider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);

  const email = 'efoosagtech@gmail.com';
  const password = 'EFosabiZ08!!';

  const login = async () => {
     await signInWithEmailAndPassword(auth, email, password);
     onAuthStateChanged(auth, currUser => {
      if(currUser){
        setUser(currUser)
      } else {
        setUser(null)
      }})
     console.log(user)
  };

  const logout = () => auth.signOut();

  useEffect(() => {
    auth.onAuthStateChanged(setUser);
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
