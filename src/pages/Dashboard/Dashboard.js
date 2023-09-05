import React from "react";
import AddExpenses from "../Expenses/AddExpenses";
import AllTransactions from "../Transactions/AllTransactions";

function Dashboard() {
  const cardData = [
    {
      title: " Total Expenses",
      content: "3000",
      background: "bg-orange-300",
      image: require("../../assets/img/expense.png"),
    },
    {
      title: "Investments",
      content: "10,000",
      background: "bg-green-300",
      image: require("../../assets/img/investment.png"),
    },
    {
      title: "Balance",
      content: "30,000",
      background: "bg-fuchsia-300",
      image: require("../../assets/img/balance.png"),
    },
    // Add more card data as needed
  ];

  return (
    <div>
      <div className="flex flex-wrap justify-evenly gap -3 my-5 p-2">
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`w-full md:w-1/3 lg:w-1/4 ${card.background} p-2 border border-gray-300 rounded-lg shadow-md `}
            style={{ height: "160px" }}
          >
            <h3 className="text-xl font-semibold text-center mb-2">
              {card.title}
            </h3>
            <div className="w-full flex flex-wrap justify-center gap-5 mt-5">
              <img src={card.image} alt="Card Image" className="mb-2"></img>
              <span className="text-l font-semibold flex items-center justify-center">
                &#8377;
              </span>{" "}
              <h1 className="text-gray-700 font-semibold flex items-center justify-center">
                {card.content}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-evenly gap-5 mx-5">
        <React.Fragment>
          <AddExpenses />
        </React.Fragment>
        <React.Fragment>
          <AllTransactions />
        </React.Fragment>
      </div>
    </div>
  );
}

export default Dashboard;
