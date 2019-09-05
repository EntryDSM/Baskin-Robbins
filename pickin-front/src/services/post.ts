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

export const signUpToInterviewer = async (input: interviewerSignUpType) => {
  const response = await axios.post(`${baseUrl}/interviewer/signup`, input);
  return response.status;
};

export const signUpToAgency = async (input: agencySignUpType) => {
  const response = await axios.post(`${baseUrl}/admin/signup`, input);
  return response.status;
};

