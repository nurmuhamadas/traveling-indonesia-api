import Head from 'next/head';
import styles from '../../styles/Documentation.module.css';
import {useState} from 'react';
import SidebarComp from '../../components/SidebarComp';
import cn from 'classname';
import Link from 'next/link';


export default function Docs(props) {
  const [VisibleMenu, setVisibleMenu] = useState(true);

  return (
    <div className={styles.container}>
      <Head>
        <title>Documentation</title>
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
          <h1 className={styles.title}>Get started with Traveling Indonesia</h1>
          <h3 className={styles.heading}>
            Welcome to Traveling Indonesia API Documentation!
          </h3>
          <p className={styles.paragraph} >
            Find the guides, samples, and references you need to get
            Indonesian tour destination list and detail to use in your next
            applications.
          </p>
          <p className={styles.paragraph} >
            Traveling Indonesia provides 682 tour destination in Indonesia. Get
            location detail, images, and others here.
          </p>
          <h3 className={styles.heading}>Quick Start</h3>
          <p className={styles.paragraph} >
            To get up and running quickly, take a look at the
            <Link href="/docs/quick-start">
              <a className={styles.link}> Quick Start </a>
            </Link>
            to learn how to get simple tour destination list
          </p>
          <h3 className={styles.heading}>Play-ground</h3>
          <p className={styles.paragraph} >
            In this page you will get clear documentation to use Traveling
            Indonesia API. You can easily get source code you need by open
            our Play Ground Page. It will provide you the code according
            to request you want. You can find here:
            <Link href="/docs/play-ground">
              <a className={styles.link}>Traveling Indonesia play-ground</a>
            </Link>
          </p>
          <h3 className={styles.heading}>API Documentation</h3>
          <p className={styles.paragraph}>
            In this section, you will get complete documentation about API
            endpoint, params, query, and others you need. It is very clear
            documentation. Get it here:
            <Link href="/docs/api-documentation">
              <a className={styles.link}> API Documentation. </a>
            </Link>
          </p>
          <h3 className={styles.heading}>Usage Example</h3>
          <p className={styles.paragraph}>
            The
            <Link href="/docs/usage-example">
              <a className={styles.link}> Usage Examples </a>
            </Link>
            section provides runnable code snippets and
            explanations for common request.
          </p>
        </div>
      </main>
    </div>
  );
}
