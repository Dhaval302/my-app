import React from 'react';

const AboutUs: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10 px-4">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl w-full">
                <h1 className="text-3xl font-bold text-center mb-6">About Us</h1>
                <p className="text-lg text-gray-700 mb-4">
                    Welcome to our company! We are dedicated to providing the best service to our customers. Our team is passionate about what we do and strives to ensure that every interaction is a positive one.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                    Our company was founded on the principles of innovation, integrity, and excellence. We believe in creating lasting relationships with our clients and continuously improving our services to meet their evolving needs.
                </p>
                <p className="text-lg text-gray-700">
                    Thank you for visiting our site. We look forward to working with you and achieving great things together.
                </p>
            </div>
        </div>
    );
};

export default AboutUs;
