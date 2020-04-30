import { createSelector } from "reselect";

export const eventsSelector = (state) => state.items.items;

export const customEventsSelector = createSelector(eventsSelector, (items) =>
  items.filter((item) => item.isCustom)
);
