const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content items-center p-2 fixed bottom-0 w-full">
      <aside className="grid-flow-col items-center">
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
          className="fill-current"
        >
          <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
        </svg>
        <p>Copyright © {new Date().getFullYear()} - All rights reserved</p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/suryansh-shukla-320bbb264"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-current"
          >
            <path d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6S0 4.88 0 3.5 1.11 1 2.49 1s2.49 1.12 2.49 2.5zM.5 8.5h4v12h-4v-12zM8.5 8.5h3.9v1.7h.1c.5-.9 1.7-1.9 3.5-1.9 3.8 0 4.5 2.5 4.5 5.8v6.4h-4v-5.7c0-1.4 0-3.3-2-3.3s-2.3 1.5-2.3 3.2v5.8h-4v-12z" />
          </svg>
        </a>
        {/* Twitter */}
        <a
          href="https://x.com/SURYANSH_004"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-current"
          >
            <path d="M22.46 6c-.77.35-1.6.59-2.46.7a4.18 4.18 0 001.84-2.3 8.38 8.38 0 01-2.65 1.02 4.15 4.15 0 00-7.14 3.78A11.78 11.78 0 013 4.79a4.15 4.15 0 001.28 5.53 4.12 4.12 0 01-1.88-.52v.05a4.16 4.16 0 003.33 4.07 4.19 4.19 0 01-1.87.07 4.16 4.16 0 003.88 2.88A8.34 8.34 0 012 19.54a11.77 11.77 0 006.29 1.84c7.55 0 11.67-6.26 11.67-11.67 0-.18 0-.35-.01-.53A8.18 8.18 0 0022.46 6z" />
          </svg>
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
