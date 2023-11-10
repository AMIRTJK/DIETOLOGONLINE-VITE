import { useEffect, useState, useRef } from "react";
import axios from "axios";
import Switcher from "./component/Switcher";
import "./App.css";
// Animate.css
import "animate.css";
// AOS.css
import AOS from "aos";
import "aos/dist/aos.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

import { useTranslation } from "react-i18next";
import ProcessPost from "./component/ProcessPost";
import SportPost from "./component/SportPost";
import CustomerPost from "./component/CustomerPost";
import FitnessPost from "./component/FitnessPost";
import ModalAdd from "./component/ModalAdd";
import ModalEdit from "./component/ModalEdit";
// import "@fontsource/roboto/300.css";
// import "@fontsource/roboto/400.css";
// import "@fontsource/roboto/500.css";
// import "@fontsource/roboto/700.css";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import FilterStatus from "./component/FilterStatus";
// import FilterAllCity from "./component/FilterAllCity";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";
// import CheckIcon from "@mui/icons-material/Check";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import PersonalPost from "./component/PersonalPost";
import MenuIcon from "@mui/icons-material/Menu";

import {
  Box,
  Typography,
  Stack,
  Link,
  Container,
  TextField,
  Button,
  Avatar,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  List,
  ListItem,
  ListItemText,
} from "@mui/material/";

function App() {
  // useState for translator
  const [t, i18n] = useTranslation();
  // Функция для смены языка
  const changeLang = (language) => {
    i18n.changeLanguage(language);
  };
  // useState для select
  const [lang, setLang] = useState();
  useEffect(() => {
    AOS.init();
  }, []);

  //
  const API = "http://localhost:3000/data";

  // useState for GET
  const [data, setData] = useState([]);

  // useState for Modal Add
  const [modalAdd, setModalAdd] = useState(false);

  // useState for Inputs Modal Add
  const [imageAdd, setImageAdd] = useState("");
  const [titleAdd, setTitleAdd] = useState("");
  const [descAdd, setDescAdd] = useState("");

  // Функция POST
  async function postData() {
    try {
      const { data } = await axios.post(API, {
        id: Date.now(),
        image: imageAdd,
        title: titleAdd,
        desc: descAdd,
        isComplete: false,
      });
      setImageAdd("");
      setTitleAdd("");
      setDescAdd("");
      setModalAdd(false);
      getData();
    } catch (error) {}
  }

  // Функция DELETE
  async function deleteData(clickedId) {
    try {
      const { data } = await axios.delete(API + "/" + clickedId);
      getData();
    } catch (error) {
      console.error(error);
    }
  }

  // Функция PUT - Complete
  async function putComplete(clickedItem) {
    try {
      const completeObj = {
        id: clickedItem.id,
        image: clickedItem.image,
        title: clickedItem.title,
        desc: clickedItem.desc,
        isComplete: !clickedItem.isComplete,
      };
      const { data } = await axios.put(API + "/" + clickedItem.id, completeObj);
      getData();
    } catch (error) {
      console.error(error);
    }
  }

  // Functions Edit ==========================

  // useState for Modal Edit
  const [modalEdit, setModalEdit] = useState(false);

  // useState for Inputs Modal Edit
  const [imageEdit, setImageEdit] = useState("");
  const [titleEdit, setTitleEdit] = useState("");
  const [descEdit, setDescEdit] = useState("");

  // useState for idx
  const [idx, setIdx] = useState("");

  // Функция editInput
  function editInput(clickedItem, clickedId) {
    setImageEdit(clickedItem.image);
    setTitleEdit(clickedItem.title);
    setDescEdit(clickedItem.desc);
    setIdx(clickedId);
    setModalEdit(true);
  }

  // Функция Save
  function putSave() {
    const editedObj = {
      image: imageEdit,
      title: titleEdit,
      desc: descEdit,
    };
    setModalEdit(false);
    putEdit(idx, editedObj);
  }

  // Функция PUT - Edit
  async function putEdit(idx, editedObj) {
    try {
      const { data } = await axios.put(API + "/" + idx, editedObj);
      getData();
    } catch (error) {
      console.error(error);
    }
  }
  // =========================================

  // Функция GET
  async function getData() {
    try {
      const { data } = await axios.get(API);
      setData(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <main className="dark:bg-[#000] dark:text-[#fff] overflow-hidden">
        {/* Section 1 */}
        <header className="border-b-[2px] border-[#ECEBEB]">
          <div className="container">
            <nav className="py-[24px]  flex items-center justify-between">
              <div className="logo">
                <Button>
                  <a href="" className="uppercase text-[#5DBD6D] font-[700]">
                    DIETOLOGONLINE
                  </a>
                </Button>
              </div>
              <ul className="flex items-center gap-[43px]">
                <li className="hidden lg:block">
                  <a href="">{t("navbar.whyWe")}</a>
                </li>
                <li className="hidden lg:block">
                  <a href="">{t("navbar.howIsWork")}</a>
                </li>
                <li className="hidden lg:block">
                  <a href="">{t("navbar.advantages")}</a>
                </li>
                <li className="hidden lg:block">
                  <a href="">{t("navbar.price")}</a>
                </li>
                <li className="hidden lg:block">
                  <a href="">{t("navbar.askUs")}</a>
                </li>
                <li className="flex items-center gap-[10px] lg:gap-[43px]">
                  <div className="header-btn lg:block hidden">
                    <Button
                      className="dark:bg-[transparent] animate__animated animate__infinite animate__pulse"
                      sx={{
                        // border: "1px solid #5DBD6D",
                        boxShadow: "0 0 2px #5DBD6D",
                        backgroundColor: "#E6F9E6",
                        padding: "9px 25px",
                        borderRadius: "50px",
                        color: "#5DBD6D",
                        fontWeight: "500",
                        fontSize: "16px",
                        textTransform: "none",
                      }}
                    >
                      {t("navbar.choose")}
                    </Button>
                  </div>
                  <select
                    className="bg-[transparent] outline-none "
                    name=""
                    id=""
                    value={lang}
                    onChange={(event) => {
                      changeLang(event.target.value);
                      setLang(event.target.value);
                    }}
                  >
                    {" "}
                    <option value="ukr" className="dark:text-[#000]">
                      UKR
                    </option>
                    <option value="ru" className="dark:text-[#000]">
                      RU
                    </option>
                    <option value="en" className="dark:text-[#000]">
                      EN
                    </option>
                  </select>
                  <Switcher />
                  <div className="burger-menu lg:hidden block">
                    <Button>
                      <MenuIcon className="dark:text-[#fff] text-[#000]" />
                    </Button>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        {/* Section 2 */}
        <div className="wrapper-fullscreen mt-[62px]">
          <div className="container">
            <div className="wrapper-content flex flex-col gap-[50px] lg:gap-[0px] lg:flex-row items-center justify-between">
              <aside data-aos="fade-right" className="left ">
                <div className="wrapper-text flex flex-col items-start gap-[22px] lg:w-[58%]">
                  <h1 className="text-[43px] font-[800] leading-[55.47px]">
                    {t("fullscreen.title")}
                  </h1>
                  <p className="text-[16px] leading-[24px] font-[400]">
                    {t("fullscreen.desc")}
                  </p>
                  <Button
                    className="animate__animated animate__infinite animate__pulse"
                    sx={{
                      marginTop: "32px",
                      backgroundColor: "#FD576C",
                      padding: "11px 32px",
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
                    {t("fullscreen.button")}
                  </Button>
                </div>
              </aside>
              <aside data-aos="fade-left" className="right">
                <div className="wrapper-image">
                  <img src="src/assets/fullscreen-girl.svg" alt="" />
                </div>
              </aside>
            </div>
          </div>
        </div>
        {/* Section 3 */}
        <div className="wrapper-problem bg-[#F9FAFC] dark:bg-[#000] dark:border-t-[1px] dark:border-[#373737] py-[50px] lg:py-[116px]">
          <div className="container">
            <div className="wrapper-text flex items-center justify-between">
              <h2 className="text-[30px] font-[800] leading-[38.7px]">
                {t("problem.mainTitle")}
              </h2>
              {/* Show Add Modal */}
              <Button onClick={() => setModalAdd(true)} variant="outlined">
                Add
              </Button>
            </div>
            <div className="wrapper-post  flex items-center lg:items-start gap-y-[30px] justify-between mt-[50px] flex-wrap">
              {data.map((item) => {
                return (
                  <div
                    key={item.id}
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom"
                    className="post lg:w-[31%] lg:min-h-[246px] flex flex-col items-start gap-[10px] p-[20px] rounded-[10px] bg-[#fff] dark:bg-[#000] dark:border-[1px]"
                  >
                    <div
                      className={`wrapper-image ${
                        item.isComplete ? "opacity-[50%]" : "none"
                      }`}
                    >
                      <img src={item.image} alt="" />
                    </div>
                    <div className="wrapper-text flex flex-col gap-[10px] min-h-[100px]">
                      <p
                        className={`text-[16px] font-[600] leading-[24px] ${
                          item.isComplete ? "text-[#a5a5a5]" : "none"
                        }`}
                      >
                        {item.title}
                      </p>
                      <p
                        className={`text-[16px] font-[400] leading-[24px] ${
                          item.isComplete ? "text-[#a5a5a5]" : "none"
                        }`}
                      >
                        {item.desc}
                      </p>
                    </div>
                    <div className="panel-control flex gap-[25px] mt-[15px]">
                      <Button
                        onClick={() => {
                          editInput(item, item.id);
                        }}
                        sx={{ minWidth: "24px", minHeight: "24px" }}
                      >
                        <EditIcon />
                      </Button>
                      <Button sx={{ minWidth: "24px", minHeight: "24px" }}>
                        <input
                          onChange={() => putComplete(item)}
                          type="checkbox"
                          className="w-[24px] h-[24px] cursor-pointer"
                        />
                      </Button>
                      <Button
                        onClick={() => deleteData(item.id)}
                        sx={{ minWidth: "24px", minHeight: "24px" }}
                      >
                        <DeleteIcon className="text-[#de3535]" />
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* Section 4 */}
        <div className="wrapper-result dark:border-[#ffffff30] dark:border-t-[1px]">
          <div className="container">
            <div className="wrapper-content mt-[135px] flex-col lg:flex-row flex items-center justify-between gap-[93px]">
              <aside data-aos="fade-right" className="left lg:w-[50%]">
                <div className="wrapper-image">
                  <img src="src/assets/result.svg" alt="" />
                </div>
              </aside>
              <aside data-aos="fade-left" className="right lg:w-[50%]">
                <div className="wrapper-text flex flex-col items-start gap-[15px]">
                  <h3 className="text-[30px] leading-[38.7px] font-[800]">
                    {t("result.title")}
                  </h3>
                  <p className="font-[600] text-[16px] leading-[24px]">
                    {t("result.desc")}
                  </p>
                  <p className="font-[400] text-[16px] leading-[24px]">
                    {t("result.desc2")}
                  </p>
                  <Button
                    className="animate__animated animate__infinite animate__pulse"
                    sx={{
                      marginTop: "36px",
                      backgroundColor: "#FD576C",
                      padding: "11px 32px",
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
                    Обрати дієтолога
                  </Button>
                </div>
              </aside>
            </div>
          </div>
        </div>
        {/* Section 5 */}
        <div className="wrapper-proccess bg-[#F9FAFC] dark:bg-[#000] mt-[50px] lg:mt-[250.12px] dark:border-t-[1px] dark:border-[#ffffff30] py-[50px]">
          <div className="container">
            <div className="wrapper-text">
              <h4 className="text-[30px] font-[800] leading-[38.7px]">
                {t("proccess.mainTitle")}
              </h4>
              <div
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                className="wrapper-post flex gap-[30px] lg:gap-[0px] lg:flex-row items-start justify-between mt-[50px] flex-wrap"
              >
                <Swiper
                  slidesPerView={3}
                  spaceBetween={30}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination]}
                  className="mySwiper hidden lg:flex"
                >
                  <SwiperSlide>
                    {" "}
                    <ProcessPost
                      image="src/assets/process-1.svg"
                      title={t("proccess.Post1Title")}
                      descOne={t("proccess.Post1Desc1")}
                      descTwo={t("proccess.Post1Desc2")}
                      hidden="hidden"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <ProcessPost
                      image="src/assets/process-2.svg"
                      title={t("proccess.Post2Title")}
                      descOne={t("proccess.Post2Desc1")}
                      descTwo={t("proccess.Post2Desc2")}
                      descThree={t("proccess.Post2Desc3")}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <ProcessPost
                      image="src/assets/process-3.svg"
                      title={t("proccess.Post3Title")}
                      descOne={t("proccess.Post3Desc1")}
                      descTwo={t("proccess.Post3Desc2")}
                      hidden="hidden"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <ProcessPost
                      image="src/assets/process-1.svg"
                      title={t("proccess.Post1Title")}
                      descOne={t("proccess.Post1Desc1")}
                      descTwo={t("proccess.Post1Desc2")}
                      hidden="hidden"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <ProcessPost
                      image="src/assets/process-2.svg"
                      title={t("proccess.Post2Title")}
                      descOne={t("proccess.Post2Desc1")}
                      descTwo={t("proccess.Post2Desc2")}
                      descThree={t("proccess.Post2Desc3")}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <ProcessPost
                      image="src/assets/process-3.svg"
                      title={t("proccess.Post3Title")}
                      descOne={t("proccess.Post3Desc1")}
                      descTwo={t("proccess.Post3Desc2")}
                      hidden="hidden"
                    />
                  </SwiperSlide>
                </Swiper>
                <ProcessPost
                  hiddenPost="lg:hidden"
                  image="src/assets/process-1.svg"
                  title="Огляд вашої ситуації та цілей"
                  descOne=" Ми уважно вивчимо Вашу харчову поведінку, спосіб життя, проблеми
              зі здоров'ям та цілі"
                  descTwo="Ми приділяємо увагу всім факторам здоров'я, включаючи можливий
              гормональний дисбаланс та індивідуальну непереносимість продуктів
              харчування"
                  hidden="hidden"
                />
                <ProcessPost
                  hiddenPost="lg:hidden"
                  image="src/assets/process-2.svg"
                  title="Оберіть ідеального онлайн дієтолога"
                  descOne="Оберіть персонального дієтолога зі списку, сформованого на основі Вашої інформації з кроку 1"
                  descTwo="Ви зможете ознайомитися з досвідом, включаючи професійний стаж, освіту, професійні підходи та відгуки"
                  descThree="Ідеальний дієтолог постійно на зв'язку"
                />
                <ProcessPost
                  hiddenPost="lg:hidden"
                  image="src/assets/process-3.svg"
                  title="Отримуйте підтримку
                  та мотивацію"
                  descOne="На основі Ваших уподобань, результатів за підсумками тижня та потреб здоров'я план харчування оновлюватиметься щотижня"
                  descTwo="Дієтолог завжди готовий скоригувати ваше меню у разі, якщо ви відчуваєте нестачу в деяких продуктах харчування або просто потяг до солодкого"
                  hidden="hidden"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Section 6 */}
        <div className="wrapper-sport bg-[#F9FAFC] dark:bg-[#000] py-[58px] lg:py-[158px]">
          <div className="container">
            <div className="wrapper-text">
              <h5 className="font-[800] text-[30px] leading-[38.7px]">
                {t("sport.mainTitle")}
              </h5>
              <div className="wrapper-content flex flex-col lg:flex-row items-start justify-between mt-[50px] gap-[91px]">
                <aside data-aos="fade-right" className="left lg:w-[50%]">
                  <div className="wrapper-image overflow-hidden rounded-[10px]">
                    <img
                      src="src/assets/sport.svg"
                      alt=""
                      className="rounded-[10px] dark:hidden"
                    />
                    <img
                      src="src/assets/sport-dark.svg"
                      alt=""
                      className="dark:inline hidden"
                    />
                  </div>
                </aside>
                <aside data-aos="fade-left" className="right lg:w-[50%]">
                  <div className="wrapper-post flex flex-col lg:flex-row justify-between items-start flex-wrap gap-[50px]">
                    <SportPost
                      bg="bg-[#FAE3E8]"
                      bgText="text-[#F2859A]"
                      bgTitle="Fe"
                      title={t("sport.post1Title")}
                      desc={t("sport.post1Desc")}
                    />
                    <SportPost
                      bg="bg-[#E6F9E6]"
                      bgText="text-[#5DBD6D]"
                      bgTitle="B"
                      title={t("sport.post2Title")}
                      desc={t("sport.post2Desc")}
                    />
                    <SportPost
                      bg="bg-[#E6F9E6]"
                      bgText="text-[#5DBD6D]"
                      bgTitle="D"
                      title={t("sport.post3Title")}
                      desc={t("sport.post3Desc")}
                    />
                    <SportPost
                      bg="bg-[#FBF2E3]"
                      bgText="text-[#EFB65D]"
                      bgTitle="Mg"
                      title={t("sport.post4Title")}
                      desc={t("sport.post4Desc")}
                    />
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>
        {/* Section 7 */}
        <div className="wrapper-personal py-[53px] lg:py-[123px]">
          <div className="container">
            <h6 className="text-[30px] font-[800] leading-[38.7px]">
              {t("personal.mainTitle")}
            </h6>
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              className="wrapper-post  mt-[49px] flex flex-col gap-[30px] lg:gap-[0px] lg:flex-row justify-between items-start"
            >
              <PersonalPost
                month={t("personal.post1Month")}
                price={t("personal.post1Price")}
                prevPrice={t("personal.post1PrevPrice")}
                list1={t("personal.post1List1")}
                list2={t("personal.post1List2")}
                list3={t("personal.post1List3")}
                list4={t("personal.post1List4")}
                list5={t("personal.post1List5")}
                list6={t("personal.post1List6")}
                listColor="text-[#A8A7A7]"
                listHidden="hidden"
                btnBgColor="#fff"
                btnTextColor="#FD576C"
                iconColor="text-[#5DBD6D]"
                border="border-[1px] border-[#ECEBEB]"
                buttonText={t("personal.button")}
              />
              <PersonalPost
                bgPost="bg-[#5DBD6D]"
                bgColor="text-[#fff]"
                month={t("personal.post2Month")}
                price={t("personal.post2Price")}
                prevPrice={t("personal.post2PrevPrice")}
                list1={t("personal.post1List1")}
                list2={t("personal.post1List2")}
                list3={t("personal.post1List3")}
                list4={t("personal.post1List4")}
                list5={t("personal.post1List5")}
                list6={t("personal.post1List6")}
                listColor="text-[#fff]"
                listHidden="hidden"
                btnBgColor="#fff"
                btnTextColor="#FD576C"
                iconColor="text-[#fff]"
                buttonText={t("personal.button")}
              />
              <PersonalPost
                month={t("personal.post3Month")}
                price={t("personal.post3Price")}
                prevPrice={t("personal.post3PrevPrice")}
                list1={t("personal.post1List1")}
                list2={t("personal.post1List2")}
                list3={t("personal.post1List3")}
                list4={t("personal.post1List4")}
                list5={t("personal.post1List5")}
                list6={t("personal.post1List6")}
                listColor="text-[#A8A7A7]"
                listHidden="hidden"
                btnBgColor="#fff"
                btnTextColor="#FD576C"
                iconColor="text-[#5DBD6D]"
                border="border-[1px] border-[#ECEBEB]"
                buttonText={t("personal.button")}
              />
            </div>
            <div className="price-date mt-[30px] ">
              <p>{t("personal.footerText")}</p>
            </div>
          </div>
        </div>
        {/* Section 8 */}
        <div className="wrapper-customer py-[57px] lg:py-[127px] pb-[173px]">
          <div className="container">
            <p className="text-[30px] font-[800] leading-[38.7px]">
              {t("customer.mainTitle")}
            </p>
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              className="wrapper-post flex flex-col lg:flex-row items-start justify-between gap-[30px] mt-[150px]"
            >
              <CustomerPost
                avatar="src/assets/customer-avatar-1.svg"
                desc1={t("customer.post1Desc1")}
                span1={t("customer.post1Span1")}
                desc2={t("customer.post1Desc2")}
                span2={t("customer.post1Span2")}
                desc3={t("customer.post1Desc3")}
                desc4={t("customer.post1Desc4")}
                span3={t("customer.post1Span3")}
                desc5={t("customer.post1Desc5")}
                date={t("customer.post1Date")}
                dateDesc={t("customer.post2DateDesc")}
              />
              <CustomerPost
                avatar="src/assets/customer-avatar-2.svg"
                desc1={t("customer.post2Desc1")}
                span1={t("customer.post1Span1")}
                desc2={t("customer.post2Desc2")}
                span2={t("customer.post1Span2")}
                desc3={t("customer.post2Desc3")}
                desc4={t("customer.post2Desc4")}
                span3={t("customer.post1Span3")}
                desc5={t("customer.post2Desc5")}
                date={t("customer.post2Date")}
                dateDesc={t("customer.post2DateDesc")}
              />
            </div>
          </div>
        </div>
        {/* Section 9 */}
        <div className="wrapper-fitness bg-[#F9FAFC] py-[54px] lg:py-[104px] dark:bg-[#000]">
          <div className="container">
            <div className="wrapper-content flex flex-col lg:flex-row items-center justify-between gap-x-[30px]">
              <aside data-aos="fade-right" className="left lg:w-[50%]">
                <div className="wrapper-image">
                  <img src="src/assets/fitness.svg" alt="" />
                </div>
              </aside>
              <aside
                data-aos="fade-left"
                className="right lg:w-[50%] flex flex-col items-start gap-[25px] p-[20px] rounded-[20px]"
              >
                <p className="text-[30px] font-[800] leading-[38.7px]">
                  {t("fitness.title")}
                </p>
                <p className="font-[500]">{t("fitness.desc")}</p>
                <Button
                  className="animate__animated animate__infinite animate__pulse"
                  variant="text"
                  sx={{
                    color: "#FD576C",
                    display: "flex",
                    gap: "2px",
                    fontWeight: "600",
                    fontSize: "20px",
                    textTransform: "none",
                  }}
                >
                  <p> {t("fitness.button")}</p>
                  <ChevronRightIcon />
                </Button>
              </aside>
            </div>
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              className="wrapper-post flex flex-col lg:flex-row items-start justify-between flex-wrap gap-[30px] mt-[44px]"
            >
              <FitnessPost
                image="src/assets/fitness-icon-1.svg"
                title={t("fitnessPost.post1Title")}
                desc={t("fitnessPost.post1Desc")}
              />
              <FitnessPost
                image="src/assets/fitness-icon-2.svg"
                title={t("fitnessPost.post2Title")}
                desc={t("fitnessPost.post2Desc")}
              />
            </div>
          </div>
        </div>
        {/* Section 10 */}
        <div className="wrapper-design py-[59px] lg:py-[159px]">
          <div className="container">
            <div className="wrapper-content flex flex-col lg:flex-row items-center justify-between gap-[15px]">
              <aside data-aos="fade-right" className="left">
                <div className="wrapper-text flex flex-col items-start gap-[36px]">
                  <p className="font-[800] text-[30px] leading-[38.7px]">
                    {t("design.title")}
                  </p>
                  <p>{t("design.desc")}</p>
                  <Button
                    className="animate__animated animate__infinite animate__pulse"
                    sx={{
                      backgroundColor: "#FD576C",
                      padding: "11px 33px",
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
                    {t("design.button")}
                  </Button>
                </div>
              </aside>
              <aside data-aos="fade-left" className="right">
                <div className="wrapper-image">
                  <img src="src/assets/design.svg" alt="" />
                </div>
              </aside>
            </div>
          </div>
        </div>
        {/* Section 11 */}
        <footer className="py-[34px] lg:py-[74px] border-t-[1px] border-[#ECEBEB]">
          <div className="container">
            <div className="logo-footer text-center">
              <Button>
                <a href="" className="uppercase text-[#5DBD6D] font-[700]">
                  DIETOLOGONLINE
                </a>
              </Button>
            </div>
            <ul
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              className="wrapper-list flex flex-wrap gap-x-[40px] gap-y-[20px] lg:gap-x-[0px] lg:gap-y-[0px] justify-start lg:flex-nowrap items-start lg:justify-between mt-[38px]"
            >
              <li className="hover:text-[#FD576C] duration-100 transition-all">
                <a href="">{t("footer.whyWe")}</a>
              </li>
              <li className="hover:text-[#FD576C] duration-100 transition-all text-[#FD576C]">
                <a href="">{t("footer.howIsWork")}</a>
              </li>
              <li className="hover:text-[#FD576C] duration-100 transition-all">
                <a href="">{t("footer.advantages")}</a>
              </li>
              <li className="hover:text-[#FD576C] duration-100 transition-all">
                <a href="">{t("footer.price")}</a>
              </li>
              <li className="hover:text-[#FD576C] duration-100 transition-all">
                <a href="">{t("footer.askUs")}</a>
              </li>
            </ul>
          </div>
        </footer>
      </main>
      {/* Modal Add */}
      <ModalAdd
        modalAdd={modalAdd}
        setModalAdd={setModalAdd}
        imageAdd={imageAdd}
        setImageAdd={setImageAdd}
        setTitleAdd={setTitleAdd}
        setDescAdd={setDescAdd}
        postData={postData}
      />
      {/* Modal Edit */}
      <ModalEdit
        modalEdit={modalEdit}
        setModalEdit={setModalEdit}
        imageEdit={imageEdit}
        titleEdit={titleEdit}
        descEdit={descEdit}
        setImageEdit={setImageEdit}
        setTitleEdit={setTitleEdit}
        setDescEdit={setDescEdit}
        putSave={putSave}
      />
    </>
  );
}

export default App;
