import * as React from "react";
import * as F from "./style";
import { entryLogo, facebookIcon, githubIcon } from "./../../assets/index";

const Footer = () => (
  <div>
    <F.FooterContainer>
      <F.FooterContent>
        <F.LeftContent>
          <F.EntryLogo src={entryLogo} alt="엔트리" />
          <F.Copyright>ⓒ 2019 Entry</F.Copyright>
          <F.FooterInfo>개인정보 처리방침 ㅣ 이용약관</F.FooterInfo>
          <F.FooterInfo>
            (34111) 대전광역시 유성구 가정북로 76(장동 23-9)
          </F.FooterInfo>
          <F.FooterInfo>
            교무실: 042-866-8822 / Fax: 042-867-9900
            <span>행정실: 042-866-8885 / Fax: 042-863-4308</span>
          </F.FooterInfo>
          <F.FooterInfo>사업자 등록 번호 314-83-01600</F.FooterInfo>
        </F.LeftContent>
        <F.RightContent>
          <F.EntryInfo>Entry 소개</F.EntryInfo>
          <F.EntryInfoIndex>시스템 소개</F.EntryInfoIndex>
          <F.EntryInfoIndex>개발자 소개</F.EntryInfoIndex>
          <div>
            <a href="https://www.facebook.com/entrydsm">
              <F.SNSLogo src={facebookIcon} />
            </a>
            <a href="https://github.com/EntryDSM">
              <F.SNSLogo src={githubIcon} />
            </a>
          </div>
        </F.RightContent>
      </F.FooterContent>
    </F.FooterContainer>
  </div>
);

export default Footer;
