import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector, connect } from 'react-redux';
import { orderBy } from 'lodash';

import { Container, Hr, ButtonStyled, IconsContainer } from './Items.styled';
import Section from '../Section/Section';
import Title from '../../components/Title/Title';
import Icon from '../../components/Icon/Icon';
import svgContainer from '../../components/Icon/svgContainer';
import { Facebook, Twitter, Instagram } from '../../components/Icon/icons';
import { createSelector } from 'reselect';
import { filteredItemsSelector } from '../../store/selectors/selectors';

const Items = ({ items }) => {
  const [viewOne, setViewOne] = useState('grid');
  const [viewTwo, setViewTwo] = useState('list');

  const changeViewType = (view, setView) => {
    switch (view) {
      case 'grid':
        setView('list');
        break;
      default:
        setView('grid');
    }
  };

  // const sortAscending = useCallback(() => {
  //   const sortedItems = orderBy(items, ["width", "height"]);
  //   setItms(sortedItems);
  // }, [items]);

  // const sortDescending = useCallback(() => {
  //   const sortedItems = orderBy(items, ["width", "height"]).reverse();
  //   setItms(sortedItems);
  // }, [items]);

  // const filterItems = (items, searchTerm) => {
  //   const filteredItems = items.filter(item =>
  //     Object.values(item).some(val =>
  //       val
  //         .toString()
  //         .toLowerCase()
  //         .includes(searchTerm.toLowerCase())
  //     )
  //   );
  //   return filteredItems;
  // };
  // const sectionOneItems = filterItems(items.slice(0, 6), search);
  const sectionOneItems = items.slice(0, 6);

  const sectionTwoItems = items.slice(6, 9);
  // const sectionTwoItems = filterItems(items.slice(6, 9), search);

  console.log('RENDERED');

  return (
    <Container>
      <Title>Hot tickets</Title>
      <Hr />
      <Section items={sectionOneItems} viewType={viewOne} />
      <ButtonStyled
        className="btn btn-small right"
        onClick={(e) => changeViewType(viewOne, setViewOne)}
      >
        <Icon>{viewOne === 'grid' ? 'list' : 'grid_on'}</Icon>
      </ButtonStyled>
      <Title>Upcoming events</Title>
      <Hr />
      <Section items={sectionTwoItems} viewType={viewTwo} />
      <ButtonStyled
        className="btn btn-small right"
        onClick={(e) => changeViewType(viewTwo, setViewTwo)}
      >
        <Icon>{viewTwo === 'grid' ? 'list' : 'grid_on'}</Icon>
      </ButtonStyled>
      {/* <ButtonStyled className="btn btn-small right" onClick={sortAscending}>
        asc
      </ButtonStyled>

      <ButtonStyled className="btn btn-small right" onClick={sortDescending}>
        desc
      </ButtonStyled> */}

      <IconsContainer>
        <Facebook />
        <Instagram />
        <Twitter />
      </IconsContainer>
    </Container>
  );
};
const mapStateToProps = (state) => ({
  items: filteredItemsSelector(state)
});

export default connect(mapStateToProps)(Items);
