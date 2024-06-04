
export default function TailInput({type, ph, inputRef, handleChange}) {
  return (
    <div>
      <input type={type}
                ref={inputRef}
                id="first_name"
                className="border border-gray-300
                        bg-gray-50 
                        text-gray-90
                        text-sm rounded-lg
                        focus:outline-none focus:ring
                        focus:ring-blue-500
                        focus:border-blue-500
                        block w-full p-2.5"
                placeholder={ph}
                onChange={handleChange}/>
    </div>
  )
}
