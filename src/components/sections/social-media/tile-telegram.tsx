import IconTelegram from '@/assets/svg/social-media/telegram/logo--white.svg?react';

export const TileTelegram = () => {
  return (
    <div className="grid rounded-md h-full bg-blue-telegram group">
      <div className="place-self-center transition-[width,height,scale] duration-420 w-[48px] h-[48px] group-hover:scale-120">
        <IconTelegram />
      </div>
    </div>
  );
};
