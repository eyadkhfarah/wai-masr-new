import BlackBtn from "@/components/Button/BlackBtn";
import { Metadata } from "next";
import Image from "next/image";
import { RiFacebookCircleFill, RiInstagramLine, RiTelegramFill, RiTwitterXFill } from "react-icons/ri";
import { Form } from "./Form";

const meta = {
	title: "اتواصل معانا",
	description: `تواصل مع فريق وعي - مصر.`,
	url: "/contact",
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
			<section className="grid gap-5 md:grid-cols-2">
				<div className="grid gap-6 h-fit">
					<h1>اتواصل معنا</h1>

					<p className="m-0">
						تقدروا تتواصلوا معانا أي وقت وتقولونا آراءكم واقتراحاتكم في كل المواضيع اللي شوفتوها أو تحبوا
						تشوفوها في المستقبل. متتردوش إنكم تمشاركوا أفكاركم ومواضيعكم المفضلة. هنكون مبسوطين جدًا
						بالتفاعل معاكم وتلبية مقترحاتكم وطلباتكم في أقرب فرصة متاحة.
					</p>

					<h2 className="m-0 text-xl">أو تقدروا توصلولنا من علي حساباتنا في مواقع التواصل الاجتماعي</h2>

					<div className="flex items-center gap-5 text-3xl mb-5">
						<a
							href="https://web.facebook.com/W3i.EG"
							className="hover:text-black transition-all border-none ease-in-out duration-300"
							aria-label="صفحة الفيسبوك"><RiFacebookCircleFill color="black" /></a>
						<a
							href="https://www.instagram.com/w3i.eg"
							className="hover:text-black transition-all border-none ease-in-out duration-300"
							aria-label="صفحة الانستجرام"><RiInstagramLine color="black" /></a>
						<a
							href="https://www.twitter.com/W3iEgy"
							className="hover:text-black transition-all border-none ease-in-out duration-300"
							aria-label="صفحة الاكس"><RiTwitterXFill color="black" /></a>
						<a
							href="https://t.me/W3iEgy"
							className="hover:text-black transition-all border-none ease-in-out duration-300"
							aria-label="صفحة الاكس"><RiTelegramFill color="black" /></a>
					</div>

					<h2 className="m-0 text-xl">أو علي بريدنا الالكتروني</h2>

					<a href="mailto:nationalism.awareness@gmail.com" className="w-fit">nationalism.awareness@gmail.com</a>
				</div>

				<Form />
			</section>
		</>
	)
}



