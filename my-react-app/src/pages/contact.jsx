// ContactPage.jsx
import React from 'react';
import Navbar from '../components/Navbar/navbar';
import Footer from '../components/Footer/footer';
import ContactLayout from '../components/Layouts/ContactLayouts';
import FormContact from '../components/Fragments/FormContact';

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <ContactLayout>
        <FormContact></FormContact>
      </ContactLayout>
      <Footer/>
    </>
  );
};

export default ContactPage;
