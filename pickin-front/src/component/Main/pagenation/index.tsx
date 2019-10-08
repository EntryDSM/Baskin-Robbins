import * as React from "react";

import * as S from "./style";
import InterviewList from "./../interviewlist";

interface Interview {
  title: string;
  explanation: string;
}

interface Props {
  interview: Interview[];
  interviewStatus: string;
}

interface State {
  page: number;
  start: number;
  end: number;
  list: Interview[];
  pageList: number[];
}

class Pagenation extends React.Component<Props, State> {
  state = { page: 1, start: 0, end: 5, list: [], pageList: [] };

  componentWillMount() {
    const numOfPages = Math.ceil(this.props.interview.length / this.state.end);
    console.log(numOfPages);
    const pageArray = [];
    for (let i = 1; i <= numOfPages; i++) {
      pageArray.push(i);
    }

    this.setState({ list: this.handlePage(), pageList: pageArray });
  }

  private handleChangePage = (clickedPage: number): void => {
    this.setState(() => ({
      page: clickedPage,
      start: 5 * (clickedPage - 1),
      end: 5 * (clickedPage - 1) + 5,
      list: this.handlePage()
    }));
  };

  private PageNumber = () =>
    this.state.pageList.map(page => (
      <S.PageNumber
        key={page}
        selected={this.state.page === page}
        onClick={() => {
          this.handleChangePage(page);
          console.log(this.state);
        }}
      >
        {page}
      </S.PageNumber>
    ));

  private handlePage = () =>
    this.props.interview.slice(this.state.start, this.state.end);

  render() {
    return (
      <div>
        <InterviewList
          interview={this.state.list}
          interviewStatus={this.props.interviewStatus}
        />
        <S.PageNumbersContainer>{this.PageNumber()}</S.PageNumbersContainer>
      </div>
    );
  }
}

export default Pagenation;
