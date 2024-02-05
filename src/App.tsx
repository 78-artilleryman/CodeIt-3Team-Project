import Router from "components/Common/Router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { User, getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { app } from "firebaseApp/config";
import { useDispatch } from "react-redux";
import { setUser } from "store/auth/authReducers";

function App() {
  const dispatch = useDispatch();
  const auth = getAuth(app);
  const [init, setInit] = useState<boolean>(false);

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(!!auth?.currentUser);

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
      setInit(true);
    });
  }, [auth]);

  useEffect(() => {
    // 초기 로그인 상태 설정
    const unsubscribe = onAuthStateChanged(auth, (user: User | null) => {
      const userData = {
        uid: user?.uid,
        displayName: user?.displayName,
        email: user?.email,
      };

      dispatch(setUser(userData)); // Redux store에 사용자 상태를 dispatch
    });

    // 컴포넌트가 언마운트되면 리스너 정리
    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  return (
    <>
      <ToastContainer />
      {init ? <Router isAuthenticated={isAuthenticated} /> : ""}
    </>
  );
}

export default App;
