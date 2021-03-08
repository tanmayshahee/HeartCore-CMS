import ActionTypes from '../actionTypes';
const initialState = {
  // items: [
  //   {
  //     title: 'Page 1',
  //     id: 182,
  //     contentGroup: 'Home',
  //     contentType: 'Special',
  //     version: 'Spanish',
  //     status: 'Published',
  //     dateTime: '2020-15-01, 15:05:26',
  //     isChecked: false,
  //   },
  //   {
  //     title: 'Page 2',
  //     id: 183,
  //     contentGroup: 'Away',
  //     contentType: 'New Special',
  //     version: 'Japanese',
  //     status: 'Published',
  //     dateTime: '2020-15-01, 15:05:26',
  //     isChecked: false,
  //   },
  //   {
  //     title: 'Page 3',
  //     id: 184,
  //     contentGroup: 'New Home',
  //     contentType: 'Very New Special',
  //     version: 'German',
  //     status: 'Published',
  //     dateTime: '2020-15-01, 15:05:26',
  //     isHomePage: true,
  //     isChecked: false,
  //   },
  //   {
  //     title: 'Page 4',
  //     id: 185,
  //     contentGroup: 'Raw Home',
  //     contentType: 'Old Special',
  //     version: 'Russian',
  //     status: 'Published',
  //     dateTime: '2020-15-01, 15:05:26',
  //     isChecked: false,
  //   },
  //   {
  //     title: 'Page 5',
  //     id: 186,
  //     contentGroup: 'Old Home',
  //     contentType: 'Raw Special',
  //     version: 'Indian',
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
  //     options: [],
  //     sortBy: 'asc',
  //   },
  //   {
  //     name: 'Type',
  //     isChecked: true,
  //     options: [],
  //     sortBy: 'asc',
  //   },
  //   {
  //     name: 'Version',
  //     isChecked: true,
  //     options: [],
  //     sortBy: 'asc',
  //   },
  //   {
  //     name: 'Status',
  //     isChecked: true,
  //     options: [],
  //     sortBy: 'asc',
  //   },
  // ],
  selectedGroup: '',
  selectedType: '',
  selectedVersion: '',
  selectedStatus: '',
  selectedContentClass: 'page',
  columns: [],
  allItemsChecked: false,
  showColumnModal: false,
  sortById: 'asc',
};

export const ContentReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.toggleSortDirectionOfColumn: {
      return {
        ...state,
        columns: state.columns.map((column) => {
          if (column.name === payload) {
            column.sortBy = column.sortBy === 'asc' ? 'desc' : 'asc';
          }
          return column;
        }),
      };
    }
    case ActionTypes.toggleSortByIdDirection: {
      return {
        ...state,
        sortById: state.sortById === 'asc' ? 'desc' : 'asc',
      };
    }
    case ActionTypes.setSelectedContentClass:
      return {
        ...state,
        selectedContentClass: payload,
      };
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
