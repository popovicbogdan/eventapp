import React from "react";
import PropTypes from "prop-types";
import {
  Container,
  Image,
  Section,
  DateSection,
  DateSpan,
  DayAndTime,
  Author,
  Details,
  AnchorButton,
  Flexbox
} from "./ListItem.styled";
import Icon from "../Icon/Icon";

const ListItem = ({ item }) => {
  const { height, width, download_url, url, author } = item;

  return (
    <Container>
      <Flexbox>
        <Image src={download_url} />
        <DateSection id="date">
          <DateSpan>FEB</DateSpan>
          <DateSpan>14</DateSpan>
          <DateSpan>2020</DateSpan>
        </DateSection>
        <Section>
          <DayAndTime>Mon - 19:30</DayAndTime>
          <Author>{author}</Author>
          <Details>
            Height: {height}, Width: {width}
          </Details>
        </Section>
      </Flexbox>
      <AnchorButton className="btn right" href={url}>
        Find pics<Icon>chevron_right</Icon>
      </AnchorButton>
    </Container>
  );
};

ListItem.propTypes = {
  item: PropTypes.object
};

export default React.memo(ListItem);
