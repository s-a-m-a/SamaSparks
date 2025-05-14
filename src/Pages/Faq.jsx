import React from 'react';
import './Faq.css'; // Optional styling

const Faq = () => {
  const faqs = [
    {
      question: "What is SamaSparks?",
      answer: "SamaSparks is a hobby project showcasing various types of jewelry like rings, earrings, and more. It is currently under development and is being built using modern web technologies."
    },
    {
      question: "Is it safe to purchase from this website?",
      answer: "This website is a personal project and not currently intended for real purchases. It’s mainly built for learning and showcasing web development skills."
    },
    {
      question: "How often is the site updated?",
      answer: "The website is updated weekly as new features and components are built and tested."
    },
    {
      question: "Can I contribute to the project?",
      answer: "At the moment, it’s a solo project, but you can always share feedback or suggestions through the contact links provided."
    },
    {
      question: "What technologies are used to build this site?",
      answer: "The site is built using React, CSS, JavaScript, and other modern frontend tools."
    }
  ];

  return (
    <div className="faq-page">
      <h1>Frequently Asked Questions</h1>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <h3>{faq.question}</h3>
          <p>{faq.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default Faq;
