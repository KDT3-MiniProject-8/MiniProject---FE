import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Cart from './pages/Cart';
import Detail from './pages/Detail';
import Home from './pages/Home';
import MyPage from './pages/MyPage';
import Search from './pages/Search';
import Recommend from './pages/Recommend';
import AllProducts from './pages/AllProducts';
import FindPassword from './pages/FindPassword';
import NotFound from './pages/NotFound';
import AllProductList from './components/allProducts/AllProductList';
import Wish from './pages/Wish';
import UserInfo from './components/user/UserInfo';
import Purchase from './pages/Purchase';
import { getCookie } from './utils/cookie';
import AlertLoginState from './components/common/AlertLoginState';
const token = getCookie('accessToken');

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'search',
        element: token ? <Search /> : <AlertLoginState text={'로그인 후 이용 가능합니다.'} />,
      },
      {
        path: 'detail/:category/:productId',
        element: token ? <Detail /> : <AlertLoginState text={'로그인 후 이용 가능합니다.'} />,
      },
      {
        path: 'cart',
        element: token ? <Cart /> : <AlertLoginState text={'로그인 후 이용 가능합니다.'} />,
      },
      {
        path: 'login',
        element: token ? <AlertLoginState text={'이미 로그인 상태입니다.'} /> : <Login />,
      },
      {
        path: 'findpassword',
        element: token ? <AlertLoginState text={'이미 로그인 상태입니다.'} /> : <FindPassword />,
      },
      {
        path: 'signup',
        element: token ? <AlertLoginState text={'이미 로그인 상태입니다.'} /> : <SignUp />,
      },
      {
        path: 'user',
        element: token ? <MyPage /> : <AlertLoginState text={'로그인 후 이용 가능합니다.'} />,
      },
      {
        path: 'recommend',
        element: token ? <Recommend /> : <AlertLoginState text={'로그인 후 이용 가능합니다.'} />,
      },
      {
        path: 'allproducts',
        element: <AllProducts />,
      },
      {
        path: 'allproducts/depositlist',
        element: <AllProductList />,
      },
      {
        path: 'allproducts/savinglist',
        element: <AllProductList />,
      },
      {
        path: 'allproducts/mortgageloan',
        element: <AllProductList />,
      },
      {
        path: 'allproducts/charterloan',
        element: <AllProductList />,
      },
      {
        path: 'wish',
        element: token ? <Wish /> : <AlertLoginState text={'로그인 후 이용 가능합니다.'} />,
      },
      {
        path: 'user/info',
        element: <UserInfo />,
      },
      {
        path: 'purchase',
        element: token ? <Purchase /> : <AlertLoginState text={'로그인 후 이용 가능합니다.'} />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
