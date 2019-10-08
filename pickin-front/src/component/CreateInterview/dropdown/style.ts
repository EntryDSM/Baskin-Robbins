import styled from "styled-components";

export const DropdownWrapper = styled.div`
  display: inline-block;
`;

export const DropdownBtn = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 36px;
  border-radius: 5px;
  border: solid 1px #e5a39a;
  font-size: 18px;
  font-weight: 300;
  text-align: center;
`;

export const DropdownCaretdown = styled.img`
  display: inline-block;
  margin-left: 10px;
  width: 10px;
  height: 7px;
  opacity: 0.8;
  z-index: -1;
`;

export const DropdownContainer = styled.div`
  position: relative;
  top: -38px;
  width: 100px;
  padding: 8px 10px;
  border-radius: 5px;
  border: solid 1px #e5a39a;
  background-color: white;
  z-index: 1;
`;

export const DropdownCurrentType = styled.p`
  text-align: center;
  font-weight: 300;
  font-size: 18px;
  padding-bottom: 12px;
  margin: 8px;
  border-bottom: solid 1px rgba(0, 0, 0, 0.2);
`;

export const DropdownType = styled.p`
  text-align: center;
  padding: 8px 0;
  font-size: 18px;
  font-weight: 300;
`;
