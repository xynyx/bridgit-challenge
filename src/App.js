import React from "react";
import "./App.css";
import logo from "./images/bridgitb-w.svg";
import AddItem from "./components/AddItem";
import FilterItems from "./components/FilterItems";
import ItemTable from "./components/ItemTable";

const App = () => (
  <>
    <header className="app-header">
      <img src={logo} alt="logo" />
      <div className="app-header-title">Bridgit - Frontend code challenge</div>
    </header>
    <section className="app-content">
      <AddItem />
      <FilterItems />
      <ItemTable />
    </section>
  </>
);

export default App;
