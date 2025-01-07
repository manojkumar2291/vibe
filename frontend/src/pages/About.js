import React from "react";

const AboutUs = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <div className="space-y-6">
        <p className="text-lg">
          Welcome to <span><i>Vibe</i></span>, a place where you can discover and shop the best products with ease.
        </p>
        <p className="text-lg">
          We are a customer-first company focused on providing a seamless and efficient shopping experience for all our
          customers. Our team is passionate about delivering high-quality products, supported by excellent customer service.
        </p>
        <h2 className="text-2xl font-semibold">Our Mission</h2>
        <p className="text-lg">
          Our mission is to make online shopping as convenient and enjoyable as possible by providing our customers with
          a wide range of products, exceptional customer support, and easy navigation. We are committed to creating an
          enjoyable shopping experience for everyone.
        </p>

        <h2 className="text-2xl font-semibold">Our Vision</h2>
        <p className="text-lg">
          Our vision is to become a leader in e-commerce by continuously innovating and improving our offerings to meet
          our customers' needs. We aim to build long-lasting relationships with our customers through trust, transparency,
          and outstanding service.
        </p>

        <h2 className="text-2xl font-semibold">Our Values</h2>
        <ul className="list-disc pl-5">
          <li className="text-lg">Customer-Centric Approach</li>
          <li className="text-lg">Innovation and Creativity</li>
          <li className="text-lg">Transparency and Integrity</li>
          <li className="text-lg">Excellence in Service</li>
        </ul>

        <h2 className="text-2xl font-semibold">Join Us</h2>
        <p className="text-lg">
          We are always on the lookout for passionate individuals to join our team. If you're looking for an exciting
          career opportunity in e-commerce, don't hesitate to reach out to us.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
