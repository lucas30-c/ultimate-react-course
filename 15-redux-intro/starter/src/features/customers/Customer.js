import { useSelector } from "react-redux";

function Customer() {
  const customer = useSelector((store) => store.customer.fullName);

  console.log(customer); // { fullName: "Finn", nationalID: "1234567890", createdAt: "2021-09-07T15:00:00.000Z" }

  return <h2>👋 Welcome, {customer}</h2>;
}

export default Customer;
