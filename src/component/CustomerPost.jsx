import StarIcon from "@mui/icons-material/Star";
import { Avatar } from "@mui/material/";

const CustomerPost = ({
  avatar,
  desc1,
  desc2,
  desc3,
  desc4,
  span1,
  span2,
  span3,
  desc5,
  date,
  dateDesc,
}) => {
  return (
    <div className="post lg:w-[48%] pt-[80px] flex flex-col items-center lg:items-start gap-[40px] border-[1px] border-[#ECEBEB] p-[40px] rounded-[10px] lg:relative">
      <div className="wrapper-avatar lg:absolute lg:top-[-15%]">
        <Avatar
          src={avatar}
          className="h-[100px] w-[100px] lg:absolute"
          sx={{
            width: "100px",
            height: "100px",
          }}
        ></Avatar>
      </div>
      <div className="wrapper-text flex flex-col gap-[40px] text-center lg:text-left">
        <p>
          {desc1}
          <span className="font-[500]">{span1}</span>
          {desc2}
          <span className="font-[500]">{span2}</span>
          {desc3}
        </p>
        <p>
          {desc4}
          <span className="font-[500]">{span3}</span>
          {desc5}
        </p>
      </div>
      <div className="wrapper-info lg:w-[100%] flex flex-col lg:flex-row gap-[10px] lg:gap-[0px] items-center lg:justify-between border-t-[1px] border-[#ECEBEB] py-[22px]">
        <div className="wrapper-text flex flex-col gap-[10px] lg:block">
          <p className="text-[15px] leading-[22.95px] font-[500] text-[#777575] dark:text-[#ffffffe9]">
            {date}
          </p>
          <p className="text-[16px] leading-[24px] font-[400] text-[#777575] dark:text-[#ffffffe9]">
            {dateDesc}
          </p>
        </div>
        <div className="wrapper-icon flex items-start justify-between gap-[2px]">
          <StarIcon className="text-[#F0B14E]" />
          <StarIcon className="text-[#F0B14E]" />
          <StarIcon className="text-[#F0B14E]" />
          <StarIcon className="text-[#F0B14E]" />
          <StarIcon className="text-[#F0B14E]" />
        </div>
      </div>
    </div>
  );
};

export default CustomerPost;
