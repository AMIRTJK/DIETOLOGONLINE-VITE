import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import { Button } from "@mui/material/";

const PersonalPost = ({
  bgPost,
  bgColor,
  month,
  price,
  prevPrice,
  checkList,
  listHidden,
  btnBgColor,
  btnTextColor,
  list1,
  list2,
  list3,
  list4,
  list5,
  list6,
  listColor,
  iconColor,
  border,
  buttonText,
}) => {
  return (
    <div
      className={`post lg:w-[32%] rounded-[10px] dark:bg-transparent dark:border-[1px] border-[#fff] ${bgPost} ${bgColor}`}
    >
      <div className="wrapper-text  py-[35px] text-[#fff] px-[27px] flex flex-col gap-[12px] dark:bg-transparent dark:border-[1px] bg-[#5DBD6D] rounded-t-[10px]">
        <p className="text-[20px] leading-[30px] font-[700]">{month}</p>
        <div className="wrapper-price  flex items-end gap-[23px] ">
          <p className="font-[800] text-[38px] leading-[38.7px]">{price}</p>
          <p className="text-[18px] font-[500] leading-[27px] line-through">
            {prevPrice}
          </p>
        </div>
      </div>
      <ul
        className={`wrapper-list py-[35px]  px-[27px] flex flex-col items-start gap-[22px] ${border} rounded-b-[10px]`}
      >
        <li className="flex items-center gap-[15px]">
          <CheckIcon className={`${iconColor}`} />
          <p>{list1}</p>
        </li>
        <li className="flex items-center gap-[15px]">
          <CheckIcon className={`${iconColor}`} />
          <p>{list2}</p>
        </li>
        <li className="flex items-center gap-[15px]">
          <CheckIcon className={`${iconColor}`} />
          <p>{list3}</p>
        </li>
        <li className="flex items-center gap-[15px]">
          <CheckIcon className={`${iconColor}`} />
          <p>{list4}</p>
        </li>
        <li className="flex items-center gap-[15px]">
          <CloseIcon className={`${listColor}`} />
          <p className={listColor}>{list5}</p>
        </li>
        <li className="flex items-center gap-[15px]">
          <CloseIcon className={`${listColor}`} />
          <p className={listColor}>{list6}</p>
        </li>
        <Button
          className="animate__animated animate__infinite animate__pulse"
          sx={{
            backgroundColor: "#FD576C",
            padding: "11px 38px",
            borderRadius: "50px",
            color: "#FFFFFF",
            fontWeight: "600",
            fontSize: "20px",
            textTransform: "none",
            ":hover": {
              backgroundColor: "#FD576C",
            },
          }}
        >
          {buttonText}
        </Button>
      </ul>
    </div>
  );
};

export default PersonalPost;
