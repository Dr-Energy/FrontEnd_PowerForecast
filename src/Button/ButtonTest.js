import TailButton from "../UI/TailButton"
import TailBall from "../UI/TailBall"

export default function ButtonTest() {
  return (
    <div>
      <TailButton caption={'Click!'} color={'green'} handleClick={onclick}/>
      <TailButton caption={'Click!'} color={'red'} handleClick={onclick}/>
      <TailButton caption={'Click!'} color={'blue'} handleClick={onclick}/>
      <TailBall n={12}/>
    </div>
  )
}
