import React from "react";
import Stock from "./Stock";

function StockContainer({stocks, handleCardClick}) {


  const stocksToRender = stocks.map((stock) =>{
    return(
    <Stock 
      key = {stock.id}
      name = {stock.name}
      price = {stock.price}
      stock = {stock}
      handleCardClick={handleCardClick}
    />
    )

    
  }
  )
  return (
    <div>
      <h2>Stocks</h2>
      {stocksToRender}
    </div>
  );
}

export default StockContainer;
