import styled from "styled-components";

const PageMetrics = ({ metrics, metricIndex }) => {
  const metric = metrics?.[metricIndex];

  return (
    <Container>
      <p>{metric.started_at}</p>
      <p>{metric?.url}</p>
      <p>Time to First Byte: {metric?.ttfb}</p>
      <p>DOM Load: {metric?.dom_load}</p>
      <p>Window Load: {metric?.window_load}</p>
    </Container>
  );
};

export default PageMetrics;

const Container = styled.div`
  padding-top: 5px;
  display: flex;
  flex-direction: column;
  text-align: right;

  p {
    margin: 5px;
  }

  @media (max-width: 480px) {
    padding-top: 15px;
    padding-right: 10px;
    p {
      font-size: 14px;
    }
  }
`;
