export interface TRoom {
  id: number;
  imgUrl: string;
  lastMsg: string;
  sender: string;
  sentDate: string;
}

export interface IRoomInfo {
  createdAt: string;
  max: number;
  owner: string;
  password: string;
  title: string;
  _id: string;
}
