import ActionTypes from '../actionTypes';
const initialState = {
  items: [
    {
      pageName: 'Name Of the Page',
      id: 182,
      group: 'Home',
      type: 'Special',
      version: 'Spanish',
      status: 'Published',
      dateTime: '2020-15-01, 15:05:26',
    },
    {
      pageName: 'Name Of the Page',
      id: 183,
      group: 'Home',
      type: 'Special',
      version: 'Spanish',
      status: 'Published',
      dateTime: '2020-15-01, 15:05:26',
    },
    {
      pageName: 'Name Of the Page',
      id: 184,
      group: 'Home',
      type: 'Special',
      version: 'Spanish',
      status: 'Published',
      dateTime: '2020-15-01, 15:05:26',
      isHomePage: true,
    },
    {
      pageName: 'Name Of the Page',
      id: 185,
      group: 'Home',
      type: 'Special',
      version: 'Spanish',
      status: 'Published',
      dateTime: '2020-15-01, 15:05:26',
    },
    {
      pageName: 'Name Of the Page',
      id: 186,
      group: 'Home',
      type: 'Special',
      version: 'Spanish',
      status: 'Published',
      dateTime: '2020-15-01, 15:05:26',
    },
  ],
  columns: [
    {
      name: 'Group',
      isChecked: true,
    },
    {
      name: 'Type',
      isChecked: true,
    },
    {
      name: 'Version',
      isChecked: true,
    },
    {
      name: 'Status',
      isChecked: true,
    },
  ],
  showColumnModal: false,
};

export const ContentReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.toggleColumnModal:
      return {
        ...state,
        showColumnModal: payload,
      };
    case ActionTypes.saveColumnsToDisplay:
      return {
        ...state,
        columns: payload,
      };
    default:
      return state;
  }
};
