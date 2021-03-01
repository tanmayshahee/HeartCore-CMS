import React, { useState, useEffect } from 'react';
import './column-modal.scss';
import { saveColumnsToDisplay } from '../actions/content';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';

const ColumnModal = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {}, []);
  const [columnsArr, setColumnsArr] = useState(
    JSON.parse(JSON.stringify(props.columns))
  );
  const onCheckBoxClicked = (checkboxName) => {
    console.log(checkboxName);
    const newColumnArr = [...columnsArr];
    newColumnArr.map((column) => {
      if (column.name === checkboxName) {
        column.isChecked = !column.isChecked;
      }
      return column;
    });
    setColumnsArr([...newColumnArr]);
  };

  const renderColumnNames = () => {
    return columnsArr.map((column) => {
      return (
        <div className='checkbox-wrapper'>
          <input
            type='checkbox'
            id={column.name}
            name={column.name}
            checked={column.isChecked}
            onClick={() => onCheckBoxClicked(column.name)}
          />
          <label for={column.name} className='column-label'>
            {column.name}
          </label>
        </div>
      );
    });
  };

  const saveModalData = () => {
    dispatch(saveColumnsToDisplay(columnsArr));
    props.onHide();
  };
  return (
    <Modal {...props} aria-labelledby='contained-modal-title-vcenter' centered>
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          Show Hide Columns
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div class='modal-body'>{renderColumnNames()}</div>
      </Modal.Body>
      <Modal.Footer>
        <div className='modal-footer'>
          <button
            type='button'
            class='btn btn-outline-info'
            onClick={props.onHide}
          >
            Close
          </button>
          <button
            type='button'
            className='btn btn-secondary'
            onClick={saveModalData}
          >
            Save Changes
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default ColumnModal;
