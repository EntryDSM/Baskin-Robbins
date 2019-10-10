import styled from "styled-components";

export const CertificationContainer = styled.div`
  margin: 64px 390px;
  flex-direction: column;
`;

export const CertificationTitle = styled.h1`
  font-size: 28px;
  font-weight: normal;
`;

export const CertificationExplanation = styled.h2`
  font-size: 24px;
  font-weight: normal;
  padding: 16px 0 32px;
  margin-bottom: 24px;
  border-bottom: solid 1px #bfbfbf;
`;

export const CertificationInputLabel = styled.p`
  font-size: 18px;
  margin: 0 95px 0 50px;
  color: rgba(0, 0, 0, 0.3);
`;

export const CertificationInputContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 280px 0 42px 0;
  border-top: solid 1px #bfbfbf;
  border-bottom: solid 1px #bfbfbf;
  right: 390px;
  bottom: 166px;
`;

export const CertificationInput = styled.input`
  all: unset;
  width: 364px;
  height: 40px;
  font-size: 16px;
  padding: 0 18px;
  margin: 24px 0;
  color: rgba(0, 0, 0, 0.6);
  border-radius: 5px;
  border: solid 1px rgba(229, 163, 154, 0.5);
  background-color: #fdf9f8;
`;

export const CertificationSubmitBtn = styled.button`
  display: inline-flex;
  justify-content: space-between;
  color: white;
  font-size: 18px;
  padding: 0 24px;
  margin-bottom: 70px;
  width: 104px;
  height: 54px;
  border-radius: 5px;
  background-color: #e5a39a;
  position: absolute;
  right: 390px;
`;

export const CertificationSubmitIcon = styled.img`
  width: 8px;
  height: 16px;
`;
