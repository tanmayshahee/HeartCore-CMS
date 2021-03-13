import React from 'react';

const ListColumns = ({
  columns,
  selectedContentClassTab = '',
  onFilterValueChange,
}) => {
  const renderColumnFilters = () => {
    return columns.map((column, index) => {
      return (
        column.isChecked &&
        (selectedContentClassTab !== 'element' &&
        column.name === 'ContentClass' ? null : (
          <div className='col-lg' key={index}>
            <div className='form-group'>
              <label className='mb-1'>{column.name}</label>
              <select
                className='form-control'
                onChange={(e) => onFilterValueChange(e, column.name)}
              >
                {column.options.map((option) => {
                  return <option>{option}</option>;
                })}
              </select>
            </div>
          </div>
        ))
      );
    });
  };

  return <>{renderColumnFilters()}</>;
};

export default ListColumns;
