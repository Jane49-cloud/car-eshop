import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { Card, Row, Col } from "react-bootstrap";

const Faqs = () => {
  const faqsData = [
    {
      question: "How do I search for a car on your website?",
      answer:
        "To search for a car on our website, simply click on the 'Search Cars' button on the home page. You can then filter your search by make, model, year, price range, and other criteria.",
    },
    {
      question: "How do I contact the seller of a car?",
      answer:
        "To contact the seller of a car, simply fill out the contact form on the car's listing page. You can also send the seller a message through our messaging system.",
    },
    {
      question: "How do I sell my car on your website?",
      answer:
        "To sell your car on our website, simply click on the 'Sell Your Car' button on the home page. You will then be prompted to provide information about your car and upload photos. Once your listing is approved, it will be visible to potential buyers.",
    },
    {
      question: "Can I get financing for a car purchase through your website?",
      answer:
        "Yes, we offer financing options for qualified buyers. You can apply for financing through our website and get pre-approved before you start your car search.",
    },
    {
      question:
        "Do you offer any warranties for the cars sold on your website?",
      answer:
        "We do not offer warranties for the cars sold on our website, but many of our sellers offer extended warranties or service contracts. You can also purchase a third-party warranty if you want additional coverage.",
    },
    {
      question: "How do I know if a car has been in an accident?",
      answer:
        "We provide a free Carfax report for every car listed on our website. The Carfax report will show you the car's accident history, service records, and other important information.",
    },
  ];

  return (
    <div className="container mt-5">
      <h1>Frequently Asked Questions</h1>
      <Row>
        {faqsData.map((faq, index) => {
          const id = `faq-${index}`;
          return (
            <Col md={4} key={index} style={{ marginBottom: "20px" }}>
              <Card>
                <Card.Header>
                  <Card.Title>{faq.question}</Card.Title>
                </Card.Header>
                <Card.Body>
                  <Card.Text>{faq.answer}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Faqs;
