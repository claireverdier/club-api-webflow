"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Checklist.module.css";

export function Checklist({ as: _Component = _Builtin.Section, slotContent }) {
  return (
    <_Component
      className={_utils.cx(_styles, "checklist")}
      tag="section"
      grid={{
        type: "section",
      }}
      fade-up-trigger=""
    >
      <_Builtin.Block className={_utils.cx(_styles, "container")} tag="div">
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "d-grid-col-2",
            "r-md-col-1",
            "_w-full",
            "ali-top-left"
          )}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "d-flex")}
            id={_utils.cx(
              _styles,
              "w-node-de255550-eeaf-e87c-9ed3-67cd466221a3-466221a0"
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
                {"ÉQUIPEMENT"}
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
                  {"N’oubliez pas de prendre pour votre entrainement :"}
                </_Builtin.Heading>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.NotSupported _atom="Slot" />
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
