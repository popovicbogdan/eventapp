import { createSelector } from 'reselect';

export const eventsSelector = (state) => state.items.items;

export const searchTermSelector = (state) => state.items.searchInfo;

export const customEventsSelector = createSelector(eventsSelector, (items) =>
  items.filter((item) => item.isCustom)
);

export const filteredItemsSelector = createSelector(
  eventsSelector,
  searchTermSelector,
  (items, searchTerm) => {
    return items.filter((item) =>
      Object.values(item).some((val) =>
        val.toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }
);
