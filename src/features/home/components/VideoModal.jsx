import { X } from '@phosphor-icons/react'

export function VideoModal({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl overflow-hidden rounded-[20px] bg-[#140505] border border-white/20 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-white hover:bg-[#780D0D] transition-colors"
          aria-label="Đóng video"
        >
          <X size={20} weight="bold" />
        </button>

        <div className="aspect-[16/9] w-full bg-black">
          <iframe
            className="h-full w-full"
            src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
            title="Video Giới Thiệu Nam Thành Sự Kiện"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="p-5 text-white">
          <span className="text-[12px] font-extrabold uppercase tracking-wider text-[#E5A93C]">
            Video Giới Thiệu
          </span>
          <h3 className="mt-1 text-[20px] font-bold">
            Nam Thành Sự Kiện - Hành Trình Kiến Tạo Khoảnh Khắc Đáng Nhớ
          </h3>
          <p className="mt-1 text-[13.5px] text-gray-300">
            Tổng hợp các khoảnh khắc ấn tượng tại các lễ khai trương, tiệc tất niên, gala dinner và sự kiện cưới hỏi hoàng gia.
          </p>
        </div>
      </div>
    </div>
  )
}
