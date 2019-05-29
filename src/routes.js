import Homepage  from './components/Homepage';
import AddBook from './components/AddBook';
import Header from './components/Header';
import AddCategory from './components/AddCategory';


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
  {
    path: '/book-categories',
    component: AddCategory,
  },
];

export default routes;
