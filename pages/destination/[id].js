import Head from 'next/head';
import styles from '../../styles/Destination.module.css';
import {Galleria} from 'primereact/galleria';
import {ProgressSpinner} from 'primereact/progressspinner';
import {useRouter} from 'next/router';
import DestinationApi from '../../api/DestinationApi';
import {useEffect, useState} from 'react';

const responsiveOptions = [
  {
    breakpoint: '1024px',
    numVisible: 4,
  },
  {
    breakpoint: '768px',
    numVisible: 4,
  },
  {
    breakpoint: '560px',
    numVisible: 2,
  },
];

function destination({destination}) {
  const {isFallback} = useRouter();
  const [dataImages, setDataImages] = useState([]);

  const itemTemplate = (item) => {
    return <img
      src={item.itemImageSrc}
      alt={item.alt}
      style={{width: '100%', display: 'block'}}
    />;
  };

  const thumbnailTemplate = (item) => {
    return <img
      src={item.thumbnailImageSrc}
      alt={item.alt}
      style={{width: '100%', display: 'block'}}
    />;
  };

  useEffect(() => {
    if (!isFallback) {
      if (destination.images.length > 0) {
        const mappedImages = destination.images.map((image) => {
          return {
            itemImageSrc: image.href,
            thumbnailImageSrc: image.href,
            alt: image.text,
          };
        });

        setDataImages(mappedImages);
      } else {
        setDataImages([{
          itemImageSrc: '/images/image-placeholder.jpg',
          thumbnailImageSrc: '/images/image-placeholder.jpg',
          alt: 'Image Placeholder',
        }]);
      }
    }
  }, [isFallback]);

  return (
    <>
      <Head>
        <title>{isFallback? 'loading...' : destination.name}</title>
      </Head>

      <main id={styles.destination}>
        {
          isFallback?
          <ProgressSpinner className="" /> :
          <section id={styles.detail__section}>
            <div className={styles.images}>
              <Galleria
                value={dataImages}
                responsiveOptions={responsiveOptions}
                numVisible={5}
                className="oke"
                item={itemTemplate}
                thumbnail={thumbnailTemplate}
              />
            </div>
            <div className={styles.info}>
              <h2 className={styles.title}>{destination.name}</h2>
              <p className={styles.location}>
                {destination.location.city}, {destination.location.region}
              </p>
              <div className="badges">
                {
                  destination.categories.map((category, index) => {
                    return <span className="p-tag" key={index}>
                      {category}
                    </span>;
                  })
                }
              </div>
              <p className={styles.description}>{destination.description}</p>
              <h3 className="">Address</h3>
              <p className={styles.address}>
                {destination.location.full_address}
              </p>
              <table className={styles.location__detail}>
                <tbody>
                  <tr className={styles.location__list} >
                    <td><i className="pi pi-angle-right"></i></td>
                    <td>Village</td>
                    <td>: {destination.location.village}</td>
                  </tr>
                  <tr className={styles.location__list} >
                    <td><i className="pi pi-angle-right"></i></td>
                    <td>District</td>
                    <td>: {destination.location.district}</td>
                  </tr>
                  <tr className={styles.location__list} >
                    <td><i className="pi pi-angle-right"></i></td>
                    <td>City</td>
                    <td>: {destination.location.city}</td>
                  </tr>
                  <tr className={styles.location__list} >
                    <td><i className="pi pi-angle-right"></i></td>
                    <td>Povince</td>
                    <td>: {destination.location.region}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        }
      </main>
    </>
  );
}

export async function getStaticProps(context) {
  const {id} = context.params;
  const destination = await DestinationApi.getDestinationById(id);
  return {
    props: {
      destination,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export default destination;
