import React from "react";
import "./styles.css";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";

export default function FormYup({ setResponse }) {
  const schema = yup.object().shape({
    amount: yup
      .number()
      .typeError("Informe um número")
      .min(1000, "O valor mínimo é 1000"),

    installments: yup.number().typeError("Informe um número"),
    mdr: yup.number().typeError("Precisa ser um número"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmitFunction(data) {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    fetch("https://frontend-challenge-7bu3nxh76a-uc.a.run.app", options)
      .then((response) => response.json())
      .then((response) => {
        setResponse(response);
      })
      .catch((error) => console.error(error));
  }
  return (
    <div className="Container">
      <h2>Simule sua Antecipação</h2>
      <form className="Form" onSubmit={handleSubmit(onSubmitFunction)}>
        
        <label htmlFor="sellValueInput">Informe o valor da venda *</label>
        <input id="sellValueInput" {...register("amount")}></input>
        <span className="error">{errors.amount?.message}</span>

        <label htmlFor="installmentsInput">Em quantas parcelas *</label>
        <input id="installmentsInput" {...register("installments")}></input>
        <span className="error">{errors.installments?.message}</span>

        <label htmlFor="mdrPercentualInput">Informe o percentual de MDR * </label>
        <input id="mdrPercentualInput" {...register("mdr")}></input>
        <span className="error">{errors.mdr?.message}</span>

        <input type="submit"></input>
      </form>
    </div>
  );
}