import React from "react";
import Stock from "./Stock";

function PortfolioContainer({portfolioList, }) {

  const portsToRender = portfolioList.map((stock) =>{
    return(
    <Stock 
      key = {stock.id}
      name = {stock.name}
      price = {stock.price}
      stock = {stock}
      
    />
    )

    
  }
  )
  return (
    <div>
      <h2>My Portfolio</h2>
      {
        portsToRender
      }
    </div>
  );
}

export default PortfolioContainer;
