import React from 'react'

export default function Content({isDark}) {
  return (
    <div className='content'
    style={{backgroundColor: isDark ? 'black' : 'lightgray',
          color: isDark ? 'white' : 'black'}} >
            <p>홍길동님, 좋은 하루 되세요</p>
    </div>
  )
}
