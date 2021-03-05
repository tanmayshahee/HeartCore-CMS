import ActionTypes from '../actionTypes';
const initialState = {
  // items: [
  //   {
  //     pageName: 'Page 1',
  //     id: 182,
  //     group: 'Home',
  //     type: 'Special',
  //     version: 'Spanish',
  //     status: 'Published',
  //     dateTime: '2020-15-01, 15:05:26',
  //     isChecked: false,
  //   },
  //   {
  //     pageName: 'Page 2',
  //     id: 183,
  //     group: 'Home',
  //     type: 'Special',
  //     version: 'Spanish',
  //     status: 'Published',
  //     dateTime: '2020-15-01, 15:05:26',
  //     isChecked: false,
  //   },
  //   {
  //     pageName: 'Page 3',
  //     id: 184,
  //     group: 'Home',
  //     type: 'Special',
  //     version: 'Spanish',
  //     status: 'Published',
  //     dateTime: '2020-15-01, 15:05:26',
  //     isHomePage: true,
  //     isChecked: false,
  //   },
  //   {
  //     pageName: 'Page 4',
  //     id: 185,
  //     group: 'Home',
  //     type: 'Special',
  //     version: 'Spanish',
  //     status: 'Published',
  //     dateTime: '2020-15-01, 15:05:26',
  //     isChecked: false,
  //   },
  //   {
  //     pageName: 'Page 5',
  //     id: 186,
  //     group: 'Home',
  //     type: 'Special',
  //     version: 'Spanish',
  //     status: 'Published',
  //     dateTime: '2020-15-01, 15:05:26',
  //     isChecked: false,
  //   },
  // ],
  items: [],
  // columns: [
  //   {
  //     name: 'Group',
  //     isChecked: true,
  //   },
  //   {
  //     name: 'Type',
  //     isChecked: true,
  //   },
  //   {
  //     name: 'Version',
  //     isChecked: true,
  //   },
  //   {
  //     name: 'Status',
  //     isChecked: true,
  //   },
  // ],
  selectedGroup: '',
  selectedType: '',
  selectedVersion: '',
  selectedStatus: '',
  columns: [],
  allItemsChecked: false,
  showColumnModal: false,
};

export const ContentReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.setSelectedGroup:
      return {
        ...state,
        selectedGroup: payload,
      };
    case ActionTypes.setSelectedVersion:
      return {
        ...state,
        selectedVersion: payload,
      };
    case ActionTypes.setSelectedType:
      return {
        ...state,
        selectedType: payload,
      };
    case ActionTypes.setSelectedStatus:
      return {
        ...state,
        selectedStatus: payload,
      };
    case ActionTypes.setContent:
      return {
        ...state,
        items: payload,
      };
    case ActionTypes.setFiltersData:
      return {
        ...state,
        columns: payload,
      };
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
    case ActionTypes.selectItem:
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === payload) {
            item.isChecked = !item.isChecked;
          }
          return item;
        }),
      };
    case ActionTypes.allItemsChecked:
      return {
        ...state,
        allItemsChecked: !state.allItemsChecked,
        items: state.items.map((item) => {
          item.isChecked = !state.allItemsChecked;
          return item;
        }),
      };
    default:
      return state;
  }
};
