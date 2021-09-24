import styled from "styled-components";
import FileMetrics from "../shared-components/FileMetrics";

const MetricDetail = ({ metrics }) => {
  return (
    <Container>
      <FileMetrics metrics={metrics} />
    </Container>
  );
};

const Container = styled.div`
  background: #323232;
  border-radius: 0.3rem;

  padding: 1rem;

  width: 90%;

  @media (max-width: 640px) {
    padding: 0.5rem;
  }

  @media (max-width: 540px) {
    padding: 0;
  }
`;

export default MetricDetail;
