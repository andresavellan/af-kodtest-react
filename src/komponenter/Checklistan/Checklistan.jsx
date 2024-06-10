import styles from "./checklistan.module.scss";
import { useContext } from "react";
import { ChecklistaContext } from "../../ChecklistaContext.jsx";
import {
  LayoutBlockVariation,
  LayoutBlockContainer,
  ButtonSize,
  ButtonVariation,
  BadgeStatusType,
  BadgeStatusVariation,
  LayoutColumnsElement,
  LayoutColumnsVariation,
} from "@digi/arbetsformedlingen";
import {
  DigiLayoutBlock,
  DigiButton,
  DigiIconX,
  DigiIconCheck,
  DigiIconRedo,
  DigiTypography,
  DigiBadgeStatus,
  DigiLayoutContainer,
  DigiLayoutColumns,
} from "@digi/arbetsformedlingen-react";

function CheckListan() {
  const store = useContext(ChecklistaContext);

  return (
    <>
      {store.checklista &&
        store.checklista.map((uppgift) => (
          <DigiLayoutContainer key={uppgift.id}>
            <DigiLayoutBlock
              afVariation={
                uppgift.klart
                  ? LayoutBlockVariation.SYMBOL
                  : LayoutBlockVariation.SECONDARY
              }
              afContainer={LayoutBlockContainer.STATIC}
              afMarginBottom
              afMarginTop
              afVerticalPadding>
              <DigiLayoutColumns
                afElement={LayoutColumnsElement.OL}
                afVariation={LayoutColumnsVariation.ONE}>
                <DigiTypography>
                  <div className={styles.uppgift}>
                    <div>
                      <p>{uppgift.titel}</p>
                      {uppgift.klart && (
                        <DigiBadgeStatus
                          afType={BadgeStatusType.APPROVED}
                          afVariation={BadgeStatusVariation.primary}
                          afText="Slutförd"></DigiBadgeStatus>
                      )}
                    </div>

                    <div className={styles.funktionsKnappar}>
                      <DigiButton
                        onAfOnClick={() => store.openDialog("Ta bort", uppgift)}
                        afSize={ButtonSize.SMALL}
                        afVariation={ButtonVariation.FUNCTION}
                        afFullWidth={false}>
                        <DigiIconX slot="icon" />
                        Ta bort
                      </DigiButton>

                      {uppgift.klart && (
                        <DigiButton
                          onAfOnClick={() =>
                            store.openDialog("Gör om", uppgift)
                          }
                          afSize={ButtonSize.SMALL}
                          afVariation={ButtonVariation.FUNCTION}
                          afFullWidth={false}>
                          <DigiIconRedo slot="icon" />
                          Göra om
                        </DigiButton>
                      )}
                      {!uppgift.klart && (
                        <DigiButton
                          onAfOnClick={() => store.openDialog("Klart", uppgift)}
                          afSize={ButtonSize.SMALL}
                          afVariation={ButtonVariation.FUNCTION}
                          afFullWidth={false}>
                          <DigiIconCheck slot="icon" />
                          Klart?
                        </DigiButton>
                      )}
                    </div>
                  </div>
                </DigiTypography>
              </DigiLayoutColumns>
            </DigiLayoutBlock>
          </DigiLayoutContainer>
        ))}
    </>
  );
}
export default CheckListan;
