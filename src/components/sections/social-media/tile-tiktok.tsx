import IconTikTok from '@/assets/svg/social-media/tiktok/logo--colorful.svg?react';

export const TileTikTok = () => {
  return (
    <div className="grid aspect-square rounded-md bg-black group">
      <div className="place-self-center transition-[width,height,scale] duration-420 w-[48px] h-[48px] group-hover:scale-120">
        <IconTikTok />
      </div>
    </div>
  );
};
