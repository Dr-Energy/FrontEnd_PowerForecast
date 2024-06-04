
export default function TailBall({n}) {
    const bColor=[
        'bg-red-400',
        'bg-green-400',
        'bg-blue-400',
        'bg-yellow-400',
        'bg-purple-400',
        'bg-orange-400'
    ]
    const ballColor=`${bColor[parseInt(n/10)]} w-16 h-16 rounded-full flex justify-center items-center text-xl font-bold text-white`
  return (
    <div className={ballColor}>
      {/* n을 받아서 몫으로 색깔을 결정한다. */}
      {n}
    </div>
  )
}
