import React from 'react';
import TableHead from './TableHead';

const GridTable = ({
  items,
  columns,
  selectedContentClassTab = '',
  onCheckBoxClicked,
  sortColumnValue,
  allItemsChecked,
  onSelectAllItems,
  getColumnTitleBasedOnTab,
  sortById,
}) => {
  const renderListItems = () => {
    return items.map((item) => {
      return (
        <tr key={item.id}>
          <td>
            <div className='animated-checkbox'>
              <label className='m-0'>
                <input
                  type='checkbox'
                  id={item.id}
                  name={item.title}
                  checked={item.isChecked || false}
                  onClick={() => onCheckBoxClicked(item.id)}
                />
                <span className='label-text'></span>
              </label>
            </div>
          </td>
          <td>
            <span className='page-title'>{item.title}</span>
          </td>
          <td>{item.id}</td>

          {columns[0] && columns[0].isChecked && <td>{item.contentGroup}</td>}
          {columns[1] && columns[1].isChecked && <td>{item.contentType}</td>}
          {columns[2] && columns[2].isChecked && <td>{item.version}</td>}
          {columns[3] && columns[3].isChecked && (
            <td className='status-main'>
              <span className='status status-published'>{item.status}</span>
              {/* <span className='date-time'>{item.dateTime}</span> */}
              {item.isHomePage && (
                <span className='status status-homepage'>
                  <i className='fa fa-home' aria-hidden='true'></i>
                  Homepage
                </span>
              )}
            </td>
          )}
          {columns[4] &&
            columns[4].isChecked &&
            selectedContentClassTab === 'element' && (
              <td>{item.contentclass}</td>
            )}
          <td className='preview-btn-container'>
            <a
              href={`http://localhost:8080/page.jsp?mode=preview&id=${item.id}`}
              className='btn btn-outline-primary btn-sm'
              target='_blank'
              rel='noreferrer'
            >
              Preview
            </a>
            <a href='/#' className='btn btn-outline-primary btn-sm ml-2'>
              Edit
            </a>
            <a href='/#' className='action-link ml-2'>
              <img src='images/action-icon.svg' alt='' />
            </a>
          </td>
        </tr>
      );
    });
  };

  return (
    <div className='table-responsive dataTables_wrapper'>
      <table
        className='table table-hover responsive nowrap dataTable'
        id='sampleTable'
      >
        <TableHead
          columns={columns}
          selectedContentClassTab={selectedContentClassTab}
          sortColumnValue={sortColumnValue}
          allItemsChecked={allItemsChecked}
          onSelectAllItems={onSelectAllItems}
          getColumnTitleBasedOnTab={getColumnTitleBasedOnTab}
          sortById={sortById}
        />
        <tbody>{renderListItems()}</tbody>
      </table>
    </div>
  );
};

export default GridTable;
