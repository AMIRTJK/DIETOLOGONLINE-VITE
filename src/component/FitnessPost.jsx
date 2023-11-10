const FitnessPost = ({ image, title, desc }) => {
  return (
    <div className="post lg:w-[48%] min-h-[288px] rounded-[5px] p-[20px] dark:bg-[transparent] dark:border-[1px] dark:border-[#fff]  bg-[#fff] rounede-[10px] flex flex-col items-center lg:items-start gap-[10px]">
      <div className="wrapper-image">
        <img src={image} alt="" />
      </div>
      <div className="wrapper-text flex flex-col items-center lg:items-start text-center lg:text-left gap-[10px]">
        <p className="font-[600]">{title}</p>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default FitnessPost;
