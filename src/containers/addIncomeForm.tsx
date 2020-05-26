/** @jsx jsx */
import React, { FC, useState, FormEvent } from "react";
import { jsx } from "@emotion/core";
import dayjs from "dayjs";
import { InputOnChangeData, DropdownProps } from "semantic-ui-react";
import { AddIncomeFormComponent } from "../components/addIncomeForm";
import { addIncome } from "../firebase/firestore";

export const AddIncomeForm: FC = () => {
  const [amount, setAmount] = useState<string>("");
  const [createdAt, setCreatedAt] = useState<Date>(new Date());

  const handleChangeAmount = (e: FormEvent, { value }: InputOnChangeData) => {
    setAmount(value);
  };

  const handleChangeDate = (e: FormEvent, { value }: DropdownProps) => {
    if (typeof value === "number") {
      setCreatedAt(dayjs().subtract(value, "day").toDate());
    }
  };

  const handleClick = () => {
    addIncome(Number(amount), createdAt);
    setAmount("");
  };

  const dateOptions = [0, 1, 2, 3, 4, 5, 6, 7].map((n) => {
    return {
      text: `${dayjs().subtract(n, "day").format("YYYY/M/D")}`,
      value: n,
    };
  });

  return (
    <AddIncomeFormComponent
      handleChangeAmount={handleChangeAmount}
      handleChangeDate={handleChangeDate}
      handleClick={handleClick}
      amount={amount}
      dateOptions={dateOptions}
    />
  );
};
