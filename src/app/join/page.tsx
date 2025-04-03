import BlackBtn from "@/components/Button/BlackBtn";
import { Metadata } from "next";

const meta = {
	title: "انضم لينا",
	description: `انضم مع فريق وعي - مصر.`,
	url: "/join",
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
			<section className="lg:flex md:grid md:place-items-center justify-between gap-7">
				<div className="grid h-fit lg:w-1/2">
					<h1>شارك معانا في مهمتنا</h1>
					<p>
						لو حابب تكون جزء من فريقنا وعندك شغف كبير بمواضيع القومية المصرية والتاريخ المصري وحابب تكتسب
						مهارات وخبرات جديدة ومميزة في فريق شبابي متنوع ومميز في المهارات وبتحب بيئة إبداعية تمارس فيها
						شغفك ومواهبك وكمان تكون سبب مباشر في زيادة الوعي عند كتير من الناس يبقى ده المكان المناسب ليك،
						قدم معانا
					</p>
				</div>

				<img src={"/images/Jobs/team.svg"} alt="team" height="384" className="h-96 w-fit" />
			</section>

			<section className="bg-red m-0 lg:px-32 p-5 py-12">
				<h1 className="my-7 text-white">أهم الأقسام</h1>
				<div className="lg:flex md:h-full w-full justify-between gap-4">
					<div className="lg:grid flex gap-9 mb-3 lg:place-items-center bg-white p-4 w-full">
						<img src={"/images/Jobs/graphic-design.svg"} alt="graphic designer" className="lg:h-28 h-16 w-fit" />
						<div className="grid">
							<h2 className="m-0 text-red lg:text-center">جرافيك ديزاينر</h2>
							<p className="my-3 text-xs lg:text-center">
								لو إنت مصمم جرافيك وعندك شغل بمواضيع القومية والهوية المصرية ومتمكن من الفوتوشوب خصوصًا
								للسوشيال ميديا تقدر تنضم لينا.
							</p>
						</div>
					</div>
					<div className="lg:grid flex gap-9 mb-3 lg:place-items-center bg-white p-4 w-full">
						<img src={"/images/Jobs/cms.svg"} alt="cms" className="w-fit lg:h-28 h-16" />
						<div className="grid">
							<h2 className="m-0 text-red lg:text-center">إدارة الموقع</h2>
							<p className="my-3 text-xs lg:text-center">
								لو إنت في كارير السوشيال ميديا ولسه بتبدأ فعندك فرصة عظيمة لتطوير مهاراتك وإمكانياتك في
								منصات وصفحات وموقع وعي - مصر.
							</p>
						</div>
					</div>
					<div className="lg:grid flex gap-9 mb-3 lg:place-items-center bg-white p-4 w-full">
						<img src={"/images/Jobs/news-reporter.svg"} alt="writer" className="w-fit lg:h-28 h-16" />
						<div className="grid">
							<h2 className="m-0 text-red lg:text-center">كتابة محتوي</h2>
							<p className="my-3 text-xs lg:text-center">
								عندك مهارات كتابة المحتوى وحابب تاخد خبرة إضافية في أحد أبرز المنصات الصاعدة علي السوشيال
								ميديا وكمان تكسب مهارات جديدة؟
							</p>
						</div>
					</div>
					<div className="lg:grid flex gap-9 mb-3 lg:place-items-center bg-white p-4 w-full">
						<img src={"/images/Jobs/video-editing.svg"} alt="editior" className="w-fit lg:h-28 h-16" />
						<div className="grid">
							<h2 className="m-0 text-red lg:text-center">مونتاج</h2>
							<p className="my-3 text-xs lg:text-center">
								عندك مهارات وموهبة المونتاج للفيديوهات وحابب يكون مكان بيتيحلك حرية الإبداع في التنفيذ
								وكمان فرصة لنجاح عظيم في صناعة المحتوى؟
							</p>
						</div>
					</div>
					<div className="lg:grid flex gap-9 mb-3 lg:place-items-center bg-white p-4 w-full">
						<img src={"/images/Jobs/writer.svg"} alt="presenter" className="w-fit lg:h-28 h-16" />
						<div className="grid">
							<h2 className="m-0 text-red lg:text-center">تقديم</h2>
							<p className="my-3 text-xs lg:text-center">
								عندك مهارات الالقاء والكاريزما والقبول؟ ومحتاج فرصة عظيمة تنمي فيها موهبتك وتاخد إمكانية
								حقيقية للظهور لجمهور عظيم؟
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className="grid place-items-center">
				<h2 className="text-center">خليك جزء في أحد اهم المنصات الصاعدة علي السوشيال ميديا</h2>

				<BlackBtn text={"قدم دلوقتي"} link={"https://forms.gle/weNzsctgZPJKHSb5A"} target={true} />
			</section>
		</>
	)
}
