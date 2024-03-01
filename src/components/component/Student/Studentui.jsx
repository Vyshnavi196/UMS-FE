/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/Vuc2uhVhuIR
 */
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import {
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ResponsiveLine } from "@nivo/line";

import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "./Studentui.css";
import Dropdown from "./Dropdown";

import Logo from "../../../assets/Logo/logo.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Leaderboard from "../../../assets/leaderboard.json";

const calculateSlidesPerView = () => {
  const windowWidth = window.innerWidth;

  if (windowWidth >= 1024) {
    return 3;
  } else if (windowWidth >= 768) {
    return 2;
  } else {
    return 1;
  }
};

export default function Studentui({ classes, assessments }) {
  const [slidesPerView, setSlidesPerView] = useState(calculateSlidesPerView());

  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(calculateSlidesPerView());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Below are the references used for GSAP animations
  const CardRef = useRef(null);
  const classroomRef = useRef(null);
  const assessmentref = useRef(null);
  const leaderboardRef = useRef(null);

  useGSAP(() => {
    var tl = gsap.timeline();
    tl.from(CardRef.current, {
      x: -200,
      opacity: 0,
      duration: 0.5,
      stagger: 0.3,
    });
    tl.from(classroomRef.current, {
      y: 100,
      opacity: 0,
      duration: 0.5,
      stagger: 0.3,
    });

    tl.from(assessmentref.current, {
      y: 100,
      opacity: 0,
      duration: 0.5,
      stagger: 0.3,
    });
    tl.from(leaderboardRef.current, {
      y: 100,
      opacity: 0,
      duration: 0.5,
      stagger: 0.3,
    });
  });

  // Actual Student Page starts Here

  return (
    <div className="flex flex-col flex-1 h-screen bg-gray-100 dark:bg-gray-800">
      <div className="flex flex-1 overflow-hidden">
        {/* It is a side navbar written below as aside */}

        {/* This is the main Content which right side of aside(side navbar) */}

        <main className="flex-1   overflow-auto bg-[#F3F4F6] text-[#040404]">
          {/* This is the Header Content which contains student dashboard name and Profile */}

          <header className="h-16 md:mb-4 dark:bg-gray-900">
            <nav className="flex items-center justify-between w-full px-4 md:px-8 lg:px-12 py-2 md:py-4 bg-[#040404]">
              <div className="flex gap-4 items-center justify-center">
                <div className="h-10 w-10 md:h-[60px] md:w-[60px] flex items-center justify-center relative overflow-hidden cursor-pointer">
                  <img className="object-cover" src={Logo} alt="" />
                </div>

                <h1 className="text-lg md:text-xl lg:text-2xl font-semibold px-2 py-1 text-[#B3CCC2] mt-3">
                  Student Dashboard
                </h1>
              </div>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar className="h-9 w-9">
                    <AvatarImage
                      alt="User avatar"
                      src="https://imgs.search.brave.com/J0ixr3aHGA8aitBrET8u4exc5KcrQl8PWXGrvAdsUY4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9mcmVl/c3ZnLm9yZy9pbWcv/YWJzdHJhY3QtdXNl/ci1mbGF0LTQucG5n"
                    />
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <a className="flex items-center gap-2" href="#">
                      <UserIcon className="w-4 h-4" />
                      John Doe
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a className="flex items-center gap-2" href="#">
                      <MailIcon className="w-4 h-4" />
                      ums@gmail.com
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <a className="flex items-center gap-2" href="#">
                      <LogOutIcon className="w-4 h-4" />
                      Logout
                    </a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </nav>
          </header>

          {/* It is the student details card */}

          <section
            className="mb-8 px-6 mt-0 md:mt-14"
            id="studentdetails"
            ref={CardRef}
          >
            <h2 className="mb-2 text-2xl font-bold">Student Details</h2>
            <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
              <Card className="p-2 bg-[#fff] shadow-lg flex justify-between items-center">
                <div>
                  <CardHeader>
                    <CardTitle className="text-lg md:text-xl lg:text-2xl font-bold">
                      John Doe
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-1">
                      <div>
                        <span className="text-[#111129] font-bold">
                          Registered ID
                        </span>
                        : CS102
                      </div>
                      <div>
                        <span className="text-[#111129] font-bold">
                          Mail ID
                        </span>
                        : ums@gmail.com
                      </div>
                    </div>
                  </CardContent>
                </div>
                <div className="w-[100px] h-[100px]">
                  <img
                    src="https://imgs.search.brave.com/J0ixr3aHGA8aitBrET8u4exc5KcrQl8PWXGrvAdsUY4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9mcmVl/c3ZnLm9yZy9pbWcv/YWJzdHJhY3QtdXNl/ci1mbGF0LTQucG5n"
                    alt=""
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </Card>
            </div>
          </section>

          {/* The below code related to the Classroom cards which contains different classrooms */}

          <section className="mb-8 px-6 md:mb-12" id="completedcourses">
            <h2 className="mb-2 text-2xl font-bold">Class Rooms</h2>
            <Swiper
              navigation={true}
              modules={[Navigation]}
              slidesPerView={slidesPerView}
              spaceBetween={30}
              className="px-2 py-2 mySwiper"
              ref={classroomRef}
            >
              {classes.map((subject) => (
                <SwiperSlide className=" rounded-[50px]" key={subject.id}>
                  <Card className="p-4 bg-[#fff] shadow-lg w-[100%] rounded-[30px]">
                    <CardHeader>
                      <CardTitle className="text-lg md:text-xl lg:text-2xl font-bold">
                        {subject.title}
                      </CardTitle>
                      {/* <CardDescription>{card.description}</CardDescription> */}
                    </CardHeader>
                    <Link to={`/detailspage/${subject.title.toLowerCase()}`}>
                      <Button className="mt-4 bg-[#040404] text-[#B3CCC2] hover:bg-[#B3CCC2] hover:text-[#040404]">
                        View Details
                      </Button>
                    </Link>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
          </section>

          {/* The below code contains the cards related to the Assessments */}
          <section className="mb-8 px-6" id="upcomingassessments">
            <h2 className="mb-2 text-2xl font-bold">Upcoming Assessments</h2>
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="px-3 py-3 mySwiper"
              slidesPerView={slidesPerView}
              spaceBetween={30}
              ref={assessmentref}
            >
              {assessments.map((assessment) => (
                <SwiperSlide key={assessment.id} className="rounded-[50px]">
                  <Card className="p-4 bg-[#fff] shadow-lg w-[100%] rounded-[30px]">
                    <CardHeader>
                      <CardTitle className="text-lg md:text-xl lg:text-2xl font-bold">
                        {assessment.title}
                      </CardTitle>
                      <CardDescription>
                        {assessment.description}
                      </CardDescription>
                    </CardHeader>
                    <br />
                    <Link to={`/instructionpage/${assessment.id}`}>
                      {" "}
                      <Button className="  bg-[#040404] text-[#B3CCC2] hover:bg-[#B3CCC2] hover:text-[#040404]">
                        Start
                      </Button>
                    </Link>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
          </section>

          {/*  This below sections related to the Leaderboard and Analyticboard  */}

          <div
            className="flex flex-col md:flex-row gap-4 md:gap-7 px-6"
            ref={leaderboardRef}
          >
            <section className="flex-1 mb-6 md:mb-0" id="analyticsboard">
              <div className="flex gap-9">
                <h2 className="mb-2 text-lg md:text-2xl font-bold">
                  Analytics Board
                </h2>

                <Dropdown />
              </div>

              <br />
              <div className="grid grid-cols-1 gap-4">
                <LineChart className="w-full h-[300px]" />
              </div>
            </section>
            <section className="flex-1 mb-8" id="leaderboard">
              <div className="flex gap-9">
                <h2 className="mb-2 text-2xl font-bold">Leader Board</h2>

                <Dropdown />
              </div>
              <br />
              <div className="h-[300px] overflow-y-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-[#fff]">
                      <TableHead className="text-[#111129]">Rank</TableHead>
                      <TableHead className="text-[#111129]">Name</TableHead>
                      <TableHead className="text-right text-[#111129]">
                        Score
                      </TableHead>
                    </TableRow>
                  </TableHeader>

                  <TableBody className="bg-[#040404] text-[#B3CCC2] ">
                    {Leaderboard.map((value, index) => (
                      <TableRow key={index}>
                        <TableCell>{value.id}</TableCell>
                        <TableCell>{value.name}</TableCell>
                        <TableCell className="text-right">
                          {value.score}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              {/* <Button className="mt-4  bg-[#040404] text-[#B3CCC2] hover:bg-[#B3CCC2] hover:text-[#040404] mx-auto md:ml-auto">
                View More
              </Button>  */}
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
//   This below are the functions for icons used in the above code

function LineChart(props) {
  return (
    <div {...props}>
      <ResponsiveLine
        data={[
          {
            id: "Desktop",
            data: [
              { x: "Quiz1", y: 43 },
              { x: "Quiz2", y: 95 },
              { x: "Quiz3", y: 61 },
              { x: "Quiz4", y: 90 },
              { x: "Quiz5", y: 26 },
              { x: "Quiz6", y: 100 },
            ],
          },
        ]}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={["#82717C", ""]}
        pointSize={6}
        useMesh={true}
        gridYValues={6}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        role="application"
      />
    </div>
  );
}

function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function MailIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function LogOutIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" x2="9" y1="12" y2="12" />
    </svg>
  );
}

//Student Page code Ends Here//
