export default function Contact() {
  const whatsapp =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2044px-WhatsApp.svg.png";
  return (
    <div className="Contact">
      <div className="query">
        <input placeholder="Please type your query here..(eg.I want to track my order)" />
        <input type="button" classname="ok" value="ok" />
      </div>
      <select>
        <option>What is the issue?</option>
        <option>I have an issue with my account</option>
        <option>I have a query on an item/on delivery</option>
        <option>I want information on Snapdeal offers</option>
        <option>I have a payment/order related query</option>
        <option>I want information on your return policy</option>
      </select>
      <p>
        <b>Need help? </b>Live chat on
      </p>
      <div className="whatsapp">
        <img src={whatsapp} alt="whatsapp" />
        <p>8976567898</p>
      </div>
    </div>
  );
}
