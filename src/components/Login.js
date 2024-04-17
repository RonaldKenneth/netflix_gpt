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
      <div className="absolute">
        <img className="brightness-50	" src={NetFlix_BG} alt="NetFlix_BG" />
      </div>
      <Header />
      <form
        onClick={(e) => e.preventDefault()}
        className="absolute w-3/12 p-12 right-0 left-0 mx-auto bg-black bg-opacity-70 my-24  text-white"
      >
        <h1 className="py-4 font-bold text-3xl">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="my-4 p-2 w-full bg-white bg-opacity-10 border border-solid border-gray-400 rounded-sm"
          />
        )}
        <input
          ref={isEmail}
          type="text"
          placeholder="Email Address"
          className="my-4 p-2 w-full bg-white bg-opacity-10 border border-solid border-gray-400 rounded-sm"
        />
        <input
          ref={isPwd}
          type="password"
          placeholder="Password"
          className="my-4 p-2 w-full bg-white bg-opacity-10 border border-solid border-gray-400 rounded-sm"
        />
        <p className="p-0.5 text-red-600">{errMsg}</p>
        <button
          className="my-4 p-1 w-full bg-red-600 rounded-sm"
          onClick={HndleValidatn}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        {isSignInForm ? (
          <p className="text-gray-400">
            New to Netflix?{" "}
            <span
              className=" cursor-pointer text-white hover:underline"
              onClick={handleSignUp}
            >
              Sign up now.
            </span>
          </p>
        ) : (
          <p className="text-gray-400">
            Already a User?{" "}
            <span
              className=" cursor-pointer text-white hover:underline"
              onClick={handleSignUp}
            >
              Sign In now.
            </span>
          </p>
        )}
      </form>
    </div>
  );
}

export default Login;
