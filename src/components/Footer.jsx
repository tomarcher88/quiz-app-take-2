export const Footer = () => {
  return (
    <footer className="bg-slate-800 flex flex-col items-center py-5 text-slate-200">
      <p>
        Built using{" "}
        <a className="text-blue-400" href="https://the-trivia-api.com/">
          'The Trivia API'
        </a>
      </p>
      <div>
        <p>To see more of the stuff I've made, or find out more about me, see the below links</p>
        <ul className="flex flex-row gap-4 justify-center">
          <li>
            <a className="text-blue-400" href="https://www.tomarcher.uk/" target="_blank">
              Portfolio
            </a>
          </li>
          <li>
            <a className="text-blue-400" href="https://github.com/tomarcher88" target="_blank">
              Github
            </a>
          </li>
          <li>
            <a
              className="text-blue-400"
              href="https://www.linkedin.com/in/tom-archer/" target="_blank"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}