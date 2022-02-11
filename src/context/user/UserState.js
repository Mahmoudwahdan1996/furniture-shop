import React, { useEffect, useState } from "react";
import UserContext from "./UserContext";
import { useAuth0 } from "@auth0/auth0-react";

const UserState = ({ children }) => {
    const {  user , loginWithRedirect , logout}=useAuth0()
    const [myUser , setMyUser]=useState(null);

    useEffect(() => {
        setMyUser(user);
    }, [user]);

    return(
        <UserContext.Provider value={{myUser ,loginWithRedirect ,logout }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserState ;