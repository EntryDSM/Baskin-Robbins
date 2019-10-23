import * as React from "react";

import * as S from "./style";
import { checkedEmail } from "./../../../assets";
import { interviewerlist } from "./interviewerlist";
import { getInterviewAdmin, getInterviewerList } from "./../../../services/get";
import { addInterviewerToAccess } from "./../../../services/post";
import { deleteInterviewAdmin } from "./../../../services/delete";

interface Interviewer {
  interviewer_name: string;
  interviewer_email: string;
  isAssigned?: boolean;
}

interface Props {
  agencyCode: string;
  interviewID: number;
  setIsAddClicked(e: boolean): void;
}

const AddInterviewer: React.FC<Props> = ({
  setIsAddClicked,
  agencyCode,
  interviewID
}) => {
  const [interviewerlist, setInterviewerlist] = React.useState<Interviewer[]>(
    []
  );
  const [interviewerAdminList, setInterviewerAdminList] = React.useState<
    string[]
  >([]);

  React.useEffect(() => {
    getInterviewerListFromServer();
    getInterviewerAdminListFromServer();
  }, []);

  const getInterviewerListFromServer = async () => {
    try {
      const response = await getInterviewerList(agencyCode);

      if (response.status === 200) {
        setInterviewerlist(
          response.data.interviewer.map(item => ({
            interviewer_name: item.interviewer_name,
            interviewer_email: item.interviewer_email,
            isAssigned: false
          }))
        );
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  const getInterviewerAdminListFromServer = async () => {
    try {
      const response = await getInterviewAdmin({
        agencyCode: agencyCode,
        interviewID: interviewID
      });

      if (response.status === 200) {
        setInterviewerAdminList(
          response.data.interviewer.map(item => item.interviewer_email)
        );
        setInterviewerlist(
          interviewerlist.map(interviewer => {
            if (
              interviewerAdminList.indexOf(interviewer.interviewer_email) !== -1
            ) {
              return {
                interviewer_name: interviewer.interviewer_name,
                interviewer_email: interviewer.interviewer_email,
                isAssigned: true
              };
            } else {
              return interviewer;
            }
          })
        );
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  const setInterviewerAdmin = async (interviewerEmail: string) => {
    try {
      await addInterviewerToAccess(
        { agency_code: agencyCode, interview_id: interviewID },
        interviewerEmail
      );
    } catch (error) {
      console.log(error.response);
    }
  };

  const unsetInterviewerAdmin = async (interviewerEmail: string) => {
    try {
      await deleteInterviewAdmin(agencyCode, interviewID, interviewerEmail);
    } catch (error) {
      console.log(error.response);
    }
  };

  const HandleIsAssigned = (
    interviewerIndex: number,
    interviewerEmail: string
  ) =>
    setInterviewerlist(
      interviewerlist.map((interviewer, index) => {
        if (interviewerIndex === index) {
          if (interviewer.isAssigned) {
            unsetInterviewerAdmin(interviewerEmail);
          } else {
            setInterviewerAdmin(interviewerEmail);
          }
          return {
            interviewer_name: interviewer.interviewer_name,
            interviewer_email: interviewer.interviewer_email,
            isAssigned: !interviewer.isAssigned
          };
        } else {
          return interviewer;
        }
      })
    );

  const InterviewList = interviewerlist.map((interviewer, index) => (
    <S.AddInterviewerList
      onClick={() => {
        HandleIsAssigned(index);
        HandleIsAssigned(index, interviewer.interviewer_email);
        console.log(interviewerlist);
      }}
    >
      {interviewer.interviewer_name} 님 ({interviewer.interviewer_email})
      {interviewer.isAssigned && <S.AddInterviewerChecked src={checkedEmail} />}
    </S.AddInterviewerList>
  ));

  return (
    <S.AddInterviewerContainer>
      <S.AddInterviewerTitle>면접관 목록</S.AddInterviewerTitle>
      <S.AddInterviewerListContainer>
        {InterviewList}
      </S.AddInterviewerListContainer>
      <S.AddInterviewerFooter>
        <S.AddInterviewDoneBtn onClick={e => setIsAddClicked(!e)}>
          Done
        </S.AddInterviewDoneBtn>
      </S.AddInterviewerFooter>
    </S.AddInterviewerContainer>
  );
};

export default AddInterviewer;
