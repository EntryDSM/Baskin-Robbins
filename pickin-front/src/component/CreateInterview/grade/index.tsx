import * as React from "react";

import * as S from "./style";

const Grade: React.FC = () => {
  const gradeList = ["A", "B", "C", "D", "E"];

  const Grades = gradeList.map(grade => <S.GradeItem>{grade}</S.GradeItem>);

  return <S.GradeContainer>{Grades}</S.GradeContainer>;
};

export default Grade;
