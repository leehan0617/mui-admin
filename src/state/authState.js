import { atom } from "recoil";

const authState = atom({
  key: "auth",
  default: "",
});

export default authState;
