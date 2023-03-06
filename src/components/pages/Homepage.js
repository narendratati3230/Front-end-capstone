import React from 'react';
import Header from '../Header';
import propTypes from 'prop-types';
import phone1 from '../../assets/phone2.png';

Homepage.propTypes = {
  menuitems: propTypes.array
};
export default function Homepage(props) {
  // eslint-disable-next-line react/prop-types
  const { menuitems } = props;
  let counter = 0;
  const description =
    'We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.';
  return (
    <div
      style={{
        // eslint-disable-next-line react/prop-types
        backgroundColor: props.theme === 'dark' ? 'black' : 'white',
        // eslint-disable-next-line react/prop-types
        color: props.theme === 'dark' ? 'white' : 'black'
      }}>
      <header className="hero-section-container">
        <Header
          title="Lemon Restaurant"
          description={description}
          slogan={'San Diego'}
          btnTxt={'Reserve Table'}
          btnLink={'/book'}
          style={{
            // eslint-disable-next-line react/prop-types
            backgroundColor: props.theme === 'dark' ? 'black' : 'white',
            // eslint-disable-next-line react/prop-types
            color: props.theme === 'dark' ? 'white' : 'black'
          }}
        />
      </header>
      <main
        className="container"
        style={{
          // eslint-disable-next-line react/prop-types
          backgroundColor: props.theme === 'dark' ? 'black' : 'white',
          // eslint-disable-next-line react/prop-types
          color: props.theme === 'dark' ? 'white' : 'black'
        }}>
        <section
          id="#summary"
          className="p-3"
          style={{
            // eslint-disable-next-line react/prop-types
            backgroundColor: props.theme === 'dark' ? 'black' : 'white',
            // eslint-disable-next-line react/prop-types
            color: props.theme === 'dark' ? 'white' : 'black'
          }}>
          <article className="d-flex text-center p-3">
            <div className="col-6">
              <h1>Celebrating our new App on Android and IOS</h1>
              <p>Checkout our new APP on android and Iphone</p>
              <p>Order pickup or delivery, also new option to reserve table from app</p>
            </div>
            <div className="col-6">
              <img
                src={phone1}
                alt="Android Image"
                aria-describedby="Image for Lemon APP on android"
              />
            </div>
          </article>
        </section>
        <section
          style={{
            // eslint-disable-next-line react/prop-types
            backgroundColor: props.theme === 'dark' ? 'black' : 'white',
            // eslint-disable-next-line react/prop-types
            color: props.theme === 'dark' ? 'white' : 'black'
          }}>
          <div
            className="row"
            style={{
              // eslint-disable-next-line react/prop-types
              backgroundColor: props.theme === 'dark' ? 'black' : 'white',
              // eslint-disable-next-line react/prop-types
              color: props.theme === 'dark' ? 'white' : 'black'
            }}>
            {menuitems.length > 0 &&
              menuitems.map((x, xds) => {
                if (counter < 3) {
                  counter++;
                  return (
                    <a
                      href={`/menu-item/${x.id}`}
                      className="col"
                      key={xds}
                      style={{
                        // eslint-disable-next-line react/prop-types
                        backgroundColor: props.theme === 'dark' ? 'black' : 'white',
                        // eslint-disable-next-line react/prop-types
                        color: props.theme === 'dark' ? 'white' : 'black'
                      }}>
                      <img
                        src={x.image}
                        width="200"
                        height="200"
                        aria-describedby="Copyright by Sam Ayoub - Little Lemon Restaurant"
                        alt={x.title + ' | Copyright by Sam Ayoub - Little Lemon Restaurant'}
                      />
                      <h2>
                        {x.title} - {x.price}
                      </h2>
                      <p>{x.description}</p>
                    </a>
                  );
                }
              })}
          </div>
        </section>
      </main>
    </div>
  );
}
