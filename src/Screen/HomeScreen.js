import React, { useEffect } from "react";
import MyWebpage from "./Benefits";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { listTheme1 } from "../Actions/themeActions";

function HomeScreen() {
  const containerStyle2 = {
    backgroundColor: "white",
  };
  const containerStyle = {
    marginLeft: "30%",
    marginRight: "30%",
  };
  const tableStyle = {
    display: "table",
    borderCollapse: "collapse",
    width: "100%",
    transform: "scale(0.8)",
  };
  const rowStyle = {
    display: "table-row",
    margin: "5px",
  };
  const columnStyle = {
    display: "table-cell",
    padding: "10px 20px",
    verticalAlign: "middle",
    textAlign: "left",
  };
  const imgStyle = {
    width: "50px",
    height: "50px",
    textAlign: "left",
  };
  const dispatch = useDispatch();
  const themeDetails = useSelector((state) => state.themeDetails);
  const { loading, error, theme } = themeDetails;

  useEffect(() => {
    dispatch(listTheme1());
  }, [dispatch]);

  return (
    <div style={{ width: "99.5%" }}>
      <div
        style={{
          backgroundColor: "#F5F5F5",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            paddingTop: "100px",
            paddingBottom: "30px",
          }}
        >
          What is OnlyFoods?
        </h1>
        <p
          style={{
            textAlign: "center",
            marginLeft: "35%",
            marginRight: "35%",
            marginBottom: "-5%",
            fontSize: "16px",
          }}
        >
          OnlyFoods is a meal kit delivery service that offers monthly shipments
          of themed recipes and snacks that allow you to make easy and appealing
          meals at home. The service is a great way to try various Filipino
          dishes and snacks.
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <h2>This Month's Theme:</h2>
        </p>

        <>
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>{error}</p>
          ) : (
            <div className="card" style={{ maxWidth: "100%", margin: "8% 0%" }}>
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img
                    className="card-img-top"
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      objectFit: "contain",
                    }}
                    src={theme.image}
                    alt={theme.name}
                  />
                </div>
                <div className="col-md-8">
                  <div
                    className="card-body d-flex align-items-center justify-content-center"
                    style={{ height: "100%" }}
                  >
                    <div>
                      <h1 className="card-title mb-4 card-text text-center">
                        {theme.name}
                      </h1>
                      <br />
                      <br />
                      <h3 className="card-text text-center">
                        {theme.description}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            alignItems: "center",
            backgroundColor: "#F5F5F5",
            height: "100vh",
            padding: "50px",
          }}
        >
          <div
            style={{
              flexBasis: "30%",
              margin: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src="https://i.imgur.com/6uS5kpH.png"
              alt="What's the Theme?"
              style={{ width: "250px", height: "250px" }}
            />
            <h2 style={{ marginTop: "20px" }}>Random Themes!</h2>
            <p style={{ textAlign: "center", margin: "20px 0" }}>
              Every month, the boxes you'll receive will differ based on the
              monthly theme. These themes changes every month!
            </p>
            <Link to="/plans">
              <button
                style={{
                  backgroundColor: "#2EC4B6",
                  color: "white",
                  padding: "10px 20px",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Learn More
              </button>
            </Link>
          </div>
          <div
            style={{
              flexBasis: "30%",
              margin: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src="https://i.imgur.com/HYQ5ywP.png"
              alt="Get your delivery"
              style={{ width: "250px", height: "250px" }}
            />
            <h2 style={{ marginTop: "20px" }}>Get your delivery</h2>
            <p style={{ textAlign: "center", margin: "20px 0" }}>
              Every month, you’ll open simple step-by-step recipes and snacks
              complete with nutritional information and fresh, pre-measured
              ingredients to get you whipping up delicious dinners in no time.
            </p>
            <Link to="/plans">
              <button
                style={{
                  backgroundColor: "#2EC4B6",
                  color: "white",
                  padding: "10px 20px",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Learn More
              </button>
            </Link>
          </div>
          <div
            style={{
              flexBasis: "30%",
              margin: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src="https://i.imgur.com/jflD8dT.png"
              alt="Cook, eat, enjoy!"
              style={{ width: "250px", height: "250px" }}
            />
            <h2 style={{ marginTop: "20px" }}>Cook, eat, enjoy!</h2>
            <p style={{ textAlign: "center", margin: "20px 0" }}>
              The old “what do you want to eat?” conversation is about to be
              banished from your life. Welcome to a world where you can try
              various Filipino dishes.
            </p>
            <Link to="/plans">
              <button
                style={{
                  backgroundColor: "#2EC4B6",
                  color: "white",
                  padding: "10px 20px",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
      <hr style={{marginTop: "5rem", marginBottom: "5rem"}} />
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
                    <img
                      src="https://i.imgur.com/ysWKAFn.png"
                      alt="Deliciousness"
                      style={imgStyle}
                    />
                    <h3 style={{ marginTop: "20px" }}>Deliciousness</h3>
                    <p>
                      Each week, you’ll open simple step-by-step recipes
                      complete with nutritional information and fresh,
                      pre-measured ingredients to get you whipping up delicious
                      dinners in no time.
                    </p>
                  </td>
                  <td style={columnStyle}>
                    <img
                      src="https://i.imgur.com/GtG8AOg.png"
                      alt="Simplicitys"
                      style={imgStyle}
                    />
                    <h3 style={{ marginTop: "20px" }}>Simplicity</h3>
                    <p>
                      The old “what do you want to eat?” conversation is about
                      to be banished from your life. Welcome to a world where
                      dinner is always planned, simple, and delicious.
                    </p>
                  </td>
                </tr>
                <tr style={rowStyle}>
                  <td style={columnStyle}>
                    <img
                      src="https://i.imgur.com/7LEc3Lr.png"
                      alt="Flexibility"
                      style={imgStyle}
                    />
                    <h3 style={{ marginTop: "20px" }}>Flexibility</h3>
                    <p>
                      Whether cooking for yourself or your household, we have a
                      flexible plan to match your lifestyle. Need to cancel,
                      change meals, or skip a week? Not a problem.
                    </p>
                  </td>
                  <td style={columnStyle}>
                    <img
                      src="https://i.imgur.com/rZwxRow.png"
                      alt="Stress Free"
                      style={imgStyle}
                    />
                    <h3 style={{ marginTop: "20px" }}>Stress Free</h3>
                    <p>
                      You can enjoy cooking and eating without the stress of
                      meal planning and grocery shopping.
                    </p>
                  </td>
                </tr>
                <tr style={rowStyle}>
                  <td style={columnStyle}>
                    <img
                      src="https://i.imgur.com/5LKPKsB.png"
                      alt="Locally Sourced"
                      style={imgStyle}
                    />
                    <h3 style={{ marginTop: "20px" }}>Locally Sourced</h3>
                    <p>
                      The ingredients are locally sourced so that they stay
                      fresh in your doorstep.
                    </p>
                  </td>
                  <td style={columnStyle}>
                    <img
                      src="https://i.imgur.com/vIfOHu0.png"
                      alt="No Waste"
                      style={imgStyle}
                    />
                    <h3 style={{ marginTop: "20px" }}>No Waste</h3>
                    <p>
                      We only send you the ingredients you need, reducing food
                      waste and saving you money.
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HomeScreen;
