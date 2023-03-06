import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import Header from '../Header';
import { useParams } from 'react-router';

ItemPage.propTypes = {
  menuitems: propTypes.array
};
export default function ItemPage(props) {
  const { menuitems } = props;
  let { title } = useParams();
  const itemtitle = title;
  const [items, setItems] = useState([]);
  const [item, setItem] = useState({
    title: '',
    image: '',
    description: '',
    options: []
  });
  useEffect(() => {
    if (items.length > 0) {
      console.log(items);
      let index = items.findIndex((x) => x.id === Number(itemtitle));
      console.log(items[index]);
      setItem(items[index]);
    }
  }, [title, items]);
  useEffect(() => {
    setItems(menuitems);
    setTimeout(() => {}, 100);
  }, [menuitems]);
  return items.length > 0 && item ? (
    <>
      <header className="hero-section-container">
        <Header
          title={item.title || ''}
          description={item.description || ''}
          image={item.image || ''}
          slogan={item.price || ''}
        />
      </header>
      <main className="container p-4">
        {item.description || ''}
        <h4>Extra</h4>
        <h3>{item?.options?.title}</h3>
        <ul>
          {item?.options?.map((x) => (
            <li key={x.title}>
              {x.title}
              <ul>
                {x.options.map((y) => (
                  <li key={y.id}>{y.title}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </main>
    </>
  ) : (
    []
  );
}
