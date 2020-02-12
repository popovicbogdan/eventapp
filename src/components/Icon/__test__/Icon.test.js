import { shallow, configure } from "enzyme";
import Icon from "../Icon";
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import renderer from "react-test-renderer";

configure({ adapter: new Adapter() });
describe("<Icon/>", () => {
  it("should render children correctly", () => {
    const component = shallow(<Icon>search</Icon>);

    expect(component.contains("search")).toBeTruthy();
  });
  it("should match snapshot", () => {
    const component = renderer.create(<Icon>search</Icon>).toJSON();
    expect(component).toMatchSnapshot();
  });
});
