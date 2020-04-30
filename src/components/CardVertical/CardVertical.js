import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardImage, CardContent, Image } from './CardVertical.styled';
import Icon from '../../components/Icon/Icon';

const CardVertical = ({ item }) => {
  const { height, width, download_url, url, author } = item;

  return (
    <div className="col s12 m6 l4">
      <a href={url}>
        <Card>
          <CardImage>
            <Image src={download_url} alt="" />
            <p className="author">{author}</p>
          </CardImage>
          <CardContent>
            <p>
              <Icon>event</Icon>
              <span className="height">Height: {height}</span>
            </p>
            <p>
              <Icon>deck</Icon>
              <span className="width">Width: {width}</span>
            </p>
          </CardContent>
        </Card>
      </a>
    </div>
  );
};

CardVertical.propTypes = {
  item: PropTypes.object
};

export default React.memo(CardVertical);
