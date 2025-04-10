import ContactLinks from '@/components/links/ContactLinks'
import TechBadge from '@/components/ui/tech-badge'

export default function AboutPage() {
  return (
    <div className="flex w-full max-w-2xl flex-col items-center justify-center gap-4 px-4">
      <section className="w-full">
        <h2 className="py-4 text-3xl font-bold">이민호</h2>
        <p className="pb-3">
          작은 불편도 놓치지 않기 위해 UI 흐름과 디테일을 함께 설계하는 프론트엔드 개발자
        </p>
        <ContactLinks />
      </section>
      <section className="w-full">
        <h3 className="py-4 text-2xl font-bold">About</h3>
        <p className="mb-3">
          사용자 중심의 UI/UX에 관심이 많으며, 더 나은 프론트엔드 경험을 만드는 데
          집중하고 있습니다. 리테일 현장에서 다양한 고객을 직접 응대한 경험을 바탕으로,
          사용자 관점에서 문제를 바라보는 습관이 자연스럽게 길러졌고, 이는 개발에도 큰
          도움이 되고 있습니다.
        </p>
        <p>
          React, Next.js, Vue.js 등으로 여러 사이드 프로젝트를 진행하며 UI 설계, 상태
          관리, API 연동 등 실전 역량을 키워가고 있습니다.
        </p>
      </section>
      <section className="w-full">
        <h3 className="py-4 text-2xl font-bold">Skils</h3>

        <div className="mb-1 text-sm font-semibold text-gray-500">Main</div>
        <div className="mb-3 flex flex-wrap gap-1">
          <TechBadge title="TypeScript" />
          <TechBadge title="React" />
          <TechBadge title="Next.js" />
        </div>

        <div className="mb-1 text-sm font-semibold text-gray-500">Sub</div>
        <div className="mb-3 flex flex-wrap gap-1">
          <TechBadge title="Vue.js" />
          <TechBadge title="Express" />
        </div>
      </section>
      <section className="w-full">
        <h3 className="py-4 text-2xl font-bold">Project</h3>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
          <div className="rounded border border-gray-200 p-5 dark:border-gray-700">
            <div className="flex w-full items-center justify-between">
              <h4 className="font-bold">
                <a
                  href="https://github.com/mynolog/inflearn-warmup-3-4-my-on"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  MyOn
                </a>
              </h4>
              <p className="text-sm">2025. 03 - 2025. 04</p>
            </div>
            <p className="py-2 text-sm">Next.js와 Supabase 기반의 실시간 채팅 앱</p>
            <div className="flex flex-wrap gap-1">
              <TechBadge title="Next.js" />
              <TechBadge title="TypeScript" />
              <TechBadge title="TailwindCSS" />
              <TechBadge title="Zustand" />
              <TechBadge title="React Query" />
              <TechBadge title="Supabase" />
            </div>
          </div>

          <div className="rounded border border-gray-200 p-5 dark:border-gray-700">
            <div className="flex w-full items-center justify-between">
              <h4 className="font-bold">
                <a
                  href="https://github.com/mynolog/moayo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Moayo - 모아요
                </a>
              </h4>
              <p className="text-sm">2025. 01 - 2025. 02</p>
            </div>
            <p className="py-2 text-sm">Vue.js와 Express 기반의 도서 리뷰 및 검색 앱</p>
            <div className="flex flex-wrap gap-1">
              <TechBadge title="Vue.js" />
              <TechBadge title="TypeScript" />
              <TechBadge title="TailwindCSS" />
              <TechBadge title="Express" />
              <TechBadge title="MongoDB" />
            </div>
          </div>

          <div className="rounded border border-gray-200 p-5 dark:border-gray-700">
            <div className="flex w-full items-center justify-between">
              <h4 className="font-bold">
                <a
                  href="https://github.com/mynolog/pomodoro-timer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  뽀모도로 앱
                </a>
              </h4>
              <p className="text-sm">2024. 11 - 2024. 12</p>
            </div>
            <p className="py-2 text-sm">단기 집중력 향상을 위한 React 기반 타이머 앱</p>
            <div className="flex flex-wrap gap-1">
              <TechBadge title="React" />
              <TechBadge title="TypeScript" />
              <TechBadge title="TailwindCSS" />
            </div>
          </div>

          <div className="rounded border border-gray-200 p-5 dark:border-gray-700">
            <div className="flex w-full items-center justify-between">
              <h4 className="font-bold">
                <a
                  href="https://github.com/mynolog/music-roulette"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Music Roulette
                </a>
              </h4>
              <p className="text-sm">2022. 02 - 2022. 02</p>
            </div>
            <p className="py-2 text-sm">랜덤 음악 추천 서비스</p>
            <div className="flex flex-wrap gap-1">
              <TechBadge title="React" />
              <TechBadge title="JavaScript" />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full">
        <h3 className="py-4 text-2xl font-bold">Education</h3>
        <div className="rounded border border-gray-200 p-5 dark:border-gray-700">
          <div className="flex w-full justify-between">
            <h4 className="pb-3 font-bold">한국교통대학교</h4>
            <p className="text-sm">2010. 03 - 2017. 02 </p>
          </div>
          <p className="text-sm">컴퓨터정보공학 학사</p>
        </div>
      </section>
      <section className="w-full">
        <h3 className="py-4 text-2xl font-bold">Work Experience</h3>
        <div className="rounded border border-gray-200 p-5 dark:border-gray-700">
          <div className="flex w-full justify-between">
            <h4 className="pb-3 font-bold">에프알엘코리아(주)</h4>
            <p className="text-sm">2021. 11 - 2024. 06 </p>
          </div>
          <p className="text-sm">
            - 매장 CS 및 POS 운영 리더 경험을 통해 빠른 문제 해결과 협업 역량 강화 신입
            OJT
          </p>
          <p className="text-sm">
            - 교육 담당을 통해 문서화 능력과 커뮤니케이션 능력 향상
          </p>
        </div>
      </section>
    </div>
  )
}
