import React from "react";
import "../css/WhatWeDo.css";

export default function WhatWeDo() {
  return (
    <div className="WhatWeDo">
      <h1 style={{ fontSize: "50px" }}>What we do</h1>
      <p style={{ fontSize: "30px" }}>
        Recognize the items on the receipt and save it as a .csv file or save to
        the database. Search the cheapest item in the database. All products are
        stored and can be access through the database system. First, users can
        take a photo of their receipts and share their receipts on our app. Our
        application is a text recognizing program that uses OCR to extract the
        item, unit price, seller's name and location to be stored in the
        database. The database will be updated every time a user shares a
        receipt. Consumers can see all datas from shared receipts of other
        users, as well as search for the cheapest products from seller close by.
        Points will be contributed every time users purchased products and
        shared their receipts. Our app will undergo a quick verification to
        validate the receipt. Coupons will be given to user from the points they
        earned. Users can save time and money using our app.
      </p>
    </div>
  );
}
