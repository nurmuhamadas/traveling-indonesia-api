import SocialIcon from './SocialIcon';

const Footer = () => {
  return (
    <footer>
      <p className="signature">
        Made with
        <img src="/icons/favorite.svg" alt="love" className="love"/>
        by Nur Muhamad Ash Shidiqi
      </p>
      <SocialIcon color="white" />
      <style jsx>{`
        footer {
          width: 100vw;
          height: auto;
          padding: 1.5rem 2rem;
          background-color: var(--primary-color);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-start;
        }

        .signature {
          color: #fff;
          margin-bottom: 1rem;
        }

        .love {
          margin: 0 .5rem;
          transform: translateY(.25rem);
        }

        @media screen and (min-width: 768px) {
          footer {
            flex-direction: row;
            align-items: center;
          }

          .signature {
            margin-bottom: 0;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
