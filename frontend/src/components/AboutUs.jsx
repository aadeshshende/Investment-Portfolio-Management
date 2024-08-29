import React from 'react';

const AboutUs = () => {
    return (
        <div className="container mt-5">
            <div className="card shadow-lg" style={{ maxHeight: '500px', overflowY: 'auto' }}>
                <div className="card-body">
                    <h2 className="card-title text-center text-primary mb-4">About Us</h2>
                    
                    <h3 className="text-dark mt-4">Welcome to <span className="text-success">InvestLine</span></h3>
                    <p className="text-muted">
                        InvestLine is a dynamic and innovative online platform designed to make investing accessible and straightforward for everyone. Our mission is to empower individuals by providing them with the tools, resources, and support they need to make informed investment decisions and achieve their financial goals.
                    </p>

                    <h3 className="text-dark mt-4">Our Story</h3>
                    <p className="text-muted">
                        Founded by a team of financial experts and technology enthusiasts, <span className="text-success">InvestLine</span> was born out of the belief that investing should not be a privilege reserved for a few but an opportunity available to all. We recognized that many people are intimidated by the complexities of the stock market, so we set out to create a platform that is both user-friendly and educational.
                    </p>

                    <h3 className="text-dark mt-4">What We Offer</h3>
                    <p className="text-muted">
                        At <span className="text-success">InvestLine</span>, we offer a comprehensive suite of features tailored to meet the diverse needs of our users:
                    </p>
                    <ul className="list-group list-group-flush mb-4">
                        <li className="list-group-item"><strong>Stock Market Insights:</strong> Stay up-to-date with the latest market trends and insights. Our platform provides real-time data, news, and analysis to help you stay ahead of the curve.</li>
                        <li className="list-group-item"><strong>Investment Tools:</strong> Whether you're a seasoned investor or just starting, our intuitive tools make it easy to manage your portfolio, track performance, and make informed decisions.</li>
                        <li className="list-group-item"><strong>Educational Resources:</strong> We believe that knowledge is power. <span className="text-success">InvestLine</span> offers a wealth of educational materials, including articles, tutorials, and webinars, to help you build your investing knowledge and confidence.</li>
                        <li className="list-group-item"><strong>Personalized Experience:</strong> Our platform is designed with you in mind. From customized watchlists to tailored recommendations, <span className="text-success">InvestLine</span> provides a personalized experience that aligns with your investment goals.</li>
                        <li className="list-group-item"><strong>Secure Transactions:</strong> Security is our top priority. <span className="text-success">InvestLine</span> uses cutting-edge encryption and security protocols to ensure that your personal and financial information is safe.</li>
                    </ul>

                    <h3 className="text-dark mt-4">Our Vision</h3>
                    <p className="text-muted">
                        At <span className="text-success">InvestLine</span>, our vision is to create a world where everyone has the confidence and resources to invest wisely. We are committed to providing an inclusive platform that caters to investors of all backgrounds and experience levels.
                    </p>

                    <h3 className="text-dark mt-4">Why Choose Us?</h3>
                    <ul className="list-group list-group-flush mb-4">
                        <li className="list-group-item"><strong>Transparency:</strong> We believe in full transparency when it comes to fees, services, and operations. There are no hidden charges, and our users can easily access detailed information about their investments.</li>
                        <li className="list-group-item"><strong>Customer Support:</strong> Our dedicated support team is here to help you every step of the way. Whether you have questions about your account, need assistance with a transaction, or want to learn more about investing, we're here to assist you.</li>
                        <li className="list-group-item"><strong>Community Focus:</strong> We strive to build a community of like-minded individuals who share a passion for investing. Through our platform, users can connect, share insights, and learn from each other.</li>
                    </ul>

                    <h3 className="text-dark mt-4">Our Commitment</h3>
                    <p className="text-muted">
                        <span className="text-success">InvestLine</span> is committed to continuous improvement. We listen to our users and constantly evolve our platform to meet their changing needs. We are dedicated to making investing accessible, transparent, and rewarding for everyone.
                    </p>

                    <h3 className="text-dark mt-4">Join Us Today</h3>
                    <p className="text-muted">
                        <span className="text-success">InvestLine</span> is more than just a platform; it's a gateway to financial freedom. Join us today and take control of your financial future. Whether you're looking to grow your wealth, save for a future goal, or simply learn more about investing, <span className="text-success">InvestLine</span> is here to support you on your journey.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
