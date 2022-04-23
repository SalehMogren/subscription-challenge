export const Button = ({ buttonText }) => {
  return (
    <div className='relative group w-full hover:cursor-pointer'>
      <div className='absolute inset-0 bg-darkPurple rounded-3xl blur group-hover:blur-lg' />
      <div
        className={
          " relative rounded-3xl px-3 py-3.5 w-full bg-gradient-to-br from-lightPurple to-glassPurple text-center text-white "
        }>
        {buttonText}
      </div>
    </div>
  );
};
