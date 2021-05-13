import { AckOffline } from "./AckOffline";
import { AckCache } from "./AckCache";
import { AckQue } from "./AckQue";
import { AckApi } from "./AckApi";

export const providers = [
  AckApi,
  AckOffline,
  AckCache,
  AckQue,
]
