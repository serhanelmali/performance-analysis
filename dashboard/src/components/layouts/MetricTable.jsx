import styled from "styled-components";
import MetricChart from "../shared-components/MetricChart";

const MetricTable = ({ metrics }) => {
  return (
    <Container>
      <MetricChart name={"TTFB"} metrics={metrics} type={"ttfb"} />
      <MetricChart name={"FCP"} metrics={metrics} type={"fcp"} />
      <MetricChart name={"DOM Load"} metrics={metrics} type={"dom_load"} />
      <MetricChart
        name={"Window Load"}
        metrics={metrics}
        type={"window_load"}
      />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  font-family: "Roboto", sans-serif;
`;

export default MetricTable;
