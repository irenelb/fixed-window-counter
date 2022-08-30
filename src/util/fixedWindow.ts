type MapRequest = { reqNumber: number };

type MapUserRequest = Record<string, MapRequest>;
const MAX_REQ_USR = 10;
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
      mapRequest[sub] = { reqNumber: 1 };
      return mapRequest[sub];
    }
    reqMap.reqNumber++;
    return reqMap;
  }

  function checkUserWindow(sub: string) {
    const reqMap = mapRequest[sub];
    return reqMap.reqNumber >= MAX_REQ_USR;
  }

  return { openCloseWindow, newReqPerUser, checkUserWindow };
}

export const { openCloseWindow, newReqPerUser, checkUserWindow } =
  fixedWindow();
