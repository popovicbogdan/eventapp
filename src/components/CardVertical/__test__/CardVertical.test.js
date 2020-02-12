import React from "react";
import CardVertical from "../CardVertical";
import { configure, render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });
describe("<CardVertical/>", () => {
  const mockItem = {
    height: 1080,
    width: 1900,
    download_url: "http://link.com",
    url: "http://link2.com",
    author: "Alison Burgers"
  };

  const wrapper = render(<CardVertical item={mockItem}></CardVertical>);
  it("should display props correctly", () => {
    expect(wrapper.find("a").prop("href")).toEqual(mockItem.url);
    expect(wrapper.find("img").prop("src")).toEqual(mockItem.download_url);
    expect(wrapper.find(".author").text()).toEqual(mockItem.author);
    expect(wrapper.find(".height").text()).toContain(mockItem.height);
    expect(wrapper.find(".width").text()).toContain(mockItem.width);
  });
});
