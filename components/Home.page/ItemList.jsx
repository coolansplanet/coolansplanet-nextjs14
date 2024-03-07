"use client";
import { useState } from "react";
import Item from "./Item";
import { urlFiles } from "@/config";
const ItemList = ({ data }) => {
  const [itemHeight, setItemHeight] = useState(0);
  return (
    <>
      {data.map(({ id, title, imageUrl }, index) => {
        const itemProps = {
          id,
          imageUrl: urlFiles + imageUrl,
          alt: title,
          itemHeight,
        };
        index === 0 && (itemProps["setItemHeight"] = setItemHeight);
        return <Item {...itemProps} key={id} />;
      })}
    </>
  );
};

export default ItemList;
