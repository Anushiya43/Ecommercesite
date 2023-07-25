import { useState } from "react";
import "./styles.css";
import UserLogin from "./login";
import AccountCreationForm from "./CreateAccount";

export default function Cart(props) {
  const [userdata, updateUserdata] = useState([]);
  const [flag, setflag] = useState(1);
  const [flag1, setflag1] = useState(0);
  const [qty, setqty] = useState([]);
  console.log("cart");
  const cc = props.c;
  function flagvalue() {
    setflag(!flag);
  }
  function flagvalue1() {
    setflag(!flag);
    setflag1(!flag1);
  }

  function userdataf(data) {
    updateUserdata((prev) => [
      ...prev,
      {
        id: userdata.length + 1,
        ...data
      }
    ]);
  }

  return (
    <div className="cart">
      <div className={flag ? "show" : "dontshow"}>
        <UserLogin flag={flagvalue} flag1={flagvalue1} userdata={userdata} />
      </div>
      <div className={flag1 ? "show" : "dontshow"}>
        <AccountCreationForm flag1={flagvalue1} userdataf={userdataf} />
      </div>
      <div className={flag || flag1 ? "dontshow" : "table"}>
        <table>
          <thead>
            <th>Item Details</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Delivery with Charges</th>
            <th>Subtotal</th>
          </thead>
          <tbody>
            {cc.map((c) => {
              return (
                <tr>
                  <td>{c.name}</td>
                  <td>{c.rate}</td>
                  <td>
                    <select onChange={(e) => setqty([...qty, e.target.value])}>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </select>
                  </td>
                  <td>sedfewstret</td>
                  <td>{c.rate * qty}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <p>
          <b>Total : </b>545765
        </p>
      </div>
    </div>
  );
}
