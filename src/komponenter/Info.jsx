import {
  DigiLayoutBlock,
  DigiTypography,
  DigiTypographyPreamble,
  DigiList,
} from "@digi/arbetsformedlingen-react";
import { LayoutBlockVariation, ListType } from "@digi/arbetsformedlingen";
function Info() {
  return (
    <DigiLayoutBlock
      afVariation={LayoutBlockVariation.PRIMARY}
      afMarginBottom
      afMarginTop>
      <DigiTypography>
        <h1>Checklistan på dina uppgifter</h1>
        <DigiTypographyPreamble>
          En checklista som tillåter dig att:
        </DigiTypographyPreamble>
        <DigiList afListType={ListType.BULLET}>
          <li>Lägga till nya uppgifter</li>
          <li>Markera en uppgift som slutförd</li>
          <li>Ångra markering på en uppgift</li>
          <li>Ta bort uppgifter</li>
        </DigiList>
      </DigiTypography>
    </DigiLayoutBlock>
  );
}
export default Info;
