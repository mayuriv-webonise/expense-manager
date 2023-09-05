import React from "react";
import { useDispatch } from "react-redux";
import { addExpense, editExpense } from "../../features/expenseSlice";
import { useSelector } from "react-redux";

function AddExpenses() {
  const [expenseObject, setExpenseObject] = React.useState({
    id: "",
    name: "",
    amount: 0,
    type: "",
    date: new Date().toISOString().slice(0, 10),
  });
  const dispatch = useDispatch();

  const sharedData = useSelector((state) => state.sharedData);
  React.useEffect(() => {
    if (sharedData) {
      setExpenseObject({
        id: sharedData.id,
        name: sharedData.name,
        amount: sharedData.amount,
        type: sharedData.type,
        date: sharedData.date,
      });
    }
  }, [sharedData]);

  const expenseType = [
    {
      id: 1,
      type: "Savinng/Investment",
    },
    {
      id: 2,
      type: "Other expense",
    },
    {
      id: 3,
      type: "Money Lending",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (expenseObject.id === "") {
      const randomId = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
      // Create a new expense object with the generated ID
      const updatedExpenseObject = { ...expenseObject, id: randomId };
      dispatch(addExpense(updatedExpenseObject));
    } else {
      dispatch(editExpense(expenseObject));
    }

    setExpenseObject({
      id: "",
      name: "",
      amount: 0,
      type: "",
      date: new Date().toISOString().slice(0, 10),
    });
  };

  // React.useEffect(() => {
  //   console.log(expenseObject);
  // })
  return (
    <div className=" w-1/2 mt-10 p-4 border rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Add Expense</h2>
      <form onSubmit={handleSubmit}>
        {/* Expense Name */}
        <div className="mb-4">
          <label
            htmlFor="expenseName"
            className="block text-gray-700 font-semibold"
          >
            Expense Name
          </label>
          <input
            type="text"
            id="expenseName"
            value={expenseObject.name}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter expense name"
            onChange={(e) =>
              setExpenseObject({ ...expenseObject, name: e.target.value })
            }
          />
        </div>

        {/* Expense Amount */}
        <div className="mb-4">
          <label
            htmlFor="expenseAmount"
            className="block text-gray-700 font-semibold"
          >
            Expense Amount
          </label>
          <input
            type="number"
            id="expenseAmount"
            value={expenseObject.amount}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter expense amount"
            onChange={(e) =>
              setExpenseObject({ ...expenseObject, amount: e.target.value })
            }
          />
        </div>
        {/* Expense Type */}
        <div className="mb-4">
          <label
            htmlFor="expenseAmount"
            className="block text-gray-700 font-semibold"
          >
            Expense Type
          </label>

          <select
            name="pets"
            id="pet-select"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            onChange={(e) =>
              setExpenseObject({ ...expenseObject, type: e.target.value })
            }
          >
            {expenseType.map((item) => (
              <option value={item.type}>{item.type}</option>
            ))}
          </select>
        </div>

        {/* Expense Date */}
        <div className="mb-6">
          <label
            htmlFor="expenseDate"
            className="block text-gray-700 font-semibold"
          >
            Expense Date
          </label>
          <input
            type="date"
            id="expenseDate"
            value={expenseObject.date}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            onChange={(e) =>
              setExpenseObject({ ...expenseObject, date: e.target.value })
            }
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
            Add Expense
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddExpenses;
