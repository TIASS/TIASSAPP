
import * as platform from "tns-core-modules/platform";
import * as app from "tns-core-modules/application";
import { UserDoc } from "../models/user.doc";


export class PostData {
  lang: string = platform.device.language;
  localeId: string = platform.device.language.toLowerCase();
  ipVisitor: string;
  userAgent: string =
    '-os:' + platform.device.os +
    '-osVersion:' + platform.device.osVersion +
    '-model:' + platform.device.model +
    '-region:' + platform.device.region +
    /*
    Gets the uuid. On iOS this will return a new uuid if the application is re-installed on the device. If you need to receive the same uuid even after the application has been re-installed on the device, use this plugin: https://www.npmjs.com/package/nativescript-ios-uuid
    */
    '-uuid:' + platform.device.uuid +
    '-sdkVersion:' + platform.device.sdkVersion +
    '-manufacturer:' + platform.device.manufacturer +
    '-lang:' + platform.device.language +
    '-deviceType:' + platform.device.deviceType;
  tzoffset: string = ((new Date()).getTimezoneOffset()).toString();
}
export class LoginData extends PostData {
  email: string = "jbhl2002@yahoo.fr";
  pswrd: string = "jbhl2002";
}

export class SigninData extends LoginData {
  pswrdconf: string;
  name: string = "jimmy bahole";
  middlename: string;
  gender: number;
  business: boolean;
}

export class MobileData extends PostData {
  id: string;
  muk: string;
}

export class LoginDataClient {
  email: string;
  mobileData: MobileData;
  user: UserDoc;
}
