import styles from '../styles/Home.module.css';
import {Card} from 'primereact/card';
import cn from 'classname';
import Link from 'next/link';

function Cards({data}) {
  return (
    <>
      {
        data.map((destination) => {
          const imgSrc = destination.images.length !== 0?
            destination.images[0].href : 'https://icon-library.com/images/photo-placeholder-icon/photo-placeholder-icon-3.jpg';
          return (
            <Card
              key={destination.id}
              title={destination.name}
              subTitle={destination.location.city}
              className={cn('ui-card-shadow', styles.card)}
              header={<img
                alt={destination.name}
                src={imgSrc}
                onError={(e) => e.target.src='https://icon-library.com/images/photo-placeholder-icon/photo-placeholder-icon-3.jpg'}
              />}
              footer={
                <Link href={`/destination/${destination._id}`}>
                  <a className="button">View</a>
                </Link>
              }
            ></Card>
          );
        })
      }
      <style jsx>{`
        .button {
          color: var(--primary-color);
          padding: 1rem 1.5rem;
          cursor: pointer;
          margin-bottom: 1rem;
          border-radius: .5rem;
          transition: all ease-in-out .3s;
        }

        .button:hover {
          color: #ffffff;
          background-color: var(--secondary-color);
        }
      `}</style>
    </>
  );
}

export default Cards;
