import React from "react";
import "bulma/css/bulma.min.css";
import "./App.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import NavExample from "./components/Navbar";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Key from "./pages/key";
import Tracker from "./pages/Tracker";
import Profile from "./pages/profile";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
            <NavExample />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />}></Route>
              <Route path="/signup" element={<Signup />}></Route>
              <Route path="/key" element={<Key />}></Route>
              <Route path="/tracker" element={<Tracker />}></Route>
              <Route path="/profile" element={<Profile />}></Route>
            </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;