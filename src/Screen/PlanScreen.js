import React from "react";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import { useEffect, Alert } from "react";
import { paymentUserSuccess } from "../Actions/accountActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ButtonWrapper from "../Components/ButtonWrapper";
import ButtonWrapper1 from "../Components/ButtonWrapper1";
import ButtonWrapper2 from "../Components/ButtonWrapper2";
import Card from "react-bootstrap/Card";


function PlanScreen() {
  const userLogin = useSelector((state) => state.userLogin);
  let navigate = useNavigate();
  const { userInfo } = userLogin;

  return (
    <div style={{ margin: '5% 15%' }}>
      <Card style={{ margin: "auto", width: "50rem" }}>
        <Card.Img variant="bottom" src="../images/PLANS.png" />
      </Card>
      <br/>
    <br/>
    <div className="container">
      <div className="text-center w-75 my-4 mx-auto">
        <h1>Plans</h1>
        <p className="fs-5 text-muted">Choose your plan.</p><br></br><br></br>
      </div>
      <main>
      <div className="row row-cols-1 row-cols-md-3">
  <div className="col">
    <div className="card text-center shadow">
      <div className="card-header">
        <br></br><h4 className="fw-normal">Budget Plan</h4>
      </div>
      <div className="card-body">
        <h1 className="card-title">
          <br></br>Php 150<small className="text-muted fw-light">/month</small>
        </h1>
        <ul className="list-unstyled py-3">
          <li>Enjoy your themed Filipino Food every 1st of the month.</li>
          <li>Php 1800 billed every 12 months.</li>
          <li>Get an exlusive themed box every 1st day of the month!</li>
          <li>Cancel your plan anytime.</li>
        </ul>
                {userInfo ? (
                  !userInfo.isSubscriber ? (
                    <PayPalScriptProvider
                      options={{
                        "client-id":
                          "ARM3xHbgT-qQQTOM73NjBfEes9kazGhmsHmgEXVdh6U0jpMMrJeaRdyo4j9tIn2RznXtX-7KluHYquIX",
                        components: "buttons",
                        intent: "subscription",
                        vault: true,
                      }}
                    >
                      <ButtonWrapper type="subscription" />
                    </PayPalScriptProvider>
                  ) : (
                    <div />
                  )
                ) : (
                  <div />
                )}
              </div>
            </div>
          </div>

          <div className="col">
          <div className="card text-center" style={{ boxShadow: "0 0 10px rgba(63, 195, 128, 0.5)" }}>
              <div className="card-header">
              <br/><br></br><h4 className="fw-normal">Premium Plan</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title">
                <br></br><br/>Php 1000<small className="text-muted fw-light">/year</small>
                </h1>
                <ul className="list-unstyled py-3">
                  <li>Best Value</li>
                  <li>Save up to 57%</li>
                  <li>Get an exlusive themed box every 1st day of the month!</li>
                  <li>Cancel your plan anytime.</li>
                </ul>
                {userInfo ? (
                  !userInfo.isSubscriber ? (
                    <PayPalScriptProvider
                      options={{
                        "client-id":
                          "ARM3xHbgT-qQQTOM73NjBfEes9kazGhmsHmgEXVdh6U0jpMMrJeaRdyo4j9tIn2RznXtX-7KluHYquIX",
                        components: "buttons",
                        intent: "subscription",
                        vault: true,
                      }}
                    >
                      <ButtonWrapper1 type="subscription" />
                    </PayPalScriptProvider>
                  ) : (
                    <div />
                  )
                ) : (
                  <div />
                )}
              </div>
            </div>
          </div>
          <div className="col">
  <div className="card text-center shadow">
    <div className="card-header">
      <br/><h4 className="fw-normal">Basic Plan</h4>
    </div>
    <div className="card-body">
      <h1 className="card-title">
        <br/>Php 600<small className="text-muted fw-light">/6 months</small>
      </h1>
      <ul className="list-unstyled py-3">
        <li>Enjoy your themed Filipino Food every 1st of the month for 6 months.</li>
        <li>Save up to 40%</li>
        <li>Get an exclusive themed box every 1st day of the month!</li>
        <li>Cancel your plan anytime.</li>
      </ul>
                {userInfo ? (
                  !userInfo.isSubscriber ? (
                    <PayPalScriptProvider
                      options={{
                        "client-id":
                          "ARM3xHbgT-qQQTOM73NjBfEes9kazGhmsHmgEXVdh6U0jpMMrJeaRdyo4j9tIn2RznXtX-7KluHYquIX",
                        components: "buttons",
                        intent: "subscription",
                        vault: true,
                      }}
                    >
                      <ButtonWrapper2 type="subscription" />
                    </PayPalScriptProvider>
                  ) : (
                    <div />
                  )
                ) : (
                  <div />
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
    </div>
  );
}
export default PlanScreen;