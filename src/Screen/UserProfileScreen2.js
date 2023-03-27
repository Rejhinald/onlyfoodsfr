import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    const clientId = 'ARM3xHbgT-qQQTOM73NjBfEes9kazGhmsHmgEXVdh6U0jpMMrJeaRdyo4j9tIn2RznXtX-7KluHYquIX';
    const clientSecret = 'EKQ7m23QlIuh5OP99O0WNRoRxvnd3wDciE4fqs0nzWRoSx_JVSXj9J80Azr1GotA3a-ahuJyqcLg19eP';

    const getToken = async () => {
      try {
        const response = await axios({
          method: 'post',
          url: 'https://api.sandbox.paypal.com/v1/oauth2/token',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Basic ${btoa(`${clientId}:${clientSecret}`)}`
          },
          data: 'grant_type=client_credentials'
        });

        console.log(response.data);
        setAccessToken(response.data.access_token);
      } catch (error) {
        console.error(error);
      }
    };

    getToken();

    const intervalId = setInterval(() => {
      getToken();
    }, 60000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h1>PayPal Access Token: {accessToken}</h1>
    </div>
  );
}

export default App;
