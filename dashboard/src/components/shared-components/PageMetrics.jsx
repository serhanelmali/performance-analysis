import styled from "styled-components";

const PageMetrics = ({ metrics, metricIndex }) => {
  const metric = metrics?.[metricIndex];

  return (
    <Container>
      <p>url: {metric?.url}</p>
      <p>Time to First Byte: {metric?.ttfb}</p>
      <p>DOM Load: {metric?.dom_load}</p>
      <p>Window Load: {metric?.window_load}</p>
    </Container>
  );
};

export default PageMetrics;

const Container = styled.div`
  padding-right: 40px;
`;
