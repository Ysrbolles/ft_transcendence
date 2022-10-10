// import { AxiosError } from "axios";

declare global {
  interface Error {
    status: number;
  }
}
type PromiseReturn = Error | { message: string };
export type FriendActions = (user: UserType, action: string) => Promise<PromiseReturn>;

export interface AuthType {
  username: string;
  first_name: string;
  last_name: string;
  img_url: string;
  email: string;
  intra_id: number;
  notifications: NotificationType[];
}

export interface NotificationType {
  id: number;
  type: "FRIEND_REQUEST" | "GAME_INVITE" | "OTHER";
  userid: number;
  fromid: number;
  targetid: number;
  content: string;
  read: boolean;
  createdat: Date;
  updatedat: Date;
  users_notification_fromidTousers: {
    username: string;
    img_url: string;
    intra_id: number;
  };
}

export interface UserType {
  id: number;
  intra_id: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  img_url: string;
  cover: string;
  status: "ONLINE" | "OFFLINE" | "PLAYING";
  created_at: string;
  updated_at: string;
}

export interface ProfileContextType {
  loading: boolean;
  friendsList: UserType[];
  invitesList: RequestFriendType[];
  isMyProfile: boolean;
  actions: FriendActions;
  loadFriends: () => Promise<void>;
  loadInvites: () => Promise<void>;
  checkeIsMyProfile: (id: number) => void;
}

export interface RequestFriendType {
  id: number;
  senderid: number;
  receiverid: number;
  created_at: Date;
  accepted: boolean;
  userInfo: UserType;
}

export interface AchievementType {
  name: "winner" | "friendly" | "photogenic" | "wildfire" | "legendary" | "sharpshooter";
  level: "BRONZE" | "SILVER" | "GOLD" | "PLATINUM";
  xp: number;
  description: string;
  wind: boolean;
}

export interface RelationshipType {
  relationship: {
    id?: number;
    senderid?: number;
    receiverid?: number;
    created_at?: Date;
    accepted?: boolean;
    isFriend?: boolean;
  };
}

export interface ProfileType {
  users_achievements: {
    achievements: AchievementType;
  }[];
  matches?: {
    total: number;
    winne: number;
  };
}

export interface ConversationsType {
  id: string;
  type: "group" | "direct";
  name: string | null;
  adminID: string;
  members: UserType[];
  lastMessage: {
    id: string;
    date: Date;
    content: string;
  };
}

export interface MessageTextType {
  id: string;
  conversationID: string;
  status: "send" | "read" | "delivered" | "failer" | "waiting" | string;
  sender: UserType;
  content: string;
  date: Date;
  deleted: boolean;
}
