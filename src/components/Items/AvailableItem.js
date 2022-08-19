import React, { useState, useEffect } from "react";
import Card from "../Common/Card";
import classes from "./AvailableItem.module.css";
import Item from "./Item/Item";

const DUMMY_ITEMS = [
  {
    id: "m1",
    name: "Premium-Weight Crew",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHvoRv_3O-i5QsD4UBVHK6p-Gx2PsrtMbNUA&usqp=CAU",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Premium-Weight Crew",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHvoRv_3O-i5QsD4UBVHK6p-Gx2PsrtMbNUA&usqp=CAU",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Premium-Weight Crew",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHvoRv_3O-i5QsD4UBVHK6p-Gx2PsrtMbNUA&usqp=CAU",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Premium-Weight Crew",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHvoRv_3O-i5QsD4UBVHK6p-Gx2PsrtMbNUA&usqp=CAU",
    price: 18.99,
  },
  {
    id: "m5",
    name: "Premium-Weight Crew",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHvoRv_3O-i5QsD4UBVHK6p-Gx2PsrtMbNUA&usqp=CAU",
    price: 18.99,
  },
  {
    id: "m6",
    name: "Premium-Weight Crew",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHvoRv_3O-i5QsD4UBVHK6p-Gx2PsrtMbNUA&usqp=CAU",
    price: 18.99,
  },
];

function AvailableItem(props) {
  console.log(props.item);

  const itemList = props.item.map((item) => (
    <Item
      key={item.id}
      id={item.id}
      name={item.name}
      image={item.image}
      price={item.price}
    />
  ));

  return (
    <section className={classes.items}>
      <ul>{itemList}</ul>
    </section>
  );
}

export default AvailableItem;
