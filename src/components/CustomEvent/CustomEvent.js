import "date-fns";
import React, { useState, useEffect } from "react";
import { Wrapper, TopPart, BottomPart } from "./CustomEvent.styled";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  Typography,
  ExpansionPanelDetails,
  TextField
} from "@material-ui/core";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";

import DateFnsUtils from "@date-io/date-fns";

import { useDispatch, connect } from "react-redux";
import {
  createCustomEvent,
  removeCustomEvent,
  cancelCustomEvents
} from "../../store/actions/actionCreators";
import EventElement from "./EventElement";
import Button from "../Button/Button";
import { v4 as getId } from "uuid";

let CustomEvent = ({ items }) => {
  const [checked, setChecked] = useState(false);

  const handleSwitchChange = e => {
    setChecked(!checked);
  };
  const dispatch = useDispatch();

  useEffect(() => {
    const id = getId();
    if (checked) {
      dispatch(createCustomEvent(id));
    } else {
      dispatch(cancelCustomEvents());
    }
  }, [checked, dispatch]);

  const handleDeleteClick = id => {
    dispatch(removeCustomEvent(id));
  };

  const handleAddEventClick = () => {
    const id = getId();
    dispatch(createCustomEvent(id));
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Wrapper>
        <TopPart>
          <p>Use Custom Events</p>
          <div className="switch">
            <label>
              <input type="checkbox" onChange={handleSwitchChange} />
              <span className="lever"></span>
            </label>
          </div>
        </TopPart>
        <BottomPart isHidden={checked ? true : false}>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Title</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <TextField
                label="Enter Title"
                multiline
                rows={3}
                variant="outlined"
              />
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <div>Custom events</div>

          {items.map(item => (
            <EventElement key={item.id} id={item.id} func={handleDeleteClick} />
          ))}
          <Button onClick={handleAddEventClick}>ADD NEW EVENT</Button>
        </BottomPart>
      </Wrapper>
    </MuiPickersUtilsProvider>
  );
};
const CompWrapper = connect(state => ({
  items: state.items.items.filter(item => item.isCustom)
}))(CustomEvent);
export default CompWrapper;
