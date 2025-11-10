"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./Header.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-3":{"id":"e-3","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-10","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"8a53c685-e9e6-d562-80f6-3eab6df5a165","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"8a53c685-e9e6-d562-80f6-3eab6df5a165","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1721988467703},"e-4":{"id":"e-4","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-11","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"8a53c685-e9e6-d562-80f6-3eab6df5a165","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"8a53c685-e9e6-d562-80f6-3eab6df5a165","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1721988467704},"e-9":{"id":"e-9","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-16","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-10"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"21c90a9e-eb0a-b149-f7f3-53d44516fa58","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"21c90a9e-eb0a-b149-f7f3-53d44516fa58","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1723123630486}},"actionLists":{"a-10":{"id":"a-10","title":"FAQ - Show","actionItemGroups":[{"actionItems":[{"id":"a-10-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".btn-icon.hide-faq","selectorGuids":["b475ca6d-d9c5-7a61-2c6c-b2710fecf1e5","8a794820-7c61-07f5-cb1a-3dee1ef75818"]},"value":"none"}},{"id":"a-10-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":"._w-full.overflow-hidden.faq-answer","selectorGuids":["bd28c749-9106-76a7-a850-4a20ba3b4473","94c3decd-286a-bc3e-4820-0015bb9559e1","47b6b563-1cfc-d9d4-a8d3-48ca6aea0dc1"]},"value":0,"unit":""}},{"id":"a-10-n-4","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":"._w-full.overflow-hidden.faq-answer","selectorGuids":["bd28c749-9106-76a7-a850-4a20ba3b4473","94c3decd-286a-bc3e-4820-0015bb9559e1","47b6b563-1cfc-d9d4-a8d3-48ca6aea0dc1"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}}]},{"actionItems":[{"id":"a-10-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".btn-icon.hide-faq","selectorGuids":["b475ca6d-d9c5-7a61-2c6c-b2710fecf1e5","8a794820-7c61-07f5-cb1a-3dee1ef75818"]},"value":"flex"}},{"id":"a-10-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".btn-icon.show-faq","selectorGuids":["b475ca6d-d9c5-7a61-2c6c-b2710fecf1e5","c36f3557-26e4-54c0-fb8a-c11b0c82912f"]},"value":"none"}},{"id":"a-10-n-5","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":"._w-full.overflow-hidden.faq-answer","selectorGuids":["bd28c749-9106-76a7-a850-4a20ba3b4473","94c3decd-286a-bc3e-4820-0015bb9559e1","47b6b563-1cfc-d9d4-a8d3-48ca6aea0dc1"]},"widthUnit":"px","heightUnit":"AUTO","locked":false}},{"id":"a-10-n-7","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":"._w-full.overflow-hidden.faq-answer","selectorGuids":["bd28c749-9106-76a7-a850-4a20ba3b4473","94c3decd-286a-bc3e-4820-0015bb9559e1","47b6b563-1cfc-d9d4-a8d3-48ca6aea0dc1"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1721986511650},"a-11":{"id":"a-11","title":"FAQ - Hide","actionItemGroups":[{"actionItems":[{"id":"a-11-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".btn-icon.hide-faq","selectorGuids":["b475ca6d-d9c5-7a61-2c6c-b2710fecf1e5","8a794820-7c61-07f5-cb1a-3dee1ef75818"]},"value":"none"}},{"id":"a-11-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":"._w-full.overflow-hidden.faq-answer","selectorGuids":["bd28c749-9106-76a7-a850-4a20ba3b4473","94c3decd-286a-bc3e-4820-0015bb9559e1","47b6b563-1cfc-d9d4-a8d3-48ca6aea0dc1"]},"value":0,"unit":""}},{"id":"a-11-n-3","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":"._w-full.overflow-hidden.faq-answer","selectorGuids":["bd28c749-9106-76a7-a850-4a20ba3b4473","94c3decd-286a-bc3e-4820-0015bb9559e1","47b6b563-1cfc-d9d4-a8d3-48ca6aea0dc1"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-11-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".btn-icon.show-faq","selectorGuids":["b475ca6d-d9c5-7a61-2c6c-b2710fecf1e5","c36f3557-26e4-54c0-fb8a-c11b0c82912f"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1721986649242},"a-16":{"id":"a-16","title":"Mega Menu Show - tab 1","actionItemGroups":[{"actionItems":[{"id":"a-16-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":100,"target":{"selector":".mega-menu-container","selectorGuids":["a5cb1d32-aba7-4dd7-8587-b8c0d4f096cd"]},"xValue":100,"xUnit":"vw","yUnit":"PX","zUnit":"PX"}},{"id":"a-16-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".mega-menu-container","selectorGuids":["a5cb1d32-aba7-4dd7-8587-b8c0d4f096cd"]},"value":0,"unit":""}},{"id":"a-16-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".mm-tab.js--tab-1","selectorGuids":["cedf910a-8db4-64e3-0ae4-0c3473eebb13","aad80d75-e76c-0aed-7ea6-0bbbf2e596f3"]},"value":"block"}}]},{"actionItems":[{"id":"a-16-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"selector":".mega-menu-container","selectorGuids":["a5cb1d32-aba7-4dd7-8587-b8c0d4f096cd"]},"value":1,"unit":""}},{"id":"a-16-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":300,"target":{"selector":".mega-menu-container","selectorGuids":["a5cb1d32-aba7-4dd7-8587-b8c0d4f096cd"]},"xValue":0,"xUnit":"vw","yUnit":"PX","zUnit":"PX"}},{"id":"a-16-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"selector":".mm-tab.js--tab-1","selectorGuids":["cedf910a-8db4-64e3-0ae4-0c3473eebb13","aad80d75-e76c-0aed-7ea6-0bbbf2e596f3"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1723123652988}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Header({ as: _Component = _Builtin.DOM, slotContent }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "header")} tag="header" slot="">
      <_Builtin.NotSupported _atom="Slot" />
      <_Builtin.Block
        className={_utils.cx(_styles, "container", "py-4", "px-6", "z-index-1")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "d-flex")}
          tag="div"
          animation-header=""
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
            className={_utils.cx(_styles, "nav")}
            tag="div"
            id="js--nav"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "nav-close")}
              tag="div"
              id="js--close-menu"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "btn-icon")}
                tag="div"
              >
                {""}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "d-flex-gap-0")}
              tag="div"
            >
              <_Builtin.Link
                className={_utils.cx(_styles, "d-flex-gap-0", "r-xl-d-none")}
                button={false}
                block="inline"
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-h5", "nav-links")}
                  data-w-id="21c90a9e-eb0a-b149-f7f3-53d44516fa58"
                  tag="div"
                >
                  {"Accueil"}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "btn-icon",
                    "r-xl-d-none",
                    "text-medium"
                  )}
                  tag="div"
                >
                  {""}
                </_Builtin.Block>
              </_Builtin.Link>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "d-flex-gap-0", "js--mm-trigger")}
              tag="div"
              data-mm-tab-trigger="1"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "text-h5", "nav-links")}
                tag="div"
              >
                {"Nos offres"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "btn-icon",
                  "r-xl-d-none",
                  "text-medium"
                )}
                tag="div"
              >
                {""}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "d-flex-gap-0", "js--mm-trigger")}
              tag="div"
              data-mm-tab-trigger="2"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "text-h5", "nav-links")}
                tag="div"
              >
                {"Cours collectifs"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "btn-icon",
                  "r-xl-d-none",
                  "text-medium"
                )}
                tag="div"
              >
                {""}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "d-flex-gap-0", "js--mm-trigger")}
              tag="div"
              data-mm-tab-trigger="3"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "text-h5", "nav-links")}
                tag="div"
              >
                {"Coaching"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "btn-icon",
                  "r-xl-d-none",
                  "text-medium"
                )}
                tag="div"
              >
                {""}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "d-flex-gap-0", "js--mm-close")}
              tag="div"
            >
              <_Builtin.Link
                className={_utils.cx(_styles, "d-flex-gap-0")}
                button={false}
                block="inline"
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-h5", "nav-links")}
                  tag="div"
                >
                  {"Concept"}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "btn-icon",
                    "r-xl-d-none",
                    "text-medium"
                  )}
                  tag="div"
                >
                  {""}
                </_Builtin.Block>
              </_Builtin.Link>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "nav-buttons")}
              tag="div"
            >
              <_Builtin.Link
                className={_utils.cx(_styles, "btn", "outlined-box-light")}
                button={false}
                block="inline"
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Block tag="div">{"Trouver ma salle"}</_Builtin.Block>
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "btn", "is-icon", "bg-light")}
                button={false}
                block="inline"
                options={{
                  href: "https://subscribe.keepcool.fr/",
                }}
              >
                <_Builtin.Block tag="div">{"M'inscrire"}</_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "btn-icon", "bg-background")}
                  tag="div"
                >
                  {""}
                </_Builtin.Block>
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(
                  _styles,
                  "btn",
                  "is-icon",
                  "icon-only",
                  "outlined-box-light"
                )}
                button={false}
                block="inline"
                options={{
                  href: "https://my.keepcool.fr/",
                }}
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "btn-icon")}
                  tag="div"
                >
                  {""}
                </_Builtin.Block>
              </_Builtin.Link>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "d-flex-gap-4",
              "r-sm-d-none",
              "ml-auto",
              "position-relative"
            )}
            tag="div"
          >
            <_Builtin.Link
              className={_utils.cx(_styles, "btn", "outlined-box-light")}
              button={false}
              block="inline"
              options={{
                href: "#",
              }}
            >
              <_Builtin.Block tag="div">{"Trouver ma salle"}</_Builtin.Block>
            </_Builtin.Link>
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
                href: "https://subscribe.keepcool.fr/",
                target: "_blank",
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
                  {"M'inscrire"}
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
            <_Builtin.Link
              className={_utils.cx(
                _styles,
                "btn",
                "is-icon",
                "icon-only",
                "outlined-box-light"
              )}
              button={false}
              block="inline"
              options={{
                href: "https://my.keepcool.fr/",
                target: "_blank",
              }}
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "btn-icon")}
                tag="div"
              >
                {""}
              </_Builtin.Block>
            </_Builtin.Link>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "nav-burger")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "btn-icon")}
              tag="div"
              id="js--burger-menu"
            >
              {""}
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "mega-menu-container")}
        tag="div"
        id="js--mega-menu"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "mm-tab", "js--mm-tab")}
          tag="div"
          id="js--mm-tab-1"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "mm-tab-1-content")}
            tag="div"
          >
            <_Builtin.Link
              className={_utils.cx(_styles, "mm-tab-title", "js--close-mm")}
              button={false}
              block="inline"
              options={{
                href: "#",
              }}
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "btn-icon", "rotate-180")}
                tag="div"
              >
                {""}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "text-h4")}
                tag="div"
              >
                {"Nos offres"}
              </_Builtin.Block>
            </_Builtin.Link>
            <_Builtin.Block
              className={_utils.cx(_styles, "mm-tab-col")}
              id={_utils.cx(
                _styles,
                "w-node-_1dd762d1-299d-95bd-c551-c153541cf4f8-4516fa4d"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "d-flex-dir-col_ali-r_gap-8",
                  "r-xl-ali-l"
                )}
                id={_utils.cx(
                  _styles,
                  "w-node-b1ee16ff-0f1e-3bbe-b067-5c6bb9f695c7-4516fa4d"
                )}
                tag="div"
              >
                <_Builtin.Link
                  className={_utils.cx(_styles, "text-h5")}
                  button={false}
                  block=""
                  options={{
                    href: "#",
                  }}
                >
                  {"TOUTES NOS OFFRES"}
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(_styles, "text-h5")}
                  button={false}
                  block=""
                  options={{
                    href: "#",
                  }}
                >
                  {"SE RÉABONNER"}
                </_Builtin.Link>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "d-flex-dir-col_ali-r_gap-8",
                  "r-xl-ali-l"
                )}
                id={_utils.cx(
                  _styles,
                  "w-node-_18de1003-b78c-c342-0139-65a790def391-4516fa4d"
                )}
                tag="div"
              >
                <_Builtin.Link
                  className={_utils.cx(_styles, "text-h5")}
                  button={false}
                  block=""
                  options={{
                    href: "#",
                  }}
                >
                  {"SÉANCE D’ESSAI OFFERT"}
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(_styles, "text-h5")}
                  button={false}
                  block=""
                  options={{
                    href: "#",
                  }}
                >
                  {"OFFRE FREEMIUM"}
                </_Builtin.Link>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "mm-tab", "js--mm-tab")}
          tag="div"
          id="js--mm-tab-2"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "mm-tab-1-content")}
            tag="div"
          >
            <_Builtin.Link
              className={_utils.cx(_styles, "mm-tab-title", "js--close-mm")}
              button={false}
              block="inline"
              options={{
                href: "#",
              }}
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "btn-icon", "rotate-180")}
                tag="div"
              >
                {""}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "text-h4")}
                tag="div"
              >
                {"Cours collectifs"}
              </_Builtin.Block>
            </_Builtin.Link>
            <_Builtin.Block
              className={_utils.cx(_styles, "mm-tab-col")}
              id={_utils.cx(
                _styles,
                "w-node-_26d645c2-1d64-1934-3990-9738144480d1-4516fa4d"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "d-flex-dir-col_ali-r_gap-8",
                  "r-xl-ali-l"
                )}
                id={_utils.cx(
                  _styles,
                  "w-node-_8233fb89-f2fa-9175-7d2a-69cc5ba9b6de-4516fa4d"
                )}
                tag="div"
              >
                <_Builtin.Link
                  className={_utils.cx(_styles, "text-h5")}
                  button={false}
                  block=""
                  options={{
                    href: "#",
                  }}
                >
                  {"SMALL GROUP TRAININGS"}
                </_Builtin.Link>
              </_Builtin.Block>
              <_Builtin.NotSupported _atom="DynamoWrapper" />
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "mm-tab", "js--mm-tab")}
          tag="div"
          id="js--mm-tab-3"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "mm-tab-1-content")}
            tag="div"
          >
            <_Builtin.Link
              className={_utils.cx(_styles, "mm-tab-title", "js--close-mm")}
              button={false}
              block="inline"
              options={{
                href: "#",
              }}
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "btn-icon", "rotate-180")}
                tag="div"
              >
                {""}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "text-h4")}
                tag="div"
              >
                {"Coaching"}
              </_Builtin.Block>
            </_Builtin.Link>
            <_Builtin.Block
              className={_utils.cx(_styles, "mm-tab-col")}
              id={_utils.cx(
                _styles,
                "w-node-_07035b92-4711-9c77-5871-5e37602809c9-4516fa4d"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "d-flex-dir-col_ali-r_gap-8",
                  "r-xl-ali-l"
                )}
                id={_utils.cx(
                  _styles,
                  "w-node-a9f88f4b-5365-1d1e-45f4-dbb5ff766ac7-4516fa4d"
                )}
                tag="div"
              >
                <_Builtin.Link
                  className={_utils.cx(_styles, "text-h5")}
                  button={false}
                  block=""
                  options={{
                    href: "#",
                  }}
                >
                  {"XPERIENCE TRAINING"}
                </_Builtin.Link>
                <_Builtin.Link
                  className={_utils.cx(_styles, "text-h5")}
                  button={false}
                  block=""
                  options={{
                    href: "#",
                  }}
                >
                  {"SÉANCE D’ESSAI"}
                </_Builtin.Link>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.HtmlEmbed
        className={_utils.cx(_styles, "d-none")}
        value="%3Cscript%20type%3D%22text%2Fjavascript%22%3E%0A%20%20window.addEventListener('load'%2C%20function()%20%7B%0A%20%20%20%20%24('%23js--burger-menu').on('click'%2C%20function()%20%7B%0A%20%20%20%20%09showNav()%3B%0A%20%20%20%20%7D)%3B%0A%20%20%20%20%0A%20%20%20%20%24('%23js--close-menu').on('click'%2C%20function()%20%7B%0A%20%20%20%20%09hideNav()%3B%0A%20%20%20%20%7D)%3B%0A%0A%20%20%20%20%24('.js--mm-trigger').on('click'%2C%20function()%20%7B%0A%20%20%20%20%09showMegaMenu(%24(this).data('mm-tab-trigger'))%3B%0A%20%20%20%20%7D)%3B%0A%20%20%20%20%0A%20%20%20%20%24('.js--mm-trigger').on('mouseenter'%2C%20function()%20%7B%0A%20%20%20%20%09showMegaMenu(%24(this).data('mm-tab-trigger'))%3B%0A%20%20%20%20%7D)%3B%0A%20%20%20%20%0A%20%20%20%20%24('.js--mm-close').on('mouseenter'%2C%20function()%20%7B%0A%20%20%20%20%09hideMegaMenu()%3B%0A%20%20%20%20%7D)%3B%0A%20%20%20%20%0A%09%09%24('.js--close-mm').on('click'%2C%20function()%20%7B%0A%20%20%20%20%09hideMegaMenu()%3B%0A%20%20%20%20%7D)%3B%0A%20%20%20%20%0A%20%20%20%20%24('header').on('mouseleave'%2C%20function()%20%7B%0A%20%20%20%20%09hideMegaMenu()%3B%0A%20%20%20%20%7D)%3B%0A%20%20%20%20%0A%20%20%20%20let%20resizeTimeout%3B%0A%20%20%20%20let%20lastInnerWidth%20%3D%20window.innerWidth%3B%0A%0A%20%20%20%20%24(window).on('resize'%2C%20function()%20%7B%0A%20%20%20%20%09clearTimeout(resizeTimeout)%3B%0A%20%20%20%20%0A%20%20%20%20%09resizeTimeout%20%3D%20setTimeout(function%20()%20%7B%0A%20%20%20%20%20%20%20%20if%20(window.innerWidth%20!%3D%3D%20lastInnerWidth)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20lastInnerWidth%20%3D%20window.innerWidth%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20let%20nav%20%3D%20%24('%23js--nav')%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20let%20megaMenu%20%3D%20%24('%23js--mega-menu')%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20(%24(window).width()%20%3E%3D%201440)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20nav.css(%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20opacity%3A%20'100%25'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20left%3A%200%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20megaMenu.css(%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20left%3A%200%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D)%3B%09%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20nav.css(%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20opacity%3A%200%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20left%3A%20'100vw'%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D)%3B%09%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20megaMenu.css(%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20left%3A%20'100vw'%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D)%3B%09%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%7D%2C%20150)%3B%0A%09%09%7D)%3B%0A%20%20%7D)%3B%20%0A%20%20%0A%20%20function%20showNav()%20%7B%0A%20%20%09if(%24(window).width()%20%3C%201440)%20%7B%0A%20%20%20%20%09%24('%23js--nav').stop().animate(%7B%0A%20%20%20%20%20%20%09opacity%3A%20'100%25'%2C%0A%20%20%20%20%20%20%20%20left%3A%20%220vw%22%0A%20%20%20%20%20%20%7D%2C%20200%2C%20'easeOutQuad')%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%20%20%0A%20%20function%20hideNav()%20%7B%0A%20%20%09if(%24(window).width()%20%3C%201440)%20%7B%0A%20%20%20%20%09%24('%23js--nav').stop().animate(%7B%0A%20%20%20%20%20%20%09opacity%3A%200%2C%0A%20%20%20%20%20%20%20%20left%3A%20%22100vw%22%0A%20%20%20%20%20%20%7D%2C%20200%2C%20'easeOutQuad')%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%20%20%0A%20%20function%20showMegaMenu(mmTabId)%20%7B%0A%20%20%09let%20megaMenu%20%3D%20%24('%23js--mega-menu')%3B%0A%20%20%20%20let%20currentVisibleTab%20%3D%20megaMenu.find('.js--mm-tab%3Avisible')%3B%0A%20%20%20%20let%20targetTab%20%3D%20%24('%23js--mm-tab-'%20%2B%20mmTabId)%3B%0A%20%20%20%20%0A%20%20%09if(%24(window).width()%20%3E%3D%201440)%20%7B%0A%20%20%20%20%20%20%24('.js--mm-trigger').removeClass('text-medium')%3B%0A%20%20%20%20%09%24('.js--mm-trigger%5Bdata-mm-tab-trigger%3D%22'%20%2B%20mmTabId%20%2B%20'%22%5D').addClass('text-medium')%3B%0A%20%20%20%20%20%20if(megaMenu.is('%3Avisible')%20%26%26%20currentVisibleTab.attr('id')%20!%3D%20'js--mm-tab-'%20%2B%20mmTabId)%20%7B%0A%09%09%09%09megaMenu.stop().animate(%7B%0A%20%20%20%20%20%20%20%20%09opacity%3A%200%0A%20%20%20%20%20%20%20%20%7D%2C%20100%2C%20function()%7B%0A%20%20%20%20%20%20%09%09megaMenuDesktopAnim(targetTab%2C%20100)%3B%0A%20%20%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%20%20%7D%20else%20if(!%20megaMenu.is('%3Avisible'))%7B%0A%20%20%20%20%20%20%20%20megaMenu.show().css('opacity'%2C%200)%3B%0A%20%20%20%20%20%20%09megaMenuDesktopAnim(targetTab)%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%09megaMenu.find('.js--mm-tab').hide()%3B%0A%20%20%20%20%09targetTab.show()%3B%0A%20%20%20%20%09%0A%20%20%20%20%09megaMenu.show().stop().animate(%7B%0A%20%20%20%20%20%20%09opacity%3A%20100%2C%0A%20%20%20%20%20%20%20%20left%3A%20%220vw%22%0A%20%20%20%20%20%20%7D%2C%20200)%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%20%20function%20megaMenuDesktopAnim(targetTab%2C%20speed%20%3D%20200)%20%7B%0A%20%20%09let%20megaMenu%20%3D%20%24('%23js--mega-menu')%3B%0A%20%20%20%20%0A%20%20%09megaMenu.find('.js--mm-tab').hide()%3B%0A%20%20%20%20targetTab.show()%3B%0A%0A%20%20%20%20megaMenu.stop().animate(%7B%0A%20%20%20%20%20%20opacity%3A%20'100%25'%0A%20%20%20%20%7D%2C%20speed)%3B%0A%20%20%7D%0A%20%20%0A%20%20function%20hideMegaMenu()%20%7B%0A%20%20%09let%20megaMenu%20%3D%20%24('%23js--mega-menu')%3B%0A%20%20%20%20%0A%20%20%09if(%24(window).width()%20%3E%3D%201440)%20%7B%0A%20%20%20%20%20%20%24('.js--mm-trigger').removeClass('text-medium')%3B%0A%20%20%20%20%09megaMenu.stop().animate(%7B%0A%20%20%20%20%20%20%09opacity%3A%200%0A%20%20%20%20%20%20%7D%2C%20200%2C%20function()%7B%0A%20%20%20%20%20%20%09megaMenu.hide().find('.js--mm-tab').hide()%3B%0A%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%09megaMenu.stop().animate(%7B%0A%20%20%20%20%20%20%09opacity%3A%200%2C%0A%20%20%20%20%20%20%20%20left%3A%20%22100vw%22%0A%20%20%20%20%20%20%7D%2C%20200%2C%20function()%20%7B%0A%20%20%20%20%20%20%20%20megaMenu.hide().find('.js--mm-tab').hide()%3B%0A%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%20%20%0A%3C%2Fscript%3E"
      />
    </_Component>
  );
}
