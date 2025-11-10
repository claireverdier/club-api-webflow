"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./CoachCard.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-13":{"id":"e-13","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-37","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-14"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66fd42536fe9bf422a5a3b3b|ed56e0c8-1d0f-98ab-b631-47393c3d125d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66fd42536fe9bf422a5a3b3b|ed56e0c8-1d0f-98ab-b631-47393c3d125d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1726562067958},"e-14":{"id":"e-14","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-38","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-13"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66fd42536fe9bf422a5a3b3b|ed56e0c8-1d0f-98ab-b631-47393c3d125d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66fd42536fe9bf422a5a3b3b|ed56e0c8-1d0f-98ab-b631-47393c3d125d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1726562067959},"e-15":{"id":"e-15","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-37","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-16"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66fd42536fe9bf422a5a3b3a|c2342432-18df-b609-9e9f-d1c095b32340","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66fd42536fe9bf422a5a3b3a|c2342432-18df-b609-9e9f-d1c095b32340","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1726562723740},"e-16":{"id":"e-16","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-38","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-15"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"66fd42536fe9bf422a5a3b3a|c2342432-18df-b609-9e9f-d1c095b32340","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"66fd42536fe9bf422a5a3b3a|c2342432-18df-b609-9e9f-d1c095b32340","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1726562723740}},"actionLists":{"a-37":{"id":"a-37","title":"Card Coach - In","actionItemGroups":[{"actionItems":[{"id":"a-37-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".image.card-coach-vid","selectorGuids":["eed083a2-7503-d8cd-7cf9-1fbbaa94b854","599cb608-2e11-cabb-c33a-2babc27db871"]},"value":"none"}},{"id":"a-37-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"inOutQuart","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".image.card-coach-vid","selectorGuids":["eed083a2-7503-d8cd-7cf9-1fbbaa94b854","599cb608-2e11-cabb-c33a-2babc27db871"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-37-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".image.card-coach-vid","selectorGuids":["eed083a2-7503-d8cd-7cf9-1fbbaa94b854","599cb608-2e11-cabb-c33a-2babc27db871"]},"value":"block"}},{"id":"a-37-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"inOutQuart","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".image.card-coach-vid","selectorGuids":["eed083a2-7503-d8cd-7cf9-1fbbaa94b854","599cb608-2e11-cabb-c33a-2babc27db871"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1726562074031},"a-38":{"id":"a-38","title":"Card Coach - Out","actionItemGroups":[{"actionItems":[{"id":"a-38-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"inOutQuart","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".image.card-coach-vid","selectorGuids":["eed083a2-7503-d8cd-7cf9-1fbbaa94b854","599cb608-2e11-cabb-c33a-2babc27db871"]},"value":0,"unit":""}},{"id":"a-38-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":1000,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".image.card-coach-vid","selectorGuids":["eed083a2-7503-d8cd-7cf9-1fbbaa94b854","599cb608-2e11-cabb-c33a-2babc27db871"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1726562074031}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function CoachCard({
  as: _Component = _Builtin.Block,
  coachName = "",
  coachFunction = "",
  coachPicture = "https://cdn.prod.website-files.com/66fd42536fe9bf422a5a3aac/66fd42536fe9bf422a5a3b5e_Coach.jpg",
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "card-coach")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "d-flex-dir-col_gap-0", "mt-auto")}
        tag="div"
      >
        <_Builtin.Block className={_utils.cx(_styles, "text-h3")} tag="div">
          {coachName}
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "text-h6", "text-medium")}
          tag="div"
        >
          {coachFunction}
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Image
        className={_utils.cx(_styles, "image")}
        loading="lazy"
        width="auto"
        height="auto"
        alt=""
        src={coachPicture}
      />
    </_Component>
  );
}
