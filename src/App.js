import "./components/styles.css";
import React from "react";
import { useState } from "react";
import Navbar from "./components/navbar";
import About from "./components/About";
import Home from "./components/Home";
import Shop from "./components/shop";
import Contact from "./components/contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer";
import Cart from "./components/cart";
import Prodect from "./components/prodectDetails";
import UserLogin from "./components/login";
import AddBook from "./components/addbook";
import EditBook from "./components/editbook";

export default function App() {
  const [flag, setflag] = useState(1);
  const [p, setP] = useState();
  const [c, setC] = useState([]);
  const [prodects, updateProdect] = useState([
    {
      id: 1,
      pic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMA7aSnjELv4rQtmhaqsnxH2txfrgSf5pT5g&usqp=CAU",

      name: "Pam Munoz Ryan",
      rate: 1000,
      discount: "20%",
      quantity: "30",
      category: "Kids",
      buylist: ""
    },
    {
      id: 2,
      pic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd1_M-qtJHAEbntmRftwwTkxTxrPZ-9ldxLw&usqp=CAU",
      name: "Pam Munoz Ryan",
      rate: 7000,
      discount: "",
      quantity: "",
      category: "",
      wishlist: "",
      buylist: ""
    },

    {
      id: 3,
      pic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLzLvlH3wY2x4aBJvAEqGAtzdg0GcxoO4mPQ&usqp=CAU",
      name: "Pam Munoz Ryan",
      rate: 1000,
      discount: "",
      quantity: "",
      category: "",
      wishlist: "",
      buylist: ""
    },
    {
      id: 4,
      pic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRABCvZKi59Y61KTyePBNu1JfL5YtCMX6XaSA&usqp=CAU",
      name: "Pam Munoz Ryan",
      rate: 1000,
      discount: "",
      quantity: "",
      category: "",
      wishlist: "",
      buylist: ""
    },

    {
      id: 5,
      pic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3bIxHZ2TvpSDthKtUwN5kMk0787b_Lvr_3Q&usqp=CAU",
      name: "Pam Munoz Ryan",
      rate: 1000,
      discount: "",
      quantity: "",
      category: "",
      wishlist: "",
      buylist: ""
    },
    {
      id: 6,
      pic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREHDQfBpACPGNOgUVXXu0zi1kzF799THdnWg&usqp=CAU",
      name: "Pam Munoz Ryan",
      rate: 1000,
      discount: "",
      quantity: "",
      category: "",
      wishlist: "",
      buylist: ""
    },
    {
      id: 7,
      pic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs5rcMbTeX5ApF0ufDCQPTKhctfN4YtRWhMQ09JSJLd6L02AzX0Kqp9MHwEaT8ObHzpFg&usqp=CAU",
      name: "Pam Munoz Ryan",
      rate: 1000,
      discount: "",
      quantity: "",
      category: "",
      wishlist: "",
      buylist: ""
    },
    {
      id: 8,
      pic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU_YYFEip4D09oVLyFpH9_hzkm2OL0LQhJhQ&usqp=CAU",
      name: "Pam Munoz Ryan",
      rate: 1000,
      discount: "",
      quantity: "",
      category: "",
      wishlist: "",
      buylist: ""
    },
    {
      id: 9,
      pic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGHxPJ1RwCS9-jKInwB6a2NGHq-QxnQuKgfQ&usqp=CAU",
      name: "Pam Munoz Ryan",
      rate: 1000,
      discount: "",
      quantity: "",
      category: "",
      wishlist: "",
      buylist: ""
    },

    {
      id: 10,
      pic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuHWlHxmvRw38wzxrXsEvWyHLpjLHouFPowg&usqp=CAU",
      name: "Pam Munoz Ryan",
      rate: 1000,
      discount: "",
      quantity: "",
      category: "",
      wishlist: "",
      buylist: ""
    },
    {
      id: 11,
      pic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVS3SnTXK5KixfWXkwo4GaqytWDC7zjp_7tUH1ocqpUt6XNo7zjBMpq8O39agWw2mRwQE&usqp=CAU",
      name: "Pam Munoz Ryan",
      rate: 1000,
      discount: "",
      quantity: "",
      category: "",
      wishlist: "",
      buylist: ""
    },

    {
      id: 12,
      pic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQcHuUu4EIR9hF94Yq4YB4OHJjHVAi_Swu6Q&usqp=CAU",
      name: "Pam Munoz Ryan",
      rate: 1000,
      discount: "",
      quantity: "",
      category: "",
      wishlist: "",
      buylist: ""
    }
  ]);

  function sendData(a) {
    setP(a);
  }

  function sendToCart(a) {
    console.log("App cart");
    setC([...c, a]);
    console.log(a);
  }

  return (
    <div className="App">
      <div className={flag ? "show" : "dontshow"} style={{ display: "none" }}>
        <EditBook />
      </div>
      <div className={flag ? "show" : "dontshow"} style={{ display: "none" }}>
        <EditBook />
      </div>
      <div clasName={flag ? "dontshow" : "show"}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="user" element={<UserLogin />} />
            <Route
              exact
              path="/"
              element={
                <Home
                  prodects={prodects}
                  sendData={sendData}
                  sendToCart={sendToCart}
                />
              }
            />
            <Route
              path="prodect"
              element={<Prodect p={p} sendToCart={sendToCart} />}
            />
            <Route path="about" element={<About />} />
            <Route
              path="shop"
              element={
                <Shop
                  prodects={prodects}
                  sendData={sendData}
                  sendToCart={sendToCart}
                />
              }
            />
            <Route path="contact" element={<Contact />} />
            <Route path="cart" element={<Cart c={c} />}>
              <Route path="prodect" element={<Prodect p={p} />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </div>
  );
}
