import { FC } from "react";
import { useLanguage } from "features/language/index";
import styled from "styled-components";

const StyledLanguageBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 2px 0;
`;

const StyledButton = styled.button<{ isActive: boolean }>`
  background-color: ${(props) => (props.isActive ? "#17589f" : "white")};
  padding: 4px 2px;
  margin-right: 10px;
  color: ${(props) => (props.isActive ? "white" : "black")};
`;

const LanguageComponent: FC = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <StyledLanguageBar>
      {/* <div className={"language"}> */}
      <StyledButton onClick={() => setLanguage("SPANISH")} isActive={language === "SPANISH"}>
        {t("language.spanish")}
      </StyledButton>
      <StyledButton onClick={() => setLanguage("ENGLISH")} isActive={language === "ENGLISH"}>
        {t("language.english")}
      </StyledButton>
      <StyledButton onClick={() => setLanguage("PORTUGUESE")} isActive={language === "PORTUGUESE"}>
        {t("language.portuguese")}
      </StyledButton>
      {/* </div> */}
    </StyledLanguageBar>
  );
};
export default LanguageComponent;
