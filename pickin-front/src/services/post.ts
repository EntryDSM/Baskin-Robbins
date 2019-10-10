import axios from "axios";

import { baseUrl } from "./endpoint";

interface interviewerSignUpType {
  name: string;
  email: string;
  password: string;
}

interface agencySignUpType {
  agency_name: string;
  agency_kind: string;
  email: string;
  password: string;
  agency_explanation: string;
}

interface signInType {
  email: string;
  password: string;
}

interface TokenType {
  access_token: string;
  refresh_token: string;
}

export const signUpToInterviewer = async (body: interviewerSignUpType) => {
  const response = await axios.post(`${baseUrl}/interviewer/signup`, body);
  return response.status;
};

export const signUpToAgency = async (body: agencySignUpType) => {
  const response = await axios.post(`${baseUrl}/admin/signup`, body);
  return response.status;
};

export const getUserToken = async (body: signInType) => {
  const response = await axios.post<TokenType>(`${baseUrl}/login`, body);
  return response;
};
