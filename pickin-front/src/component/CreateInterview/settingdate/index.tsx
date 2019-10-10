import * as React from "react";

import * as S from "./style";

interface Date {
  year: string;
  month: string;
  day: string;
}

interface Props {
  isDateClicked: boolean;
  setIsDateClicked(isDateClicked: boolean): void;
}

const SettingDate: React.FC<Props> = ({ isDateClicked, setIsDateClicked }) => {
  const [startDate, setStartDate] = React.useState<Date>({
    year: "2019",
    month: "01",
    day: "01"
  });
  const [endDate, setEndDate] = React.useState<Date>({
    year: "2019",
    month: "01",
    day: "01"
  });

  return (
    <S.SettingDateContainer>
      <S.SettingDateItem>
        <S.SettingDateType>시작일</S.SettingDateType>
        <div>
          <S.SettingDateInput
            isYear={true}
            value={startDate.year}
            onChange={e =>
              setStartDate({
                year: e.target.value,
                month: startDate.month,
                day: startDate.day
              })
            }
            placeholder="YYYY"
          />
          -
          <S.SettingDateInput
            isYear={false}
            value={startDate.month}
            onChange={e =>
              setStartDate({
                year: startDate.year,
                month: e.target.value,
                day: startDate.day
              })
            }
            placeholder="MM"
          />
          -
          <S.SettingDateInput
            isYear={false}
            value={startDate.day}
            onChange={e =>
              setStartDate({
                year: startDate.year,
                month: startDate.month,
                day: e.target.value
              })
            }
            placeholder="DD"
          />
        </div>
      </S.SettingDateItem>
      <S.SettingDateWaveIcon>~</S.SettingDateWaveIcon>
      <S.SettingDateItem>
        <S.SettingDateType>마감일</S.SettingDateType>
        <div>
          <S.SettingDateInput
            isYear={true}
            value={endDate.year}
            onChange={e =>
              setEndDate({
                year: e.target.value,
                month: endDate.month,
                day: endDate.day
              })
            }
            placeholder="YYYY"
          />
          -
          <S.SettingDateInput
            isYear={false}
            value={endDate.month}
            onChange={e =>
              setEndDate({
                year: endDate.year,
                month: e.target.value,
                day: endDate.day
              })
            }
            placeholder="MM"
          />
          -
          <S.SettingDateInput
            isYear={false}
            value={endDate.day}
            onChange={e =>
              setEndDate({
                year: endDate.year,
                month: endDate.month,
                day: e.target.value
              })
            }
            placeholder="DD"
          />
        </div>
      </S.SettingDateItem>
      <S.SettingDateFooter>
        <S.SettingDateDoneBtn onClick={() => setIsDateClicked(!isDateClicked)}>
          Done
        </S.SettingDateDoneBtn>
      </S.SettingDateFooter>
    </S.SettingDateContainer>
  );
};

export default SettingDate;
