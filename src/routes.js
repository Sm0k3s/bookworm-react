import Homepage  from './components/Homepage';
import AddBook from './components/AddBook';
import Header from './components/Header';


const routes = [
  {
    path: '/',
    component: Homepage,
  },
  {
    path: '/books',
    component: AddBook,
  },
  {
    path: '/header',
    component: Header,
  },
];

export default routes;
