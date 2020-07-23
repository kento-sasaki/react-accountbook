export const pages = {
  home: {
    path: '/',
    title: 'Home',
  },
  login: {
    path: '/login',
    title: 'Login',
  },
  logout: {
    path: 'logout',
    title: 'Logout',
  },
  contact: {
    path: '/contact',
    title: 'Contact',
  },
};

export type Page = 'home' | 'login' | 'contact' | 'logout';
