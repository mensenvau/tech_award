import { siteConfig } from "@/config/site";
import Link from "next/link";

export const metadata = {
    title: 'Terms of Service - SMARTJOB',
    description: 'The Terms of Service for SMARTJOB.'
}

export default function TermsPage() {

    return (
        <div className="h-full flex-1 flex-col space-y-8 p-8 md:flex">
            <div className="flex items-center justify-between space-y-2 center">
                <div>
                    <article className="prose-hr:1" ></article>
                    <h2 className="mt-10 scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0">Acceptance of Terms</h2>
                    <article className="prose-hr:1" ></article>
                    <p className="leading-7 [&:not(:first-child)]:mt-6">
                        By accessing and using the website &quot;SMARTJOB.uz&quot; (the &quot;SMARTJOB&quot;), you agree to be bound by these Terms & Conditions. If you do not agree with any of the terms herein, please refrain from using the Website.
                    </p>
                    <h2 className="mt-10 scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0">Use of the Website</h2>
                    <article className="prose-hr:1" ></article>
                    <p className="leading-7 [&:not(:first-child)]:mt-6">You agree to use the Website only for lawful purposes and in a manner consistent with all applicable laws and regulations. You also agree not to engage in any activity that could interfere with the operation of the Website or compromise its security.</p>
                    <h2 className="mt-10 scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0">Intellectual Property</h2>
                    <article className="prose-hr:1" ></article>
                    <p className="leading-7 [&:not(:first-child)]:mt-6">All content, materials, and information on the Website, including but not limited to text, graphics, logos, images, videos, and software, are protected by intellectual property laws and are the property of SMARTJOB or its licensors. You may not reproduce, distribute, modify, or create derivative works based on such content without explicit written permission.</p>
                    <h2 className="mt-10 scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0">User Submissions</h2>
                    <article className="prose-hr:1" ></article>
                    <p className="leading-7 [&:not(:first-child)]:mt-6">
                        Any content, information, or materials you submit to the Website, including but not limited to comments, reviews, or contest entries, must not violate the rights of third parties or contain unlawful, defamatory, or offensive content. By submitting content, you grant SMARTJOB a non-exclusive, worldwide, royalty-free license to use, reproduce, modify, and display such content.
                    </p>
                    <h2 className="mt-10 scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0">Contests and Promotions</h2>
                    <article className="prose-hr:1" ></article>
                    <p className="leading-7 [&:not(:first-child)]:mt-6">
                        The Website may host contests, promotions, or other interactive activities. Participation in these activities is subject to additional rules and guidelines, which will be clearly communicated to participants. SMARTJOB reserves the right to modify or cancel any contest or promotion at its discretion.
                    </p>
                    <h2 className="mt-10 scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0">Limitation of Liability</h2>
                    <article className="prose-hr:1" ></article>
                    <p className="leading-7 [&:not(:first-child)]:mt-6">
                        The Website and its content are provided on an &quot;as is&quot; basis without any warranties or guarantees of any kind. SMARTJOB shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of the Website.
                    </p>
                    <h2 className="mt-10 scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0">Privacy Policy</h2>
                    <article className="prose-hr:1" ></article>
                    <p className="leading-7 [&:not(:first-child)]:mt-6">
                        Your use of the Website is also governed by our Privacy Policy, which can be found at <Link href="/privacy" className="italic underline underline-offset-8">Privacy Policy</Link>. Please review the Privacy Policy to understand how we collect, use, and protect your personal information.
                    </p>
                    <h2 className="mt-10 scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0">Changes to Terms & Conditions</h2>
                    <article className="prose-hr:1" ></article>
                    <p className="leading-7 [&:not(:first-child)]:mt-6">
                        SMARTJOB reserves the right to modify these Terms & Conditions at any time. Changes will be effective upon posting to the Website. It is your responsibility to review these terms regularly to stay informed of any updates.
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