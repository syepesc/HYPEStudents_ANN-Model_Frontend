import React, { useEffect, useState } from "react";
import "./Results.css";
import Container from "../../components/Common/Container";
import axiosInstance from "../../helpers/axiosInterceptor";
import { useLocation } from "react-router-dom";
import img1 from "../../assets/graphs/academic performance vs failure.png";
import img2 from "../../assets/graphs/first year survival vs failure.png";
import img3 from "../../assets/graphs/high school marks vs failure.png";

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
          <p>{JSON.stringify(data, null, "\t")}</p>
          <div className="image-container">
            <img src={img1} alt={"img1"} />
          </div>
          <div className="image-container">
            <img src={img2} alt={"img1"} />
          </div>
          <div className="image-container">
            <img src={img3} alt={"img1"} />
          </div>
        </div>
      )}
    </Container>
  );
};

export default Results;
