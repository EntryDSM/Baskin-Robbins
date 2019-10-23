import axios from "axios";

import { baseUrl } from "./endpoint";
import { baseUrl } from "./default";
import { refreshUserToken } from "./patch";
import * as LocalStorageService from "./localstorageservice";

interface agencyDescriptionType {
  agency_name: string;
  agnecy_explanation: string;
}

interface interviewersType {
  interviewer: { interviewer_name: string; interviewer_email: string }[];
}

  agency_code: string;
export const checkAgencyCode = async (agencyCode: string) => {
  const response = await axios.get<agencyDescriptionType>(
    `${baseUrl}/agency/cheak`,
    { params: { code: agencyCode } }
export const getInterviewAdmin = async (pathParam: {
  agencyCode: string;
  interviewID: number;
}) => {
  const response = await axios.get<interviewersType>(
    `${baseUrl}/admin/${pathParam.agencyCode}/${pathParam.interviewID}/access
    `,
    {
      headers: {
        Authorization: `Bearer ${LocalStorageService.getAccessToken()}`,
        "Content-Type": "application/json"
      }
    }
  );

  return response;
};

export const getInterviewerList = async (agencyCode: string) => {
  const response = await axios.get<interviewersType>(
    `${baseUrl}/admin/${agencyCode}/join/interviewer`,
    {
      headers: {
        Authorization: `Bearer ${LocalStorageService.getAccessToken()}`,
        "Content-Type": "application/json"
      }
    }
  );
  return response;
};
  return response.data;
};
