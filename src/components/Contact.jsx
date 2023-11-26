import { Formik } from 'formik';
import { error, success } from '../utils/toast';
import { contact } from '../services/auth';

export const Contact = () => {
  return (
    <div className="boxed">
      <section className="flat-breadcrumb">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <ul className="breadcrumbs">
                <li className="trail-item">
                  <a href="/" title="">
                    Home
                  </a>
                  <span>
                    <img src="/images/icons/arrow-right.png" alt="" />
                  </span>
                </li>
                <li className="trail-item">
                  <a href="/shop" title="">
                    Shop
                  </a>
                  <span>
                    <img src="/images/icons/arrow-right.png" alt="" />
                  </span>
                </li>
                <li className="trail-end">
                  <a href="#" title="">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="flat-map">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div id="flat-map" className="pdmap">
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d962.3485794423476!2d85.32206707830471!3d27.706268834816303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1907e99e0391%3A0xcce47de157f588d3!2sStar%20Mall!5e0!3m2!1sen!2snp!4v1688025718731!5m2!1sen!2snp"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <div className="gm-map">
                  <div className="map"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flat-contact style2">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="form-contact left">
                <div className="form-contact-header">
                  <h3>Leave us a Message</h3>
                  <p>
                    If you have a question or require additional information, leave us a message by filling up the form below.
                  </p>
                </div>
                <Formik
       initialValues={{ email: '', name: '', phone: '', subject:'', message:'' }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         }
         if (!values.name) {
           errors.name = 'Required';
         }
         if (!values.phone) {
           errors.phone = 'Required';
         }
         if (!values.subject) {
           errors.subject = 'Required';
         }
         if (!values.message) {
           errors.message = 'Required';
         }
         return errors;
       }}
       onSubmit={async (values, { setSubmitting, resetForm }) => {
         try {
          setSubmitting(true);
          await contact(values);
          resetForm();
          success("You message is recieved! Thank you!")
         } catch (e) {
          error(e.message || "Failed to send message!")
        }
          setSubmitting(false);
       }}
     >
       {({
         values,
         errors,
         setFieldValue,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
        <div className="form-contact-content">
                  <form
                  id="form-contact"
                  onSubmit={handleSubmit}
                  >

                  <div className="form-box name-contact">
                    <label htmlFor="name-contact">Email*</label>
                    <input
                      type="email"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
         <span className='error-text'>{errors.email && touched.email && errors.email || " "}</span>
                  </div>
                    <div className="form-box one-half name-contact">
                      <label htmlFor="password-contact">Name*</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                      />
                      <span className='error-text'>{errors.name && touched.name && errors.name || " "}</span>
                    </div>
                    <div className="form-box one-half password-contact">
                      <label htmlFor="name-contact">Phone*</label>
                      <input
                        type="number"
                        name="phone"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.phone}
                      />
           <span className='error-text'>{errors.phone && touched.phone && errors.phone || " "}</span>
                    </div>
                    <div className="form-box">
                      <label htmlFor="subject-contact">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.subject}
                      />
           <span className='error-text'>{errors.subject && touched.subject && errors.subject || " "}</span>
                    </div>
                    <div className="form-box">
                      <label htmlFor="comment-contact">Comment</label>
                      <textarea id="comment-contact"
                        onChange={(e)=>setFieldValue('message',e.target.value)}
                        onBlur={handleBlur}
                        value={values.message}
                      ></textarea>
           <span className='error-text'>{errors.message && touched.message && errors.message || " "}</span>
                    </div>
                    <div className="form-box">
                      <button disabled={isSubmitting} type="submit" className="contact">
                        Send
                      </button>
                    </div>
                  </form> </div>)}</Formik>
               
              </div>
            </div>
            <div className="col-md-5">
              <div className="box-contact">
                <ul>
                  <li className="address">
                    <h3>Address</h3>
                    <p>Putalisadak,Kathmandu</p>
                  </li>
                  <li className="phone">
                    <h3>Phone</h3>
                    <p>9851181642</p>
                  </li>
                  <li className="email">
                    <h3>Email</h3>
                    <p>info@std.com.np</p>
                  </li>
                  <li className="address">
                    <h3>Opening Hours</h3>
                    <p>Monday to Friday: 10am to 6pm</p>
                    <p>Saturday: 10am to 4pm</p>
                    <p>Sunday: 12am t0 4pm</p>
                  </li>
                  <li>
                    <h3>Follow Us</h3>
                    <ul className="social-list style2">
                      <li>
                        <a href="#" title="">
                          <i className="fa fa-facebook" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" title="">
                          <i className="fa fa-twitter" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" title="">
                          <i className="fa fa-instagram" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" title="">
                          <i className="fa fa-pinterest" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" title="">
                          <i className="fa fa-dribbble" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" title="">
                          <i className="fa fa-google" aria-hidden="true"></i>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
