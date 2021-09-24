import styled from "styled-components";
import { formatValue } from "../../utils/format-value";

const FileMetrics = ({ metrics }) => {
  return (
    <>
      {metrics && (
        <Container>
          <List>
            {metrics?.map((file, index) => (
              <ListItem key={index}>
                <span>{file.name}</span>
                <ListItemContainer>
                  <span>load time:{formatValue(file.load_time)}</span>
                  <span>type: {file.file_type}</span>
                </ListItemContainer>
              </ListItem>
            ))}
          </List>
        </Container>
      )}
    </>
  );
};

const Container = styled.div``;
const List = styled.ul`
  overflow: scroll;
  height: 150px;

  list-style: none;
`;
const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-block: 0.6em;

  cursor: default;

  &:hover {
    background: rgba(0, 0, 0, 0.208);
  }
`;

const ListItemContainer = styled.div`
  display: flex;
  span {
    padding-top: 0.3rem;
    margin-right: 1rem;
    color: grey;
    font-size: 14px;
  }

  @media (max-width: 640px) {
    flex-direction: column;

    width: 100%;
  }
`;

export default FileMetrics;
