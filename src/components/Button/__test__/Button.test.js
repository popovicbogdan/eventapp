import React from "react";

import Button from "../Button";
import { shallow, configure, render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import renderer from "react-test-renderer";

// jest.mock("../../Icon/Icon", () => "Icon");
configure({ adapter: new Adapter() });
describe("<Button />", () => {
  const mockOnClick = jest.fn();
  const wrapper = shallow(
    <Button onClick={mockOnClick} icon="search">
      Button
    </Button>
  );

  it("should trigger onClick", () => {
    wrapper.simulate("click");
    expect(mockOnClick).toBeCalled();
  });
  it("should render children", () => {
    expect(wrapper.contains("Button")).toEqual(true);
  });
  it("should have default className 'btn'", () => {
    expect(wrapper.hasClass("btn")).toBe(true);
  });
  it("should have an icon and text", () => {
    expect(wrapper.children()).toHaveLength(2);
  });
  it("should render correclty", () => {
    const button = renderer
      .create(
        <Button onClick={mockOnClick} icon="search">
          Text
        </Button>
      )
      .toJSON();
    expect(button).toMatchSnapshot();
  });
});
