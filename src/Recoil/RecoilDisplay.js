import { useRecoilValue } from "recoil";
import { countChange } from "./ReAtom";
// import { useRecoilValue } from "recoil";

export default function RecoilDisplay() {
    const count =useRecoilValue(countChange);
  return (
    <div>
      {count}
    </div>
  )
}
