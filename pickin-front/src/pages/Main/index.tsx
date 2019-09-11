import * as React from "react";

import * as S from "./style";
import Header from "./../../utils/Header";
import Footer from "./../../utils/Footer";
import { caretDown } from "./../../assets";
import { SearchBox } from "./../../component";

interface Props {
  isAdmin: boolean;
  agencyName: string;
  interviewStatus: string;
  changeLoginStatus(): void;
}

interface State {
  searchValue: string;
}

class Main extends React.Component<Props, State> {
  state = {
    searchValue: ""
  };

  private handleSearchValue = (e: React.ChangeEvent<HTMLInputElement>): void =>
    this.setState({ searchValue: e.target.value });

  render() {
    return (
      <div>
        <S.MainPageContainer>
          <Header isAdmin={this.props.isAdmin} changeLoginStatus={this.props.changeLoginStatus} />
          <S.MainContainer>
            <S.MainListDeterminent>
              <div>
                <S.MainCategoryBtn>
                  {this.props.agencyName}
                  {this.props.isAdmin || (
                    <S.MainCategoryCaretDown src={caretDown} />
                  )}
                </S.MainCategoryBtn>
                {this.props.isAdmin && (
                  <S.MainCategoryBtn>
                    {this.props.interviewStatus}
                    <S.MainCategoryCaretDown src={caretDown} />
                  </S.MainCategoryBtn>
                )}
              </div>
              {this.props.isAdmin && (
                <SearchBox
                  value={this.state.searchValue}
                  changeValue={this.handleSearchValue}
                />
              )}
            </S.MainListDeterminent>
          </S.MainContainer>
        </S.MainPageContainer>
        <Footer />
      </div>
    );
  }
}

export default Main;
