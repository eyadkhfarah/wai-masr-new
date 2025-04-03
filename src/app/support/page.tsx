import { Metadata } from 'next';
import React from 'react'
import PayPal from './PayPal';

const meta = {
	title: "أدعمنا",
	description: `ادعم فريق وعي - مصر ماديا`,
	url: "/support",
}

export const metadata: Metadata = {
	title: meta.title,
	description: meta.description,
	alternates: {
		canonical: meta.url,
	},
	openGraph: {
		title: meta.title,
		description: meta.description,
		url: meta.url,
	},
};


export default function page() {
	return (
		<>
			<section className="md:grid lg:grid-cols-2 gap-7">
				<div className="grid gap-3 h-fit">
					<h1>أدعمنا</h1>
					<p>
						حابين إننا نعبر ليكم عن شكرنا وتقديرنا الكبير ليكم جميعًا ولدعمكم المتواصل لمنصتنا. مجهودنا
						اللي بنبذله لتقديم محتوى مميز وقيم بيستمد قوته من وجودكم المستمر ومشاركتكم الفاعلة. ، ودلوقتي
						تقدروا تسهاهموا معانا بتطوير المحتوى ونشره أكتر وبشكل أوسع من خلال دعم مالي ولو بسيط لينا علي
						أحد وسائل الدعم الآتية
					</p>

					<div className="grid lg:place-items-start place-items-center">
						<h2>اتبرع لنا عن طريق فودافون كاش أو فوري</h2>
						<img src={"/images/qr-code.png"} width="140" height="140" alt="qr code" />
					</div>
				</div>

				<div className="bg-red grid gap-4 h-hit text-sm p-4 lg:m-0 mt-5">
					<h2 className="text-white lg:3xl text-xl">لو من برا مصر تقدر تتبرع هنا</h2>

					<PayPal />
				</div>
			</section>
		</>
	)
}