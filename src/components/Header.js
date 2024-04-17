import React, { useEffect } from "react";
import { NetFlix_Logo, Netflix_Avatar } from "../utils/constants";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const handleSO = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };
  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid, email, displayName}  = user;
        dispatch(addUser({uid:uid, email:email, displayName:displayName}))
        navigate("/browse")
        } else {
            dispatch(removeUser())
            navigate("/")
        }
      } 
    );
    return () => unSubscribe();
},[])


  return (
    <div className="absolute w-full bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="brightness-100 contrast-125 h-16"
        src={NetFlix_Logo}
        alt="NetFlix_Logo"
      />
      {user && (
        <div className="p-3">
          <div className="pl-5 ">
            <img
              className=" h-10 w-10 rounded-md"
              src={Netflix_Avatar}
              alt="Netflix_Avatar"
            />
          </div>
          <button className="font-bold text-white" onClick={handleSO}>
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
}

export default Header;
