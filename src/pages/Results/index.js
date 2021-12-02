import React, { useEffect, useState } from "react";
import "./Results.css";
import Container from "../../components/Common/Container";
import axiosInstance from "../../helpers/axiosInterceptor";
import { useLocation } from "react-router-dom";

const Results = () => {
  const { state } = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    setIsLoading(true);
    axiosInstance
      .post("/predict", state.form)
      .then((res) => {
        console.log("SERVER RESPONSE :>>", res.data);
        setData(res.data);
      })
      .then(setIsLoading(false))
      .catch((err) => {
        console.log("Could not make any Predictions :>>", err);
      });
  }, [state]);

  return (
    <Container>
      {isLoading ? (
        <h1>Loading prediction...</h1>
      ) : (
        <div>
          <h1>RESULTS PAGE</h1>
          <p style={{ width: 500, overflow: "scroll" }}>
            {JSON.stringify(data)}
          </p>
        </div>
      )}
    </Container>
  );
};

export default Results;
