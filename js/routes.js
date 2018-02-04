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
    path: '/settings/',
    url: './pages/settings.html',
  },

  //Page route for business section
  {
    path: 'bussdash',
    url: './businessdash.html',
  },
  {
    path: '/daily/',
    id: 'daily',
    url: './pages/business/daily.html',
  },
  {
    path: '/specific/',
    id: 'specific',
    url: './pages/business/specific.html',
  },
  {
    path: '/businessprofile/',
    url: './pages/business/businessprofile.html',
  },

  //Page route for individual section
  {
    path: 'indidash',
    url: './individualdash.html',
  },
  {
    path: '/profile/',
    id: 'profile',
    url: './pages/individual/profile.html',
  },
  {
    path: '/info/',
    id: 'info',
    url: './pages/individual/info.html',
  },

  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];
