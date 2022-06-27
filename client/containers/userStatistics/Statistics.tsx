import style from "./statistics.module.css";
import { NextComponentType } from "next";
import Image from "next/image";
import { Progress, Avatar, Tooltip } from "antd";
import { useSession } from "next-auth/react";
import { UserOutlined, AntDesignOutlined } from "@ant-design/icons";
import Icon from "@ant-design/icons";
import { ForwardRefExoticComponent } from "react";
// Achivements Icons
import friendly from "public/assets/icons/friendly.svg";
import legendary from "public/assets/icons/legendary.svg";
import photogenic from "public/assets/icons/photogenic.svg";
import sharpshooter from "public/assets/icons/sharpshooter.svg";
import wildfire from "public/assets/icons/wildfire.svg";
import winner from "public/assets/icons/winner.svg";

interface AchivementsType {
  name:
    | "friendly"
    | "legendary"
    | "photogenic"
    | "sharpshooter"
    | "wildfire"
    | "winner";
  type: "silver" | "bronze" | "gold" | "platinum";
}

const level = 12.7;
const achivementsStyle: { [key: string]: object } = {
  silver: {
    color: "#C0C0C0",
    border: "2px solid #C0C0C0",
    backgroundColor: "#464E5E",
  },
  bronze: {
    color: "#CD7F32",
    border: "2px solid #CD7F32",
    backgroundColor: "#F3F6F9",
  },
  gold: {
    color: "#FFDF00",
    border: "2px solid #FFDF00",
    backgroundColor: "#F3F6F9",
  },
  platinum: {
    color: "#E5E4E2",
    border: "2px solid #E5E4E2",
    backgroundColor: "#000000",
  },
  maxStyle: {
    color: "#FFFFFF",
    border: "2px solid #FFFFFF",
    backgroundColor: "#3699FF",
    cursor: "pointer",
  },
};

const achievementsIcons: { [key: string]: any } = {
  friendly,
  legendary,
  photogenic,
  sharpshooter,
  wildfire,
  winner,
};

const fackAchivements: AchivementsType[] = [
  // freindly
  { name: "friendly", type: "silver" },
  { name: "friendly", type: "bronze" },
  
  // legendary
  { name: "legendary", type: "silver" },
  
  // sharpshooter
  { name: "sharpshooter", type: "silver" },
  { name: "sharpshooter", type: "bronze" },
  { name: "sharpshooter", type: "gold" },
  { name: "sharpshooter", type: "platinum" },
  
  // wildfire
  { name: "wildfire", type: "silver" },
  
  // winner
  { name: "winner", type: "silver" },
  { name: "winner", type: "bronze" },
  // photogenic
  { name: "photogenic", type: 'platinum' },
];

const Statistics: React.FC = () => {
  const { data: session } = useSession();
  const progress = ((level - Math.floor(level)) / 1) * 100;

  const mapAchivements = () => {
    return fackAchivements.map((a, index) => {
      return (
        <Avatar
          key={index}
          // gap={10}
          // icon={<Icon component={achievementsIcons[a.name]} />}
          icon={<Icon component={achievementsIcons[a.name]} style={{
            fontSize: '140%'
          }} />}
          size={45}
          style={achivementsStyle[a.type]}
        />
      );
    });
  };

  return (
    <div className={style.container}>
      <div className={style.progressContainer}>
        <Image
          className={style.progressImage}
          src="/images/defaultProfileAvatar.jpg"
          objectFit="cover"
          layout="fill"
        />
        <Progress
          className={style.progress}
          type="dashboard"
          gapDegree={1}
          percent={progress}
          status="normal"
          width={200}
          format={() => level}
          trailColor="rgba(0, 0, 0, 0.2)"
        />
      </div>
      <div className={style.achievements}>
        <Avatar.Group
          maxCount={4}
          size={45}
          maxPopoverTrigger="click"
          maxPopoverPlacement="bottom"
          maxStyle={achivementsStyle.maxStyle}
        >
          {mapAchivements()}
          {/* <Avatar
            icon={<Icon component={friendly} />}
            style={achivementsStyle.platinum}
          />
          <Avatar
            style={{ backgroundColor: "#f56a00", border: "3px solid green" }}
          >
            K
          </Avatar>
          <Avatar
            style={{ backgroundColor: "#87d068" }}
            icon={<UserOutlined />}
          />
          <Avatar
            style={{ backgroundColor: "#1890ff" }}
            icon={<AntDesignOutlined />}
          /> */}
        </Avatar.Group>
      </div>
    </div>
  );
};

export default Statistics;
