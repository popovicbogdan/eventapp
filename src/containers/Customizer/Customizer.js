import React from "react";
import {
  Container,
  PrimaryColorInput,
  CustomEventContainer,
  Panel
} from "./Customizer.styled";
import { changeBgColor } from "../../store/actions/actionCreators";
import { useDispatch } from "react-redux";
import CustomEvent from "../../components/CustomEvent/CustomEvent";

const Customizer = () => {
  const dispatch = useDispatch();
  const handleChange = e => {
    console.log(e.target.value);

    dispatch(changeBgColor(e.target.value));
  };
  return (
    <Container>
      <Panel>
        <PrimaryColorInput
          type="text"
          placeholder="enter hex color"
          onChange={handleChange}
        />
        <CustomEventContainer>
          <CustomEvent />
        </CustomEventContainer>
      </Panel>
    </Container>
  );
};

export default Customizer;
