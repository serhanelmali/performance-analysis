import { useState } from "react";
import styled from "styled-components";
import FileMetrics from "../shared-components/FileMetrics";
import PageMetrics from "../shared-components/PageMetrics";

const MetricDetail = ({ metrics }) => {
  const [metricIndex, setMetricIndex] = useState(0);
  const files = metrics?.[metricIndex]?.files;

  const increaseIndex = () => {
    metricIndex < files.length - 1
      ? setMetricIndex(metricIndex + 1)
      : setMetricIndex(0);
  };

  const decreaseIndex = () => {
    metricIndex > 0
      ? setMetricIndex(metricIndex - 1)
      : setMetricIndex(files.length - 1);
  };

  return (
    metrics.length > 1 && (
      <Container>
        <MetricsContainer>
          <FileMetrics metrics={files} fileIndex={metricIndex} />
          <PageMetrics metrics={metrics} metricIndex={metricIndex} />
        </MetricsContainer>
        <ButtonContainer>
          <Button onClick={decreaseIndex}>Previous</Button>
          <Button onClick={increaseIndex}>Next</Button>
        </ButtonContainer>
      </Container>
    )
  );
};

const Container = styled.div`
  width: 90%;
  margin: 0.5rem 0rem 1rem 0;
  padding: 1rem;

  background: #323232;
  border-radius: 0.3rem;

  @media (max-width: 640px) {
    padding: 0.5rem;
  }

  @media (max-width: 540px) {
    padding: 0;
  }
`;

const MetricsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  margin: 0.5em;

  width: 12em;
  height: 3em;

  color: white;
  border: none;
  border-radius: 0.4em;
  background: #23232374;

  cursor: pointer;

  transition: background 0.1s;

  &:hover {
    background: #232323;
  }
`;
export default MetricDetail;
