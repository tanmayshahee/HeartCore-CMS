import axios from 'axios';
import ActionTypes from '../actionTypes';

export function saveColumnsToDisplay(payload) {
  return {
    type: ActionTypes.saveColumnsToDisplay,
    payload,
  };
}

export function setSelectedGroup(payload) {
  return {
    type: ActionTypes.setSelectedGroup,
    payload,
  };
}

export function setSelectedType(payload) {
  return {
    type: ActionTypes.setSelectedType,
    payload,
  };
}

export function setSelectedVersion(payload) {
  return {
    type: ActionTypes.setSelectedVersion,
    payload,
  };
}

export function setSelectedStatus(payload) {
  return {
    type: ActionTypes.setSelectedStatus,
    payload,
  };
}

export function toggleColumnModal(payload) {
  return {
    type: ActionTypes.toggleColumnModal,
    payload,
  };
}

export function selectItem(payload) {
  return {
    type: ActionTypes.selectItem,
    payload,
  };
}

export function toggleAllItems(payload) {
  return {
    type: ActionTypes.allItemsChecked,
    payload,
  };
}

export function setSelectedContentClass(payload) {
  return {
    type: ActionTypes.setSelectedContentClass,
    payload,
  };
}

export function setSelectedContentClassTab(payload) {
  return {
    type: ActionTypes.setSelectedContentClassTab,
    payload,
  };
}

export function toggleSortByIdDirection(payload) {
  return {
    type: ActionTypes.toggleSortByIdDirection,
    payload,
  };
}

export function toggleSortDirectionOfColumn(payload) {
  return {
    type: ActionTypes.toggleSortDirectionOfColumn,
    payload,
  };
}

export const fetchContent = (reqData) => {
  return async function (dispatch) {
    const responseData = await axios.post(
      `http://localhost:8080/webadmin/newUI/contents`,
      reqData
    );
    console.log('Content Data', responseData);
    dispatch(setContent(responseData.data));
  };
};

export const fetchFilterInfo = () => {
  return async function (dispatch) {
    const responseData = await axios.get(
      `http://localhost:8080/webadmin/newUI/contentInfo`
    );
    console.log('Filter Data', responseData.data);
    const filterArr = [];
    if (responseData.data.contentGroup) {
      filterArr.push({
        name: 'Group',
        options: responseData.data.contentGroup,
        isChecked: true,
        sortBy: 'asc',
      });
    }
    if (responseData.data.contentType) {
      filterArr.push({
        name: 'Type',
        options: responseData.data.contentType,
        isChecked: true,
        sortBy: 'asc',
      });
    }
    if (responseData.data.contentVersion) {
      filterArr.push({
        name: 'Version',
        options: responseData.data.contentVersion,
        isChecked: true,
        sortBy: 'asc',
      });
    }
    if (responseData.data.contentStatus) {
      filterArr.push({
        name: 'Status',
        options: responseData.data.contentStatus,
        isChecked: true,
        sortBy: 'asc',
      });
    }
    if (responseData.data.contentClass) {
      filterArr.push({
        name: 'ContentClass',
        options: responseData.data.contentClass,
        isChecked: true,
        sortBy: 'asc',
      });
    }

    dispatch(setFilters(filterArr));
  };
};

function setFilters(payload) {
  return {
    type: ActionTypes.setFiltersData,
    payload,
  };
}

export function setContent(payload) {
  return {
    type: ActionTypes.setContent,
    payload,
  };
}
