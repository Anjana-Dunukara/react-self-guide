import "./NewExpenses.css";
import ExpenseForm from "./ExpenseForm";

const NewExpenses = (props) => {
  const expenseSubmitHandler = (expensedata) => {
    const expenseData = {
      ...expensedata,
      id: Math.random().toString(),
    };
    props.onExpenseDataSubmission(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onExpenseSubmit={expenseSubmitHandler} />
    </div>
  );
};

export default NewExpenses;
