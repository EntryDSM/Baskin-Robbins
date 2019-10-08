import axios from "axios";

import { baseUrl } from "./endpoint";

interface agencyDescriptionType {
  agency_name: string;
  agnecy_explanation: string;
}

export const checkAgencyCode = async (agencyCode: string) => {
  const response = await axios.get<agencyDescriptionType>(
    `${baseUrl}/agency/cheak`,
    { params: { code: agencyCode } }
  );
  return response.data;
};
