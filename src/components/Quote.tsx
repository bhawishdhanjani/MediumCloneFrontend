const Quote = () => {
  return (
    <div className="bg-slate-200 h-screen flex justify-center flex-col">
      <div className="flex  justify-center">
        <div className="max-w-lg ">
          <div className=" text-3xl font-bold">
            "The Customer Service I received was expectional. The support team
            went above and beyond to address my concerns."
          </div>
          <div className="text-left max-w-md text-xl font-semibold mt-4">
            Jules Winnfield
          </div>
          <div className="text-left max-w-md text-sm font-light text-slate-400">
            Ceo, Acme Inc
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
