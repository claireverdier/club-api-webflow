"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./SeparatorWave.module.css";

export function SeparatorWave({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className={_utils.cx(_styles, "separatorwave")}
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <_Builtin.Block
        className={_utils.cx(
          _styles,
          "container",
          "d-flex-dir-col_ali-cen-cen_gap-1"
        )}
        tag="div"
      >
        <_Builtin.Image
          loading="lazy"
          width="auto"
          height="auto"
          alt="séparateur en forme de vague\n"
          src="https://cdn.prod.website-files.com/66fd42536fe9bf422a5a3aac/66fd42536fe9bf422a5a3aec_Divider.svg"
        />
      </_Builtin.Block>
    </_Component>
  );
}
