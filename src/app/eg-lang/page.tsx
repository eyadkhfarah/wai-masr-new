import BlackBtn from "@/components/Button/BlackBtn";
import Btn from "@/components/Button/Btn";
import { Metadata } from "next";

const meta = {
  title: "اتعلم اللغة المصرية",
  description: `تقدر تتعلم اللغة المصرية سواء بالكتابة الهيروغليفية أو الكتابة القبطية مع وعي - مصر.`,
  url: "/eg-lang",
};

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
        <h1>أتعلم اللغة المصرية</h1>
        <p>{meta.description}</p>
      </section>
      <section>
        <h2>الكتابة الهيروغليفية</h2>
        <p>
          تقدر تتعلم طريقة كتابة ونطق الحروف المصرية بالكتابة الهيروغليفية مع
          الدكتورة/ هدي عبد العزيز في برنامج <span>لغتنا القديمة</span>
        </p>

        <div className="w-full h-full grid place-items-center gap-4 mb-6">
          <iframe
            className="w-full lg:h-96 h-56 lg:px-60"
            src="https://www.youtube.com/embed/videoseries?list=PLEwb2eC2meYV_MGgWLmGJJzft2XOdNDxU"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          />
        </div>
      </section>

      <section>
        <h2>الكتابة هيراطيقية</h2>
        <p>
          تقدر تتعلم طريقة كتابة ونطق الحروف المصرية بالكتابة الهيراطيقية دلوقتي
          عندنا مع الأثرية/ هند أسماعيل
        </p>

        <div className="w-full h-full grid place-items-center gap-4 mb-6">
          <iframe
            className="w-full lg:h-96 h-56 lg:px-60"
            src="https://www.youtube.com/embed/videoseries?si=YoTXrc7pSpbqvuME&amp;list=PLbv84SI-QKkudhaTTuVtqVZIHnsDgWgvf"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          />
        </div>
      </section>

      <section>
        <h2>الكتابة القبطية</h2>
        <p>
          تقدر تتعلم طريقة كتابة ونطق الحروف المصرية بالكتابة القبطية مع باسون/
          جورج في اليوتيوب بعنوان <span>لغتنا المصرية</span>
        </p>

        <div className="w-full h-full grid place-items-center gap-4 mb-6">
          <iframe
            className="w-full lg:h-96 h-56 lg:px-60"
            src="https://www.youtube.com/embed/videoseries?list=PLXmLW5uUnh2PP3f_NaqxF6VebB69sRjXR"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          />
        </div>
      </section>

      <section className="grid place-items-center">
        <h2 className="text-center">
          تقدر تدخل مبارة مكتبة الأسكندرية لتعليم الكتابة الهيروغليفية دلوقتي
        </h2>
        <Btn
          label={"أدخل علي المبادرة"}
          link={
            "https://www.bibalex.org/learnhieroglyphs/Lesson/Introduction_Ar.aspx"
          }
          newTab={true}
          className="w-48"
        />
      </section>
    </>
  );
}
