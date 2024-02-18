import { AvatarProps } from './types';
import { LuCalendarDays } from "react-icons/lu";

export const Avatar = ({ src = undefined, width, height, name} : AvatarProps) => {
  const imgOnError = (event: { currentTarget: { src: string; }; }) => {
    event.currentTarget.src = 'https://static.vecteezy.com/system/resources/previews/022/123/337/non_2x/user-icon-profile-icon-account-icon-login-sign-line-vector.jpg'
  }
  return (
    <div className='w-[400px] h-[100px] gap-4 flex items-center text-center  '>
        <img src={src} width={width} height={height} className={`rounded-[50%] ${src ?  'block' : 'hidden'} absolute top-0 left-0`} onError={imgOnError} />
        <h1 className='  bg-[#6433C4] w-[100px] h-[100px] rounded-full text-[60px] text-white '>{!src ?  name?.slice(0, 1).toUpperCase() : ''}</h1>
        <div>
          <p className='text-2xl'>
            {name}
          </p>  
          <div className='mt-3 flex items-center gap-2 text-slate-400'>
            <LuCalendarDays fontSize={18}/>
            <span>02 Dekabr, 2023</span>
          </div>
        </div>
    </div>
  )
}