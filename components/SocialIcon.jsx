import Image from 'next/image';

const SocialIcon = () => {
  return (
    <div className="social_icon">
      <a href="https://github.com/nurmuhamadas" className="icons">
        <Image
          src="/icons/github.svg"
          width="24"
          height="24"
          alt="Github"
        />
      </a>
      <a href="https://instagram.com/nurmuhamadas" className="icons">
        <Image
          src="/icons/instagram.svg"
          width="24"
          height="24"
          alt="Instagram"
        />
      </a>
      <a href="mailto:nurmuhamad.a.13@gmail.com" className="icons">
        <Image
          src="/icons/gmail.svg"
          width="24"
          height="24"
          alt="Email"
        />
      </a>

      <style jsx>{`
        .social_icon {
          width: max-content;
          height: max-content;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .icons {
          padding: .5rem 0.75rem;
        }

        .icons:nth-child(2) {
          margin: 0 .5rem;
        }

        .icons:hover {
          color: var(--primary-color);
        }
      `}</style>
    </div>
  );
};

export default SocialIcon;
