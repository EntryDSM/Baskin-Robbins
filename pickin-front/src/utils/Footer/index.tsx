import * as React from "react";
import * as S from "./style";
import { entryLogo, facebookIcon, githubIcon } from "./../../assets/index";

const Footer = () => (
  <div>
    <S.FooterContainer>
      <S.FooterContent>
        <S.LeftContent>
          <S.EntryLogo src={entryLogo} alt="엔트리" />
          <S.Copyright>ⓒ 2019 Entry</S.Copyright>
          <S.FooterInfo>개인정보 처리방침 ㅣ 이용약관</S.FooterInfo>
          <S.FooterInfo>
            (34111) 대전광역시 유성구 가정북로 76(장동 23-9)
          </S.FooterInfo>
          <S.FooterInfo>
            교무실: 042-866-8822 / Fax: 042-867-9900
            <span>행정실: 042-866-8885 / Fax: 042-863-4308</span>
          </S.FooterInfo>
          <S.FooterInfo>사업자 등록 번호 314-83-01600</S.FooterInfo>
        </S.LeftContent>
        <S.RightContent>
          <S.EntryInfo>Entry 소개</S.EntryInfo>
          <S.EntryInfoIndex>시스템 소개</S.EntryInfoIndex>
          <S.EntryInfoIndex>개발자 소개</S.EntryInfoIndex>
          <div>
            <a href="https://www.facebook.com/entrydsm">
              <S.SNSLogo src={facebookIcon} />
            </a>
            <a href="https://github.com/EntryDSM">
              <S.SNSLogo src={githubIcon} />
            </a>
          </div>
        </S.RightContent>
      </S.FooterContent>
    </S.FooterContainer>
  </div>
);

export default Footer;
