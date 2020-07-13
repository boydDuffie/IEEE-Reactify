import React from 'react';
import './Footer.css';

export function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="footer_left">
              {/* <!--=========== Designed By WpFreeware Team ================--> */}
              {/* <!-- <p>Copyright &copy; 2015 <a href="http://www.wpfreeware.com">WpFreeware</a>. All Rights Reserved</p> --> */}
              <p>
                UF IEEE
                <br />
                (352) 392-0949
                <br />
                ieee@ece.ufl.edu <br />
                NEB 213
              </p>
              {/* <!--=========== Designed By WpFreeware Team ================--> */}
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="footer_right">
              <ul className="social_nav">
                <li>
                  <a href="https://www.facebook.com/UFIEEE">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/ieeeuf">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                {/* <!-- <li><a href="#"><i className="fa fa-google-plus"></i></a></li><li><a href="#"><i className="fa fa-linkedin"></i></a></li> --> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
