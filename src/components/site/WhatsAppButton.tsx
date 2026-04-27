import { MessageCircle } from "lucide-react";

const PHONE = "918447314061";
const MESSAGE =
  "Hi Transess Technologies, I'd like to know more about your eyecare growth solutions. Please share details.";

export function WhatsAppButton() {
  const href = `https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Transess Technologies on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-lg ring-1 ring-black/5 transition-all hover:scale-105 hover:bg-[#1ebe5d] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]/60 md:bottom-6 md:right-6"
    >
      <MessageCircle className="h-5 w-5" aria-hidden="true" />
      <span className="hidden sm:inline">Chat on WhatsApp</span>
    </a>
  );
}
