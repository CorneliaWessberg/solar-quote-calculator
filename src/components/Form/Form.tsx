"use client";
import React, { useState } from "react";
import clsx from "clsx";
import { useForm } from "react-hook-form";

import { saveLead } from "@/app/lib/mockApi";

// styles
import styles from "./Form.module.css";

// components
import Input from "@/components/Input/Input";
import Button from "@/components/Button/Button";

type CalculatorResult =
  | {
      cost?: number;
      roofSize?: string;
      newCost?: number;
      saving?: number;
      co2Reduce?: number;
    }
  | undefined;

type LeadFormInputs = {
  name: string;
  email: string;
  phone: string;
  postalCode: string;
};

type LeadFormProps = {
  calculatorData: CalculatorResult;
};

export default function LeadForm({ calculatorData }: LeadFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<LeadFormInputs>();

  const onSubmit = async (data: LeadFormInputs) => {
    setIsLoading(true);

    const payload = {
      ...data,
      calculatorResult: calculatorData,
    };

    try {
      console.log("Form submitted:", payload);
      await saveLead(payload);

      reset();
    } catch (error) {
      console.error("Ett fel uppstod", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        placeholder="Namn"
        {...register("name", { required: "Namn är obligatoriskt" })}
      />
      {errors.name && <span>{errors.name.message}</span>}

      <Input
        placeholder="E-post"
        {...register("email", {
          required: "E-post är obligatoriskt",
          pattern: { value: /\S+@\S+\.\S+/, message: "Ogiltig e-post" },
        })}
      />
      {errors.email && <span>{errors.email.message}</span>}

      <Input
        placeholder="Telefon"
        {...register("phone", {
          required: "Telefonnummer krävs",
          minLength: { value: 6, message: "För kort nummer" },
        })}
      />
      {errors.phone && <span>{errors.phone.message}</span>}

      <Input
        placeholder="Postnummer"
        {...register("postalCode", {
          required: "Postnummer krävs",
          pattern: {
            value: /^[0-9]{5}$/,
            message: "Måste vara 5 siffror",
          },
        })}
      />
      {errors.postalCode && <span>{errors.postalCode.message}</span>}

      <Button
        type="submit"
        variant="secondary"
        className={clsx(styles["form-button"])}
        disabled={isLoading}
      >
        {isLoading ? "Skickar..." : "Skicka"}
      </Button>

      {isSubmitSuccessful && <p>Tack! Vi kontaktar dig mycket snart </p>}
    </form>
  );
}
