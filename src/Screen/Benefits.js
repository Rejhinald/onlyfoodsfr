import React from 'react';
import "../bootstrap.min.css";

function MyWebpage() {
  const containerStyle2 = {
    backgroundColor: "white"
  }
  const containerStyle = {
    marginLeft: "30%",
    marginRight: "30%",
  }
  const tableStyle = {
    display: "table",
    borderCollapse: "collapse",
    width: "100%",
    transform: "scale(0.8)"
  }
  const rowStyle = {
    display: "table-row",
    margin: "5px"
  }
  const columnStyle = {
    display: "table-cell",
    padding: "10px 20px",
    verticalAlign: "middle",
    textAlign: "left"
  }
  const imgStyle = {
    width: "50px",
    height: "50px",
    textAlign: "left"
  };

    return (
      <div>
                  <div className="row">
        <div className="col-12 text-center pt-5">
          <h2>Benefits</h2>
        </div>
      </div>
            <div style={containerStyle2}> 
            <div style={containerStyle}>  
                <table style={tableStyle}>
                    <tbody>
                        <tr style={rowStyle}>
                            <td style={columnStyle}>
                                <img src="https://i.imgur.com/ysWKAFn.png" alt="Deliciousness" style={imgStyle} />
                                <h3 style={{ marginTop: "20px" }}>Deliciousness</h3>
                                <p>Each week, you’ll open simple step-by-step recipes complete with nutritional information and fresh, pre-measured ingredients to get you whipping up delicious dinners in no time.</p>
                            </td>
                            <td style={columnStyle}>
                                <img src="https://i.imgur.com/GtG8AOg.png" alt="Simplicitys" style={imgStyle} />
                                <h3 style={{ marginTop: "20px" }}>Simplicity</h3>
                                <p>The old “what do you want to eat?” conversation is about to be banished from your life. Welcome to a world where dinner is always planned, simple, and delicious.</p>
                            </td>
                        </tr>
                        <tr style={rowStyle}>
                            <td style={columnStyle}>
                                <img src="https://i.imgur.com/7LEc3Lr.png" alt="Flexibility" style={imgStyle} />
                                <h3 style={{ marginTop: "20px" }}>Flexibility</h3>
                                <p>Whether cooking for yourself or your household, we have a flexible plan to match your lifestyle. Need to cancel, change meals, or skip a week? Not a problem.</p>
                            </td>
                            <td style={columnStyle}>
                                <img src="https://i.imgur.com/rZwxRow.png" alt="Stress Free" style={imgStyle} />
                                <h3 style={{ marginTop: "20px" }}>Stress Free</h3>
                                <p>You can enjoy cooking and eating without the stress of meal planning and grocery shopping.</p>
                            </td>
                        </tr>
                        <tr style={rowStyle}>
                            <td style={columnStyle}>
<img src="https://i.imgur.com/5LKPKsB.png" alt="Locally Sourced" style={imgStyle} />
<h3 style={{ marginTop: "20px" }}>Locally Sourced</h3>
<p>The ingredients are locally sourced so that they stay fresh in your doorstep.</p>
</td>
<td style={columnStyle}>
<img src="https://i.imgur.com/vIfOHu0.png" alt="No Waste" style={imgStyle} />
<h3 style={{ marginTop: "20px" }}>No Waste</h3>
<p>We only send you the ingredients you need, reducing food waste and saving you money.</p>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
);
}
export default MyWebpage;
