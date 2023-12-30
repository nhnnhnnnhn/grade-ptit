import D20_ATTT from "./ATTT.json";
import D20_CNDPT_PTUDDPT from "./CNDPT_PTUDDPT.json";
import D20_CNDPT_TKDHDPT from "./CNDPT_TKDHDPT.json";
import D20_CNKTDDT_KTDTMT from "./CNKTDDT_KTDTMT.json";
import D20_CNKTDDT_XLTHVTT from "./CNKTDDT_XLTHVTT.json";
import D20_CNTT_CNPM from "./CNTT_CNPM.json";
import D20_CNTT_HTTT from "./CNTT_HTTT.json";
import D20_KT from "./KT.json";
import D20_KTDTVT_HTI from "./KTDTVT_HTI.json";
import D20_KTDTVT_MVDVI from "./KTDTVT_MVDVI.json";
import D20_KTDTVT_TTVTVDD from "./KTDTVT_TTVTVDD.json";
import D20_M_IM from "./M_IM.json";
import D20_M_PTDLMS from "./M_PTDLMS.json";
import D20_QTKD_QTDN from "./QTKD_QTDN.json";
import D20_QTKD_TMDT from "./QTKD_TMDT.json";
import D20_TMDT from "./TMDT.json";
import D20_TTDPT from "./TTDPT.json";
import {
  ATTT,
  CNDPT_PTUDDPT,
  CNDPT_TKDHDPT,
  CNKTDDT_KTDTMT,
  CNKTDDT_XLTHVTT,
  CNTT_CNPM,
  CNTT_HTTT,
  KT,
  KTDTVT_HTI,
  KTDTVT_MVDVI,
  KTDTVT_TTVTVDD,
  M_IM,
  M_PTDLMS,
  QTKD_QTDN,
  QTKD_TMDT,
  TMDT,
  TTDPT,
} from "../masterConstrain";

export const D20_MASTER_DATA = new Map<string, any>([
  [ATTT, D20_ATTT],
  [CNDPT_PTUDDPT, D20_CNDPT_PTUDDPT],
  [CNDPT_TKDHDPT, D20_CNDPT_TKDHDPT],
  [CNKTDDT_KTDTMT, D20_CNKTDDT_KTDTMT],
  [CNKTDDT_XLTHVTT, D20_CNKTDDT_XLTHVTT],
  [CNTT_CNPM, D20_CNTT_CNPM],
  [CNTT_HTTT, D20_CNTT_HTTT],
  [KT, D20_KT],
  [KTDTVT_HTI, D20_KTDTVT_HTI],
  [KTDTVT_MVDVI, D20_KTDTVT_MVDVI],
  [KTDTVT_TTVTVDD, D20_KTDTVT_TTVTVDD],
  [M_IM, D20_M_IM],
  [M_PTDLMS, D20_M_PTDLMS],
  [QTKD_QTDN, D20_QTKD_QTDN],
  [QTKD_TMDT, D20_QTKD_TMDT],
  [TMDT, D20_TMDT],
  [TTDPT, D20_TTDPT],
]);