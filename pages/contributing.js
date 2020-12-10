import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/About.module.css';
import Image from 'next/image';
import SocialIcon from '../components/SocialIcon';


export default function About(props) {
  return (
    <>
      <Head>
        <title>Contibute to Traveling Indonesia</title>
      </Head>

      <main id="contibuting__page">
        <h1 className="title">Contibute to Traveling Indonesia</h1>
        <p className="paragraph">
          Sorry, this page is not available right now. Visit Our
          <a
            className="link"
            href="https://github.com/nurmuhamadas/traveling-indonesia-api"
          > Github Repo </a>
          if you want to contibrute to this page.
        </p>
        <h3 className="heading">
          Support us:
        </h3>
        <p className="paragraph">
          <SocialIcon />
        </p>
      </main>

      <style jsx>{`
        #contibuting__page {
          width: 100vw;
          height: max-content;
          max-width: 768px;
          min-height: 500px;
          margin: 0 auto;
          padding: 6rem 2rem 3rem;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
        }
        
        .title {
          color: var(--primary-color);
          margin-bottom: 2rem;
        }
        
        .paragraph {
          margin-top: 1rem;
        }
        
        .link {
          color: var(--primary-color);
          font-weight: bold;
        }
        
        .link:hover {
          text-decoration: underline;
          color: var(--secondary-color);
        }
      `}</style>
    </>
  );
}
