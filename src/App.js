import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Homepage from './components/pages/Homepage';
import MenuPage from './components/pages/MenuPage';
import NotFound from './components/pages/NotFound';
import MenuNav from './components/navs/MenuNav';
import Cart from './components/pages/Cart';
import ItemPage from './components/pages/ItemPage';
import Footer from './components/Footer';
import { createContext, useState } from 'react';
import ContactUs from './components/pages/ContactUs';
import ErrorBoundary from './ErrorBoundary';
import Book from './components/pages/Book';

/**
 * App JS
 * @returns
 */
function App() {
  const ThemeContext = createContext(undefined);
  const [theme, setTheme] = useState('light');
  // const useTheme = () => useContext(ThemeContext);
  // eslint-disable-next-line react/prop-types
  const ThemeProvider = ({ children }) => {
    return (
      <ThemeContext.Provider
        value={{
          theme,
          toggleTheme: () => setTheme(theme === 'light' ? 'dark' : 'light')
        }}>
        {children}
      </ThemeContext.Provider>
    );
  };

  const menuTypes = [
    { title: 'Launch', type: 'lnch' },
    { title: 'Dinner', type: 'dnr' },
    { title: 'Desserts', type: 'dsrt' },
    { title: 'Special', type: 'spcl' }
  ];
  // Menu Items
  const menuItems = [
    {
      id: 1,
      title: 'Greek Salad',
      price: 12.99,
      description:
        'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
      type: menuTypes[0].type,
      image: 'img/greeksalad.png',
      options: [
        {
          price: 0.5,
          title: 'Size',
          options: [
            { id: 'Large', title: 'Large' },
            { id: 'small', title: 'small' }
          ]
        },
        {
          price: 0,
          title: 'Add',
          options: [
            { id: 'bluedress', title: 'Blue Dressing' },
            { id: 'whitedress', title: 'White Dressing' },
            { id: 'reddress', title: 'Red Dressing' },
            { id: 'fetadress', title: 'Feta' }
          ]
        }
      ]
    },
    {
      id: 2,
      title: 'Brushette',
      price: 7.99,
      description:
        'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Toppings of tomato, veggies, beans, cured pork, or cheese are examples of variations. In Italy, a brustolina grill is frequently used to create bruschetta.',
      type: menuTypes[0].type,
      image: 'img/deserts.png',
      options: [
        {
          price: 0.5,
          title: 'Size',
          options: [
            { id: 'Large', title: 'Large' },
            { id: 'small', title: 'small' }
          ]
        },
        {
          price: 0,
          title: 'Style',
          options: [
            { id: 'welldone', title: 'Well Done' },
            { id: 'meduimWell', title: 'Medium Well' }
          ]
        }
      ]
    },
    {
      id: 3,
      title: 'Grilled Fish',
      price: 19.99,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed cursus.',
      type: menuTypes[3].type,
      image: 'img/lunch.png',
      options: [
        {
          price: 0.5,
          title: 'Size',
          options: [
            { id: 'Large', title: 'Large' },
            { id: 'small', title: 'small' }
          ]
        }
      ]
    },
    {
      id: 4,
      title: 'Fries',
      price: 9.99,
      description: 'Greek salad the famous greek salad around',
      type: menuTypes[1].type,
      image: 'img/Fries.png',
      options: [
        {
          price: 0.5,
          title: 'Size',
          options: [
            { id: 'Large', title: 'Large' },
            { id: 'small', title: 'small' }
          ]
        }
      ]
    }
  ];

  return (
    <ErrorBoundary>
      <ThemeProvider>
        <div
          className="App"
          style={{
            backgroundColor: theme === 'light' ? 'white' : 'black'
          }}>
          <Router>
            <MenuNav theme={theme} />
            <main
              style={{
                backgroundColor: theme === 'light' ? 'white' : 'black'
              }}>
              <label className="switch">
                <input
                  type="checkbox"
                  checked={theme === 'light'}
                  onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                />
                <span className="slider round" />
              </label>
              <Routes>
                <Route>
                  <Route
                    index
                    element={<Homepage menuitems={menuItems} menutypes={menuTypes} theme={theme} />}
                  />
                  <Route
                    exact
                    path="home"
                    element={<Homepage menuitems={menuItems} menutypes={menuTypes} theme={theme} />}
                  />
                  <Route
                    exact
                    path="menu"
                    element={<MenuPage menuitems={menuItems} menutypes={menuTypes} theme={theme} />}
                  />
                  <Route
                    exact
                    path="book"
                    element={<Book menuitems={menuItems} menutypes={menuTypes} theme={theme} />}
                  />
                  <Route
                    exact
                    path="menu-item/:title"
                    element={<ItemPage menuitems={menuItems} menutypes={menuTypes} theme={theme} />}
                  />
                  <Route exact path="contact" element={<ContactUs theme={theme} />} />
                  <Route
                    exact
                    path="cart"
                    element={<Cart menuitems={menuItems} menutypes={menuTypes} theme={theme} />}
                  />
                  <Route path="*" element={<NotFound theme={theme} />} />
                </Route>
              </Routes>
            </main>
            <Footer />
          </Router>
        </div>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
