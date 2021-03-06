import {useState} from 'react';
import Head from 'next/head';
import cn from 'classname';
import {docs} from '../../templates/docs';
import renderTemplate from '../../templates';
import SidebarComp from '../../components/SidebarComp';
import styles from '../../styles/Documentation.module.css';


export default function Documentation(props) {
  const [VisibleMenu, setVisibleMenu] = useState(true);

  const idToTitle = (id = '') => {
    let title = id.split('-');
    title = title.map((string) => string[0].toUpperCase() + string.slice(1));
    title = title.join(' ');
    return title;
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>{idToTitle(props.id)}</title>
      </Head>

      <main
        id={styles.documentation}
        className={cn({[styles.hide__menu]: !VisibleMenu})}
      >
        <SidebarComp showMenu={setVisibleMenu} />
        <div
          id={styles.main__content}
          className={cn({[styles.hide__menu]: !VisibleMenu})}
        >
          {
            props.docs.map(({tag, content}, index) => {
              return renderTemplate({tag, content, index, styles});
            })
          }
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps(context) {
  const {id} = context.params;
  if (!docs[id]) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      id,
      docs: docs[id],
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      {params: {id: 'quick-start'}},
      {params: {id: 'play-ground'}},
      {params: {id: 'get-destinations'}},
      {params: {id: 'search-destinations'}},
      {params: {id: 'destination-reviews'}},
      {params: {id: 'usage-get-destinations'}},
      {params: {id: 'usage-search-destinations'}},
      {params: {id: 'usage-destination-reviews'}},
    ],
    fallback: false,
  };
}
