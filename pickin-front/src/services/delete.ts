import axios from "axios";

import { baseUrl } from "./default";
import { refreshUserToken } from "./patch";
import * as LocalStorageService from "./localstorageservice";

export const deleteInterviewAdmin = async (
  agency_code: string,
  interview_id: number,
  interviewer_email: string
) =>
  await axios({
    method: "delete",
    url: `${baseUrl}/admin/${agency_code}/${interview_id}/access`,
    data: {
      interviewer_email: interviewer_email
    },
    headers: {
      Authorization: `Bearer ${LocalStorageService.getAccessToken()}`,
      "Content-Type": "application/json"
    }
  });
