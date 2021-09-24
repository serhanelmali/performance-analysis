import styled from "styled-components";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";

const MetricChart = ({ name, metrics, type }) => {
  return (
    <Container>
      <Title>{name}</Title>
      {metrics ? (
        <ResponsiveContainer width={"100%"} height={200}>
          <LineChart
            data={metrics.map((metric) => metric)}
            margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
          >
            <Line type="monotone" dataKey={type} stroke="#8884d8" />
            <XAxis dataKey="" />
            <YAxis />
          </LineChart>
        </ResponsiveContainer>
      ) : (
        <NoData>
          <span>There are no datas to show yet.</span>
        </NoData>
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 45%;

  margin: 1rem;

  display: flex;
  flex-direction: column;

  border-radius: 0.3rem;

  align-items: center;

  color: white;
  background: rgb(50, 50, 50);

  @media (max-width: 640px) {
    margin: 0.5rem;
  }

  @media (max-width: 540px) {
    width: 90%;
  }
`;

const Title = styled.h3`
  margin-block: 1rem;
  color: rgba(255, 255, 255, 0.9);
  text-align: center;
`;

const NoData = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;
`;
export default MetricChart;
