routes = [
  {
    path: '/',
    url: './index.html',
  },
  {
    path: '/individual/',
    id: 'individual',
    url: './pages/individual.html',
  },
  {
    path: '/business/',
    id: 'business',
    url: './pages/business.html',
  },
  {
    path: '/info/',
    id: 'info',
    url: './pages/info.html',
  },

  //Page route for business section
  {
    path: 'bussdash',
    url: './business.html',
  },
  {
    path: '/specific/',
    id: 'specific',
    url: './pages/business/specific.html',
  },
  {
    path: '/daily/',
    id: 'daily',
    url: './pages/business/daily.html',
  },
  {
    path: '/businessProfile/',
    url: './pages/business/businessProfile.html',
  },

  //Page route for individual section
  {
    path: 'indiDash',
    url: './individualDash.html',
  },
  {
    path: '/individualProfile/',
    id: 'individualProfile',
    url: './pages/individual/individualProfile.html',
  },
  {
    path: '/indiInfo/',
    id: 'indiInfo',
    url: './pages/individual/indiInfo.html',
  },

  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];
