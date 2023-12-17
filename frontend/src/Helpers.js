import { RiTruckLine } from "react-icons/ri";
import { FaChargingStation } from "react-icons/fa6";
import { IoMdCash } from "react-icons/io";
import { MdOutlinePayment } from "react-icons/md";
import { FaDeviantart } from "react-icons/fa6";





export const links = [
  {
    id: 1,
    text: "Toll Calculator",
    url: "/",
  },
  {
    id: 2,
    text: "TollWiki",
    url: "/wiki",
  },
  {
    id: 3,
    text: "Community",
    url: "/community",
  },
  {
    id: 4,
    text: "Developers",
    url: "/developers",
  },
];

export const FAP = [
  {
    id: 1,
    text: "Truck permissible toll routes",
    icon: <RiTruckLine />,
  },
  {
    id: 2,
    text: "EV charging point",
    icon: <FaChargingStation />,
  },
  {
    id: 3,
    text: "Toll plaza accepting Cash",
    icon: <IoMdCash />,
  },
  {
    id: 4,
    text: "Electronic Toll gantry only",
    icon: <MdOutlinePayment />,
  },
  {
    id: 5,
    text: "Type of Road or Bridge",
    icon: <FaDeviantart />,
  },
];
