import BlackBtn from "@/components/Button/BlackBtn";
import { Metadata } from "next";
import Image from "next/image";

const meta = {
	title: "اعلن عندنا",
	description: `لو عايز تعلن عن مشروعك أو منتج هتلاقي جمهورك اللي انت عايزه.`,
	url: "/ads",
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
			<section>
				<div className="lg:flex grid gap-9 justify-between">
					<div className="lg:w-1/2">
						<h1>أعلن عندنا</h1>
						<p>
							احنا شغالين بكل جهدنا علشان نكتبلك علي مقالات بشكل افضل و اسرع و ننشر الوعي القومي في
							الجمهورية المصرية لكن الشغل ده محتاج منا جهد كبير ووقت وفلوس علشان نقدمها لكم بأفضل شكل
							ممكن.
						</p>

						<p>علشان كده تقدر تعلن عن منتجك ومشروعك عندنا و وده بجانب خدمة Google Ad Sense.</p>

						<p>تقدر تتواصل معنا عن طريق البريد الالكتروني علشان تعرف أفضل باقات أعلانات لك.</p>

						<p>وبمجرد موافقة علي إعلانتك هتظهر في أول المقالة او في الصفحة الرئيسية.</p>

						<p className="font-black">
							لو عايز معلومات بخصوص خيارات الإعلان: <span><a href="mailto:nationalism.awareness@gmail.com" className="w-fit">nationalism.awareness@gmail.com</a></span>
						</p>
					</div>
					<Image src={"/images/design objectives.svg"} alt="ads" width={100} height={320} className="h-80 w-fit" />
				</div>
			</section>
		</>
	)
}


