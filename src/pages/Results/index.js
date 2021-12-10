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
          <h1>RESULTS...</h1>

          <h2>
            {parseFloat(data.prediction) < 0.5
              ? `There is ${(parseFloat(data.prediction) * 100).toFixed(
                  2
                )}% to fail. Well done! Keep the hard work!`
              : `There is ${(parseFloat(data.prediction) * 100).toFixed(
                  2
                )}% to fail. Dont give up, keep the hard work!`}
          </h2>

          {data.graphs &&
            data.graphs.map((graphName) => {
              return (
                <div key={graphName} className="image-container2">
                  <img
                    src={require(`../../assets/graphs/${graphName}`).default}
                    alt={graphName}
                  />
                </div>
              );
            })}
        </div>
      )}
    </Container>
  );
};

export default Results;
