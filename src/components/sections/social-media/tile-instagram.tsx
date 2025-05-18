import IconInstagram from '@/assets/svg/social-media/instagram/logo--white.svg?react';

export const TileInstagram = () => {
  return (
    <div className="grid aspect-square rounded-md bg-linear-(--gradient-ig) bg-transparent group">
      <div className="place-self-center transition-[width,height,scale] duration-420 w-[48px] h-[48px] group-hover:scale-120">
        <IconInstagram />
      </div>
    </div>
  );
};
