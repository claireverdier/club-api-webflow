"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./FullWidthPrimary.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-3":{"id":"e-3","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-10","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"8a53c685-e9e6-d562-80f6-3eab6df5a165","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"8a53c685-e9e6-d562-80f6-3eab6df5a165","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1721988467703},"e-4":{"id":"e-4","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-11","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"8a53c685-e9e6-d562-80f6-3eab6df5a165","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"8a53c685-e9e6-d562-80f6-3eab6df5a165","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1721988467704}},"actionLists":{"a-10":{"id":"a-10","title":"FAQ - Show","actionItemGroups":[{"actionItems":[{"id":"a-10-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".btn-icon.hide-faq","selectorGuids":["b475ca6d-d9c5-7a61-2c6c-b2710fecf1e5","8a794820-7c61-07f5-cb1a-3dee1ef75818"]},"value":"none"}},{"id":"a-10-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":"._w-full.overflow-hidden.faq-answer","selectorGuids":["bd28c749-9106-76a7-a850-4a20ba3b4473","94c3decd-286a-bc3e-4820-0015bb9559e1","47b6b563-1cfc-d9d4-a8d3-48ca6aea0dc1"]},"value":0,"unit":""}},{"id":"a-10-n-4","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":"._w-full.overflow-hidden.faq-answer","selectorGuids":["bd28c749-9106-76a7-a850-4a20ba3b4473","94c3decd-286a-bc3e-4820-0015bb9559e1","47b6b563-1cfc-d9d4-a8d3-48ca6aea0dc1"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}}]},{"actionItems":[{"id":"a-10-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".btn-icon.hide-faq","selectorGuids":["b475ca6d-d9c5-7a61-2c6c-b2710fecf1e5","8a794820-7c61-07f5-cb1a-3dee1ef75818"]},"value":"flex"}},{"id":"a-10-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".btn-icon.show-faq","selectorGuids":["b475ca6d-d9c5-7a61-2c6c-b2710fecf1e5","c36f3557-26e4-54c0-fb8a-c11b0c82912f"]},"value":"none"}},{"id":"a-10-n-5","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":"._w-full.overflow-hidden.faq-answer","selectorGuids":["bd28c749-9106-76a7-a850-4a20ba3b4473","94c3decd-286a-bc3e-4820-0015bb9559e1","47b6b563-1cfc-d9d4-a8d3-48ca6aea0dc1"]},"widthUnit":"px","heightUnit":"AUTO","locked":false}},{"id":"a-10-n-7","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":"._w-full.overflow-hidden.faq-answer","selectorGuids":["bd28c749-9106-76a7-a850-4a20ba3b4473","94c3decd-286a-bc3e-4820-0015bb9559e1","47b6b563-1cfc-d9d4-a8d3-48ca6aea0dc1"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1721986511650},"a-11":{"id":"a-11","title":"FAQ - Hide","actionItemGroups":[{"actionItems":[{"id":"a-11-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".btn-icon.hide-faq","selectorGuids":["b475ca6d-d9c5-7a61-2c6c-b2710fecf1e5","8a794820-7c61-07f5-cb1a-3dee1ef75818"]},"value":"none"}},{"id":"a-11-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":"._w-full.overflow-hidden.faq-answer","selectorGuids":["bd28c749-9106-76a7-a850-4a20ba3b4473","94c3decd-286a-bc3e-4820-0015bb9559e1","47b6b563-1cfc-d9d4-a8d3-48ca6aea0dc1"]},"value":0,"unit":""}},{"id":"a-11-n-3","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":"._w-full.overflow-hidden.faq-answer","selectorGuids":["bd28c749-9106-76a7-a850-4a20ba3b4473","94c3decd-286a-bc3e-4820-0015bb9559e1","47b6b563-1cfc-d9d4-a8d3-48ca6aea0dc1"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-11-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".btn-icon.show-faq","selectorGuids":["b475ca6d-d9c5-7a61-2c6c-b2710fecf1e5","c36f3557-26e4-54c0-fb8a-c11b0c82912f"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1721986649242}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function FullWidthPrimary({
  as: _Component = _Builtin.Section,
  cardHeadline = "OFFE SPÉCIALE",
  cardTitle = "TA SÉANCE D’ESSAI OFFERTE !",
  cardDescription = "Dans l’un des 270 clubs KeepCool en France, Belgique ou Luxembourg.",
  firstButtonVisibility = true,
  firstButtonText = "Button 1",

  firstButtonLink = {
    href: "#",
  },

  lienDuPremierBoutonUrlEncodeeEnBase64PourLesLienExternes,
  secondButtonVisibility = true,
  secondButtonText = "Button 2",

  secondButtonLink = {
    href: "#",
  },

  lienDuDeuxiemeBoutonUrlEncodeeEnBase64PourLesLiensExternes,
  thirdButtonVisibility = true,
  thirdButtonText = "Button 2",

  thirdButtonLink = {
    href: "#",
  },

  cardVisibility = true,
  lienDuTroisiemeBoutonUrlEncodeeEnBase64PourLesLiensExternes,
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return cardVisibility ? (
    <_Component
      className={_utils.cx(_styles, "fullwcardxl")}
      grid={{
        type: "section",
      }}
      tag="section"
      animate-card-trigger=""
    >
      <_Builtin.Block className={_utils.cx(_styles, "container")} tag="div">
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "card-10-20",
            "_w-full",
            "bg-linear-card-1",
            "text-background-b"
          )}
          tag="div"
          animate-card=""
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "d-flex-dir-col_gap-0")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "text-h5",
                "text-primary-g",
                "mb-1",
                "text-upper"
              )}
              tag="div"
            >
              {cardHeadline}
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "text-title-card-xl")}
              tag="div"
            >
              {cardTitle}
            </_Builtin.Block>
            <_Builtin.Paragraph className={_utils.cx(_styles, "max-w-700")}>
              {cardDescription}
            </_Builtin.Paragraph>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "d-flex-dir-wrp_gap-4")}
            tag="div"
          >
            {firstButtonVisibility ? (
              <_Builtin.Link
                className={_utils.cx(
                  _styles,
                  "btn",
                  "is-icon",
                  "bg-background-b",
                  "overflow-hidden",
                  "js--btn-obfuscated"
                )}
                button={false}
                data-qcd={
                  lienDuPremierBoutonUrlEncodeeEnBase64PourLesLienExternes
                }
                block="inline"
                options={firstButtonLink}
              >
                <_Builtin.HFlex
                  className={_utils.cx(_styles, "btn-container")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "btn-text", "text-light")}
                    tag="div"
                  >
                    {firstButtonText}
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
                        "text-background"
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
                        "bg-light"
                      )}
                      tag="div"
                    />
                  </_Builtin.HFlex>
                </_Builtin.HFlex>
              </_Builtin.Link>
            ) : null}
            {secondButtonVisibility ? (
              <_Builtin.Link
                className={_utils.cx(
                  _styles,
                  "btn",
                  "bg-background-b",
                  "js--btn-obfuscated"
                )}
                button={false}
                data-qcd={
                  lienDuDeuxiemeBoutonUrlEncodeeEnBase64PourLesLiensExternes
                }
                block="inline"
                options={secondButtonLink}
              >
                <_Builtin.Block tag="div">{secondButtonText}</_Builtin.Block>
              </_Builtin.Link>
            ) : null}
            {thirdButtonVisibility ? (
              <_Builtin.Link
                className={_utils.cx(
                  _styles,
                  "btn",
                  "outlined-box-background-b",
                  "text-background-b",
                  "js--btn-obfuscated"
                )}
                button={false}
                data-qcd={
                  lienDuTroisiemeBoutonUrlEncodeeEnBase64PourLesLiensExternes
                }
                block="inline"
                options={thirdButtonLink}
              >
                <_Builtin.Block tag="div">{thirdButtonText}</_Builtin.Block>
              </_Builtin.Link>
            ) : null}
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.HtmlEmbed
        className={_utils.cx(_styles, "d-none")}
        value="%3Cscript%20type%3D%22text%2Fjavascript%22%3E%0Adocument.addEventListener(%22DOMContentLoaded%22%2C%20function(event)%20%7B%0A%20%20%20%20var%20classname%20%3D%20document.getElementsByClassName(%22js--btn-obfuscated%22)%3B%0A%20%20%20%20for%20(var%20i%20%3D%200%3B%20i%20%3C%20classname.length%3B%20i%2B%2B)%20%7B%0A%20%20%20%20%20%20%20%20classname%5Bi%5D.addEventListener(%22click%22%2C%20handleLinkClick%2C%20false)%3B%0A%20%20%20%20%20%20%20%20classname%5Bi%5D.addEventListener(%22contextmenu%22%2C%20handleLinkClick%2C%20false)%3B%20%2F%2F%20Fusion%20des%20deux%20%C3%A9v%C3%A9nements%0A%20%20%20%20%7D%20%0A%7D)%3B%0A%0A%2F%2F%20Fonction%20commune%20pour%20g%C3%A9rer%20le%20clic%20gauche%20et%20le%20clic%20droit%0Avar%20handleLinkClick%20%3D%20function(event)%20%7B%0A%20%20%20%20event.preventDefault()%3B%20%20%2F%2F%20Emp%C3%AAcher%20le%20comportement%20par%20d%C3%A9faut%20du%20lien%0A%20%20%20%20var%20attribute%20%3D%20this.getAttribute(%22data-qcd%22)%3B%0A%20%20%20%20var%20isInternal%20%3D%20attribute.startsWith(%22%2F%22)%3B%0A%20%20%20%20var%20isCtrlPressed%20%3D%20event.ctrlKey%3B%0A%20%20%20%20var%20url%20%3D%20isInternal%20%3F%20window.location.origin%20%2B%20attribute%20%3A%20decodeURIComponent(window.atob(attribute))%3B%0A%0A%20%20%20%20%2F%2F%20Ouverture%20dans%20un%20nouvel%20onglet%20si%20Ctrl%20est%20appuy%C3%A9%20ou%20clic%20droit%0A%20%20%20%20if%20(isCtrlPressed%20%7C%7C%20event.type%20%3D%3D%3D%20%22contextmenu%22%20%7C%7C%20!isInternal)%20%7B%0A%20%20%20%20%20%20%20%20var%20newWindow%20%3D%20window.open(url%2C%20%22_blank%22)%3B%0A%20%20%20%20%20%20%20%20newWindow.focus()%3B%0A%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20document.location.href%20%3D%20url%3B%0A%20%20%20%20%7D%0A%7D%0A%3C%2Fscript%3E"
      />
    </_Component>
  ) : null;
}
