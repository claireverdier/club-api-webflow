"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./Footer.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-3":{"id":"e-3","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-10","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"8a53c685-e9e6-d562-80f6-3eab6df5a165","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"8a53c685-e9e6-d562-80f6-3eab6df5a165","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1721988467703},"e-4":{"id":"e-4","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-11","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"8a53c685-e9e6-d562-80f6-3eab6df5a165","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"8a53c685-e9e6-d562-80f6-3eab6df5a165","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1721988467704}},"actionLists":{"a-10":{"id":"a-10","title":"FAQ - Show","actionItemGroups":[{"actionItems":[{"id":"a-10-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".btn-icon.hide-faq","selectorGuids":["b475ca6d-d9c5-7a61-2c6c-b2710fecf1e5","8a794820-7c61-07f5-cb1a-3dee1ef75818"]},"value":"none"}},{"id":"a-10-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":"._w-full.overflow-hidden.faq-answer","selectorGuids":["bd28c749-9106-76a7-a850-4a20ba3b4473","94c3decd-286a-bc3e-4820-0015bb9559e1","47b6b563-1cfc-d9d4-a8d3-48ca6aea0dc1"]},"value":0,"unit":""}},{"id":"a-10-n-4","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":"._w-full.overflow-hidden.faq-answer","selectorGuids":["bd28c749-9106-76a7-a850-4a20ba3b4473","94c3decd-286a-bc3e-4820-0015bb9559e1","47b6b563-1cfc-d9d4-a8d3-48ca6aea0dc1"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}}]},{"actionItems":[{"id":"a-10-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".btn-icon.hide-faq","selectorGuids":["b475ca6d-d9c5-7a61-2c6c-b2710fecf1e5","8a794820-7c61-07f5-cb1a-3dee1ef75818"]},"value":"flex"}},{"id":"a-10-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".btn-icon.show-faq","selectorGuids":["b475ca6d-d9c5-7a61-2c6c-b2710fecf1e5","c36f3557-26e4-54c0-fb8a-c11b0c82912f"]},"value":"none"}},{"id":"a-10-n-5","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":"._w-full.overflow-hidden.faq-answer","selectorGuids":["bd28c749-9106-76a7-a850-4a20ba3b4473","94c3decd-286a-bc3e-4820-0015bb9559e1","47b6b563-1cfc-d9d4-a8d3-48ca6aea0dc1"]},"widthUnit":"px","heightUnit":"AUTO","locked":false}},{"id":"a-10-n-7","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":"._w-full.overflow-hidden.faq-answer","selectorGuids":["bd28c749-9106-76a7-a850-4a20ba3b4473","94c3decd-286a-bc3e-4820-0015bb9559e1","47b6b563-1cfc-d9d4-a8d3-48ca6aea0dc1"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1721986511650},"a-11":{"id":"a-11","title":"FAQ - Hide","actionItemGroups":[{"actionItems":[{"id":"a-11-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".btn-icon.hide-faq","selectorGuids":["b475ca6d-d9c5-7a61-2c6c-b2710fecf1e5","8a794820-7c61-07f5-cb1a-3dee1ef75818"]},"value":"none"}},{"id":"a-11-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":"._w-full.overflow-hidden.faq-answer","selectorGuids":["bd28c749-9106-76a7-a850-4a20ba3b4473","94c3decd-286a-bc3e-4820-0015bb9559e1","47b6b563-1cfc-d9d4-a8d3-48ca6aea0dc1"]},"value":0,"unit":""}},{"id":"a-11-n-3","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":"._w-full.overflow-hidden.faq-answer","selectorGuids":["bd28c749-9106-76a7-a850-4a20ba3b4473","94c3decd-286a-bc3e-4820-0015bb9559e1","47b6b563-1cfc-d9d4-a8d3-48ca6aea0dc1"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-11-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".btn-icon.show-faq","selectorGuids":["b475ca6d-d9c5-7a61-2c6c-b2710fecf1e5","c36f3557-26e4-54c0-fb8a-c11b0c82912f"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1721986649242}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Footer({ as: _Component = _Builtin.Section }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "footer")}
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <_Builtin.Block className={_utils.cx(_styles, "container")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "d-flex-dir-col_gap-10")}
          tag="div"
        >
          <_Builtin.Link
            button={false}
            block="inline"
            options={{
              href: "#",
            }}
          >
            <_Builtin.Image
              loading="lazy"
              width="auto"
              height="auto"
              alt="Logo Keecool"
              src="https://cdn.prod.website-files.com/66fd42536fe9bf422a5a3aac/66fd42536fe9bf422a5a3aca_Logo.svg"
            />
          </_Builtin.Link>
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "d-grid-col-3_spn-2-7-3_ali-top",
              "r-xl-spn-2-8-2-md-col-1",
              "_w-full"
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "d-flex-dir-col_gap-8")}
              id={_utils.cx(
                _styles,
                "w-node-dd444717-a8a9-186a-2d61-d4b85a73c9f7-5a73c9f1"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "text-h5")}
                tag="div"
              >
                {"KEEPCOOL"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "separator-bar")}
                tag="div"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "d-flex-dir-col_gap-6")}
                tag="div"
              >
                <_Builtin.Link
                  className={_utils.cx(_styles, "text-h6")}
                  button={false}
                  block=""
                  options={{
                    href: "#",
                  }}
                >
                  {"SALLES"}
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(_styles, "text-h6")}
                  button={false}
                  block=""
                  options={{
                    href: "#",
                  }}
                >
                  {"FORMULES"}
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(_styles, "text-h6")}
                  button={false}
                  block=""
                  options={{
                    href: "#",
                  }}
                >
                  {"COACHING"}
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(_styles, "text-h6")}
                  button={false}
                  block=""
                  options={{
                    href: "#",
                  }}
                >
                  {"BLOG"}
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(_styles, "text-h6")}
                  button={false}
                  block=""
                  options={{
                    href: "#",
                  }}
                >
                  {"FAQ"}
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(_styles, "text-h6")}
                  button={false}
                  block=""
                  options={{
                    href: "#",
                  }}
                >
                  {"NOTRE CONCEPT"}
                </_Builtin.Link>
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "d-flex-dir-col_gap-8")}
              id={_utils.cx(
                _styles,
                "w-node-dd444717-a8a9-186a-2d61-d4b85a73ca08-5a73c9f1"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "text-h5")}
                tag="div"
              >
                {"NOS SALLES DE SPORT"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "separator-bar", "r-first")}
                tag="div"
              />
              <_Builtin.NotSupported _atom="DynamoWrapper" />
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "d-flex-dir-col_gap-8")}
              id={_utils.cx(
                _styles,
                "w-node-dd444717-a8a9-186a-2d61-d4b85a73ca13-5a73c9f1"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "text-h5")}
                tag="div"
              >
                {"RÉSEAU"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "separator-bar")}
                tag="div"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "d-flex-dir-col_gap-6")}
                tag="div"
              >
                <_Builtin.Link
                  className={_utils.cx(_styles, "text-h6")}
                  button={false}
                  block=""
                  options={{
                    href: "https://www.keepcool-corporate.fr/carrieres/",
                    target: "_blank",
                  }}
                >
                  {"RECRUTEMENT"}
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(_styles, "text-h6")}
                  button={false}
                  block=""
                  options={{
                    href: "#",
                  }}
                >
                  {"DEVENIR FRANCHISÉ"}
                </_Builtin.Link>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "separator-bar")}
                tag="div"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "d-flex-dir-col_gap-4")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-body-2", "text-medium")}
                  tag="div"
                >
                  {"Une question ? Une info ?"}
                </_Builtin.Block>
                <_Builtin.Link
                  className={_utils.cx(
                    _styles,
                    "btn",
                    "is-icon",
                    "bg-light",
                    "overflow-hidden"
                  )}
                  button={false}
                  block="inline"
                  options={{
                    href: "#",
                  }}
                >
                  <_Builtin.HFlex
                    className={_utils.cx(_styles, "btn-container")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "btn-text")}
                      tag="div"
                    >
                      {"Contacte-nous"}
                    </_Builtin.Block>
                    <_Builtin.HFlex
                      className={_utils.cx(_styles, "btn-icon-container")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "btn-icon",
                          "is-icon",
                          "text-light"
                        )}
                        tag="div"
                      >
                        {""}
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "btn-icon-background",
                          "position-absolute",
                          "bg-background"
                        )}
                        tag="div"
                      />
                    </_Builtin.HFlex>
                  </_Builtin.HFlex>
                </_Builtin.Link>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "separator-bar")}
            tag="div"
          />
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "d-flex-spc-bwn",
              "r-dir-col_ali-l_gap-10",
              "_w-full"
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "d-flex-dir-wrp_gap-4")}
              tag="div"
            >
              <_Builtin.Link
                className={_utils.cx(
                  _styles,
                  "btn",
                  "is-icon",
                  "icon-only",
                  "bg-light"
                )}
                button={false}
                block="inline"
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "btn-icon")}
                  tag="div"
                >
                  {""}
                </_Builtin.Block>
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(
                  _styles,
                  "btn",
                  "is-icon",
                  "icon-only",
                  "bg-light"
                )}
                button={false}
                block="inline"
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "btn-icon")}
                  tag="div"
                >
                  {""}
                </_Builtin.Block>
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(
                  _styles,
                  "btn",
                  "is-icon",
                  "icon-only",
                  "bg-light"
                )}
                button={false}
                block="inline"
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "btn-icon")}
                  tag="div"
                >
                  {""}
                </_Builtin.Block>
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(
                  _styles,
                  "btn",
                  "is-icon",
                  "icon-only",
                  "bg-light"
                )}
                button={false}
                block="inline"
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "btn-icon")}
                  tag="div"
                >
                  {""}
                </_Builtin.Block>
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(
                  _styles,
                  "btn",
                  "is-icon",
                  "icon-only",
                  "bg-light"
                )}
                button={false}
                block="inline"
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "btn-icon")}
                  tag="div"
                >
                  {""}
                </_Builtin.Block>
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(
                  _styles,
                  "btn",
                  "is-icon",
                  "icon-only",
                  "bg-light"
                )}
                button={false}
                block="inline"
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "btn-icon")}
                  tag="div"
                >
                  {""}
                </_Builtin.Block>
              </_Builtin.Link>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "d-flex-gap-6", "r-dir-col_ali-l")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "text-body-2", "text-medium")}
                tag="div"
              >
                {"Téléchargez l’application Keepcool"}
              </_Builtin.Block>
              <_Builtin.Link
                button={false}
                block="inline"
                options={{
                  href: "https://apps.apple.com/fr/app/keepcool/id1582437445",
                  target: "_blank",
                }}
              >
                <_Builtin.Image
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt="Bouton téléchargement AppStore"
                  src="https://cdn.prod.website-files.com/66fd42536fe9bf422a5a3aac/66fd42536fe9bf422a5a3ae1_AppStore.svg"
                />
              </_Builtin.Link>
              <_Builtin.Link
                button={false}
                block="inline"
                options={{
                  href: "https://play.google.com/store/apps/details?id=fr.keepcool.memberapp&hl=fr",
                  target: "_blank",
                }}
              >
                <_Builtin.Image
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt="Bouton téléchargement Google Play\n"
                  src="https://cdn.prod.website-files.com/66fd42536fe9bf422a5a3aac/66fd42536fe9bf422a5a3ac9_Google_Play.svg"
                />
              </_Builtin.Link>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "separator-bar")}
            tag="div"
          />
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "d-flex-spc-bwn",
              "r-dir-col_ali-l_gap-10",
              "_w-full"
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "text-body-3",
                "r-xl-text-body-2",
                "order-last"
              )}
              tag="div"
            >
              {"Copyright © 2024 Keepcool - TDR"}
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "d-flex-gap-2",
                "r-xl-gap-6-md-dir-col_ali-l_gap-6"
              )}
              tag="div"
            >
              <_Builtin.Link
                className={_utils.cx(
                  _styles,
                  "text-body-3",
                  "r-xl-text-body-2"
                )}
                button={false}
                block=""
                options={{
                  href: "#",
                }}
              >
                {"Règlement intérieur"}
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(
                  _styles,
                  "text-body-3",
                  "r-xl-text-body-2"
                )}
                button={false}
                block=""
                options={{
                  href: "#",
                }}
              >
                {"Conditions des offres en cours"}
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(
                  _styles,
                  "text-body-3",
                  "r-xl-text-body-2"
                )}
                button={false}
                block=""
                options={{
                  href: "#",
                }}
              >
                {"Politique de confidentialité"}
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(
                  _styles,
                  "text-body-3",
                  "r-xl-text-body-2"
                )}
                button={false}
                block=""
                options={{
                  href: "#",
                }}
              >
                {"CGV"}
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(
                  _styles,
                  "text-body-3",
                  "r-xl-text-body-2"
                )}
                button={false}
                block=""
                options={{
                  href: "#",
                }}
              >
                {"CGU"}
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(
                  _styles,
                  "text-body-3",
                  "r-xl-text-body-2"
                )}
                button={false}
                block=""
                options={{
                  href: "#",
                }}
              >
                {"Mentions légales"}
              </_Builtin.Link>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
