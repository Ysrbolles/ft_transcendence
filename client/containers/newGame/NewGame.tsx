import { Button } from "antd";
import style from "./newGame.module.css";
import ListFriends from "@/components/newGameInvitFriends/NGameInvitFriends";
import { Menu, Dropdown, Select } from "antd";
import { useState } from "react";

const { Option } = Select;

const NewGame: React.FC = () => {
  const [gameLevel, setGameLevel] = useState<number>(1);
  const onChange = (value: number) => {
    console.log(`selected ${value}`);
    setGameLevel(value)
  };
  return (
    <div className={style.container}>
      <Select
        className={style.selectLevel}
        showSearch={false}
        placeholder="Select level of game"
        onChange={onChange}
        size="large"
        value={gameLevel}
      >
        <Option value={1}>{" Easir "}</Option>
        <Option value={2}>{"Medium"}</Option>
        <Option value={3}>{"Difficult"}</Option>
      </Select>
      <div className={style.stage}>
        <ListFriends />
        {/* racquet */}
        <div className={style.racquet}></div>
        {/* dashed line */}
        <div className={style.dashedLine}></div>
        {/* racquet */}
        <div className={style.racquet}></div>
        <Button type="primary" size="large">
          {"Play with random user"}
        </Button>
      </div>
    </div>
  );
};

export default NewGame;
