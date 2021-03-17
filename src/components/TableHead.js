import React from 'react';

const TableHead = ({
  columns,
  selectedContentClassTab = '',
  sortColumnValue,
  allItemsChecked,
  onSelectAllItems,
  getColumnTitleBasedOnTab,
  sortById,
}) => {
  const renderColumnNames = () => {
    return columns.map((column, index) => {
      return (
        column.isChecked &&
        (selectedContentClassTab !== 'element' &&
        column.name === 'ContentClass' ? null : (
          <th
            className='column-name'
            onClick={() => sortColumnValue(column.name)}
            key={index}
          >
            {column.name}{' '}
            {column.sortBy === 'asc' ? (
              <i className='log-i log-icon-angle-down-solid sort-icon'></i>
            ) : (
              <i className='log-i log-icon-angle-up-solid sort-icon'></i>
            )}
          </th>
        ))
      );
    });
  };
  return (
    <thead>
      <tr>
        <th className='column-name'>
          <div className='animated-checkbox'>
            <label className='m-0'>
              <input
                type='checkbox'
                id={'selectAll'}
                name={'selectAll'}
                checked={allItemsChecked}
                onClick={() => onSelectAllItems()}
              />
              <span className='label-text'></span>
            </label>
          </div>
        </th>
        <th>
          {getColumnTitleBasedOnTab(selectedContentClassTab)}{' '}
          <i className='log-i log-icon-angle-down-solid sort-icon'></i>
        </th>

        <th
          className='column-name'
          onClick={() => {
            sortColumnValue('id');
          }}
        >
          ID{' '}
          {sortById === 'asc' ? (
            <i className='log-i log-icon-angle-down-solid sort-icon'></i>
          ) : (
            <i className='log-i log-icon-angle-up-solid sort-icon'></i>
          )}
        </th>
        {renderColumnNames()}
        <th className='column-name'>Actions</th>
      </tr>
    </thead>
  );
};

export default TableHead;
