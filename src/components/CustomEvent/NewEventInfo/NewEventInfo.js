import React from "react";
import { NewEventCont } from "../CustomEvent.styled";
import { KeyboardTimePicker, KeyboardDatePicker } from "@material-ui/pickers";
import { TextField } from "@material-ui/core";
import { changeAuthor, setDate } from "../../../store/actions/actionCreators";
import { useDispatch } from "react-redux";

const NewEventInfo = ({ id }) => {
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const dispatch = useDispatch();
  const handleDateChange = date => {
    setSelectedDate(date);
    dispatch(setDate(date, id));
  };

  const handleAuthorChange = e => {
    dispatch(changeAuthor(e.target.value, id));
  };

  return (
    <NewEventCont>
      <form>
        <TextField label="Enter Author" onChange={handleAuthorChange} />
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Date picker dialog"
          format="MM/dd/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            "aria-label": "change date"
          }}
        />
        <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          label="Time picker"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            "aria-label": "change time"
          }}
        />
      </form>
    </NewEventCont>
  );
};
export default NewEventInfo;
