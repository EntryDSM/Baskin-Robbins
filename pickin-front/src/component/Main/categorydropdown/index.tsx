import * as React from "react";

import * as S from "./style";

interface Props {
  interviewStatus: string;
  isAdmin: boolean;
  handleInterviewStatus(status: string): void;
  handleAgencyName(name: string): void;
  agencyName: string;
}

const CategoryDropdown: React.FC<Props> = ({
  interviewStatus,
  isAdmin,
  handleInterviewStatus,
  handleAgencyName,
  agencyName
}) => {
  let category: Array<string>;

  if (isAdmin) {
    category = ["Will pick", "Pickin", "Picked"];
    category.splice(category.indexOf(interviewStatus), 1);
  } else {
    category = ["EntryDSM", "시나브로"];
    category.splice(category.indexOf(agencyName), 1);
  }

  const categories = category.map(item => (
    <S.DropdownItems
      borderTop={category.indexOf(item) !== 0}
      onClick={
        isAdmin
          ? () => handleInterviewStatus(item)
          : () => handleAgencyName(item)
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
