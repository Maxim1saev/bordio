import { ChangeEvent, createContext, useCallback, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";

import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore, Firestore } from "firebase/firestore";

import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";

import { store } from "./store";
import { defaultTheme } from "./theme";
import GlobalStyles from "./globalStyles";
import { SignIn } from "./pages/Auth/SignIn";
import { Registration } from "./pages/Auth/Registration";
import { Reset } from "./pages/Auth/Reset";

import { AuthContext } from "./context";
import { TablePage } from "./pages/TablePage";
import { updateProfile } from "firebase/auth";

import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const Layout = styled.div`
  height: 100vh;
  display: flex;
`;

const app = initializeApp({
  apiKey: "AIzaSyBSYqn_iIOXdM5nfDQQJ5BQWjtz8x9M42Y",
  authDomain: "bordio-c9876.firebaseapp.com",
  databaseURL:
    "https://bordio-c9876-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "bordio-c9876",
  storageBucket: "bordio-c9876.appspot.com",
  messagingSenderId: "992306327822",
  appId: "1:992306327822:web:55ba7f4ba5b446f3b4e75f",
  measurementId: "G-C1BJSH0FP9",
});

const storage = getStorage();

const auth = getAuth();

let dataBase: Firestore | null = getFirestore(app);

const uploadUserAvatar = async (file: any, user: any, setLoading: any) => {
  const fileRef = ref(storage, user?.uid + ".png");

  await uploadBytes(fileRef, file);

  const photoURL = await getDownloadURL(fileRef);

  updateProfile(user, { photoURL });
};

const App = () => {
  const [user, setUser] = useState<any>(null);

  const contextValue = {
    dataBase,
    auth,
    user,
    setUser,
    storage,
    uploadUserAvatar,
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Provider store={store}>
        <AuthContext.Provider value={contextValue}>
          <Layout>
            <BrowserRouter>
              <Routes>
                {user?.uid && (
                  <>
                    <Route path="/" element={<TablePage />} />
                  </>
                )}
                <Route path="/auth/signin" element={<SignIn />} />
                <Route path="/auth/registration" element={<Registration />} />
                <Route path="/auth/reset" element={<Reset />} />

                {!user?.uid && (
                  <Route path="*" element={<Navigate to="/auth/signin" />} />
                )}
              </Routes>
            </BrowserRouter>
          </Layout>
        </AuthContext.Provider>

        <GlobalStyles />
      </Provider>
    </ThemeProvider>
  );
};

export default App;
