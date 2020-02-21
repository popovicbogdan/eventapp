import React from "react";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  Typography,
  ExpansionPanelDetails
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import NewEventInfo from "./NewEventInfo/NewEventInfo";
import Button from "../Button/Button";

const EventElement = ({ id, func }) => {
  return (
    <ExpansionPanel key={id}>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>
          <Button onClick={() => func(id)}>del</Button>New
        </Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <NewEventInfo id={id} />
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};
export default EventElement;
