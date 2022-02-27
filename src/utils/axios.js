import axiosLib from "axios";

export default function axios() {
  axiosLib.defaults.baseURL = 'https://player.npc203.ml/api/';
  return axiosLib;
};