import axios from "@/config/axios";
import React, { useEffect, useState } from "react";
import { UserType, FriendActions, RequestFriendType, ProfileContextType } from "@/types/types";
import { message } from "antd";
import { useAppSelector } from "@/hooks/reduxHooks";
import { selectAuth } from "@/store/reducers/auth";
import { resolve } from "path";
import { reject } from "lodash";

interface PropsType {
  children: React.ReactNode;
}

export const ProfileContext = React.createContext<ProfileContextType | null>(null);

const ProfileProvider: React.FC<PropsType> = ({ children }) => {
  const [friendsList, setFriendsList] = useState<UserType[]>([]);
  const [invitesList, setInvitesList] = useState<RequestFriendType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [isMyProfile, setIsMyProfile] = useState<boolean>(false);
  const { intra_id } = useAppSelector(selectAuth);

  const pushFriend = () => {};
  const filterFriends = () => {};
  const filterInvites = () => {};
  const checkeIsMyProfile = (id: number) => setIsMyProfile(id === intra_id);

  const actions: FriendActions = (user, action) => {
    setLoading(true);
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.post(`friends/${action}`, { id: user.intra_id.toString() });
        setLoading(false);
        console.log(res);
        return resolve(res.data);
      } catch (error) {
        setLoading(false);
        return reject(error);
      }
    });
  };

  const loadFriends = async () => {
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      const res = await axios.get("friends"); //todo change to get list friends by username or id
      if (res.data.friends) {
        setFriendsList(res.data.friends.map((f: { userInfo: UserType }) => f.userInfo));
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      error instanceof Error && message.error(error.message);
    }
  };

  const loadInvites = async () => {
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      const res = await axios.get("/friends/invites");
      console.log(res.data);
      setInvitesList(res.data.invites);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <ProfileContext.Provider
      value={{ loading, friendsList, invitesList, isMyProfile, actions, loadFriends, loadInvites, checkeIsMyProfile }}
    >
      {[children]}
    </ProfileContext.Provider>
  );
};

export default ProfileProvider;
