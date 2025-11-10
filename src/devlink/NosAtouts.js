"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./NosAtouts.module.css";

export function NosAtouts({ as: _Component = _Builtin.Section, slotContent }) {
  return (
    <_Component
      className={_utils.cx(_styles, "atouts")}
      grid={{
        type: "section",
      }}
      tag="section"
      fade-up-trigger=""
      id="testimonies-swiper"
    >
      <_Builtin.Block className={_utils.cx(_styles, "container")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "d-grid-col-1_gap-20", "_w-full")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "d-flex-dir-col_ali-cen-cen_gap-1",
              "_w-full"
            )}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "text-h5",
                "text-medium",
                "text-upper"
              )}
              tag="div"
              text-fade-up=""
            >
              {"NOTRE CONCEPT"}
            </_Builtin.Block>
            <_Builtin.Heading
              className={_utils.cx(
                _styles,
                "text-ali-cen",
                "r-xl-text-ali-l",
                "md-text-h3"
              )}
              tag="h2"
              heading-text-split=""
            >
              {"NOS ATOUTS"}
            </_Builtin.Heading>
          </_Builtin.Block>
          <_Builtin.NotSupported _atom="Slot" />
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
