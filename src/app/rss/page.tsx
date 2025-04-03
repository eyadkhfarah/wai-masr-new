import { Button } from "@/components/ui/button";
import { Metadata } from "next";

const meta = {
	title: "خدمة الـ RSS",
	description: `صفحة خاصة لخدمة الـ RSS الخاصة بموقع وعي - مصر.`,
	url: "/rss",
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
				<article className="m-auto prose">
					<h1>خدمة الـ RSS</h1>
					<p>
						هي خدمة هتخليك تشوف اخر المقالات بمجرد نزولها يعني بدل ما ترحو المواقع وتدور بنفسك الخدم دي
						بجيبلك كل المقالات زبتيجي علي هئية عنوان خبر او مختصر لنص الخبر او لينك الخبر بالكامل
					</p>

					<h2>يعني ايه RSS؟</h2>

					<p>ده مطلح لجملة Rich Site Summary, ملخص مكثف للموقع</p>

					<h2>الخدمة دي مدفوعة ولا مجانا؟</h2>

					<p>خدمة مجانية تماما ومفيش فيها اي رسمو علشان تستخدمها.</p>

					<h2>طب أزاي استفيد من الخدمة دي؟</h2>

					<p>انت ممكن تستفيد من الخدمة دي بأكتر من طريقة أهما:</p>

					<ul>
						<li>
							ان يكون المتصفح بتاعك يكون بيدعم RSS زي متصفح Firefox أو Opera أو أي متصفح أصدار 7.0 أو فوق
						</li>
						<li>
							ممكن تستخدمه عن طريق برامج قارئ الاخبار {`(News Reader)`} ودي اللي بتقرأ وتبعرض المقالات الجاية
							من خدمة RSS.
						</li>
					</ul>

					<h2>طب ازاي اجيب قارئ الأخبار ده؟</h2>

					<p>
						فيه برامج كتيرة جدا من برامج News Reader علي النت، وده ممكن تحمله من النت بسهولة. بس علشان
						مقالاتنا توصلكم أول بأول فريق وعي - مصر بيصح بأشهر البرامج دي:
					</p>

					<h3>اللي بيستخدموا ويندوز</h3>

					<ul>
						<li>Awasu</li>
						<li>News Crawler</li>
					</ul>

					<h3>اللي بيستخدموا ماكنتوش</h3>

					<ul>
						<li>NewsFire</li>
						<li>NetNewsWire</li>
					</ul>

					<h3>عن طريق المتصفح</h3>

					<ul>
						<li>Bloglines</li>
						<li>MyYahoo</li>
						<li>NewsGator</li>
					</ul>

					<h3>عن طريق البريد إلالكتروني</h3>

					<ul>
						<li>Thunderbird</li>
						<li>Feeder.co</li>
					</ul>
				</article>
			</section>

			<section className="grid place-items-center">
				<Button className="">
					شوف ملف RSS.XML
				</Button>
			</section>

		</>
	)
}


{/* 



<section class="grid place-items-center">

	<BlackBtn label={""} newTab={true} link={"/rss.xml"}/>
</section> */}
