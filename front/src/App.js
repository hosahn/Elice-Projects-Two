import { useEffect, useReducer, createContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { loginReducer } from "./reducer";
import IndexPage from "./pages/IndexPage";
import MainPage from "./pages/MainPage";
import DetailPage from "./pages/DetailPage";
import WorldMapPage from "./pages/WorldMapPage";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

export const UserStateContext = createContext(null);
export const DispatchContext = createContext(null);

function App() {
  const [userState, dispatch] = useReducer(loginReducer, {
    user: null,
  });

  const fetchCurrentUser = async () => {
    try {
      // 이전에 발급받은 토큰이 있다면, 이를 가지고 유저 정보를 받아옴.
      const currentUser = await sessionStorage.getItem("userToken");

      // dispatch 함수를 통해 로그인 성공 상태로 만듦.
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: currentUser,
      });
    } catch {
      console.log("%c SessionStorage에 토큰 없음.", "color: #d93d1a;");
    }
  };

  useEffect(() => {
    fetchCurrentUser();
  }, []);

  return (
    <DispatchContext.Provider value={dispatch}>
      <UserStateContext.Provider value={userState}>
        <Router>
          <Routes>
            <Route path="/" exact element={<IndexPage />} />
            <Route path="/main" exact element={<MainPage />} />
            <Route path="/detail/:index" exact element={<DetailPage />} />
            <Route path="/world_map" exact element={<WorldMapPage />} />
            <Route path="/about" exact element={<AboutPage />} />
            <Route path="/user/login" exact element={<LoginPage />} />
            <Route path="/user/register" exact element={<RegisterPage />} />
          </Routes>
        </Router>
      </UserStateContext.Provider>
    </DispatchContext.Provider>
  );
}

export default App;
