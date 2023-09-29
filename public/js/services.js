/* services.js, Muhammad vohra, 301257640, 2023/09/29 */

var btns1 = document.getElementById('service1');
var btns2 = document.getElementById('service2');
var btns3 = document.getElementById('service3');
var btns4 = document.getElementById('service4');
var h1=document.createElement("p");
var div1= document.getElementsByClassName('right')[0];
var div2 = document.getElementById('left');
var imgOne = document.createElement('img');
var heading1 = document.getElementById('name');
var navbar= document.getElementsByClassName('navig-bar')[0];


firstbtn();
btns1.onclick= firstbtn;
function firstbtn() {
    setBackground(1);
    heading1.innerText= "Responsive Web Development";
    imgOne.src='/img/service1.jpg';
    div1.append(imgOne);
    div2.innerText = "🌐 What We Offer:\n\
    We build websites that look great and work smoothly on any device – be it a desktop, laptop, tablet, or smartphone.\n\
    \n\
    🚀 Key Features:\n\
    \n\
    Adaptability: Your site will adjust seamlessly to different screen sizes, ensuring a consistent experience for all users.\n\
    \n\
    Speed: We prioritize fast loading times, especially important for users on the go.\n\
    \n\
    Search Friendly: Our designs are optimized for search engines, helping your site rank well on Google and others.\n\
    \n\
    👥 Why It Matters:\n\
    \n\
    User Happiness: A site that works well on any device makes your visitors happy and more likely to stick around.\n\
    \n\
    Wider Reach: With mobile usage skyrocketing, a responsive site ensures you connect with a broader audience.\n\
    \n\
    SEO Boost: Google loves mobile-friendly sites, giving you better visibility online.\n\
    \n\
    💡 Why Choose Us:\n\
    We're not just building websites; we're creating an online experience that's smooth, fast, and tailored to your audience's devices. Let's make your digital presence shine!";
    navbar.style='height:1400px';
}
btns2.onclick = function() {
    setBackground(2);
    heading1.innerText= "Digital Marketing";
    imgOne.src='/img/service2.jpg';
    div1.append(imgOne);
    div2.innerText = "🌐 What We Offer:\n\n" +
    "🚀 Search Engine Optimization (SEO): Get found easily on search engines. We optimize your website to rank higher and attract more organic traffic.\n" +
    "📱 Social Media Management: Build a strong online presence. We create engaging content and run targeted ad campaigns to connect with your audience.\n" +
    "✍️ Content Marketing: Capture attention and establish authority through compelling content. Our services include creating blogs, articles, videos, and more.\n" +
    "📧 Email Marketing: Stay in touch with your audience through personalized email campaigns. We design, execute, and analyze campaigns to nurture leads and promote your products.\n" +
    "💡 Pay-Per-Click (PPC) Advertising: Maximize your reach with targeted PPC advertising. We create and manage campaigns on platforms like Google Ads to drive instant traffic.\n\n" +
    "👥 Why It Matters:\n\n" +
    "👀 Increased Visibility: Our strategies enhance your online visibility, ensuring your brand is easily discoverable.\n" +
    "💬 Engagement: Connect with your audience on a deeper level through engaging content and targeted campaigns.\n\n" +
    "💡 Why Choose Us: We're not just building websites; we're creating an online experience that's smooth, fast, and tailored to your audience's devices. Let's make your digital presence shine!";
    navbar.style='height:1500px';
};
btns3.onclick = function() {
    setBackground(3);
    heading1.innerText= "Mobile App Development";
    imgOne.src='/img/service3.gif';
    div1.append(imgOne);
    div2.innerText = "📱 Welcome to our Mobile App Development Services! We specialize in creating cutting-edge mobile applications tailored to your business needs.\n\n" +
    "🌐 What We Offer:\n\n" +
    "🚀 iOS App Development: Craft intuitive and powerful iOS applications that resonate with your audience on Apple devices.\n" +
    "📱 Android App Development: Reach a broader audience with feature-rich Android applications designed for various devices.\n" +
    "🔄 Cross-Platform Development: Optimize development time and costs with cross-platform solutions that work seamlessly across multiple platforms.\n\n" +
    "🚀 Key Features:\n\n" +
    "📱 User-Centric Design: We prioritize an intuitive and visually appealing design to enhance the user experience.\n" +
    "🚀 Performance Optimization: Ensure your app runs smoothly and efficiently for optimal user satisfaction.\n" +
    "🌐 Connectivity: Leverage the power of connectivity with features like real-time updates and cloud integration.\n\n" +
    "👥 Why It Matters:\n\n" +
    "📈 Business Growth: A well-designed app enhances user engagement, leading to increased customer loyalty and business growth.\n" +
    "🚀 Competitive Edge: Stay ahead in the market by offering a mobile app that stands out in functionality and user experience.\n\n" +
    "💡 Why Choose Us: We bring your app ideas to life, combining creativity and technology to deliver mobile solutions that drive your business forward.";
    navbar.style='height:1400px';
};
btns4.onclick = function() {
    setBackground(4);
    heading1.innerText= "Database Design and Management";
    imgOne.src='/img/service4.png';
    div1.append(imgOne);
    div2.innerText = "💾 Welcome to our Database Design and Management Services! We specialize in creating robust and efficient database solutions tailored to your business requirements.\n\n" +
    "🌐 What We Offer:\n\n" +
    "📊 Database Design: Craft well-structured and optimized database architectures that support your application's data requirements.\n" +
    "💾 Database Management: Ensure seamless operation, security, and performance of your databases with our management solutions.\n" +
    "🔄 Database Migration: Effortlessly transition your data between platforms while maintaining data integrity and minimizing downtime.\n\n" +
    "🚀 Key Features:\n\n" +
    "🛡️ Security: Implement advanced security measures to safeguard your sensitive data and protect against unauthorized access.\n" +
    "🚀 Performance Optimization: Fine-tune database performance for faster query execution and improved overall system efficiency.\n" +
    "📈 Scalability: Design databases that can scale with your business, accommodating growth in data volume and user activity.\n\n" +
    "👥 Why It Matters:\n\n" +
    "📊 Data-Driven Decisions: A well-designed and managed database empowers your business with accurate and timely data for informed decision-making.\n" +
    "🚀 Operational Efficiency: Streamline business processes by ensuring data availability and reliability at all times.\n\n" +
    "💡 Why Choose Us: We're not just managing data; we're architecting solutions that lay the foundation for your data-driven success.";

    navbar.style='height:1400px';
};
function setBackground(num) {
    for (var i = 1; i <= 4; i++) {
        var currentBtn = document.getElementById('service' + i);
        
        if (i === num) {
            currentBtn.style.backgroundColor = 'rgb(163, 142, 221)';
            currentBtn.style.color='#fff';
        } else {
            currentBtn.style.backgroundColor = 'rgb(46, 4, 81)';
            currentBtn.style.color='#fff'
        }
    }
}

