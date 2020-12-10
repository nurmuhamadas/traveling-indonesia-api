import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import SocialIcon from '../components/SocialIcon';


export default function About(props) {
  return (
    <>
      <Head>
        <title>About Traveling Indonesia</title>
      </Head>

      <main id="about__page">
        <h1 className="title">About Traveling Indonesia</h1>
        <div className="banner">
          <Image
            width={1280}
            height={650}
            src="/images/banner.jpg"
            alt="Traveling Indonesia"
            layout="responsive"
          />
        </div>
        <p className="paragraph">
          Traveling Indonesia is an Unofficial Open Source web application that
          provide tour destination in Indonesia. All the data we have is the
          result of scrapping from
          <a href="https://id.m.wikipedia.org/" className="link"> Wikipedia</a>.
        </p>
        <p className="paragraph">
          This page and API is maintained by
          <a
            href="https://github.com/nurmuhamadas"
            className="link"
          > Nur Muhamad Ash Shidiqi. </a>
          Anyone can use data form this page for free. If you want to change
          data, please feel free to read our
          <Link href="/contributing">
            <a className="link"> contibuting page. </a>
          </Link>
          We are very happy if you contribute to this page. I am waiting for
          you.
        </p>
        <h3 className="heading">
          Support us:
        </h3>
        <div className="paragraph">
          <SocialIcon />
        </div>
      </main>

      <style jsx>{`
        #about__page {
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
        
        .banner {
          width: 100%;
          height: max-content;
          min-height: 300px;
          max-width: 768px;
          margin: 0 auto 1rem;
          display: grid;
        }
        
        .banner img {
          object-fit: cover;
        }
        
        .paragraph {
          margin-top: 1rem;
        }
        
        .heading {
          margin-top: 2rem;
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
