"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./FullWidthCover.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-3":{"id":"e-3","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-10","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-4"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"8a53c685-e9e6-d562-80f6-3eab6df5a165","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"8a53c685-e9e6-d562-80f6-3eab6df5a165","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1721988467703},"e-4":{"id":"e-4","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-11","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-3"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"8a53c685-e9e6-d562-80f6-3eab6df5a165","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"8a53c685-e9e6-d562-80f6-3eab6df5a165","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1721988467704}},"actionLists":{"a-10":{"id":"a-10","title":"FAQ - Show","actionItemGroups":[{"actionItems":[{"id":"a-10-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".btn-icon.hide-faq","selectorGuids":["b475ca6d-d9c5-7a61-2c6c-b2710fecf1e5","8a794820-7c61-07f5-cb1a-3dee1ef75818"]},"value":"none"}},{"id":"a-10-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":"._w-full.overflow-hidden.faq-answer","selectorGuids":["bd28c749-9106-76a7-a850-4a20ba3b4473","94c3decd-286a-bc3e-4820-0015bb9559e1","47b6b563-1cfc-d9d4-a8d3-48ca6aea0dc1"]},"value":0,"unit":""}},{"id":"a-10-n-4","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":"._w-full.overflow-hidden.faq-answer","selectorGuids":["bd28c749-9106-76a7-a850-4a20ba3b4473","94c3decd-286a-bc3e-4820-0015bb9559e1","47b6b563-1cfc-d9d4-a8d3-48ca6aea0dc1"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}}]},{"actionItems":[{"id":"a-10-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".btn-icon.hide-faq","selectorGuids":["b475ca6d-d9c5-7a61-2c6c-b2710fecf1e5","8a794820-7c61-07f5-cb1a-3dee1ef75818"]},"value":"flex"}},{"id":"a-10-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".btn-icon.show-faq","selectorGuids":["b475ca6d-d9c5-7a61-2c6c-b2710fecf1e5","c36f3557-26e4-54c0-fb8a-c11b0c82912f"]},"value":"none"}},{"id":"a-10-n-5","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":"._w-full.overflow-hidden.faq-answer","selectorGuids":["bd28c749-9106-76a7-a850-4a20ba3b4473","94c3decd-286a-bc3e-4820-0015bb9559e1","47b6b563-1cfc-d9d4-a8d3-48ca6aea0dc1"]},"widthUnit":"px","heightUnit":"AUTO","locked":false}},{"id":"a-10-n-7","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":"._w-full.overflow-hidden.faq-answer","selectorGuids":["bd28c749-9106-76a7-a850-4a20ba3b4473","94c3decd-286a-bc3e-4820-0015bb9559e1","47b6b563-1cfc-d9d4-a8d3-48ca6aea0dc1"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1721986511650},"a-11":{"id":"a-11","title":"FAQ - Hide","actionItemGroups":[{"actionItems":[{"id":"a-11-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".btn-icon.hide-faq","selectorGuids":["b475ca6d-d9c5-7a61-2c6c-b2710fecf1e5","8a794820-7c61-07f5-cb1a-3dee1ef75818"]},"value":"none"}},{"id":"a-11-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":"._w-full.overflow-hidden.faq-answer","selectorGuids":["bd28c749-9106-76a7-a850-4a20ba3b4473","94c3decd-286a-bc3e-4820-0015bb9559e1","47b6b563-1cfc-d9d4-a8d3-48ca6aea0dc1"]},"value":0,"unit":""}},{"id":"a-11-n-3","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":"._w-full.overflow-hidden.faq-answer","selectorGuids":["bd28c749-9106-76a7-a850-4a20ba3b4473","94c3decd-286a-bc3e-4820-0015bb9559e1","47b6b563-1cfc-d9d4-a8d3-48ca6aea0dc1"]},"heightValue":0,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-11-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".btn-icon.show-faq","selectorGuids":["b475ca6d-d9c5-7a61-2c6c-b2710fecf1e5","c36f3557-26e4-54c0-fb8a-c11b0c82912f"]},"value":"flex"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1721986649242}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function FullWidthCover({
  as: _Component = _Builtin.Section,
  cardCover = "https://cdn.prod.website-files.com/66fd42536fe9bf422a5a3aac/66fd42536fe9bf422a5a3b5d_card-bg.webp",
  cardHeadline = "Contact",
  cardTitle = "UNE QUESTION PRÉCISE",
  cardDescriptionVisibility = false,
  cardDescription = (
    <>
      {"Text"}
      <br />
    </>
  ),
  firstButtonVisibility = false,
  firstButtonText = "",

  firstButtonLink = {
    href: "#",
  },

  secondButtonVisibility = false,
  secondButtonText = "Button 2",

  secondButtonLink = {
    href: "#",
  },

  thirdButtonVisibility = false,
  thirdButtonText = "Button 3",

  thirdButtonLink = {
    href: "#",
  },

  _4thButtonVisibility = true,
  _4thButtonText = "Button 4",

  _4thButtonLink = {
    href: "#",
  },
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "fullwcardxl")}
      grid={{
        type: "section",
      }}
      tag="section"
      animate-card-trigger=""
    >
      <_Builtin.Block className={_utils.cx(_styles, "container")} tag="div">
        <_Builtin.VFlex
          className={_utils.cx(
            _styles,
            "card-10-20_gap-6",
            "_w-full",
            "position-relative",
            "overflow-hidden"
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
                "mb-1",
                "text-upper",
                "text-medium"
              )}
              tag="div"
            >
              {cardHeadline}
            </_Builtin.Block>
            <_Builtin.Paragraph
              className={_utils.cx(_styles, "text-title-card-xl")}
            >
              {cardTitle}
            </_Builtin.Paragraph>
            {cardDescriptionVisibility ? (
              <_Builtin.Paragraph className={_utils.cx(_styles, "max-w-700")}>
                {cardDescription}
              </_Builtin.Paragraph>
            ) : null}
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "d-flex-gap-4")}
            tag="div"
          >
            {firstButtonVisibility ? (
              <_Builtin.Link
                className={_utils.cx(
                  _styles,
                  "btn",
                  "is-icon",
                  "bg-background-b",
                  "overflow-hidden"
                )}
                button={false}
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
                className={_utils.cx(_styles, "btn", "bg-background-b")}
                button={false}
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
                  "text-background-b"
                )}
                button={false}
                block="inline"
                options={thirdButtonLink}
              >
                <_Builtin.Block tag="div">{thirdButtonText}</_Builtin.Block>
              </_Builtin.Link>
            ) : null}
            {_4thButtonVisibility ? (
              <_Builtin.Link
                className={_utils.cx(
                  _styles,
                  "btn",
                  "is-icon",
                  "bg-primary",
                  "text-background",
                  "overflow-hidden"
                )}
                button={false}
                block="inline"
                options={_4thButtonLink}
              >
                <_Builtin.HFlex
                  className={_utils.cx(_styles, "btn-container")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "btn-text")}
                    tag="div"
                  >
                    {_4thButtonText}
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
            ) : null}
          </_Builtin.Block>
          <_Builtin.Image
            className={_utils.cx(_styles, "img-as-bg")}
            loading="lazy"
            width="auto"
            height="auto"
            alt=""
            src={cardCover}
          />
          <_Builtin.Block className={_utils.cx(_styles, "overlay")} tag="div" />
        </_Builtin.VFlex>
      </_Builtin.Block>
    </_Component>
  );
}
