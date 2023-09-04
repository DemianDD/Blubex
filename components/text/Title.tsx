import React from 'react'

interface TitleProps {
    title: string;
}

const Title = (props: TitleProps) => {
  return (
    <div className="font-[400] text-[28px] md:text-[36px] mb-5 w-full text-center">
        {props.title}
    </div>
  )
}

export default Title