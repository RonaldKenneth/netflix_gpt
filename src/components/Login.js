import React, { useRef, useState } from "react";
import { validate } from "../utils/validate.js";
import Header from "./Header.js";
import { NetFlix_BG } from "../utils/constants.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase.js";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice.js";

function Login() {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errMsg, setErrMsg] = useState(null);

  const dispatch = useDispatch();
  const name = useRef(null);
  const isEmail = useRef(null);
  const isPwd = useRef(null);

  const HndleValidatn = () => {
    const msg = validate(isEmail.current.value, isPwd.current.value);
    setErrMsg(msg);
    if (msg) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        isEmail.current.value,
        isPwd.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
            })
            .catch((error) => {
              setErrMsg(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMsg(errorCode + "->" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        isEmail.current.value,
        isPwd.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMsg(errorCode + "->" + errorMessage);
        });
    }
  };

  const handleSignUp = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="h-auto object-cover"
          src={NetFlix_BG}
          alt="NetFlix_BG"
        />
      </div>

      <form
        onClick={(e) => e.preventDefault()}
        className="w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input
          ref={isEmail}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          ref={isPwd}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />

        <p className="text-red-500 font-bold text-lg py-2">{errMsg}</p>
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
          onClick={HndleValidatn}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className="py-4 cursor-pointer">
          {isSignInForm
            ? "New to Netflix? Sign up now."
            : "Already a User? Sign In now."}
        </p>
      </form>
    </div>
  );
}

export default Login;
