import "./App.scss";
import CheckListaProvider from "./ChecklistaContext.jsx";
import { DigiLayoutContainer } from "@digi/arbetsformedlingen-react";

import Sidfot from "./komponenter/Sidfot.jsx";
import Sidhuvud from "./komponenter/Sidhuvud.jsx";
import Form from "./komponenter/Form/Form.jsx";
import Info from "./komponenter/Info.jsx";
import CheckListan from "./komponenter/Checklistan/Checklistan.jsx";
import DialogBox from "./komponenter/DialogBox/DialogBox.jsx";

export default function App() {
  return (
    <>
      <Sidhuvud />

      <CheckListaProvider>
        <DialogBox />
        <DigiLayoutContainer afMarginBottom afMarginTop afVerticalPadding>
          <Info />
          <Form />
        </DigiLayoutContainer>
        <CheckListan />
      </CheckListaProvider>

      <Sidfot />
    </>
  );
}
