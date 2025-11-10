"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./CardAtouts.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-3":{"id":"e-3","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-10","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"8a53c685-e9e6-d562-80f6-3eab6df5a165","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"8a53c685-e9e6-d562-80f6-3eab6df5a165","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1721988467703},"e-4":{"id":"e-4","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-11","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"8a53c685-e9e6-d562-80f6-3eab6df5a165","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"8a53c685-e9e6-d562-80f6-3eab6df5a165","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1721988467704}},"actionLists":{"a-10":{"id":"a-10","title":"FAQ - Show","actionItemGroups":[{"actionItems":[{"id":"a-10-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".btn-icon.hide-faq","selectorGuids":["b475ca6d-d9c5-7a61-2c6c-b2710fecf1e5","8a794820-7c61-07f5-cb1a-3dee1ef75818"]},"value":"none"}},{"id":"a-10-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":"._w-full.overflow-hidden.faq-answer","selectorGuids":["bd28c749-9106-76a7-a850-4a20ba3b4473","94c3decd-286a-bc3e-4820-0015bb9559e1","47b6b563-1cfc-d9d4-a8d3-48ca6aea0dc1"]},"value":0,"unit":""}},{"id":"a-10-n-4","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":"._w-full.overflow-hidden.faq-answer","selectorGuids":["bd28c749-9106-76a7-a850-4a20ba3b4473","94c3decd-286a-bc3e-4820-0015bb9559e1","47b6b563-1cfc-d9d4-a8d3-48ca6aea0dc1"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}}]},{"actionItems":[{"id":"a-10-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".btn-icon.hide-faq","selectorGuids":["b475ca6d-d9c5-7a61-2c6c-b2710fecf1e5","8a794820-7c61-07f5-cb1a-3dee1ef75818"]},"value":"flex"}},{"id":"a-10-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".btn-icon.show-faq","selectorGuids":["b475ca6d-d9c5-7a61-2c6c-b2710fecf1e5","c36f3557-26e4-54c0-fb8a-c11b0c82912f"]},"value":"none"}},{"id":"a-10-n-5","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":"._w-full.overflow-hidden.faq-answer","selectorGuids":["bd28c749-9106-76a7-a850-4a20ba3b4473","94c3decd-286a-bc3e-4820-0015bb9559e1","47b6b563-1cfc-d9d4-a8d3-48ca6aea0dc1"]},"widthUnit":"px","heightUnit":"AUTO","locked":false}},{"id":"a-10-n-7","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":"._w-full.overflow-hidden.faq-answer","selectorGuids":["bd28c749-9106-76a7-a850-4a20ba3b4473","94c3decd-286a-bc3e-4820-0015bb9559e1","47b6b563-1cfc-d9d4-a8d3-48ca6aea0dc1"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1721986511650},"a-11":{"id":"a-11","title":"FAQ - Hide","actionItemGroups":[{"actionItems":[{"id":"a-11-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".btn-icon.hide-faq","selectorGuids":["b475ca6d-d9c5-7a61-2c6c-b2710fecf1e5","8a794820-7c61-07f5-cb1a-3dee1ef75818"]},"value":"none"}},{"id":"a-11-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":"._w-full.overflow-hidden.faq-answer","selectorGuids":["bd28c749-9106-76a7-a850-4a20ba3b4473","94c3decd-286a-bc3e-4820-0015bb9559e1","47b6b563-1cfc-d9d4-a8d3-48ca6aea0dc1"]},"value":0,"unit":""}},{"id":"a-11-n-3","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":"._w-full.overflow-hidden.faq-answer","selectorGuids":["bd28c749-9106-76a7-a850-4a20ba3b4473","94c3decd-286a-bc3e-4820-0015bb9559e1","47b6b563-1cfc-d9d4-a8d3-48ca6aea0dc1"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-11-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".btn-icon.show-faq","selectorGuids":["b475ca6d-d9c5-7a61-2c6c-b2710fecf1e5","c36f3557-26e4-54c0-fb8a-c11b0c82912f"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1721986649242}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function CardAtouts({
  as: _Component = _Builtin.Block,
  imageImage = "https://cdn.prod.website-files.com/66fd42536fe9bf422a5a3aac/66fd42536fe9bf422a5a3b06_Coachs.svg",
  title = "+300 cours vidéos",
  text = "Plus de 300 cours vidéos exclusifs sont accessibles en permanence avec un large choix d’entraînements classés par coach, par niveau et par discipline.",

  buttonLink = {
    href: "#",
  },

  buttonText = "Découvrir les cours",
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "card-atout")}
      id={_utils.cx(
        _styles,
        "w-node-_7e7a823b-e7c8-1753-02e7-7c573a519814-3a519814"
      )}
      tag="div"
      card-fade-up=""
    >
      <_Builtin.Image
        loading="lazy"
        width="80"
        height="80"
        alt=""
        src={imageImage}
      />
      <_Builtin.Block
        className={_utils.cx(_styles, "d-flex-dir-col_gap-4")}
        id={_utils.cx(
          _styles,
          "w-node-_7e7a823b-e7c8-1753-02e7-7c573a519816-3a519814"
        )}
        tag="div"
      >
        <_Builtin.Heading className={_utils.cx(_styles, "text-h4")} tag="h3">
          {title}
        </_Builtin.Heading>
        <_Builtin.Block
          className={_utils.cx(_styles, "text-medium", "text-body-2")}
          tag="div"
        >
          {text}
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
          options={buttonLink}
        >
          <_Builtin.HFlex
            className={_utils.cx(_styles, "btn-container")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "btn-text")}
              tag="div"
            >
              {buttonText}
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
    </_Component>
  );
}
