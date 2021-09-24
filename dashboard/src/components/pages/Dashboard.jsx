import { useEffect, useState } from "react";
import getMetrics from "../../api/getMetrics";
import styled from "styled-components";
import MetricTable from "../layouts/MetricTable";
import MetricDetail from "../layouts/MetricDetail";

const Dashboard = () => {
  const [metrics, setMetrics] = useState({
    data: [],
    isLoading: false,
    error: null,
  });

  const fetchMetrics = () => {
    setMetrics({ ...metrics, isLoading: true, error: null });
    getMetrics({
      onSuccess(result) {
        setMetrics({
          ...metrics,
          data: result.data,
          isLoading: false,
        });
      },
      onError(error) {
        setMetrics({ ...metrics, data: [], error, isLoading: false });
        console.log(error);
      },
    });
  };

  useEffect(() => {
    fetchMetrics();
  }, []);

  return (
    <HomePage>
      <Header>
        <h1>Performance Analysis Dashboard</h1>
      </Header>
      <MetricTable metrics={metrics.data} />
      <MetricDetail metrics={metrics.data} />
    </HomePage>
  );
};

export default Dashboard;

const HomePage = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  color: white;
`;

const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: center;

  text-align: center;
`;
