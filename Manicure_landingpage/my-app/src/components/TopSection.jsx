// import React, { useState } from 'react';
// import classes from './TopSection.module.css';


// const TopSection = () => {
//   const [isFormOpen, setIsFormOpen] = useState(false);

//   const handleButtonClick = () => {
//     setIsFormOpen(true);
//   };

//   const handleCloseForm = () => {
//     setIsFormOpen(false);
//   };

//   return (
//     <div className={classes.top_section}>
//       <div className={classes.content}>
//         <h1 className={classes.title}>Professional Nail Care Services</h1>
//         <p className={classes.description}>Get the best manicure and pedicure from our experienced technicians. We provide a wide range of services to meet your needs.</p>
//         <button className={classes.order_call_button} onClick={handleButtonClick}>
//           Order a Call
//         </button>
//       </div>
//       <div className={classes.image_container}>
//         <img src="..\images\TopSectionImg.jpg" alt="Nail Care" className={classes.top_section_image} />
//       </div>

//       {isFormOpen && (
//         <div className={`${classes.order_form} ${isFormOpen ? classes.active : ''}`}>
//           <div className={classes.form_overlay} onClick={handleCloseForm}></div>
//           <div className={classes.form_content}>
//             <h2>Order a Call</h2>
//             <form>
//               <label>
//                 Name:
//                 <input type="text" name="name" required />
//               </label>
//               <label>
//                 Phone Number:
//                 <input type="tel" name="phone" required />
//               </label>
//               <button type="submit">Submit</button>
//               <button type="button" onClick={handleCloseForm} className={classes.close_button}>Close</button>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TopSection;


import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import classes from './TopSection.module.css';

const TopSection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleButtonClick = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qufrccb', 'template_lehj45w', e.target, 'MIGqfNqOoJWU-rjVX')
      .then((result) => {
          console.log(result.text);
          alert("Message sent successfully!");
      }, (error) => {
          console.log(error.text);
          alert("An error occurred, please try again later.");
      });

    e.target.reset();
    handleCloseForm();
  };

  return (
    <div className={classes.top_section}>
      <div className={classes.content}>
        <h1 className={classes.title}>Professional Nail Care Services</h1>
        <p className={classes.description}>Get the best manicure and pedicure from our experienced technicians. We provide a wide range of services to meet your needs.</p>
        <button className={classes.order_call_button} onClick={handleButtonClick}>
          Order a Call
        </button>
      </div>
      <div className={classes.image_container}>
        <img src="..\images\TopSectionImg.jpg" alt="Nail Care" className={classes.top_section_image} />
      </div>

      {isFormOpen && (
        <div className={`${classes.order_form} ${isFormOpen ? classes.active : ''}`}>
          <div className={classes.form_overlay} onClick={handleCloseForm}></div>
          <div className={classes.form_content}>
            <h2>Order a Call</h2>
            <form onSubmit={sendEmail}>
              <label for="from_name">
                Name:
                <input type="text" name="from_name" id="from_name" required />
              </label>
              <label for="phone_number">
                Phone Number:
                <input type="tel" name="phone_number" id="phone_number" required />
              </label>
              <button type="submit" id="button">Submit</button>
              <button type="button" onClick={handleCloseForm} className={classes.close_button}>Close</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopSection;