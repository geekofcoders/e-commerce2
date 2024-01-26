import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router,Link, Route,Routes} from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login"
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment"
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";



const promise = loadStripe(
  "pk_test_51NZ6BtDihPaRmewy6zbrHA8ZCKTyqVwFWOyGsahwx96bRBAYuArr8sguYcKbvhN8NKrw2VL7mM3a99EM5MHfT3Bk00zuXwGxlw"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log(`USER >>>`, authUser);
      if (authUser) {
        // The user just logged in or the user was just logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // The user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <div className="app">
   
      <Routes>
      <Route path="/orders" element={[ <Header/>,<Orders/>]}/>
      <Route path="/login" element={<Login/>}/>
          <Route path="/checkout" element={[ <Header/>,<Checkout/>]}/>
          <Route path="/payment" element={[<Header/>,<Elements stripe={promise}><Payment/></Elements>]}/>
          <Route path="/" element={[ <Header/>,<Home/>]}/>
          
       
        </Routes>
          
    </div>
  );
}

export default App;
