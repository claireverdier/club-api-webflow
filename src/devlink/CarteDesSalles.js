"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { Chips } from "./Chips";
import * as _utils from "./utils";
import _styles from "./CarteDesSalles.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-3":{"id":"e-3","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-10","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"8a53c685-e9e6-d562-80f6-3eab6df5a165","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"8a53c685-e9e6-d562-80f6-3eab6df5a165","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1721988467703},"e-4":{"id":"e-4","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-11","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"8a53c685-e9e6-d562-80f6-3eab6df5a165","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"8a53c685-e9e6-d562-80f6-3eab6df5a165","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1721988467704},"e-17":{"id":"e-17","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-39","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-18"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"9c2643d0-a54e-9438-122a-906241e8a684","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"9c2643d0-a54e-9438-122a-906241e8a684","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1727356755475}},"actionLists":{"a-10":{"id":"a-10","title":"FAQ - Show","actionItemGroups":[{"actionItems":[{"id":"a-10-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".btn-icon.hide-faq","selectorGuids":["b475ca6d-d9c5-7a61-2c6c-b2710fecf1e5","8a794820-7c61-07f5-cb1a-3dee1ef75818"]},"value":"none"}},{"id":"a-10-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":"._w-full.overflow-hidden.faq-answer","selectorGuids":["bd28c749-9106-76a7-a850-4a20ba3b4473","94c3decd-286a-bc3e-4820-0015bb9559e1","47b6b563-1cfc-d9d4-a8d3-48ca6aea0dc1"]},"value":0,"unit":""}},{"id":"a-10-n-4","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":"._w-full.overflow-hidden.faq-answer","selectorGuids":["bd28c749-9106-76a7-a850-4a20ba3b4473","94c3decd-286a-bc3e-4820-0015bb9559e1","47b6b563-1cfc-d9d4-a8d3-48ca6aea0dc1"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}}]},{"actionItems":[{"id":"a-10-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".btn-icon.hide-faq","selectorGuids":["b475ca6d-d9c5-7a61-2c6c-b2710fecf1e5","8a794820-7c61-07f5-cb1a-3dee1ef75818"]},"value":"flex"}},{"id":"a-10-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".btn-icon.show-faq","selectorGuids":["b475ca6d-d9c5-7a61-2c6c-b2710fecf1e5","c36f3557-26e4-54c0-fb8a-c11b0c82912f"]},"value":"none"}},{"id":"a-10-n-5","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":"._w-full.overflow-hidden.faq-answer","selectorGuids":["bd28c749-9106-76a7-a850-4a20ba3b4473","94c3decd-286a-bc3e-4820-0015bb9559e1","47b6b563-1cfc-d9d4-a8d3-48ca6aea0dc1"]},"widthUnit":"px","heightUnit":"AUTO","locked":false}},{"id":"a-10-n-7","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":"._w-full.overflow-hidden.faq-answer","selectorGuids":["bd28c749-9106-76a7-a850-4a20ba3b4473","94c3decd-286a-bc3e-4820-0015bb9559e1","47b6b563-1cfc-d9d4-a8d3-48ca6aea0dc1"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1721986511650},"a-11":{"id":"a-11","title":"FAQ - Hide","actionItemGroups":[{"actionItems":[{"id":"a-11-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".btn-icon.hide-faq","selectorGuids":["b475ca6d-d9c5-7a61-2c6c-b2710fecf1e5","8a794820-7c61-07f5-cb1a-3dee1ef75818"]},"value":"none"}},{"id":"a-11-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":"._w-full.overflow-hidden.faq-answer","selectorGuids":["bd28c749-9106-76a7-a850-4a20ba3b4473","94c3decd-286a-bc3e-4820-0015bb9559e1","47b6b563-1cfc-d9d4-a8d3-48ca6aea0dc1"]},"value":0,"unit":""}},{"id":"a-11-n-3","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":"._w-full.overflow-hidden.faq-answer","selectorGuids":["bd28c749-9106-76a7-a850-4a20ba3b4473","94c3decd-286a-bc3e-4820-0015bb9559e1","47b6b563-1cfc-d9d4-a8d3-48ca6aea0dc1"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-11-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".btn-icon.show-faq","selectorGuids":["b475ca6d-d9c5-7a61-2c6c-b2710fecf1e5","c36f3557-26e4-54c0-fb8a-c11b0c82912f"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1721986649242},"a-39":{"id":"a-39","title":"Afficher les salles","actionItemGroups":[{"actionItems":[{"id":"a-39-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"id":"9c2643d0-a54e-9438-122a-906241e8a67d"},"heightValue":32,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-39-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":true,"id":"9c2643d0-a54e-9438-122a-906241e8a684"},"value":"flex"}},{"id":"a-39-n-5","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".show-more-button_break","selectorGuids":["6c2518e7-600e-26db-fb67-51cecc39d93e"]},"value":"block"}}]},{"actionItems":[{"id":"a-39-n-3","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inOutQuad","duration":300,"target":{"id":"9c2643d0-a54e-9438-122a-906241e8a67d"},"widthUnit":"PX","heightUnit":"AUTO","locked":false}},{"id":"a-39-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":true,"id":"9c2643d0-a54e-9438-122a-906241e8a684"},"value":"none"}},{"id":"a-39-n-6","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".show-more-button_break","selectorGuids":["6c2518e7-600e-26db-fb67-51cecc39d93e"]},"value":"none"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1727356760540}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function CarteDesSalles({ as: _Component = _Builtin.Section }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "columnimagetocontent")}
      grid={{
        type: "section",
      }}
      tag="section"
      fade-up-trigger=""
    >
      <_Builtin.Block className={_utils.cx(_styles, "container")} tag="div">
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "d-grid-col-2",
            "r-md-col-1",
            "_w-full"
          )}
          tag="div"
        >
          <_Builtin.Block
            id={_utils.cx(
              _styles,
              "w-node-_9c2643d0-a54e-9438-122a-906241e8a670-41e8a66d"
            )}
            tag="div"
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "_w-full")}
              width="Auto"
              height="auto"
              loading="lazy"
              card-fade-up=""
              alt="Carte de la France avec tous les clubs Keepcool"
              src="https://cdn.prod.website-files.com/66fd42536fe9bf422a5a3aac/66fd42536fe9bf422a5a3b5c_Carte.svg"
            />
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "d-flex")}
            id={_utils.cx(
              _styles,
              "w-node-_9c2643d0-a54e-9438-122a-906241e8a672-41e8a66d"
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "d-flex-dir-col_gap-0")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "text-h5",
                  "text-medium",
                  "mb-1",
                  "text-upper"
                )}
                tag="div"
                text-fade-up=""
              >
                {"270 SALLES"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "d-flex-dir-col_gap-4", "mb-8")}
                tag="div"
              >
                <_Builtin.Heading
                  className={_utils.cx(_styles, "text-h2", "md-text-h3")}
                  tag="h2"
                  heading-text-split=""
                >
                  {"TROUVEZ UNE SALLE PRÈS DE CHEZ VOUS !"}
                </_Builtin.Heading>
                <_Builtin.Paragraph
                  className={_utils.cx(_styles, "max-w-700", "text-medium")}
                  text-fade-up=""
                >
                  <_Builtin.Link
                    className={_utils.cx(
                      _styles,
                      "text-medium",
                      "link-inside-body"
                    )}
                    button={false}
                    block=""
                    options={{
                      href: "#",
                    }}
                  >
                    {"Trouve ton club favori !"}
                  </_Builtin.Link>
                  {
                    " Tu as accès à nos clubs en France, toute l'année de 6h à 23h. Pratique pour tes déplacements !"
                  }
                </_Builtin.Paragraph>
                <_Builtin.NotSupported _atom="DynamoWrapper" />
                <_Builtin.Link
                  className={_utils.cx(
                    _styles,
                    "chips",
                    "bg-background-g",
                    "show-more-button"
                  )}
                  data-w-id="9c2643d0-a54e-9438-122a-906241e8a684"
                  button={false}
                  editable={false}
                  fs-cmsstatic-element="static-item"
                  fs-cmsstatic-order="5"
                  block=""
                  options={{
                    href: "#",
                  }}
                >
                  {""}
                </_Builtin.Link>
                <_Builtin.Block
                  className={_utils.cx(_styles, "show-more-button_break")}
                  tag="div"
                  fs-cmsstatic-element="static-item"
                  fs-cmsstatic-order="6"
                />
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
                text-fade-up=""
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
                    {"Rechercher une salle"}
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
      </_Builtin.Block>
    </_Component>
  );
}
