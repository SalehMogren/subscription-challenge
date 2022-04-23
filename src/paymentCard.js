import { Card } from "./card";
import { CreditCardIcon, PencilIcon, StarIcon } from "@heroicons/react/solid";
import { RadioGroup } from "@headlessui/react";
import { useState } from "react";
import { Button } from "./buttons";
export const PaymentCard = () => {
  return (
    <Card>
      <div className='flex flex-col gap-2 items-center justify-center p-4 '>
        <PaymentMethod />
        <PlanOptionsGroup />
        <div className='w-3/4'>
          <Button buttonText={"Make payment"} />
        </div>
      </div>
    </Card>
  );
};

const PaymentMethod = () => {
  return (
    <div className='flex p-2 justify-center items-center gap-x-4 bg-slate-50/5 rounded-2xl w-3/4 mt-3'>
      <CreditCardIcon className='text-purple-500 w-14 h-14' />
      <div className='flex flex-col justify-between flex-1 text-white'>
        <p className='font-semibold text-base'>Susan Townley</p>
        <p className='font-semibold text-base'>xxxx8800</p>
      </div>
      <div className='rounded-full p-1.5 bg-purple-600/30 hover:bg-purple-600/60'>
        <PencilIcon className='text-purple-500 w-4 h-4' />
      </div>
    </div>
  );
};

const PlanOptionsGroup = () => {
  const [plan, setplan] = useState("Annual");
  return (
    <RadioGroup value={plan} onChange={setplan} className='w-3/4'>
      <RadioGroup.Option key={"Annual"} value={"Annual"}>
        {({ active, checked }) => (
          <PlanOption checked={checked} active={active} unique />
        )}
      </RadioGroup.Option>
      <RadioGroup.Option key={"Monthly"} value={"Monthlyl"}>
        {({ active, checked }) => (
          <PlanOption checked={checked} active={active} />
        )}
      </RadioGroup.Option>
    </RadioGroup>
  );
};

const PlanOption = ({ active = false, checked = false, unique = false }) => {
  return (
    <div
      className={`${
        active || checked ? "ring-blue-400" : "ring-white hover:bg-white/5"
      } ${
        checked ? "bg-white/25" : ""
      } $ rounded-2xl p-1 relative ring-2 my-4`}>
      {unique && (
        <div className='w-11  overflow-hidden inline-block absolute top-0 right-0 rounded-r-2xl'>
          <div className=' h-16  bg-blue-500 -rotate-45 transform origin-top-left' />
          <StarIcon className='text-white w-5 h-5 absolute top-1 right-1' />
        </div>
      )}
      <PlanOptionInfo />
    </div>
  );
};

const PlanOptionInfo = () => {
  return (
    <div className='flex items-center justify-start p-2 gap-x-4 pt-2'>
      <div className='rounded-full bg-white/20 w-5 h-5 mt-2 self-start relative'>
        <div className='rounded-full border-3 border-gray-500 bg-white w-3 h-3 absolute right-1 bottom-1' />
      </div>{" "}
      <div className='grow'>
        <p className='font-bold text-lg text-white'>Yearly</p>
        <p className='font-thin text-gray-100'>Pay for a full year</p>
      </div>
      <div className='flex items-center'>
        <span className='self-start font-extralight text-gray-100'>$</span>
        <span className='font-bold text-lg text-white'>120</span>
        <span className='font-extralight text-gray-100'>/m</span>
      </div>
    </div>
  );
};
