import React from 'react';
import './Contact.css';

export function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            {/* <!-- START CONTACT HEADING --> */}
            <div className="heading">
              <h2 className="wow fadeInLeftBig">Subscribe</h2>
              <p>
                Want to get involved? Subscribe to our email listserv!
                <br />
                Also, subscribe to our calendar for up-to-date events and
                advising office hours.
                <li>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Bhavana
                  &mdash; T, R | 1:55 pm - 2:45 pm
                </li>
                <li>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Lauren
                  &mdash; M, W | 10:40 am - 11:30 am
                </li>
                <li>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Andrew
                  &mdash; W, F | 9:35 am - 10:25 am
                </li>
                <li>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Daniel
                  &mdash; T | 11:45 am - 1:40 pm
                </li>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        {/* <!-- BEGIN CONTACT CONTENT --> */}
        <div className="contact_content">
          {/* <!-- BEGIN CONTACT FORM --> */}
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="contact_form">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSfiR1uh3NMe4u_e3q6UHPE31gV0zpJh5RKZ0P0PdbFn_df0Ow/viewform?embedded=true"
                width="500"
                height="600"
                frameborder="0"
                marginheight="0"
                marginwidth="0"
                scrolling="no">
                Loading...
              </iframe>

              <iframe
                src="https://www.google.com/calendar/embed?showTitle=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0&amp;height=400&amp;wkst=1&amp;bgcolor=%23ffffff&amp;src=uf.ieee%40gmail.com&amp;color=%23182C57&amp;ctz=America%2FNew_York"
                style={{ borderWidth: 0 }}
                width="600"
                height="600"
                frameborder="0"
                scrolling="no"></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
