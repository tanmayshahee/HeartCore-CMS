import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilteredData } from '../services/contentApi';
import { toggleColumnModal } from '../actions/content';
import ColumnModal from '../Modals/ColumnModal';

const Content = () => {
  const dispatch = useDispatch();
  const { items, columns, showColumnModal } = useSelector(
    (state) => state.content
  );

  useEffect(() => {
    getContentData();
  }, []);

  const getContentData = async () => {
    //Api call to fetch Data;
  };
  const renderListItems = () => {
    return items.map((item) => {
      return (
        <tr key={item.id}>
          <td>
            <div className='animated-checkbox'>
              <label className='m-0'>
                <input type='checkbox' />
                <span className='label-text'></span>
              </label>
              {item.pageName}
            </div>
          </td>
          <td>{item.id}</td>
          {columns[0].isChecked && <td>{item.group}</td>}
          {columns[1].isChecked && <td>{item.type}</td>}
          {columns[2].isChecked && <td>{item.version}</td>}
          {columns[3].isChecked && (
            <td>
              <span className='status status-published'>{item.status}</span>
              {item.dateTime}
              {item.isHomePage && (
                <span className='status status-homepage'>
                  <i className='fa fa-home' aria-hidden='true'></i>
                  Homepage
                </span>
              )}
            </td>
          )}
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
      return column.isChecked && <th>{column.name}</th>;
    });
  };

  const renderColumnFilters = () => {
    return columns.map((column) => {
      return (
        column.isChecked && (
          <div className='col-lg-3'>
            <div className='form-group'>
              <label className='mb-1'>{column.name}</label>
              <select
                className='form-control'
                onChange={(e) => onFilterValueChange(e, column.name)}
              >
                <option>All</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
          </div>
        )
      );
    });
  };

  const onFilterValueChange = async (e, columnName) => {
    console.log(columnName);
    console.log(e.target.selectedIndex);
    //getFilteredData();
  };

  const showHideColumnModal = (flag) => {
    dispatch(toggleColumnModal(flag));
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
              <li className='nav-item' role='presentation'>
                <a
                  className='nav-link active'
                  id='home-tab'
                  data-toggle='tab'
                  href='/#home'
                  role='tab'
                  aria-controls='home'
                  aria-selected='true'
                >
                  Home
                </a>
              </li>
              <li className='nav-item' role='presentation'>
                <a
                  className='nav-link'
                  id='profile-tab'
                  data-toggle='tab'
                  href='/#profile'
                  role='tab'
                  aria-controls='profile'
                  aria-selected='false'
                >
                  Profile
                </a>
              </li>
              <li className='nav-item' role='presentation'>
                <a
                  className='nav-link'
                  id='contact-tab'
                  data-toggle='tab'
                  href='/#contact'
                  role='tab'
                  aria-controls='contact'
                  aria-selected='false'
                >
                  Contact
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
                        <th width='200px'>
                          <div className='animated-checkbox'>
                            <label className='m-0'>
                              <input type='checkbox' />
                              <span className='label-text'></span>
                            </label>
                            Page Name
                          </div>
                        </th>
                        {/* <th>ID</th>
                        <th>Group</th>
                        <th>Type</th>
                        <th>Version</th>
                        <th>Status</th>
                        <th>Actions</th> */}
                        <th>ID</th>
                        {renderColumnNames()}
                        <th>Actions</th>
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
