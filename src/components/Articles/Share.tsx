"use client";
import { FacebookShareButton, TwitterShareButton, TelegramShareButton, WhatsappShareButton } from "react-share";
import { RiFacebookFill, RiTwitterXLine, RiTelegramFill, RiWhatsappFill } from "react-icons/ri";

interface ShareButtonsProps {
  title: string;
  url: string;
}

export default function Share({ title, url }: ShareButtonsProps) {
  return (
    <div className="flex gap-3 mt-4">
      {/* Facebook */}
      <FacebookShareButton url={url} hashtag="#مقالة">
        <div className="p-3 bg-blue-600 text-white rounded-full hover:scale-110 transition-transform">
          <RiFacebookFill size={24} />
        </div>
      </FacebookShareButton>

      {/* Twitter (X) */}
      <TwitterShareButton url={url} title={title} hashtags={["مقالة", "أخبار"]}>
        <div className="p-3 bg-black text-white rounded-full hover:scale-110 transition-transform">
          <RiTwitterXLine size={24} />
        </div>
      </TwitterShareButton>

      {/* Telegram */}
      <TelegramShareButton url={url} title={title}>
        <div className="p-3 bg-blue-500 text-white rounded-full hover:scale-110 transition-transform">
          <RiTelegramFill size={24} />
        </div>
      </TelegramShareButton>

      {/* WhatsApp */}
      <WhatsappShareButton url={url} title={title}>
        <div className="p-3 bg-green-500 text-white rounded-full hover:scale-110 transition-transform">
          <RiWhatsappFill size={24} />
        </div>
      </WhatsappShareButton>
    </div>
  );
}
