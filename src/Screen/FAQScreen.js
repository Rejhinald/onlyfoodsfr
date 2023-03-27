import React from 'react';
import Card from "react-bootstrap/Card";
const FAQ = () => {
  return (
<div style={{ margin: "0px", display: "flex", flexDirection: "column", alignItems: "center", border: "2% solid #f8f9fa", padding: "50px"}}>
<Card style={{ margin: "auto", width: "80rem" }}>
        <Card.Img variant="bottom" src="../images/FAQ.png" />
      </Card>
      <br/>
      <br/>
  <h2>Frequently Asked Questions</h2>
  <div style={{margin: "25px"}}>
    <h4>Q: When will my box get delivered?</h4>
    <p>A: Every first day of the month!</p>
  </div>
  <div style={{margin: "25px"}}>
    <h4>Q: When does the theme change?</h4>
    <p>A: Every month!</p>
  </div>
  <div style={{margin: "25px"}}>
    <h4>Q: What will I expect in my box?</h4>
    <p>A: Various snacks and 1 Filipino dish that will surely satisfy you!</p>
  </div>
  <div style={{margin: "25px", alignItems: "justified"}}>
    <h4>Q: Can I customize the contents of my box?</h4>
    <p>
  A: Unfortunately, we do not offer customization at the moment. However, <br/>
  we make sure to provide a variety of snacks and dishes that will <br/>
  cater to different tastes and preferences.
</p> 
  </div>
  <div style={{margin: "25px"}}>
    <h4>Q: What is your cancellation policy?</h4>
    <p>A: You may cancel your subscription anytime before the 25th of the <br/>
        month to avoid being charged for the next month's box. However, <br />
        we do not offer refunds for boxes that have already been shipped.</p>
  </div>
  <div style={{margin: "25px", alignItems: "justified"}}>
    <h4>Q: Delivery Status?</h4>
    <p>
  A: We'll ship your Themed Box via PH Post, DHL, etc. <br/>
  and we'll email you your tracking number and tracking link <br/>
  through trackingmore.com where you can track the delivery status!
</p> 
  </div>
</div>

  );
};

export default FAQ;
