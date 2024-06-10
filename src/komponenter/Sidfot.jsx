import {
  DigiFooter,
  DigiFooterCard,
  DigiIconAccessibilityUniversal,
  DigiIconSign,
  DigiIconGlobe,
  DigiIconEnvelope,
  DigiLogo,
  DigiLink,
} from "@digi/arbetsformedlingen-react";
import {
  LogoColor,
  LogoVariation,
  FooterCardVariation,
  FooterVariation,
} from "@digi/arbetsformedlingen";
import React from "react";
function Sidfot() {
  return (
    <>
      <DigiFooter afVariation={FooterVariation.SMALL}>
        <div slot="content-top">
          <div>
            <DigiFooterCard afType={FooterCardVariation.ICON}>
              <ul>
                <li>
                  <a href="/" aria-label="Tillgänglighetsredogörelse">
                    <DigiIconAccessibilityUniversal></DigiIconAccessibilityUniversal>
                    Tillgänglighetsredogörelse
                  </a>
                </li>
                <li>
                  <a href="/" aria-label="Teckenspråk">
                    <DigiIconSign></DigiIconSign>
                    Teckenspråk
                  </a>
                </li>
                <li>
                  <a href="/" aria-label="Other languages">
                    <DigiIconGlobe></DigiIconGlobe>
                    Other languages
                  </a>
                </li>
                <li>
                  <a href="/" aria-label=" Mejla vår funktionbrevlåda">
                    <DigiIconEnvelope></DigiIconEnvelope>
                    Mejla vår funktionbrevlåda
                  </a>
                </li>
              </ul>
            </DigiFooterCard>
          </div>
          <div>
            <DigiFooterCard afType={FooterCardVariation.BORDER}>
              <a href="/" aria-label="Om tjänsten dolores">
                Om tjänsten dolores
              </a>
              <p>
                Systemversion: 1.4.0 <br /> Ansvarig: Jenny Svensson
              </p>
            </DigiFooterCard>
          </div>
          <div>
            <DigiFooterCard afType={FooterCardVariation.BORDER}>
              <a href="/" aria-label="Kontakta servicdolores">
                Kontakta servicdolores
              </a>
              <p>
                Telefon: 0771-60 0001 <br /> Öppettider: Vardagar 08:00-16:30
              </p>
            </DigiFooterCard>
          </div>
        </div>
        <div slot="content-bottom-left">
          <DigiLink to="/">
            <DigiLogo
              afVariation={LogoVariation.LARGE}
              afColor={LogoColor.SECONDARY}></DigiLogo>
          </DigiLink>
        </div>
        <div slot="content-bottom-right">
          <p>Följ oss på</p>
          <a href="/" aria-label="Facebook">
            Facebook
          </a>
          <a href="/" aria-label="Youtube">
            Youtube
          </a>
          <a href="/" aria-label="Linkedin">
            Linkedin
          </a>
          <a href="/" aria-label="Instagram">
            Instagram
          </a>
        </div>
      </DigiFooter>
    </>
  );
}
export default Sidfot;
