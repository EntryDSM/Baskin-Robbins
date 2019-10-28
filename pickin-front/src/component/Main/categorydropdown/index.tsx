import * as React from "react";

import * as S from "./style";

interface AgencyType {
  agencyName: string;
  agencyCode: string;
}

interface Props {
  interviewStatus: string;
  isAdmin: boolean;
  handleInterviewStatus(status: string): void;
  handleAgencyName(name: string): void;
  handleAgency(agency: AgencyType): void;
  agencyName: string;
}

const CategoryDropdown: React.FC<Props> = ({
  interviewStatus,
  isAdmin,
  handleInterviewStatus,
  handleAgencyName,
  agencyName
  handleAgency
}) => {
  let category: Array<string>;

  if (isAdmin) {
    category = ["Will pick", "Pickin", "Picked"];
    category.splice(category.indexOf(interviewStatus), 1);
  } else {
    category = ["EntryDSM", "시나브로"];
    category.splice(category.indexOf(agencyName), 1);
  }
  let category: Array<string> = ["Will pick", "Pickin", "Picked"];

  const categories = category.map(item => (
    <S.DropdownItems
      borderTop={category.indexOf(item) !== 0}
      onClick={
        isAdmin
          ? () => handleInterviewStatus(item)
          : () => handleAgencyName(item)
          : () => handleAgency({ agencyName: item, agencyCode: "asdf" })
      }
    >
      {item}
    </S.DropdownItems>
  ));

  return (
    <S.DropdownContainer isAdmin={isAdmin}>{categories}</S.DropdownContainer>
  );
};

export default CategoryDropdown;
