import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteExpense } from "../../features/expenseSlice";
import { shareData } from "../../features/editExpenseSlice";

function AllTransactions() {
  const [expensesList, setExpenseList] = React.useState([]);
  let list = useSelector((state) => state.expenses);
  const dispatch = useDispatch();

  React.useEffect(() => {
    setExpenseList(list);
  });
  const handleDelete = (id) => {
    dispatch(deleteExpense(id));
  };

  const handleEdit = (newData) => {
    dispatch(shareData(newData)); // Dispatch an action to update the shared data
  };

  return (
    <div className="w-1/2 mx-auto mt-10 p-4 border rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Transaction List</h2>

      {/* Transaction List */}
      <ul className="border rounded-lg divide-y divide-gray-300">
        {expensesList &&
          expensesList.map((item, index) => (
            <li
              className={`flex items-center justify-between p-4 ${
                item.type === "Savinng/Investment"
                  ? "bg-green-50"
                  : item.type === "Other expense"
                  ? "bg-red-50"
                  : "bg-blue-50"
              }`}
            >
              <div>
                <div className="flex">
                  <p
                    className={`${
                      item.type === "Savinng/Investment"
                        ? "text-green-500"
                        : item.type === "Other expense"
                        ? "text-red-500"
                        : "text-blue-500"
                    } font-semibold mx-2`}
                  >
                    {item.type} Expense
                  </p>
                  <img
                    src={require("../../assets/img/edit.png")}
                    style={{ width: "25px" }}
                    onClick={() => handleEdit(item)}
                  />
                </div>
                <p className="text-gray-700">Transaction Date: {item.date}</p>
                <p className="text-gray-600">Expense Name: {item.name}</p>
              </div>
              <div>
                <p
                  className={`${
                    item.type === "Savinng/Investment"
                      ? "text-green-500"
                      : item.type === "Other expense"
                      ? "text-red-500"
                      : "text-blue-500"
                  } font-semibold`}
                >
                  {" "}
                  <span className="text-l font-semibold ">&#8377;</span>
                  {item.amount}
                </p>
                <button
                  className="text-red-500 hover:text-red-600 focus:outline-none"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}

        {/* Add more transaction items here */}
      </ul>
    </div>
  );
}

export default AllTransactions;
