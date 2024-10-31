import React from "react";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Feed from "./components/Feed/Feed";

function App() {
  return (
    <>
      <Header />
      <main>
        <Content>
          <Feed />
        </Content>
      </main>
    </>
  );
}

export default App;
