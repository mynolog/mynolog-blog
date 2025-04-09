import ContactLinks from '@/components/links/ContactLinks'

export default function AboutPage() {
  return (
    <div className="flex w-full max-w-2xl flex-col items-center justify-center gap-4 px-4">
      <section className="w-full">
        <h2 className="py-4 text-3xl font-bold">이민호</h2>
        <p className="pb-3">사용자와 가까운 UI를 고민하는 프론트엔드 개발자</p>
        <ContactLinks />
      </section>
      <section className="w-full">
        <h3 className="py-4 text-2xl font-bold">About</h3>
        <p>
          리테일 현장에서 쌓은 커뮤니케이션 역량을 바탕으로 사용자 중심 UI/UX를 고민하는
          프론트엔드 개발자를 지향합니다. 실제 프레임워크 기반 프로젝트를 통해 React,
          Next.js Vue.js 등 다양한 기술을 경험하며 실무 감각을 키우고 있습니다.
        </p>
      </section>
      <section className="w-full">
        <h3 className="py-4 text-2xl font-bold">Skils</h3>
        <div className="flex gap-1">
          <img
            src="https://img.shields.io/badge/JavaScript-black?style=for-the-badge&logo=javascript&logoColor=white"
            alt="JavaScript"
          />
          <img
            src="https://img.shields.io/badge/TypeScript-black?style=for-the-badge&logo=typescript&logoColor=white"
            alt="TypeScript"
          />
          <img
            src="https://img.shields.io/badge/React-black?style=for-the-badge&logo=react&logoColor=white"
            alt="React"
          />
          <img
            src="https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white"
            alt="Next.js"
          />
          <img
            src="https://img.shields.io/badge/Vue.js-black?style=for-the-badge&logo=vue.js&logoColor=white"
            alt="Vue.js"
          />
          <img
            src="https://img.shields.io/badge/Express-black?style=for-the-badge&logo=express&logoColor=white"
            alt="Express"
          />
        </div>
      </section>
      {/* <section className="w-full">
        <h3 className="py-4 text-2xl font-bold">Project</h3>
      </section> */}
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
