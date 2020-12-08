import Image from 'next/image';
import Link from 'next/link';
import {useEffect, useState} from 'react';

export default function Custom404() {
  const [width, setWidth] = useState(null);

  useEffect(() => {
    window.addEventListener('load', () => setWidth(window.innerWidth));
    window.addEventListener('resize', () => setWidth(window.innerWidth));
  }, [width]);

  return <div id="error">
    <Image
      src={width > 768? '/images/error-404.svg' : '/images/error-404-small.svg'}
      width={width > 768? 595: 576}
      height={width > 768? 379 : 784}
      alt="Error page"
      layout="responsive"
    />
    <Link href="https://www.freepik.com/vectors/business">
      <a className="link">
        Business vector created by pikisuperstar - www.freepik.com
      </a>
    </Link>
    <style jsx>{`
      #error {
        width: 100vw;
        height: 100%;
        padding: 75px 0 2rem;
        text-align: center;
      }

      .link {
        margin-top: 2rem;
        color: var(--primary-color);
        font-size: .8rem;
      }
    `}</style>
  </div>;
}
