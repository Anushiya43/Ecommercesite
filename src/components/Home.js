import headimg from "./pictures/Headeimg.png";
import Shop from "./shop";

export default function Home(props) {
  return (
    <div className="home">
      <img src={headimg} className="homeimg" alt="book" />
      <Shop
        prodects={props.prodects}
        sendData={props.sendData}
        sendToCart={props.sendToCart}
      />
    </div>
  );
}
