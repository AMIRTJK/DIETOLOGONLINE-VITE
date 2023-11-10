const SportPost = ({ bg, bgText, bgTitle, title, desc }) => {
  return (
    <div className="post lg:w-[35%] flex items-center lg:items-start flex-col gap-[10px]">
      <div
        className={`wrapper-icon w-[47px] h-[47px] rounded-[10px] ${bg} flex items-center justify-center`}
      >
        <p className={`text-[23px] font-[700] ${bgText}`}>{bgTitle}</p>
      </div>
      <div className="wrapper-text flex flex-col items-center lg:items-start text-center lg:text-left gap-[10px]">
        <p className="text-[16px] font-[600] leading-[24px]">{title}</p>
        <p className="text-[16px] font-[400] leading-[24px]">{desc}</p>
      </div>
    </div>
  );
};

export default SportPost;
