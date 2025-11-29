// app/page.tsx
"use client";

import { useSearchParams } from "next/navigation";
import React, { useState } from "react";

export default function Home() {
  const searchParams = useSearchParams();

  const [values, setValues] = useState({
    name: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setValues({ ...values, [id]: value });
  };

  const utm = {
    source: searchParams.get("utm_source") || "",
    medium: searchParams.get("utm_medium") || "",
    campaign: searchParams.get("utm_campaign") || "",
    term: searchParams.get("utm_term") || "",
    content: searchParams.get("utm_content") || "",
  };

  console.log(utm);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch("/consultation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...values,
          source: utm.source,
          medium: utm.medium,
          campaign: utm.campaign,
          term: utm.term,
          content: utm.content,
          landingId: "LAND20251129094315953",
        }),
      });

      if (res.status === 200) {
        alert("상담 신청 완료!");
        setValues({
          name: "",
          phone: "",
        });
      }
    } catch (e) {
      alert("상담 신청에 실패하였습니다.");
    }
  };
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* 전체 폭 좁게 + 가운데 정렬 */}
      <div className="mx-auto max-w-3xl px-6">
        {/* SECTION 1 — HERO */}
        <section className="py-32">
          <h1 className="text-5xl font-bold leading-tight tracking-tight">
            광고 효율이 정체됐다면,
            <br />
            <span className="text-teal-300">플로우링크</span>가 성장의 흐름을
            바꿉니다.
          </h1>

          <p className="mt-8 text-lg text-slate-300 leading-relaxed">
            데이터 기반 퍼포먼스 마케팅으로 매출과 전환율을 동시에 끌어올립니다.
            업종별 최적화 전략과 실시간 리포트로 근거 있는 성장을 경험하세요.
          </p>

          <a
            href="#consult"
            className="inline-block mt-10 rounded-xl bg-teal-400 px-8 py-4 text-lg font-semibold text-slate-900 shadow-lg hover:bg-teal-300"
          >
            무료 상담 신청하기
          </a>
        </section>

        {/* SECTION 2 — WHY */}
        <section id="why" className="py-32">
          <h2 className="text-4xl font-bold tracking-tight">
            왜 브랜드들은 <span className="text-teal-300">플로우링크</span>를
            선택할까요?
          </h2>

          <div className="mt-10 space-y-12">
            <div>
              <h3 className="text-2xl font-semibold text-teal-200">
                1) 데이터 기반 운영 시스템
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-slate-300">
                실시간 분석 대시보드를 기반으로 캠페인을 운영합니다. 감이 아닌
                데이터로 움직이며, 광고비 대비 성과를 명확하게 드러냅니다.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-teal-200">
                2) 업종별 최적화 레퍼런스
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-slate-300">
                커머스, 교육, B2B, 앱 서비스 등 다양한 업종에서 검증된 전략
                모델을 사용합니다. 빠르게 성과를 확인할 수 있는 구조를 사전에
                구축합니다.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-teal-200">
                3) 전담 매니저 1:1 운영
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-slate-300">
                브랜드를 깊이 이해한 매니저가 상시 대응하며, 주간/월간 리포팅과
                즉각적인 최적화 전략을 제시합니다.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3 — CASES */}
        <section id="cases" className="py-32">
          <h2 className="text-4xl font-bold tracking-tight">
            플로우링크는 <span className="text-teal-300">성과</span>로 말합니다.
          </h2>

          <div className="mt-14 space-y-16">
            <div>
              <h3 className="text-2xl font-semibold">커머스 패션 브랜드</h3>
              <p className="mt-4 text-lg leading-relaxed text-slate-300">
                월 광고비 300만 원 기준으로 ROAS를 212%에서 485%까지
                개선했습니다. 리타게팅 구조 재설계와 캠페인 세분화를 통해 단기간
                성과를 이끌었습니다.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold">에듀테크 서비스</h3>
              <p className="mt-4 text-lg leading-relaxed text-slate-300">
                리드당 비용을 14,000원에서 6,200원으로 절감했습니다. 교육 단계별
                메시지 최적화와 콘텐츠형 광고 도입이 핵심 전략이었습니다.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold">B2B SaaS</h3>
              <p className="mt-4 text-lg leading-relaxed text-slate-300">
                검색광고 중심 구조를 재정비해 월 상담 문의를 5건에서 18건으로
                증가시켰습니다. 키워드 그룹 재편성 및 리마케팅 확장이 주요
                포인트였습니다.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 4 — SERVICES */}
        <section id="services" className="py-32">
          <h2 className="text-4xl font-bold tracking-tight">
            광고 성과를 위한 <span className="text-teal-300">모든 것</span>
          </h2>

          <div className="mt-14 space-y-16">
            <div>
              <h3 className="text-2xl font-semibold text-teal-200">
                전략 컨설팅
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-slate-300">
                업종, 예산, 타겟을 기반으로 최적의 매체 비중과 광고 구조를
                설계합니다.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-teal-200">
                광고 집행
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-slate-300">
                네이버, 구글, 유튜브, 메타, 틱톡 등 전 채널을 통합 운영합니다.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-teal-200">
                크리에이티브 제작
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-slate-300">
                매체별 반응이 높은 이미지·영상·카피를 제작하고, 상시 A/B
                테스트를 진행합니다.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-teal-200">
                리포트 & 최적화
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-slate-300">
                성과 중심 리포트와 즉각적인 최적화 반영으로 광고 효율을
                극대화합니다.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 5 — CONSULT */}
        <section id="consult" className="py-32">
          <h2 className="text-4xl font-bold tracking-tight">
            지금 <span className="text-teal-300">무료 상담</span>을 신청하세요
          </h2>

          <form className="mt-14 space-y-8" onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-2">
              <label className="text-lg font-medium">담당자명</label>
              <input
                id="name"
                className="w-full rounded-xl bg-slate-900 px-4 py-3 text-lg border border-slate-700 focus:border-teal-400 outline-none"
                value={values.name}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label className="text-lg font-medium">연락처</label>
              <input
                id="phone"
                className="w-full rounded-xl bg-slate-900 px-4 py-3 text-lg border border-slate-700 focus:border-teal-400 outline-none"
                value={values.phone}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-teal-400 py-4 text-xl font-semibold text-slate-900 shadow-xl hover:bg-teal-300"
            >
              상담 신청하기
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}
