import React from 'react';
import './Contact.css';

export function Contact() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="heading">
              <h2 className="wow fadeInLeftBig">Sponsors</h2>
              <section id="sponsorFeature">
                {/* <!-- SKILLS COUNTER OVERLAY --> */}
                <div className="heading">
                  <div className="row">
                    <div className="col-lg-12 col-md-12">
                      <div className="container">
                        <div className="contact_feature">
                          {/* <!-- BEGIN CALL US FEATURE --> */}
                          <div className="col-lg-4 col-md-4 col-sm-4">
                            <div className="single_contact_feaured wow fadeInUp">
                              <a href="https://www.ti.com" target="_blank">
                                <img
                                  src="img/misc/ti_logo.png"
                                  height="150"
                                  width="150"
                                />
                              </a>
                            </div>
                          </div>
                          {/* <!-- BEGIN EMAIL ADDRESS FEATURE --> */}
                          <div className="col-lg-4 col-md-4 col-sm-4">
                            <div className="single_contact_feaured wow fadeInUp">
                              <a href="https://www.chevron.com" target="_blank">
                                <img
                                  src="img/misc/Chevron_Logo.jpg"
                                  height="150"
                                  width="150"
                                />
                              </a>
                            </div>
                          </div>
                          {/* <!-- BEGIN OFFICE LOCATION FEATURE --> */}
                          <div className="col-lg-4 col-md-4 col-sm-4">
                            <div className="single_contact_feaured wow fadeInUp">
                              <a href="https://www.intel.com" target="_blank">
                                <img
                                  src="img/misc/intel_logo.svg"
                                  height="150"
                                  width="150"
                                />
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-4">
                            <div className="single_contact_feaured wow fadeInUp">
                              <a href="https://www.harris.com" target="_blank">
                                <img
                                  src="img/misc/harris_corporation.svg"
                                  height="150"
                                  width="150"
                                />
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-4">
                            <div className="single_contact_feaured wow fadeInUp">
                              <a href="http://www.mosaicco.com" target="_blank">
                                <img
                                  src="img/misc/mosaic.png"
                                  height="150"
                                  width="150"
                                />
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-4">
                            <div className="single_contact_feaured wow fadeInUp">
                              <a
                                href="https://gatorrentals.com/apartments-near-uf"
                                target="_blank">
                                <img
                                  src="img/gator_rentals.png"
                                  height="150"
                                  width="150"
                                />{' '}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      <section id="contactFeature">
        {/* <!-- SKILLS COUNTER OVERLAY --> */}
        <div className="slider_overlay"></div>
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="container">
              <div className="contact_feature">
                {/* <!-- BEGIN CALL US FEATURE --> */}
                <div className="col-lg-3 col-md-3 col-sm-6">
                  <div className="single_contact_feaured wow fadeInUp">
                    <i className="fa fa-phone"></i>
                    <h4>Call Us</h4>
                    <p>(352) 392-0949</p>
                  </div>
                </div>
                {/* <!-- BEGIN EMAIL ADDRESS FEATURE --> */}
                <div className="col-lg-3 col-md-3 col-sm-6">
                  <div className="single_contact_feaured wow fadeInUp">
                    <i className="fa fa-envelope-o"></i>
                    <h4>Email Address</h4>
                    <p>ieee@ece.ufl.edu</p>
                  </div>
                </div>
                {/* <!-- BEGIN OFFICE LOCATION FEATURE --> */}
                <div className="col-lg-3 col-md-3 col-sm-6">
                  <div className="single_contact_feaured wow fadeInUp">
                    <i className="fa fa-map-marker"></i>
                    <h4>Office Location</h4>
                    <p>
                      New Engineering Building 213
                      <br />
                      {/* <!-- Gainesville, FL 32611 --> */}
                    </p>
                  </div>
                </div>
                {/* <!-- BEGIN ADVISING HOURS FEATURE --> */}
                <div className="col-lg-3 col-md-3 col-sm-6">
                  <div className="single_contact_feaured wow fadeInUp">
                    <i className="fa fa-clock-o"></i>
                    <h4>Advising Hours</h4>
                    <p>
                      <a href="#about" style={{ color: '#888888' }}>
                        Click here for the advising schedule
                      </a>
                    </p>

                    <p>
                      <br />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
