import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { orderBy } from "lodash";
import { getItems } from "../../store/actions/actionCreators";
import { Container, Hr, ButtonStyled } from "./Items.styled";
import Section from "../Section/Section";
import Title from "../../components/Title/Title";
import Icon from "../../components/Icon/Icon";

const Items = () => {
  const [viewOne, setViewOne] = useState("grid");
  const [viewTwo, setViewTwo] = useState("list");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  const search = useSelector(state => state.items.searchInfo);
  const items = useSelector(state => state.items.items);

  const [itms, setItms] = useState(items || []);

  useEffect(() => {
    setItms(items);
  }, [items]);

  const changeViewType = (view, setView) => {
    switch (view) {
      case "grid":
        setView("list");
        break;
      default:
        setView("grid");
    }
  };

  const sortAscending = useCallback(() => {
    const sortedItems = orderBy(items, ["width", "height"]);
    setItms(sortedItems);
  }, [items]);

  const sortDescending = useCallback(() => {
    const sortedItems = orderBy(items, ["width", "height"]).reverse();
    setItms(sortedItems);
  }, [items]);

  const filterItems = (items, searchTerm) => {
    const filteredItems = items.filter(item =>
      Object.values(item).some(val =>
        val
          .toString()
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      )
    );
    return filteredItems;
  };
  const sectionOneItems = filterItems(itms.slice(0, 6), search);

  const sectionTwoItems = filterItems(itms.slice(6, 9), search);

  return (
    <Container>
      <Title>Hot tickets</Title>
      <Hr />
      <Section items={sectionOneItems} viewType={viewOne} />
      <ButtonStyled
        className="btn btn-small right"
        onClick={e => changeViewType(viewOne, setViewOne)}
      >
        <Icon>{viewOne === "grid" ? "list" : "grid_on"}</Icon>
      </ButtonStyled>
      <Title>Upcoming events</Title>
      <Hr />
      <Section items={sectionTwoItems} viewType={viewTwo} />
      <ButtonStyled
        className="btn btn-small right"
        onClick={e => changeViewType(viewTwo, setViewTwo)}
      >
        <Icon>{viewTwo === "grid" ? "list" : "grid_on"}</Icon>
      </ButtonStyled>
      <ButtonStyled className="btn btn-small right" onClick={sortAscending}>
        asc
      </ButtonStyled>

      <ButtonStyled className="btn btn-small right" onClick={sortDescending}>
        desc
      </ButtonStyled>
    </Container>
  );
};

export default Items;
