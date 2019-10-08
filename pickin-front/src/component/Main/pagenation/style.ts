import styled from "styled-components";

interface pageNumberProps {
    selected: boolean;
}

export const PageNumbersContainer = styled.ul`
  text-align: center;
  padding: 48px 0;
`;

export const PageNumber = styled.li`
  display: inline-block;
  font-size: 18px;
  padding: 0 9px;
  color: ${(props: pageNumberProps) => props.selected && "#e5a39a"};
  font-weight: ${(props: pageNumberProps) => props.selected && "bold"};
`;
