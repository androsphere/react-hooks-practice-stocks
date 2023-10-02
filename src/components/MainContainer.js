import React, {useEffect, useState} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";


function MainContainer() {
  const [stockList, setStockList] = useState([]);
  const [portfolioList, setPortfolioList] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
    .then((r) => r.json())
    .then(setStockList)

  }, []
  );
  function onStockClick(clickedStock){

    const newPortList = [...portfolioList, clickedStock];
    setPortfolioList(newPortList);
    console.log(portfolioList)

  }

  
  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks = {stockList} handleCardClick={onStockClick}/>
        </div>
        <div className="col-4">
          <PortfolioContainer portfolioList = {portfolioList}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
