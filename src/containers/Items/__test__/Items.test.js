import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { createStore } from "redux";
import renderer from "react-test-renderer";
import Items from "../Items";
import React from "react";
import { Provider } from "react-redux";

configure({ adapter: new Adapter() });
describe("<Items />", () => {
  const store = createStore(() => ({
    items: {
      items: [
        { id: 1, author: "Brandon Cooper", height: 1080, width: 1900 },
        { id: 2, author: "Alison Burgers", height: 1180, width: 1912 },
        { id: 3, author: "Kent Cooper", height: 1230, width: 1915 }
      ],
      searchInfo: ""
    }
  }));
  const component = renderer
    .create(
      <Provider store={store}>
        <Items />
      </Provider>
    )
    .toJSON();
  it("should match snapshot", () => {
    expect(component).toMatchSnapshot();
  });

  const mockStore = [
    { id: 1, author: "Brandon Cooper", height: 1080, width: 1900 },
    { id: 2, author: "Alison Burgers", height: 1180, width: 1912 },
    { id: 3, author: "Kent Cooper", height: 1230, width: 1915 }
  ];

  it("filters the items", () => {
    const filtFunc = jest.fn((items, searchTerm) => {
      const filteredItems = items.filter(item =>
        Object.values(item).some(val =>
          val
            .toString()
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
        )
      );
      return filteredItems;
    });
    expect(filtFunc(mockStore, "1080")).toEqual([
      {
        id: 1,
        author: "Brandon Cooper",
        height: 1080,
        width: 1900
      }
    ]);
    expect(filtFunc).toHaveBeenCalledTimes(1);
  });
});
