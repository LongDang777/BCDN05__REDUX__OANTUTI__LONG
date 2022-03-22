let stateDefault = {
  mangTuTi: [
    { ma: "keo", hinhAnh: "./img/gameOanTuTi/keo.png", datCuoc: true },
    { ma: "bua", hinhAnh: "./img/gameOanTuTi/bua.png", datCuoc: false },
    { ma: "bao", hinhAnh: "./img/gameOanTuTi/bao.png", datCuoc: false },
  ],
  ketQua: "I'm iron man, ilove you 3000!!",
  soBanThang: 0,
  soBanChoi: 0,
  computer: { ma: "bua", hinhAnh: "./img/gameOanTuTi/bua.png" },
};

const OanTuTiReducer = (state = stateDefault, action) => {
  switch (action.type) { 
    case "DAT_CUOC": {
      let mangDatCuoc = [...state.mangTuTi];
      mangDatCuoc = mangDatCuoc.map((item) => {
        if (item.ma === action.maCuoc) {
          return { ...item, datCuoc: true };
        }
        return { ...item, datCuoc: false };
      });
      state.mangTuTi = mangDatCuoc;
      return { ...state };
    }
    case "PLAY_GAME": {
      let soNgauNhien = Math.floor(Math.random() * 3);
      let cuocNgauNhien = state.mangTuTi[soNgauNhien];
      state.computer = cuocNgauNhien;
      return { ...state };
    }
    case "END_GAME": {
     
      let player = state.mangTuTi.find((item) => item.datCuoc === true);
      let computer = state.computer;

      switch (player.ma) {
        case "keo":
          if (computer.ma === "keo") {
            state.ketQua = "Hoà !!!";
          } else if (computer.ma === "bua") {
            state.ketQua = "Thua :((";
          } else {
            state.soBanThang +=1
            state.ketQua = "I'm iron man, ilove you 3000!!";
          }
          break;
        case "bua":
          if (computer.ma === "bua") {
            state.ketQua = "Hoà !!!";
          } else if (computer.ma === "bao") {
            state.ketQua = "Thua :((";
          } else {
            state.soBanThang +=1
            state.ketQua = "I'm iron man, ilove you 3000!!";
          }
          break;
        case "bao":
          if (computer.ma === "bao") {
            state.ketQua = "Hoà !!!";
          } else if (computer.ma === "keo") {
            state.ketQua = "Thua :((";
          } else {
            state.soBanThang +=1
            state.ketQua = "I'm iron man, ilove you 3000!!";
          }
          break;
        default:
          state.ketQua = "I'm iron man, ilove you 3000!!";
          break;
          // return { ...state };
      }
      state.soBanChoi++
      return { ...state };
    }
    default:
      return state;
  }
};
export default OanTuTiReducer;
