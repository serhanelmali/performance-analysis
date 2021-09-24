import { useState } from "react";
import styled from "styled-components";
import { formatValue } from "../../utils/format-value";

const FileMetrics = ({ metrics }) => {
  const [fileIndex, setFileIndex] = useState(0);
  const files = metrics?.[fileIndex]?.files;

  const increaseIndex = () => {
    fileIndex < files.length - 1
      ? setFileIndex(fileIndex + 1)
      : setFileIndex(0);
  };

  const decreaseIndex = () => {
    fileIndex > 0
      ? setFileIndex(fileIndex - 1)
      : setFileIndex(files.length - 1);
  };

  console.log(metrics);
  return (
    <>
      {metrics && (
        <Container>
          <List>
            {files?.map((file, index) => (
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
  width: 46%;
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
