import { Button } from "./buttons";
import { Card } from "./card";
import { StarIcon } from "@heroicons/react/solid";

export const PlanCard = () => {
  const planIndecator = () => (
    <div className='flex justify-center items-center mt-3'>
      <div className='flex gap-2 items-start justify-center'>
        <div className='w-2 h-2 bg-blue-700 rounded-full' />
        <div className='w-2 h-2 bg-blue-700/40 rounded-full' />
        <div className='w-2 h-2 bg-blue-700/40 rounded-full' />
      </div>
    </div>
  );
  return (
    <Card>
      <div className='flex flex-col justify-center items-center gap-y-2 py-4 w-full'>
        <TitleSubstitle />
        <Plan />
        {planIndecator()}
      </div>
    </Card>
  );
};

const TitleSubstitle = () => (
  <div className='p-4'>
    {/* Title  */}
    <h4 className='font-bold text-lg text-white'>Choose a plan</h4>
    {/* subtitle */}
    <p className='text-gray-200'>select the offer that best suits your need</p>
  </div>
);

const Plan = ({ planName = "Professional", planPrice = 10 }) => {
  const planStars = ["Unlimited projects", "Tutorial Pack", "200 Tb/s storage"];
  return (
    <div className='bg-white/10 rounded-2xl flex flex-col items-center justify-center p-3 w-3/4'>
      {/* Plan title */}
      <PlanTitle planName={planName} price={planPrice} />
      {/* Plan Stars */}
      <div
        className={
          "flex flex-col justify-start items-start self-start ml-8 my-4"
        }>
        {planStars.map((star) => (
          <PlanStar text={star} />
        ))}
      </div>
      <Button buttonText={"Choose a plan"} />
    </div>
  );
};

const PlanTitle = ({ planName = "", price = 10 }) => {
  return (
    <div className='flex gap-x-4 justify-between w-full ml-10'>
      {/* Squrare Box */}
      <div className='rounded-2xl border-2 border-gray-700 bg-blue-400 relative w-16 h-16'>
        <div className=' bg-blue-600 rounded-2xl  w-12 h-12 absolute top-1 left-2.5'>
          <div className='w-6 h-6 bg-white rounded-full left-4 bottom-4 absolute' />
        </div>
      </div>
      {/* Info */}
      <div className='flex flex-col items-start grow justify-between'>
        <p className='font-semibold normal-case text-lg text-white'>
          {planName}
        </p>
        <p>
          <span className='font-semibold text-lg text-white'>${price}</span>
          <span className='text-sm text-gray-500'>/user</span>
        </p>
      </div>
    </div>
  );
};

const PlanStar = ({ text = "" }) => (
  <div className='flex justify-between items-center gap-8'>
    <StarIcon className='text-blue-600 h-9 w-9' />
    <p className='text-white font-light'>{text}</p>
  </div>
);
