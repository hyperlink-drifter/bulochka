import IconInstagram from '@/assets/svg/social-media/instagram/logo--white.svg?react';

export const TileInstagram = () => {
  return (
    <div className="grid col-span-1 row-span-1 aspect-square rounded-md bg-linear-(--gradient-ig) bg-transparent group">
      <div className="place-self-center transition-[width,height,scale] duration-420 w-[96px] sm:w-[128px] h-[96px] sm:h-[128px] group-hover:scale-120">
        <IconInstagram />
      </div>
    </div>
  );
};
