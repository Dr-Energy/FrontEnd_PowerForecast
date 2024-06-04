
export default function TailButton({caption, color, handleClick}) {
  const colorObj={
    'blue':'bg-[#007FFF]',
    'red':'bg-[#E23D28]',
    'green':'bg-[#00693E]'
  }
  const hoverObj={
    'blue':'hover:bg-[#6CB4EE]',
    'red':'hover:bg-[#FE6F5E]',
    'green':'hover:bg-[#ACE1AF]'

  }
  const bColor=`p-2 rounded-md ${colorObj[color]} ${hoverObj[color]} text-white m-2`;
    return (
    <button className={bColor} onClick={handleClick}>
        {caption}
    </button>
  )
}
