import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors } from 'redux/auth';
// import styles from './Navigation.module.css'

const styles = {
  nav: {
    marginLeft: '25px',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '25px',
    textDecoration: 'none',
    height: '100%',
    verticalAlign: 'middle',
    fontWeight: 700,
    fontSize: '30px',
    color: '#2A363B',
  },
  activeLink: {
    color: '#E84A5F',
    borderBottom: '5px solid #E84A5F',
  },
};

export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav style={styles.nav}>
      <NavLink to="/" exact style={styles.link} activeStyle={styles.activeLink}>
        <span>Home</span>
      </NavLink>
      {isLoggedIn && (
        <NavLink
          to="/phonebook"
          exact
          style={styles.link}
          activeStyle={styles.activeLink}
        >
          <span>Phonebook</span>
        </NavLink>
      )}
    </nav>
  );
}
