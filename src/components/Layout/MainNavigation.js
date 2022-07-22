import { useContext } from 'react';
import { Link} from 'react-router-dom';
import CartContext from '../Context/cart-contetxt';


import classes from './MainNavigation.module.css';

const MainNavigation = (props) => {
  const credCtx = useContext(CartContext);
  const isLoggedIn = credCtx.isLoggedIn;
  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
        {!isLoggedIn && 
        (<li>
            <Link to='/auth'>Login</Link>
          </li>)
          }

          {isLoggedIn && 
          (<li>
            <Link to='/profile'>Profile</Link>
          </li>)
          }
          {isLoggedIn && 
          (<li>
            <button onClick={credCtx.logOut}>Logout</button>
          </li>)
          }
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
