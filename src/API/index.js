import axios from "axios";
import jsSHA from "jssha";

export const holoApi = axios.create({
  baseURL: "https://api.holotools.app/v1",
});

export const PTX = axios.create({
  baseURL: "https://ptx.transportdata.tw/MOTC",
  headers: GetAuthorizationHeader(),
});

function GetAuthorizationHeader() {
  var AppID = "FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFFF";
  var AppKey = "FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFFF";

  var GMTString = new Date().toGMTString();
  var ShaObj = new jsSHA("SHA-1", "TEXT");
  ShaObj.setHMACKey(AppKey, "TEXT");
  ShaObj.update("x-date: " + GMTString);
  var HMAC = ShaObj.getHMAC("B64");
  var Authorization = 'hmac username="' + AppID + '", algorithm="hmac-sha1", headers="x-date", signature="' + HMAC + '"';

  return { "Authorization": Authorization, "X-Date": GMTString, "Accept-Encoding": "gzip" };
}
