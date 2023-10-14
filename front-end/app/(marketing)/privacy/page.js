
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata = {
    title: 'Privacy Policy - MYCONTEST',
    description: 'The Privacy Policy for MYCONTEST.'
}

export default function PrivacyPage() {
    return (
        <div className="h-full flex-1 flex-col space-y-8 p-8 md:flex">
            <div className="flex items-center justify-between space-y-2 center">
                <div>
                    <h2 className="mt-10 scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0">Information We Collect</h2>
                    <article className="prose-hr:1" ></article>
                    <p className="leading-7 [&:not(:first-child)]:mt-6">
                        We may collect certain personal information that you provide directly to us when you access or use the Website. This may include:
                    </p>
                    <ul className="list-disc list-inside mt-2">
                        <li>Contact information (such as name and email address)</li>
                        <li>Information submitted through forms on the Website</li>
                        <li>User-generated content, such as comments and contest entries</li>
                        <li>Information related to your use of the Website (e.g., log data, IP address, device information)</li>
                    </ul>
                    <h2 className="mt-10 scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0">Use of Your Information</h2>
                    <article className="prose-hr:1" ></article>
                    <p className="leading-7 [&:not(:first-child)]:mt-6">We may use the collected information for various purposes, including:</p>

                    <ul className="list-disc list-inside mt-2">
                        <li>Providing and improving our services</li>
                        <li>Responding to your inquiries and requests</li>
                        <li>Administering contests and promotions</li>
                        <li>Analyzing and understanding user behavior on the Website</li>
                        <li>Sending promotional communications (with your consent)</li>
                    </ul>
                    <h2 className="mt-10 scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0">Cookies and Tracking Technologies</h2>
                    <article className="prose-hr:1" ></article>
                    <p className="leading-7 [&:not(:first-child)]:mt-6">We use cookies and similar tracking technologies to enhance your experience on the Website. These technologies may collect information about your browsing behavior and preferences. You can manage your cookie preferences through your browser settings.</p>
                    <h2 className="mt-10 scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0">Disclosure of Your Information</h2>
                    <article className="prose-hr:1" ></article>
                    <p className="leading-7 [&:not(:first-child)]:mt-6">
                        We may share your personal information in the following circumstances:
                    </p>
                    <ul className="list-disc list-inside mt-2">
                        <li>With service providers assisting in Website operations</li>
                        <li>To comply with legal obligations or protect against legal liability</li>
                        <li>With your consent or at your direction</li>
                    </ul>
                    <h2 className="mt-10 scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0">Third-Party Links</h2>
                    <article className="prose-hr:1" ></article>
                    <p className="leading-7 [&:not(:first-child)]:mt-6">
                        Our Website may contain links to third-party websites or services. We are not responsible for the content or privacy practices of those websites. We encourage you to review the privacy policies of third-party sites before providing any personal information.
                    </p>
                    <h2 className="mt-10 scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0">Data Security</h2>
                    <article className="prose-hr:1" ></article>
                    <p className="leading-7 [&:not(:first-child)]:mt-6">
                        We take reasonable measures to protect your personal information from unauthorized access, loss, misuse, or disclosure. However, no data transmission over the internet is completely secure, and we cannot guarantee the security of information transmitted to or from the Website.
                    </p>
                    <h2 className="mt-10 scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0">Children&apos;s Privacy</h2>
                    <article className="prose-hr:1" ></article>
                    <p className="leading-7 [&:not(:first-child)]:mt-6">
                        The Website is not intended for individuals under the age of [insert age]. We do not knowingly collect personal information from children. If you believe that we have inadvertently collected information from a child, please contact us to request its removal.
                    </p>
                    <h2 className="mt-10 scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0">Changes to this Privacy Policy</h2>
                    <article className="prose-hr:1" ></article>
                    <p className="leading-7 [&:not(:first-child)]:mt-6">
                        We may update this Privacy Policy from time to time to reflect changes to our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes through the Website.
                    </p>
                    <h2 className="mt-10 scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0">Contact Us</h2>
                    <article className="prose-hr:1" ></article>
                    <p className="leading-7 [&:not(:first-child)]:mt-6">
                        If you have any questions or concerns about these Terms & Conditions, please contact us at <Link href={`mailto:${siteConfig.email.support}`} className="italic underline underline-offset-8 ">{siteConfig.email.support}</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}