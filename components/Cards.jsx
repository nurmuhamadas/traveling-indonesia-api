import styles from '../styles/Home.module.css';
import {Card} from 'primereact/card';
import cn from 'classname';

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
            ></Card>
          );
        })
      }
    </>
  );
}

export default Cards;
