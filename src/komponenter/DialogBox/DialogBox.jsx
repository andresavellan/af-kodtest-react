import { useContext } from "react";
import { ChecklistaContext } from "../../ChecklistaContext.jsx";
import { DialogSize } from "@digi/arbetsformedlingen";
import { DigiDialog } from "@digi/arbetsformedlingen-react";

export default function DialogBox() {
  const store = useContext(ChecklistaContext);

  return (
    <DigiDialog
      afSize={DialogSize.SMALL}
      afShowDialog={store.dialog.open}
      afHeading={`${store.dialog.aktion} ?`}
      afPrimaryButtonText={store.dialog.aktion}
      afSecondaryButtonText="Avbryt"
      onAfPrimaryButtonClick={store.aktionsHantering}
      onAfSecondaryButtonClick={() => store.setDialog(store.initalDialog)}>
      {store.dialog.titel}
    </DigiDialog>
  );
}
