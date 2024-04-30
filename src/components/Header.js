import React, { useEffect } from "react";
import {
  NetFlix_Logo,
  Netflix_Avatar,
  Supported_Language,
} from "../utils/constants";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Lang from "../utils/LangConstant";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptView } from "../utils/gptSlice";
import { selectLanguage } from "../utils/langSlice";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const gptToggle = useSelector((store) => store.gpt.gptView);
  const selectedLang = useSelector((store) => store.Language.lang);

  const handleSO = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unSubscribe();
  }, []);

  const handleToggle = () => {
    dispatch(toggleGptView());
  };

  const handleLangSelection = (e) => {
    dispatch(selectLanguage(e.target.value));
  };

  return (
    <div className="absolute w-[100%] md:px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between ">
      <img
        className="w-44 mx-auto md:mx-0"
        src={NetFlix_Logo}
        alt="NetFlix_Logo"
      />
      {user && (
        <div className="flex p-2 justify-between">
          { (
            <select
              className="md:p-2 m-1 md:m-2 bg-gray-900 text-white"
              onChange={handleLangSelection}
            >
              {Supported_Language.map((dt) => (
                <option key={dt.identifier} value={dt.identifier}>
                  {dt.name}
                </option>
              ))}
            </select>
          )}

          <button
            onClick={handleToggle}
            className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg"
          >
            {gptToggle ? Lang[selectedLang].Home_Page : Lang[selectedLang].GPT_Search}
          </button>

          <img
            className="hidden md:block w-12 h-12 rounded-md"
            src={Netflix_Avatar}
            alt="Netflix_Avatar"
          />

          <button className="text-white" onClick={handleSO}>
           {Lang[selectedLang].Sign_Out}
          </button>
        </div>
      )}
    </div>
  );
}

export default Header;
