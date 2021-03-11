import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './content.scss';
import {
  toggleColumnModal,
  selectItem,
  toggleAllItems,
  fetchContent,
  fetchFilterInfo,
  setSelectedGroup,
  setSelectedStatus,
  setSelectedVersion,
  setSelectedType,
  setSelectedContentClass,
  toggleSortByIdDirection,
  toggleSortDirectionOfColumn,
  setContent,
} from '../actions/content';
import ColumnModal from '../Modals/ColumnModal';

const Content = () => {
  const dispatch = useDispatch();
  const {
    items,
    columns,
    showColumnModal,
    allItemsChecked,
    selectedGroup,
    selectedType,
    selectedVersion,
    selectedStatus,
    selectedContentClass,
    sortById,
  } = useSelector((state) => state.content);

  useEffect(() => {
    dispatch(
      fetchContent({
        contentGroup: '',
        contentType: '',
        version: '',
        status: '',
        contentclass: selectedContentClass,
      })
    );
    dispatch(fetchFilterInfo());
  }, []);

  const onCheckBoxClicked = (itemId) => {
    dispatch(selectItem(itemId));
  };

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
              <span className='page-title'>{item.title}</span>
            </div>
          </td>
          <td>{item.id}</td>
          {columns[0] && columns[0].isChecked && <td>{item.contentGroup}</td>}
          {columns[1] && columns[1].isChecked && <td>{item.contentType}</td>}
          {columns[2] && columns[2].isChecked && <td>{item.version}</td>}
          {columns[3] && columns[3].isChecked && (
            <td>
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
            selectedContentClass === 'element' && <td>{item.contentclass}</td>}
          <td className='preview-btn-container'>
            <a href='/#' className='btn btn-outline-primary btn-sm'>
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

  const renderColumnNames = () => {
    return columns.map((column) => {
      return (
        column.isChecked &&
        (selectedContentClass !== 'element' &&
        column.name === 'ContentClass' ? null : (
          <th
            className='column-name'
            onClick={() => sortColumnValue(column.name)}
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

  const renderColumnFilters = () => {
    return columns.map((column) => {
      return (
        column.isChecked &&
        (selectedContentClass !== 'element' &&
        column.name === 'ContentClass' ? null : (
          <div className='col-lg-3'>
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

  const onFilterValueChange = async (e, columnName) => {
    console.log(columnName);
    console.log(e.target.selectedIndex);
    let contentGroup = selectedGroup;
    let contentType = selectedType;
    let version = selectedVersion;
    let status = selectedStatus;
    let contentClass = selectedContentClass;
    const options = getOptions(columnName);
    const selectedValue = options[e.target.selectedIndex];
    if (columnName === 'Group') {
      contentGroup = selectedValue;
      dispatch(setSelectedGroup(selectedValue));
    } else if (columnName === 'Type') {
      contentType = selectedValue;
      dispatch(setSelectedType(selectedValue));
    } else if (columnName === 'Version') {
      version = selectedValue;
      dispatch(setSelectedVersion(selectedValue));
    } else if (columnName === 'Status') {
      status = selectedValue;
      dispatch(setSelectedStatus(selectedValue));
    } else if (columnName === 'ContentClass') {
      contentClass = selectedValue;
      dispatch(setSelectedStatus(selectedValue));
    }
    dispatch(
      fetchContent({
        contentGroup,
        contentType,
        version,
        status,
        contentClass,
      })
    );
  };

  const getOptions = (columnName) => {
    const data = columns.filter((column) => {
      if (column.name === columnName) {
        return column;
      }
    });
    return data[0].options;
  };

  const getDirection = (columnName) => {
    const data = columns.filter((column) => {
      if (column.name === columnName) {
        return column;
      }
    });
    return data[0].sortBy;
  };

  const showHideColumnModal = (flag) => {
    dispatch(toggleColumnModal(flag));
  };

  const onSelectAllItems = () => {
    dispatch(toggleAllItems());
  };

  const onTabChange = (contentClass) => {
    console.log(contentClass);
    dispatch(setSelectedContentClass(contentClass));
    dispatch(
      fetchContent({
        contentGroup: selectedGroup,
        contentType: selectedType,
        version: selectedVersion,
        status: selectedStatus,
        contentClass: contentClass,
      })
    );
  };

  const sortColumnValue = (columnName) => {
    if (columnName === 'id') {
      dispatch(toggleSortByIdDirection());
      const sortDirection = sortById === 'asc' ? 'desc' : 'asc';
      sortID(sortDirection);
    } else {
      sortContent(columnName);
      dispatch(toggleSortDirectionOfColumn(columnName));
    }
  };

  const sortContent = (columnName) => {
    let sortKey = 'contentGroup';
    let sortDirection = 'asc';
    let oldDirection = 'asc';
    if (columnName === 'Group') {
      sortKey = 'contentGroup';
      oldDirection = getDirection(columnName);
      sortDirection = oldDirection === 'asc' ? 'desc' : 'asc';
    } else if (columnName === 'Type') {
      sortKey = 'contentType';
      oldDirection = getDirection(columnName);
      sortDirection = oldDirection === 'asc' ? 'desc' : 'asc';
    } else if (columnName === 'Version') {
      sortKey = 'version';
      oldDirection = getDirection(columnName);
      sortDirection = oldDirection === 'asc' ? 'desc' : 'asc';
    } else if (columnName === 'Status') {
      sortKey = 'status';
      oldDirection = getDirection(columnName);
      sortDirection = oldDirection === 'asc' ? 'desc' : 'asc';
    } else if (columnName === 'ContentClass') {
      sortKey = 'contentclass';
      oldDirection = getDirection(columnName);
      sortDirection = oldDirection === 'asc' ? 'desc' : 'asc';
    }

    sortContentByDirection(sortDirection, sortKey);
  };

  const sortContentByDirection = (sortDirection, sortKey) => {
    if (sortDirection === 'asc') {
      items.sort((item1, item2) => {
        return item1[sortKey].localeCompare(item2[sortKey]);
      });
    } else {
      items.sort((item1, item2) => {
        return item2[sortKey].localeCompare(item1[sortKey]);
      });
    }
    dispatch(setContent(items));
  };

  const sortID = (sortDirection) => {
    if (sortDirection === 'asc') {
      items.sort((item1, item2) => {
        return item1.id - item2.id;
      });
    } else {
      items.sort((item1, item2) => {
        return item2.id - item1.id;
      });
    }
    dispatch(setContent(items));
  };
  return (
    <>
      {showColumnModal ? (
        <ColumnModal
          show={showColumnModal}
          onHide={() => showHideColumnModal(false)}
          columns={columns}
          size={'lg'}
        />
      ) : null}
      <main className='app-content'>
        <div className='app-title'>
          <div>
            <h1>Content</h1>
          </div>
          <div className='app-title-right'>
            <a href='/#' className='btn btn-primary'>
              <i className='log-i log-icon-plus-solid'></i> Add New Page
            </a>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <ul className='nav nav-tabs' id='myTab' role='tablist'>
              <li
                className='nav-item'
                role='presentation'
                onClick={() => onTabChange('page')}
              >
                <a
                  className='nav-link active'
                  id='pages-tab'
                  data-toggle='tab'
                  href='/#home'
                  role='tab'
                  aria-controls='home'
                  aria-selected='true'
                >
                  Pages
                </a>
              </li>
              <li
                className='nav-item'
                role='presentation'
                onClick={() => onTabChange('element')}
              >
                <a
                  className='nav-link'
                  id='elements-tab'
                  data-toggle='tab'
                  href='/#profile'
                  role='tab'
                  aria-controls='profile'
                  aria-selected='false'
                >
                  Elements
                </a>
              </li>
              <li
                className='nav-item'
                role='presentation'
                onClick={() => onTabChange('template')}
              >
                <a
                  className='nav-link'
                  id='templates-tab'
                  data-toggle='tab'
                  href='/#contact'
                  role='tab'
                  aria-controls='contact'
                  aria-selected='false'
                >
                  Templates
                </a>
              </li>
              <li
                className='nav-item'
                role='presentation'
                onClick={() => onTabChange('stylesheet')}
              >
                <a
                  className='nav-link'
                  id='style-tab'
                  data-toggle='tab'
                  href='/#profile'
                  role='tab'
                  aria-controls='profile'
                  aria-selected='false'
                >
                  Style Sheets
                </a>
              </li>
              <li
                className='nav-item'
                role='presentation'
                onClick={() => onTabChange('script')}
              >
                <a
                  className='nav-link'
                  id='scripts-tab'
                  data-toggle='tab'
                  href='/#profile'
                  role='tab'
                  aria-controls='profile'
                  aria-selected='false'
                >
                  Scripts
                </a>
              </li>
            </ul>
            <div className='tab-content' id='myTabContent'>
              <div
                className='tab-pane fade show active'
                id='home'
                role='tabpanel'
                aria-labelledby='home-tab'
              >
                <div className='row mt-3'>
                  <div className='col-xl-8'>
                    <div className='row'>{renderColumnFilters()}</div>
                  </div>
                  <div className='col-xl-4'>
                    <div className='row justify-content-end'>
                      <div className='col-xl-7'>
                        <div className='form-group'>
                          <label className='mb-1'>&nbsp;</label>
                          <input
                            type='text'
                            className='form-control'
                            placeholder='Search'
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-5'>
                    <div className='content-head'>
                      <h3>72 Pages</h3>
                    </div>
                  </div>
                  <div className='col-xl-7'>
                    <div className='custom-filter-block d-flex flex-wrap justify-content-end'>
                      <div className='mr-4'>
                        <ul className='list-inline'>
                          <li className='list-inline-item'>
                            <div
                              className='btn-group-toggle'
                              data-toggle='buttons'
                            >
                              <label className='btn btn-outline-info'>
                                <input type='checkbox' /> Move
                              </label>
                            </div>
                          </li>
                          <li className='list-inline-item'>
                            <div
                              className='btn-group-toggle'
                              data-toggle='buttons'
                            >
                              <label className='btn btn-outline-info'>
                                <input type='checkbox' /> Copy
                              </label>
                            </div>
                          </li>
                          <li className='list-inline-item'>
                            <div
                              className='btn-group-toggle'
                              data-toggle='buttons'
                            >
                              <label className='btn btn-outline-info'>
                                <input type='checkbox' /> Delete
                              </label>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className='mr-4'>
                        <ul className='list-inline'>
                          <li className='list-inline-item'>
                            <div
                              className='btn-group-toggle'
                              data-toggle='buttons'
                            >
                              <label className='btn btn-outline-info'>
                                <input type='checkbox' /> Checkout
                              </label>
                            </div>
                          </li>
                          <li className='list-inline-item'>
                            <div
                              className='btn-group-toggle'
                              data-toggle='buttons'
                            >
                              <label className='btn btn-outline-info'>
                                <input type='checkbox' /> Checkin
                              </label>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className='mr-4'>
                        <ul className='list-inline'>
                          <li className='list-inline-item'>
                            <div className='form-group'>
                              <select
                                name=''
                                className='form-control btn btn-outline-info'
                                id=''
                              >
                                <option>More Option</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                              </select>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <ul className='list-inline'>
                          <li className='list-inline-item'>
                            <div
                              className='btn-group-toggle'
                              data-toggle='buttons'
                            >
                              <label className='btn btn-outline-info active'>
                                <input type='checkbox' checked /> Select All
                              </label>
                            </div>
                          </li>
                          <li className='list-inline-item'>
                            <div
                              className='btn-group-toggle'
                              data-toggle='buttons'
                            >
                              <label className='btn btn-outline-info'>
                                <input type='checkbox' />
                                <img src='images/filter-icon.svg' alt='' />
                              </label>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='table-responsive dataTables_wrapper'>
                  <table
                    className='table table-hover responsive nowrap dataTable'
                    id='sampleTable'
                  >
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
                            {`${
                              selectedContentClass === 'element'
                                ? 'Element'
                                : 'Page Name'
                            }`}
                            <i className='log-i log-icon-angle-down-solid sort-icon'></i>
                          </div>
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
                    <tbody>{renderListItems()}</tbody>
                  </table>
                </div>
                <div className='text-center mt-3 mb-3 show-more-btn-wrapper'>
                  <a href='/#' className='btn btn-outline-primary'>
                    Show More
                  </a>
                  <div
                    className='show-hide-col'
                    data-toggle='modal'
                    data-target='#columnmodal'
                    onClick={() => showHideColumnModal(true)}
                  >
                    Show/Hide Columns
                  </div>
                </div>
              </div>
              <div
                className='tab-pane fade'
                id='profile'
                role='tabpanel'
                aria-labelledby='profile-tab'
              >
                2...
              </div>
              <div
                className='tab-pane fade'
                id='contact'
                role='tabpanel'
                aria-labelledby='contact-tab'
              >
                3...
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Content;
