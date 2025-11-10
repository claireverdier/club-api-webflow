"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./FormLeadLp.module.css";

export function FormLeadLp({
  as: _Component = _Builtin.FormWrapper,
  campaignFieldValue,
  interestIdFieldValue,
  sourceIdFieldValue,
  brandIdFieldValue,
  popupId,
  formId = "wf-form-Lead",
}) {
  return (
    <_Component>
      <_Builtin.FormForm
        className={_utils.cx(_styles, "form")}
        name="wf-form-Form"
        data-name="Form"
        redirect="/form-success/success"
        data-redirect="/form-success/success"
        action="https://hook.eu2.make.com/a61tnh6bin1bhahjf40iim3qjckxhf16"
        method="post"
        id={formId}
      >
        <_Builtin.VFlex
          className={_utils.cx(_styles, "d-flex-ali-stretch-top_gap-4")}
          tag="div"
        >
          <_Builtin.Block tag="div">
            <_Builtin.FormBlockLabel
              className={_utils.cx(_styles, "text-body-3", "text-medium")}
              htmlFor="landing-page-lead-form-club"
            >
              {"Mon club*"}
            </_Builtin.FormBlockLabel>
            <_Builtin.FormSelect
              className={_utils.cx(_styles, "textfield", "is-dropdown")}
              name="PlaceId"
              data-name="PlaceId"
              required={false}
              multiple={false}
              id="landing-page-lead-form-club"
              options={[
                {
                  t: "Mon Club",
                  v: "",
                },
              ]}
            />
          </_Builtin.Block>
          <_Builtin.HFlex
            className={_utils.cx(_styles, "", "gap-4", "r-mb-dir-col")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "d-flex-grow")}
              tag="div"
            >
              <_Builtin.FormBlockLabel
                className={_utils.cx(_styles, "text-body-3", "text-medium")}
                htmlFor="firstname-3"
              >
                {"Prénom *"}
              </_Builtin.FormBlockLabel>
              <_Builtin.FormTextInput
                className={_utils.cx(_styles, "textfield")}
                name="firstname"
                maxLength="255"
                data-name="firstname"
                placeholder="Prénom"
                disabled={false}
                type="text"
                required={true}
                autoFocus={false}
                id="firstname-3"
              />
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "d-flex-grow")}
              tag="div"
            >
              <_Builtin.FormBlockLabel
                className={_utils.cx(_styles, "text-body-3", "text-medium")}
                htmlFor="lastname-3"
              >
                {"Nom *"}
              </_Builtin.FormBlockLabel>
              <_Builtin.FormTextInput
                className={_utils.cx(_styles, "textfield")}
                name="lastname"
                maxLength={256}
                data-name="lastname"
                placeholder="Nom"
                disabled={false}
                type="text"
                required={true}
                autoFocus={false}
                id="lastname-3"
              />
            </_Builtin.Block>
          </_Builtin.HFlex>
          <_Builtin.Block tag="div">
            <_Builtin.FormBlockLabel
              className={_utils.cx(_styles, "text-body-3", "text-medium")}
              htmlFor="email-5"
            >
              {"Email *"}
            </_Builtin.FormBlockLabel>
            <_Builtin.FormTextInput
              className={_utils.cx(_styles, "textfield")}
              name="email"
              maxLength="255"
              data-name="email"
              placeholder="Email"
              disabled={false}
              type="email"
              required={true}
              autoFocus={false}
              id="email-5"
            />
          </_Builtin.Block>
          <_Builtin.HFlex className={_utils.cx(_styles, "", "gap-4")} tag="div">
            <_Builtin.Block
              className={_utils.cx(_styles, "d-flex-grow")}
              tag="div"
            >
              <_Builtin.FormBlockLabel
                className={_utils.cx(_styles, "text-body-3", "text-medium")}
                htmlFor="phone-number-3"
              >
                {"Téléphone "}
              </_Builtin.FormBlockLabel>
              <_Builtin.FormTextInput
                className={_utils.cx(_styles, "textfield")}
                name="phone-number"
                maxLength="255"
                data-name="phone-number"
                placeholder="Téléphone"
                disabled={false}
                type="text"
                required={false}
                autoFocus={false}
                id="phone-number-3"
              />
            </_Builtin.Block>
          </_Builtin.HFlex>
        </_Builtin.VFlex>
        <_Builtin.VFlex className={_utils.cx(_styles, "gap-4")} tag="div">
          <_Builtin.Block tag="div">
            <_Builtin.FormCheckboxWrapper
              className={_utils.cx(
                _styles,
                "checkbox-field",
                "d-flex-dir-wrp_gap-1"
              )}
            >
              <_Builtin.FormCheckboxInput
                className={_utils.cx(_styles, "checkbox")}
                type="checkbox"
                name="optin-legals"
                data-name="optin-legals"
                required={true}
                checked={false}
                id="optin-legals"
                form={{
                  type: "checkbox-input",
                  name: "optin-legals",
                }}
                inputType="custom"
                customClassName="w-checkbox-input--inputType-custom"
              />
              <_Builtin.FormInlineLabel
                className={_utils.cx(_styles, "checkbox-label", "d-none")}
                htmlFor="Checkbox"
              >
                {"Checkbox"}
              </_Builtin.FormInlineLabel>
              <_Builtin.RichText
                className={_utils.cx(_styles, "display-underline")}
                tag="div"
                slot=""
              >
                <_Builtin.Paragraph
                  className={_utils.cx(_styles, "text-body", "d-flex-gap-1")}
                >
                  {"J’accepte les "}
                  <_Builtin.Link
                    button={false}
                    target="_blank"
                    block=""
                    options={{
                      href: "/cgv",
                      target: "_blank",
                    }}
                  >
                    {"mentions légales"}
                  </_Builtin.Link>
                  {"*"}
                </_Builtin.Paragraph>
              </_Builtin.RichText>
            </_Builtin.FormCheckboxWrapper>
          </_Builtin.Block>
          <_Builtin.Block tag="div">
            <_Builtin.FormCheckboxWrapper
              className={_utils.cx(
                _styles,
                "checkbox-field",
                "d-flex-dir-wrp_gap-1"
              )}
            >
              <_Builtin.FormCheckboxInput
                className={_utils.cx(_styles, "checkbox")}
                type="checkbox"
                name="optin-communications"
                data-name="optin-communications"
                required={false}
                checked={false}
                id="optin-communications"
                form={{
                  type: "checkbox-input",
                  name: "optin-communications",
                }}
                inputType="custom"
                customClassName="w-checkbox-input--inputType-custom"
              />
              <_Builtin.FormInlineLabel
                className={_utils.cx(_styles, "checkbox-label")}
                htmlFor="Checkbox"
              >
                {"J’accepte de recevoir les communications de Keepcool"}
              </_Builtin.FormInlineLabel>
            </_Builtin.FormCheckboxWrapper>
          </_Builtin.Block>
        </_Builtin.VFlex>
        <_Builtin.FormButton
          className={_utils.cx(
            _styles,
            "btn",
            "bg-primary",
            "text-background-b",
            "d-flex-ali-start"
          )}
          type="submit"
          value="Envoyer ma demande"
          data-wait="Envoi en cours..."
        />
        <_Builtin.Block
          className={_utils.cx(_styles, "text-body-2", "text-medium")}
          tag="div"
        >
          {"*Champs obligatoires"}
        </_Builtin.Block>
        <_Builtin.HtmlEmbed
          className={_utils.cx(_styles, "d-none")}
          id="landing-page-lead-form-club"
          value="%3Cscript%20type%3D%22text%2Fjavascript%22%3E%0A%20%20window.addEventListener('load'%2C%20function()%20%7B%0A%09%09%24(%22%23club-kc-id-list%20*%5Bdata-club-kc-id%5D%22).each(function(i%2C%20elem)%20%7B%0A%20%20%20%20%20%20%24(%22%23landing-page-lead-form-club%22).append(%0A%20%20%20%20%20%20%20%20%22%3Coption%20value%3D'%22%20%2B%20%0A%20%20%20%20%20%20%20%20%24(elem).data('club-kc-id')%20%2B%20%0A%20%20%20%20%20%20%20%20%22'%3E%22%20%2B%20%0A%20%20%20%20%20%20%20%20%24(elem).data('club-name')%20%2B%0A%20%20%20%20%20%20%20%20%22%3C%2Foption%3E%22%0A%20%20%20%20%20%20)%3B%0A%20%20%09%7D)%3B%0A%20%20%20%20%0A%20%20%20%20const%20queryString%20%3D%20window.location.search%3B%0A%20%20%20%20const%20urlParams%20%3D%20new%20URLSearchParams(queryString)%3B%0A%20%20%20%20const%20campaign%20%3D%20urlParams.get('campaign')%3B%0A%20%20%20%20%0A%20%20%20%20if(campaign)%20%7B%0A%20%20%20%20%09%24('%23campaign-id-field').val(campaign)%3B%0A%20%20%20%20%7D%0A%20%20%20%20%0A%20%20%20%20%20%24(%22form%22).submit(function(event)%20%7B%0A%20%20%20%20%20%20%20var%20formID%20%3D%20%24(this).attr('id')%3B%0A%20%20%20%20%20%20%20console.log('submit')%3B%0A%20%20%20%20%20%20%20console.log(formID)%3B%0A%20%20%20%20%20%20%20dataLayer.push(%7B%0A%20%20%20%20%20%20%20%20'event'%3A%20'wf_formSubmit'%2C%0A%20%20%20%20%20%20%20%20'formID'%3A%20formID%0A%20%20%20%20%20%20%20%7D)%3B%0A%20%20%09%7D)%3B%0A%20%20%7D)%3B%0A%3C%2Fscript%3E"
        />
        <_Builtin.NotSupported _atom="DynamoWrapper" />
        <_Builtin.Block
          className={_utils.cx(_styles, "hiddenfields")}
          tag="div"
        />
      </_Builtin.FormForm>
      <_Builtin.FormSuccessMessage>
        <_Builtin.Block tag="div">
          {"Thank you! Your submission has been received!"}
        </_Builtin.Block>
      </_Builtin.FormSuccessMessage>
      <_Builtin.FormErrorMessage
        className={_utils.cx(_styles, "error-container")}
      >
        <_Builtin.Block className={_utils.cx(_styles, "text-error")} tag="div">
          {"Un problème s'est produit lors de l'envoi du formulaire."}
        </_Builtin.Block>
      </_Builtin.FormErrorMessage>
    </_Component>
  );
}
