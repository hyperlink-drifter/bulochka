import IconTikTok from '@/assets/svg/social-media/tiktok/logo--colorful.svg?react';

export const TileTikTok = () => {
  return (
    <div className="grid col-span-1 row-span-1 aspect-square rounded-md bg-black group">
      <div className="place-self-center transition-[width,height,scale] duration-420 w-[112px] sm:w-[144px] h-[112px] sm:h-[144px] group-hover:scale-120">
        <IconTikTok />
      </div>
    </div>
  );
};
