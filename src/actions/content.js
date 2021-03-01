import ActionTypes from '../actionTypes';

export function saveColumnsToDisplay(payload) {
  return {
    type: ActionTypes.saveColumnsToDisplay,
    payload,
  };
}

export function toggleColumnModal(payload) {
  return {
    type: ActionTypes.toggleColumnModal,
    payload,
  };
}
