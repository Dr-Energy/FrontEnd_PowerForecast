import ClockImg from "./ClockImg"
import ClockTime from "./ClockTime"

export default function MyClick() {
  return (
    <div className="flex flex-col">
      <ClockImg/>
      <ClockTime/>
    </div>
  )
}
