import styled from "styled-components";

interface ItemProps {
  borderTop: boolean;
}

interface AdminProps {
  isAdmin: boolean;
}

export const DropdownContainer = styled.div`
  position: absolute;
  z-index: 1;
  background-color: #ffffff;
  top: 180px;
  left: ${(props: AdminProps) => props.isAdmin && "590px"};
  width: 190px;
  border-radius: 5px;
  border: solid 1px #e5a39a;
  cursor: pointer;
`;

export const DropdownItems = styled.p`
  width: 168px;
  padding: 20px 0 10px;
  font-size: 18px;
  color: rgba(0, 0, 0, 0.8);
  margin: auto;
  text-align: center;
  border-top: ${(props: ItemProps) => props.borderTop && "solid 1px #bfbfbf"};
`;
