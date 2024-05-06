// React & Next
import React from "react";
import Image from "next/image";

// packages
import InnerHTML from "dangerously-set-html-content";

// scss
import classes from "./index.module.scss";

const Contact = () => {
  const htmlContent = `<!-- scss style -->
  <style>
  
      * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
      }
  
      .form-contact-us {
          display: flex;
          justify-content: center !important;
          align-items: center;
          position: relative;
      }
  
      .Header {
          text-align: center;
          display: flex;
          justify-content: center !important;
          flex-direction: column;
          width: 100%;
      }
      
      .Second-page {
          text-align: justify;
      }
  
      @media (max-width: 300px) {
          .form-contact-us {
              max-width: 90%;
              margin: 0 auto;
          }
  
          .first-name {
              width: 100%;
              margin-bottom: 15px;
          }
  
          .last-name {
              width: 100%;
          }
  
          #earth {
              right: 80px;
              top: 20px;
          }
  
          .Second-page {
              height: 50%;
              max-width: 100%;
          }
  
          .first-name {
              width: 100%;
              margin-bottom: 15px;
          }
  
          .last-name {
              width: 100%;
          }
  
          .Header {
              max-width: 100%;
              width: 90%;
              margin: 0 auto;
          }
  
          .sub-btn {
              display: flex;
              justify-content: center;
          }
      }
  
      @media (max-width: 600px) {
          :scope .First-page {
              margin-top: 30px !important;
          }
  
          #image {
              width: 90% !important;
              margin-top: 14px;
          }
  
          .first-name {
              width: 100%;
              margin-bottom: 15px;
          }
  
          .last-name {
              width: 100%;
          }
  
          .Header {
              max-width: 100%;
              width: 90%;
              margin: 0 auto;
          }
  
          .sub-btn {
              display: flex;
              justify-content: center;
          }
      }
  
      @media (max-width: 853px) {
          .Second-page {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              padding: 0 !important; 
              margin: 10px 5px !important; 
          }
  
          iframe {
              width: 100% !important;
          }
  
          .contact-channels {
              width: 90% !important;
              margin-top: 20px;
          }
  
          .form-contact-us {
              max-width: 90%;
              margin: 0 auto;
          }
  
          .first-name {
              width: 100%;
              margin-bottom: 15px;
          }
  
          .last-name {
              width: 100%;
          }
  
          .Header {
              max-width: 100%;
              width: 90%;
              margin: 5px auto;
          }
  
          .sub-btn {
              display: flex;
              justify-content: center;
          }
      }
  
      body {
          background-color: black;
          position: relative;
          color: white;
      }
  
      .Header h1 {
          font-size: 40px;
          color: var(--link-color);
          font-weight: 700;
      }
  
      .Header h3 {
          font-size: 19px;
          color: var(--f-silver);
      }
  
      .Header p {
          font-size: 17px;
          color: var(--f-white);
      }
  
      .main-contact-us input {
          height: 60px;
          background: transparent;
          border: none;
          outline: none;
          border-radius: 20px;
          color: var(--f-white);
          background-color: var(--f-lbackgroud);
          padding: 20px 20px 20px 20px;
          font-size: 18px;
          border: 2px solid var(--f-white);
      }
  
      .main-contact-us .email-input {
          width: 100%;
          margin-top: 15px;
          position: relative;
      }
  
      .main-contact-us textarea {
          width: 100%;
          background: transparent;
          border: none;
          outline: none;
          border-radius: 20px;
          color: var(--f-white);
          background-color: var(--f-lbackgroud);
          padding: 12px 25px 10px 15px;
          margin-top: 15px;
          border: 2px solid var(--f-white);
      }
  
      .main-contact-us .error-hint {
          color: red;
      }
  
      .main-contact-us .hidden {
          display: none;
      }
  
      .main-contact-us button {
          width: 200px;
          height: 45px;
          border: none;
          outline: none;
          border-radius: 40px;
          cursor: pointer;
          font-size: 16px;
          font-weight: 600;
          margin-top: 10px;
          background-color: rgba(141, 140, 140, 0.3);
          color: var(--f-dblue);
      }
  
      .main-contact-us button:hover {
          background-color: rgba(141, 140, 140, 0.9);
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      }
  
      .Second-page {
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding:  30px;
        margin: 20px;
      }
  
      iframe {
          width: 100%;
      }
      
      .main-iframe{
        margin-top: 20px;
      }

      .contact-channels {
          width: 50%;
      }
  
      .contact-channels .lists {
          margin-top: 15px;
          font-size: 12px;
          color: var(--f-white);
          list-style: none;
      }
      
      .contact-channels .lists li{
        margin: 10px 0;
    }

    .contact-channels .lists li a{
        color: #48a8e2;
        text-decoration: underline;
    }

      .First-page {
          margin: 50px auto;
      }
  
      .sub-btn {
          display: flex;
          justify-content: center;
      }
  
      body {
          background-image: url("https://www.transparenttextures.com/patterns/stardust.png");
          animation: stars 180s linear infinite;
      }
  
      @keyframes stars {
          0% {
              background-position: 0 0;
          }
  
          100% {
              background-position: 798px -798px;
          }
      }
  
      #earth {
          z-index: -2;
          position: fixed;
          width: 300px;
          height: 300px;
          background: url(https://web.archive.org/web/20150807125159if_/http://www.noirextreme.com/digital/Earth-Color4096.jpg);
          border-radius: 50%;
          background-size: 610px;
          box-shadow: inset 8px 36px 80px 36px rgba(0, 0, 0, 0.562),
              inset -6px 0 12px 4px rgba(255, 255, 255, 0.3);
          animation-name: rotate;
          animation-duration: 12s;
          animation-iteration-count: infinite;
          animation-timing-function: linear;
          -webkit-animation-name: rotate;
          -webkit-animation-duration: 60s;
          -webkit-animation-iteration-count: infinite;
          -webkit-animation-timing-function: linear;
          background-position: 0 0;
      }
  
      @keyframes rotate {
          from {
              background-position: 0px 0px;
          }
  
          to {
              background-position: 500px 0px;
          }
      }
  
      @-webkit-keyframes rotate {
          from {
              background-position: 0px 0px;
          }
  
          to {
              background-position: 500px 0px;
          }
      }
  
      .hr {
          width: 60%;
          display: block;
          margin-top: 1.5em;
          margin-bottom: 1.5em;
          margin-left: auto;
          margin-right: auto;
          border-style: inset;
          border-width: 1px;
          border: 1px solid gray;
      }
  
      .req {
          display: none;
          display: flex;
          justify-content: space-between;
      }
  </style>
  <!-- First-Veiw-For The Page -->
  <section class="First-page">
      <!-- section for header -->
      <section class="Header" style="padding: 10px">
          <!-- <div class="main-head"> -->
          <h1>Contact Us</h1>
          <h3>Let's talk about your project</h3>
          <p>Drop us a line through the form below and we'll get back to you</p>
      </section>
      <div style="
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
      ">
          <h1 style="color: var(--f-dblue); text-align: center; margin-top: 70px; display: none" id="text">
              Thank you for your feedback!
          </h1>
          <img src="/contact/new logo horizental.png" id="image" style="width: 50%; display: none" alt="" />
      </div>
      <!-- section contact us -->
      <section class="form-contact-us needs-validation" style="padding: 10px" id="first-page" novalidate>
          <div class="main-contact-us">
              <!-- div for full-name -->
              <div class="full-name">
                  <input class="first-name" id="first-name" type="text" placeholder="First Name" required />
                  <input class="last-name" id="last-name" type="text" placeholder="Last Name" required />
              </div>
              <input class="email-input" id="email-input" type="text" placeholder="Email Address" required />
              <textarea name id rows="4"
                  placeholder="Please tell us a bit your goals, what are you hoping to achieve with Survicate?"
                  required></textarea>
              <br />
              <div class="sub-btn">
                  <button type="submit" onclick="OnSubmit()">Sumbit</button>
              </div>
          </div>
          <div id="earth"></div>
      </section>
      <hr class="hr" />
  </section>
  <!-- Second-Veiw-For The Page -->
  <section class="Second-page">
      <!-- box-iframe -->
      <div class="main-iframe">
          <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27214.45642933892!2d34.45083700895835!3d31.50198691267593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14fd7f054e542767%3A0x7ff98dc913046392!2sGaza!5e0!3m2!1sen!2seg!4v1714906689090!5m2!1sen!2seg"
              style="border: 0; width: 250px; height: 250px; border-radius: 10px" allowfullscreen="" loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <!-- contact-channel -->
      <section class="contact-channels">
          <ul>
              <h5>
                  If you need to contact us for any other matters, please use the
                  following contact channels:
              </h5>
          </ul>
          <div class="lists">
              <li>For security incidents, email <a href>security@zearth.com.</a></li>
              <li>
                  If you have questions or concerns regarding data protection or compliance with
                  privacy regulations, please don't hesitate to reach out to him by
                  sending an email to <a href>privacy@zearth.com.</a>
              </li>
              <li>
                  If you have issues or complaints with service quality, billing,
                  invoicing, or concerns about our policies, please reach out to us
                  anytime through the "send" button inside the Survicate
                  product or send an email to <a href>support@zearth.com.</a>
              </li>
              <li>
                  For any complaints (e.g. related to sustainability, human rights, or
                  environmental law), please send an email to
                  <a href>complaints@zearth.com.</a>
              </li>
              <li>
                  For any other issues, please send an email to
                  <a href>hello@zearth.com</a>
              </li>
          </div>
      </section>
  </section>
  <!-- js script -->
  <script>
      function OnSubmit() {
          const firstName = document.getElementById("first-name").value;
          console.log(firstName.length);
          const lastName = document.getElementById("last-name").value;
          const emailInput = document.getElementById("email-input").value;
          if (firstName.length > 0 && lastName.length > 0 && emailInput.length > 0) {
              document.getElementById("first-page").style.display = "none";
              document.getElementById("image").style.display = "block";
              document.getElementById("text").style.display = "block";
          } else {
              if (firstName.length < 0) {
                  alert("I am an alert box!");
              }
              if (lastName.length < 0) {
                  alert("I am an alert box!");
              }
              if (emailInput.length < 0) {
                  alert("I am an alert box!");
              }
          }
      }
  </script>`;
  return <InnerHTML html={htmlContent} />;
};
export default function Zcontact() {
  return (
    <>
      {/* rotator astronaut */}
      <div className={classes.rastronaut}>
        <Image
          src="/3D models/astronaut2.png"
          width={500}
          height={500}
          alt="astronaut"
        />
      </div>
      {/* rotator rocket */}
      <div className={classes.rocket}>
        <Image
          src="/3D models/meteor3.gif"
          width={500}
          height={500}
          alt="astronaut"
        />
      </div>
      {/* contact page */}
      <Contact />
    </>
  );
}
