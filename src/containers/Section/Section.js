import React from "react";

import CardVertical from "../../components/CardVertical/CardVertical";
import ListItem from "../../components/ListItem/ListItem";
import { Row } from "./Section.styled";

const Section = ({ items, viewType }) => {
  const itemsList =
    viewType === "grid"
      ? items.map(item => <CardVertical key={item.id} item={item} />)
      : items.map(item => (
          <li key={item.id}>
            <ListItem item={item} />
            <hr />
          </li>
        ));

  const elem =
    viewType === "grid" ? <Row>{itemsList}</Row> : <ul>{itemsList}</ul>;

  return <>{elem}</>;
};

export default Section;
