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
import Button from "../Button/Button";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";

import DateFnsUtils from "@date-io/date-fns";

import { useDispatch } from "react-redux";
import {
  createCustomEvent,
  removeCustomEvent,
  cancelCustomEvents
} from "../../store/actions/actionCreators";
import NewEventInfo from "./NewEventInfo/NewEventInfo";
import { v4 as getId } from "uuid";
const CustomEvent = () => {
  const [checked, setChecked] = useState(false);

  const handleSwitchChange = e => {
    setChecked(!checked);
  };
  const dispatch = useDispatch();

  const [eventItems, setEventItems] = useState([]);

  useEffect(() => {
    console.log("invoked");

    const id = getId();
    if (checked) {
      dispatch(createCustomEvent(id));
      setEventItems([element(id)]);
    } else {
      console.log("cancel");
      dispatch(cancelCustomEvents(eventItems.length));
    }
  }, [checked, dispatch]);

  const [len, setLen] = useState();
  useEffect(() => {
    setLen(eventItems.length);
  }, [eventItems]);
  console.log("LENG", len);

  const handleDeleteClick = (e, id) => {
    // console.log("ITEMS LENGTH", eventItems);
    e.stopPropagation();
    // console.log("ID TO DELETE", id);
    console.log(eventItems);
    console.log(len);

    // let newItems = eventItems.filter(item => {
    //   console.log(eventItems);

    //   console.log(item);
    //   console.log(id);

    //   return item.id !== id;
    // });
    // console.log("NEW ITEMS ", newItems);

    // setEventItems(newItems);
    // // dispatch(removeCustomEvent(id));
  };
  const element = function(id) {
    return (
      <ExpansionPanel key={id}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>
            <Button onClick={e => handleDeleteClick(e, id)}>del</Button>New
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <NewEventInfo id={id} />
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  };

  const handleAddEventClick = () => {
    const id = getId();
    setEventItems([...eventItems, element(id)]);
    // dispatch(createCustomEvent(id));
  };
  console.log("EVENT ITEMS ", eventItems);

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
          <ul>{eventItems}</ul>
          <Button onClick={handleAddEventClick}>ADD NEW EVENT</Button>
        </BottomPart>
      </Wrapper>
    </MuiPickersUtilsProvider>
  );
};

export default CustomEvent;
