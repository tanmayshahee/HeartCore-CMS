const initialState = {
  items: [
    {
      pageName: 'Name Of the Page',
      id: 182,
      group: 'Home',
      type: 'Special',
      version: 'Spanish',
      status: 'Published',
      dateTime: '2020-15-01, 15:05:26',
    },
    {
      pageName: 'Name Of the Page',
      id: 183,
      group: 'Home',
      type: 'Special',
      version: 'Spanish',
      status: 'Published',
      dateTime: '2020-15-01, 15:05:26',
    },
    {
      pageName: 'Name Of the Page',
      id: 184,
      group: 'Home',
      type: 'Special',
      version: 'Spanish',
      status: 'Published',
      dateTime: '2020-15-01, 15:05:26',
      isHomePage: true,
    },
    {
      pageName: 'Name Of the Page',
      id: 185,
      group: 'Home',
      type: 'Special',
      version: 'Spanish',
      status: 'Published',
      dateTime: '2020-15-01, 15:05:26',
    },
    {
      pageName: 'Name Of the Page',
      id: 186,
      group: 'Home',
      type: 'Special',
      version: 'Spanish',
      status: 'Published',
      dateTime: '2020-15-01, 15:05:26',
    },
  ],
};

export const ContentReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
