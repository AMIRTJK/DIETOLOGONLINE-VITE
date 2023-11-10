const ProcessPost = ({
  image,
  title,
  descOne,
  descTwo,
  descThree,
  hidden,
  hiddenPost,
}) => {
  return (
    <div
      className={`post ${hiddenPost} lg:w-[100%] min-h-[500px] border-[1px] border-[#ECEBEB] flex flex-col items-start  gap-[43px] p-[37px] rounded-[10px] dark:bg-[#000] bg-[#fff]`}
    >
      <div className="wrapper-image">
        <img src={image} alt="" />
      </div>
      <div className="wrapper-text flex flex-col gap-[10px]">
        <p className="text-[16px] font-[600] leading-[24px]">{title}</p>
        <ul className="flex flex-col gap-[20px] list-disc text-[#FD576C]">
          <li>
            <p className="text-[#000] dark:text-[#fff]">{descOne}</p>
          </li>
          <li>
            <p className="text-[#000] dark:text-[#fff]">{descTwo}</p>
          </li>
          <li className={hidden}>
            <p className="text-[#000] dark:text-[#fff]">{descThree}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProcessPost;
