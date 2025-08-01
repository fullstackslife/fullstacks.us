'use client';

import { useState } from 'react';

export default function FAQ() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const faqs = [
    {
      question: "How much will it cost?",
      answer: "To get a better idea of the cost of what you want to build, give us a quick phone call. We'll ask you a few questions about the nature of the site, what sort of interactivity the site will have, your graphic design needs, etc. Then we'll be able to give you a ballpark figure. If you're still interested, we'll come to your place of business and come up with a firm quote."
    },
    {
      question: "How long it takes to design?",
      answer: "The time limit of any assignment is normally dictated by the client. If you have any time limit in mind we will attempt to assemble it for you. The main general delay in the making of a website is waiting for the content of the pages to be sent to us by the client."
    },
    {
      question: "How do I associate with IT Company?",
      answer: "The process begins when you contact us with your requirements. We analyze your requirements and respond to you. On the basis of the further discussion, you can choose an engagement model that suits you the best. After that, we begin the process of development."
    },
    {
      question: "Can you help my current site look more professional?",
      answer: "Yes. Give us your requirements and we have experienced expertise to help you give a new professional look that really wonders!"
    },
    {
      question: "When do I pay?",
      answer: "For most projects, equal payments are made at the start, midway, and the end of the project, but we can work with you to set up a schedule that meets your needs. We understand that this is a big investment and want to help you budget for the expense in whatever way possible. We accept checks, PayPal, and all major credit cards."
    }
  ];

  return (
    <section className="faq">
      <h1 className="heading" style={{ marginTop: '-2rem', color: '#00bfff' }} id="faq">FAQ</h1>
      <div className="row">
        <div className="accordion-container">
          {faqs.map((faq, index) => (
            <div key={index} className="accordion">
              <div 
                className="accordion-header"
                style={{padding: '1rem'}}
                onClick={() => toggleAccordion(index)}
              >
                <div className="accordion-icon">
                  <span>{openAccordion === index ? '-' : '+'}</span>
                </div>
                <div className="accordion-question">
                  <h3>{faq.question}</h3>
                </div>
              </div>
              {openAccordion === index && (
                <div className="accordion-body">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 