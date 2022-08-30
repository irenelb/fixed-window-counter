import options from '../config/options';

type MapUserRequest = Record<string, number>;
const MAX_REQ_USR = options.snapshot().fixedWindowInfo.maxRequest;
function fixedWindow() {
  let mapRequest: MapUserRequest = {};

  function clearMapReq() {
    mapRequest = {};
  }
  function openCloseWindow(timeSize: number) {
    setInterval(clearMapReq, timeSize);
  }
  function newReqPerUser(sub: string) {
    const reqMap = mapRequest[sub];
    if (!reqMap) {
      mapRequest[sub] = 1;
      return mapRequest[sub];
    }
    return mapRequest[sub]++;
  }

  function checkUserWindow(sub: string) {
    const reqMap = mapRequest[sub];
    return reqMap > MAX_REQ_USR;
  }

  return { openCloseWindow, newReqPerUser, checkUserWindow };
}

export const { openCloseWindow, newReqPerUser, checkUserWindow } =
  fixedWindow();
