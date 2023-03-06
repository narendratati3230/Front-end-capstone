import React from 'react';
import Header from '../Header';
import propTypes from 'prop-types';

MenuPage.propTypes = {
  menuitems: propTypes.array
};
export default function MenuPage(props) {
  const { menuitems } = props;
  return (
    <>
      <header className="hero-section-container">
        <Header
          title="Menu"
          description={'Menu is where to order online and see our latest menu items'}
          slogan={'San Diego'}
          noimage={true}
        />
      </header>
      <main>
        <section className="container d-block col">
          <div className="cards">
            {menuitems.length > 0 &&
              menuitems.map((x, xds) => {
                return (
                  <article className="card  mt-0 mb-4" key={xds}>
                    <div className="card-image">
                      <img
                        src={x.image}
                        width="200"
                        height="200"
                        aria-describedby="Copyright by Sam Ayoub - Little Lemon Restaurant"
                        alt={x.title + ' | Copyright by Sam Ayoub - Little Lemon Restaurant'}
                      />
                    </div>
                    <div className="card-header">
                      <h2>
                        {x.title} - {x.price}
                      </h2>
                    </div>
                    <div className="card-body">
                      <p>{x.description}</p>
                    </div>
                  </article>
                );
              })}
          </div>
        </section>
      </main>
    </>
  );
}
