import styles from "./form.module.scss";
import { useState, useContext } from "react";
import { ChecklistaContext } from "../../ChecklistaContext.jsx";
import {
  DigiLayoutBlock,
  DigiFormInput,
  DigiFormFieldset,
  DigiButton,
} from "@digi/arbetsformedlingen-react";
import {
  LayoutBlockVariation,
  LayoutBlockContainer,
  FormInputVariation,
  FormInputValidation,
  FormInputType,
  ButtonVariation,
} from "@digi/arbetsformedlingen";

function Form() {
  const [titel, setTitel] = useState("");
  const store = useContext(ChecklistaContext);

  const laggTillHantering = (e) => {
    e.preventDefault();
    let nyUppgift = {
      titel,
      klart: false,
    };
    store.dispatch({
      type: "tillagt",
      nyUppgift,
    });
  };

  return (
    <DigiLayoutBlock
      afVariation={LayoutBlockVariation.SECONDARY}
      afContainer={LayoutBlockContainer.FLUID}
      afMarginBottom
      afMarginTop
      afVerticalPadding>
      <form onSubmit={laggTillHantering}>
        <DigiFormFieldset
          afForm="Formulärnamnet"
          afLegend="Lägg till en ny uppgift här"
          afName="Fältgruppnamn">
          <DigiFormInput
            afLabel="Titel på din nya uppgift"
            afVariation={FormInputVariation.SMALL}
            afType={FormInputType.TEXT}
            afValidation={FormInputValidation.NEUTRAL}
            afValue={titel}
            afRequired
            onAfOnChange={(e) => setTitel(e.target.value)}
          />
          <div className={styles.formKnappar}>
            <DigiButton
              afType="reset"
              afAriaLabel="Rensa"
              afVariation={ButtonVariation.SECONDARY}>
              Rensa
            </DigiButton>
            <DigiButton afType="submit" afAriaLabel="Lägg till">
              Lägg till
              <digi-icon-plus slot="icon-secondary" />
            </DigiButton>
          </div>
        </DigiFormFieldset>
      </form>
    </DigiLayoutBlock>
  );
}

export default Form;
