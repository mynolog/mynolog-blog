import type { Metadata } from 'next'
import ContactLinks from '@/components/links/ContactLinks'
import TechBadge from '@/components/ui/tech-badge'
import GitHub from '@/components/icons/GitHubIcon'
import { ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'about - mynolog',
  description: 'mynolog의 소개 페이지입니다.',
}

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
          사용자의 입장에서 문제를 파악하고, UI/UX를 개선하는 데 집중하는 프론트엔드
          개발자입니다. <br />
          매장 운영과 고객 응대 경험을 바탕으로 사용자 니즈에 민감하게 반응하며, React,
          Next.js, Vue.js 기반의 프로젝트를 통해 UI 설계, 상태 관리, API 연동 등 실전
          경험을 쌓아왔습니다.
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

        <div className="grid grid-cols-1 gap-2">
          <div className="rounded border border-gray-200 p-5 dark:border-gray-700">
            <div className="flex w-full items-center justify-between">
              <h4 className="font-bold">One Song</h4>
              <p className="text-sm">2025. 04 - 진행 중</p>
            </div>
            <p className="py-2 text-sm">랜덤 음악 추천 서비스</p>
            <div className="grid gap-y-2 text-sm">
              <div className="grid grid-cols-4 gap-2">
                <span className="font-semibold">주요 기능</span>
                <div className="col-span-3 space-y-1">
                  <p>Apple Music RSS 기반 국가별 인기곡 중 1곡 랜덤 추천</p>
                  <p>
                    미리듣기 오디오 플레이어 (재생/정지/진행 상태 표시) 추천 히스토리 저장
                  </p>
                  <p>소셜 로그인 (Google)</p>
                  <p>회원/ 비회원 찜 기능 구현 및 상태 분리 저장</p>
                  <p>찜 목록 Pagination 적용, 프라이빗 라우팅 미들웨어구성</p>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-2">
                <span className="font-semibold">기술 스택</span>
                <div className="col-span-3 flex flex-wrap gap-2">
                  <TechBadge title="Next.js" />
                  <TechBadge title="TypeScript" />
                  <TechBadge title="TailwindCSS" />
                  <TechBadge title="Zustand" />
                  <TechBadge title="Supabase" />
                  <TechBadge title="Jest" />
                </div>
              </div>

              <div className="grid grid-cols-4 gap-2">
                <span className="font-semibold">프로젝트 링크</span>
                <div className="flex items-center gap-1 text-sm font-bold text-gray-600 hover:underline">
                  <GitHub className="h-4 text-gray-600" />
                  <a
                    href="https://github.com/mynolog/one-song"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Git Repository
                  </a>
                </div>
                <div className="flex items-center gap-1 text-sm font-bold text-gray-600 hover:underline">
                  <ExternalLink className="h-4" />
                  <a
                    href="https://one-song.mynolog.me"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded border border-gray-200 p-5 dark:border-gray-700">
            <div className="flex w-full items-center justify-between">
              <h4 className="font-bold">MyOn</h4>
              <p className="text-sm">2025. 03 - 2025. 04</p>
            </div>
            <p className="py-2 text-sm">
              실시간 1:1 채팅 기능을 구현한 메시지 중심 커뮤니티 앱
            </p>

            <div className="grid gap-y-2 text-sm">
              <div className="grid grid-cols-4 gap-2">
                <span className="font-semibold">주요 기능</span>
                <div className="col-span-3 space-y-1">
                  <p>이메일/비밀번호 + 카카오 OAuth를 통한 사용자 인증</p>
                  <p>실시간 1:1 채팅 및 메시지 동기화 (Supabase Realtime 활용)</p>
                  <p>채팅방 생성 및 중복 방지, URL 기반 접근 제어</p>
                  <p>본인 메시지 soft delete 및 삭제 UI 처리</p>
                  <p>에러 발생 시 리다이렉트 및 토스트 알림 피드백</p>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-2">
                <span className="font-semibold">기술 스택</span>
                <div className="col-span-3 flex flex-wrap gap-2">
                  <TechBadge title="Next.js" />
                  <TechBadge title="TypeScript" />
                  <TechBadge title="TailwindCSS" />
                  <TechBadge title="Zustand" />
                  <TechBadge title="React Query" />
                  <TechBadge title="Supabase" />
                </div>
              </div>

              <div className="grid grid-cols-4 gap-2">
                <span className="font-semibold">프로젝트 링크</span>
                <div className="flex items-center gap-1 text-sm font-bold text-gray-600 hover:underline">
                  <GitHub className="h-4 text-gray-600" />
                  <a
                    href="https://github.com/mynolog/inflearn-warmup-3-4-my-on"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Git Repository
                  </a>
                </div>
                <div className="flex items-center gap-1 text-sm font-bold text-gray-600 hover:underline">
                  <ExternalLink className="h-4" />
                  <a
                    href="https://myon.mynolog.me"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded border border-gray-200 p-5 dark:border-gray-700">
            <div className="flex w-full items-center justify-between">
              <h4 className="font-bold">Moayo - 모아요</h4>
              <p className="text-sm">2025. 01 - 2025. 02</p>
            </div>
            <p className="py-2 text-sm">Vue.js와 Express 기반의 도서 리뷰 및 검색 앱</p>
            <div className="grid gap-y-2 text-sm">
              <div className="grid grid-cols-4 gap-2">
                <span className="font-semibold">주요 기능</span>
                <div className="col-span-3 space-y-1">
                  <p>JWT 기반 로그인 및 자동 로그아웃 구현</p>
                  <p>알라딘 API 연동으로 도서 목록 및 검색 구현(디바운스 적용)</p>
                  <p>리뷰 작성, 수정, 삭제 및 별점 기능 구현</p>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-2">
                <span className="font-semibold">기술 스택</span>
                <div className="col-span-3 flex flex-wrap gap-2">
                  <TechBadge title="Vue.js" />
                  <TechBadge title="TypeScript" />
                  <TechBadge title="TailwindCSS" />
                  <TechBadge title="Express" />
                  <TechBadge title="MongoDB" />
                </div>
              </div>

              <div className="grid grid-cols-4 gap-2">
                <span className="font-semibold">프로젝트 링크</span>
                <div className="flex items-center gap-1 text-sm font-bold text-gray-600 hover:underline">
                  <GitHub className="h-4 text-gray-600" />
                  <a
                    href="https://github.com/mynolog/moayo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Git Repository
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded border border-gray-200 p-5 dark:border-gray-700">
            <div className="flex w-full items-center justify-between">
              <h4 className="font-bold">뽀모도로 앱</h4>
              <p className="text-sm">2024. 11 - 2024. 12</p>
            </div>
            <p className="py-2 text-sm">단기 집중력 향상을 위한 React 기반 타이머 앱</p>
            <div className="grid gap-y-2 text-sm">
              <div className="grid grid-cols-4 gap-2">
                <span className="font-semibold">주요 기능</span>
                <div className="col-span-3 space-y-1">
                  <p>분/ 초 단위 타이머 설정 기능</p>
                  <p>타이머 일지정지/ 재시작 기능</p>
                  <p>타이머 종료 시 Notification API 기반 알림 적용</p>
                  <p>스톱워치 및 현재 시간 모드 제공</p>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-2">
                <span className="font-semibold">기술 스택</span>
                <div className="col-span-3 flex flex-wrap gap-2">
                  <TechBadge title="React" />
                  <TechBadge title="TypeScript" />
                  <TechBadge title="TailwindCSS" />
                  <TechBadge title="Jest" />
                </div>
              </div>

              <div className="grid grid-cols-4 gap-2">
                <span className="font-semibold">프로젝트 링크</span>
                <div className="flex items-center gap-1 text-sm font-bold text-gray-600 hover:underline">
                  <GitHub className="h-4 text-gray-600" />
                  <a
                    href="https://github.com/mynolog/pomodoro-timer"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Git Repository
                  </a>
                </div>
                <div className="flex items-center gap-1 text-sm font-bold text-gray-600 hover:underline">
                  <ExternalLink className="h-4" />
                  <a
                    href="https://pomodoro-timer-five-alpha.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
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
        <h3 className="py-4 text-2xl font-bold">Certification</h3>
        <div className="rounded border border-gray-200 p-5 dark:border-gray-700">
          <div className="flex w-full justify-between">
            <h4 className="pb-3 font-bold">정보처리기사</h4>
            <p className="text-sm">2016. 07</p>
          </div>
          <p className="text-sm">한국산업인력공단</p>
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
