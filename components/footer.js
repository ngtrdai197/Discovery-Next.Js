export default function Footer() {
  return (
    <>
      <footer>
        <div className="logo-footer text-center">
          <img src="/images/logo.png" alt="Logo" />
        </div>
        <div className="social">
          <ul>
            <li>
              <a href="https://facebook.com/ngtrdai197">
                <i className="fa fa-facebook-official" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/ngtrdai197">
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/ngtrdai197">
                <i className="fa fa-github" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="source">
          Copyright © 2019-Present. All right reserved | by Dai Nguyen
        </div>
      </footer>
      <div className="back-to-top">
        <span className="back-arr">
          <i className=" fa fa-arrow-up" aria-hidden="true"></i>
        </span>
      </div>
    </>
  );
}
