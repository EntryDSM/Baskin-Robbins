import * as React from "react";

import * as S from "./style";
import Header from "./../../utils/Header";
import Footer from "./../../utils/Footer";
import { caretDown } from "./../../assets";
import { SearchBox, CategoryDropdown, InterviewList } from "./../../component";

interface Interview {
  title: string;
  explanation: string;
}

interface Props {
  isAdmin: boolean;
  agencyName: string;
  interviewStatus: string;
  handleLoginStatus(loginStatus: boolean): void;
  handleInterviewStatus(status: string): void;
  handleAgencyName(name: string): void;
}

interface State {
  searchValue: string;
  interview: Array<Interview>;
  isCategoryClicked: boolean;
}

class Main extends React.Component<Props, State> {
  state = {
    searchValue: "",
    interview: [
      {
        title: "hello",
        explanation: "entry"
      },
      {
        title: "hello2",
        explanation: "entry2"
      },
      {
        title: "hello3",
        explanation: "entry3"
      },
      {
        title: "hello4",
        explanation: "entry4"
      },
      {
        title: "hello5",
        explanation: "entry5"
      },
      {
        title: "hello6",
        explanation: "entry6"
      },
      {
        title: "hello7",
        explanation: "entry7"
      },
      {
        title: "hello8",
        explanation: "entry8"
      },
      {
        title: "hello9",
        explanation: "entry9"
      },
      {
        title: "hello10",
        explanation: "entry10"
      },
      {
        title: "hello11",
        explanation: "entry11"
      },
      {
        title: "hello12",
        explanation: "entry12"
      },
      {
        title: "hello13",
        explanation: "entry13"
      },
      {
        title: "hello14",
        explanation: "entry14"
      }
    ],
    isCategoryClicked: false
  };

  private handleSearchValue = (e: React.ChangeEvent<HTMLInputElement>): void =>
    this.setState({ searchValue: e.target.value });

  private clickDropdown = (e: React.MouseEvent<HTMLButtonElement>): void =>
    this.setState({
      isCategoryClicked: !this.state.isCategoryClicked
    });

  render() {
    return (
      <div>
        <S.MainPageContainer>
          <Header
            isAdmin={this.props.isAdmin}
            changeLoginStatus={this.props.handleLoginStatus}
          />
          <S.MainContainer>
            <S.MainListDeterminent>
              <div>
                <S.MainCategoryBtn onClick={this.clickDropdown}>
                  {this.props.agencyName}
                  {this.props.isAdmin || (
                    <S.MainCategoryCaretDown src={caretDown} />
                  )}
                </S.MainCategoryBtn>
                {this.props.isAdmin && (
                  <S.MainCategoryBtn onClick={this.clickDropdown}>
                    {this.props.interviewStatus}
                    <S.MainCategoryCaretDown src={caretDown} />
                  </S.MainCategoryBtn>
                )}
                {this.state.isCategoryClicked && (
                  <CategoryDropdown
                    interviewStatus={this.props.interviewStatus}
                    isAdmin={this.props.isAdmin}
                    handleInterviewStatus={this.props.handleInterviewStatus}
                    handleAgencyName={this.props.handleAgencyName}
                    agencyName={this.props.agencyName}
                  />
                )}
              </div>
              {this.props.isAdmin && (
                <SearchBox
                  value={this.state.searchValue}
                  changeValue={this.handleSearchValue}
                />
              )}
            </S.MainListDeterminent>
            <InterviewList
              interview={this.state.interview}
              interviewStatus={this.props.interviewStatus}
            />
          </S.MainContainer>
        </S.MainPageContainer>
        <Footer />
      </div>
    );
  }
}

export default Main;
