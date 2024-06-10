import { DigiHeader } from "@digi/arbetsformedlingen-react";

function Sidhuvud() {
  return (
    <DigiHeader
      afSystemName="Intranätet"
      afActive={false}
      afHideSystemName={false}>
      <a slot="header-logo" aria-label="Intranätets startsida" href="/"></a>
    </DigiHeader>
  );
}
export default Sidhuvud;
