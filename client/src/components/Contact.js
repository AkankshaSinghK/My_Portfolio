import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const Contact = () => {
  const formInitialDetails = {
    fullName: "",
    email: "",
    phone: "",
    emailSubject: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    try {
      const response = await axios.post(
        "https://my-portfolio-server-opal-two.vercel.app/api/contact",
        formDetails
      );

      setStatus({ success: true, message: "Message sent successfully!" });
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success",
      });
    } catch (error) {
      setStatus({
        success: false,
        message: "Something went wrong. Please try again later.",
      });
      Swal.fire({
        title: "Error!",
        text: "Something went wrong. Please try again later.",
        icon: "error",
      });
    }
    setButtonText("Send");
    setFormDetails(formInitialDetails);
  };
  return (
    <section className="contact" id="contact">
      <h2 className="heading">
        Contact <span>Me!</span>
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="input-box">
          <input
            type="text"
            value={formDetails.fullName}
            onChange={(e) => onFormUpdate("fullName", e.target.value)}
            name="fullName"
            placeholder="Full Name"
            required
          />
          <input
            type="email"
            value={formDetails.email}
            onChange={(e) => onFormUpdate("email", e.target.value)}
            name="email"
            placeholder="Email Address"
            required
          />
        </div>
        <div className="input-box">
          <input
            type="number"
            value={formDetails.phone}
            onChange={(e) => onFormUpdate("phone", e.target.value)}
            name="phone"
            placeholder="Mobile Number"
            required
          />
          <input
            type="text"
            value={formDetails.emailSubject}
            onChange={(e) => onFormUpdate("emailSubject", e.target.value)}
            name="emailSubject"
            placeholder="Email Subject"
            required
          />
        </div>
        <textarea
          value={formDetails.message}
          onChange={(e) => onFormUpdate("message", e.target.value)}
          name="message"
          id="message"
          cols="30"
          rows="10"
          placeholder="Your Message"
          required
        ></textarea>
        <input type="submit" value="Send Message" className="btn" />
      </form>
    </section>
  );
};

export default Contact;
