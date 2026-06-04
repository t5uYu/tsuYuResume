const navItems = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const experiences = [
  {
    role: "UE 游戏客户端开发实习生",
    company: "腾讯 IEG 天美 T1 工作室 · 元梦之星项目组",
    period: "2025.10 — 至今",
    points: [
      {
        title: "资产管线开发",
        body: "设计并实现 PAK 资产错误依赖分析管线，在构建阶段生成全量资产引用关系，结合打包配置检测跨 PAK 依赖风险，规避复制资产副本导致的热更链路断裂隐患。",
      },
      {
        title: "音频系统优化",
        body: "负责 Wwise 音频系统 Bug 排查，熟悉 Wwise + AnimNotify / AnimNotifyState 触发架构，使用 Wwise Profiler 捕获音频事件并定位 bank 命名、Event 时机和 bank 加载问题。",
      },
      {
        title: "效率工具开发",
        body: "开发跨仓库资产复制工具，实现完整依赖树遍历与引用重定向，支持批量定向转移带关联依赖的资源，并作为项目组标准工具投入使用。",
      },
    ],
  },
];

const projects = [
  {
    name: "基于虚幻引擎和 LLM 的轻量 UGC 系统",
    tags: ["UE5", "C++", "UnLua", "FastAPI", "glTF", "LLM Function Calling"],
    period: "2026.02 — 2026.05",
    links: [
      { label: "Game Client", href: "https://github.com/t5uYu/FPS" },
      { label: "Fab Backend", href: "https://github.com/t5uYu/Fab" },
    ],
    summary:
      "以 FPS 原型为运行载体，打通从 AI 生成资产、资产平台上传分发到游戏内运行时编辑复用的完整链路。",
    points: [
      "实现 C++ / UnLua 分层架构，C++ 封装平台通信、Token 管理和运行时导入，Lua 负责业务流程与编辑器状态。",
      "设计 uefab:// URL Scheme 桥接机制，将 WebBrowser 内嵌页面下载动作转入本地下载、glTF 导入和预制体注册流程。",
      "基于 glTFRuntime 实现 .glb 运行时导入与 dyn:{uuid} 动态预制体注册，场景存档只记录 prefab id 与 Transform。",
      "实现无需 UE Editor 的运行时 UGC 编辑器，支持预制体放置、Transform 调整、JSON 存档和地图 zip 打包发布。",
      "使用 FastAPI + Docker Compose 搭建 Fab 风格资产平台，支持模型和地图上传分发、JWT 鉴权、社区互动与团队协作。",
      "集成 LLM Function Calling 工具白名单，将自然语言意图映射为受控工具调用，执行边界收敛在本地校验逻辑中。",
    ],
  },
  {
    name: "Wwise_MCP / Wwise_Agent",
    tags: ["Python", "WAAPI", "MCP", "RAG", "Agent"],
    period: "Open Source",
    links: [
      { label: "Wwise_MCP", href: "https://github.com/t5uYu/Wwise_MCP" },
      { label: "Wwise_Agent", href: "https://github.com/tsuYu-pro/Wwise_Agent" },
    ],
    summary:
      "基于 WAAPI 的 Wwise 2024.1 MCP Server 与自然语言 Wwise 操作 Agent，让 Cursor、Claude Desktop 等 AI 客户端通过自然语言操作 Wwise 工程。",
    points: [
      "封装 17 个工具，覆盖项目结构查询、对象创建/移动/删除、Event 触发链路验证等核心场景。",
      "底层通过 WebSocket 与 WAAPI 通信，并提供 execute_waapi 兜底工具以覆盖未封装场景。",
      "Agent 集成 OpenAI API、本地 RAG 知识库与反思机制，支持多步骤音频工程任务自动化执行。",
    ],
  },
];

const skillGroups = [
  {
    title: "编程语言",
    skills: ["C++", "C++11", "Python", "TypeScript", "UnLua"],
  },
  {
    title: "UE 开发",
    skills: ["UE5", "蓝图 / C++ 混合开发", "反射与 GC", "GAS", "Pak 打包", "资产管理"],
  },
  {
    title: "工具与中间件",
    skills: ["Wwise", "Wwise Profiler", "WAAPI", "MCP", "Cursor", "Docker"],
  },
  {
    title: "系统方向",
    skills: ["UGC Editor", "Runtime Asset Import", "JWT Auth", "FastAPI", "LLM Tools"],
  },
];

function SectionTitle({
  eyebrow,
  title,
}: Readonly<{ eyebrow: string; title: string }>) {
  return (
    <div className="mb-8">
      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#071016] text-slate-100">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_32%),radial-gradient(circle_at_70%_20%,_rgba(59,130,246,0.16),_transparent_30%),linear-gradient(180deg,_rgba(15,23,42,0.15),_rgba(2,6,23,0.8))]" />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col px-5 py-6 sm:px-8 lg:px-10">
        <header className="sticky top-4 z-20 mb-20 flex items-center justify-between rounded-full border border-white/10 bg-slate-950/70 px-5 py-3 shadow-2xl shadow-cyan-950/20 backdrop-blur">
          <a href="#" className="font-mono text-sm font-semibold text-white">
            tsuYu.Resume
          </a>
          <nav className="hidden gap-6 text-sm text-slate-300 sm:flex">
            {navItems.map((item) => (
              <a key={item.href} className="transition hover:text-cyan-200" href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
        </header>

        <section className="grid min-h-[70vh] items-center gap-12 pb-24 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-100">
              UE 游戏客户端开发 · 校招
            </p>
            <h1 className="text-6xl font-black tracking-tight text-white sm:text-7xl lg:text-8xl">
              余威
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-9 text-slate-300">
              聚焦 UE5 游戏客户端、资产管线、Wwise 音频工具链与轻量 UGC 系统。当前在腾讯 IEG 天美 T1 工作室参与《元梦之星》项目客户端开发。
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-sm font-medium">
              {["UE5", "C++", "UnLua", "Pak Pipeline", "Wwise", "UGC System", "FastAPI"].map(
                (tag) => (
                  <span key={tag} className="rounded-full bg-white/10 px-4 py-2 text-slate-200">
                    {tag}
                  </span>
                ),
              )}
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <a className="rounded-full bg-cyan-300 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-200" href="#projects">
                View Projects
              </a>
              <a className="rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition hover:border-cyan-200 hover:text-cyan-100" href="mailto:1196581141@qq.com">
                Contact Me
              </a>
            </div>
          </div>
          <aside className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-cyan-950/20 backdrop-blur">
            <div className="rounded-[1.5rem] bg-slate-950/70 p-6">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Education</p>
              <h2 className="mt-4 text-2xl font-semibold text-white">武汉科技大学</h2>
              <p className="mt-2 text-slate-300">软件工程 · 本科 · 2022.09 — 2026.06</p>
              <div className="mt-6 h-px bg-white/10" />
              <p className="mt-6 text-sm leading-7 text-slate-400">
                主修课程：数据结构、面向对象程序设计、计算机网络、操作系统、软件设计与体系结构、软件工程、项目管理、软件测试、算法设计与分析。
              </p>
            </div>
          </aside>
        </section>

        <section id="experience" className="py-20">
          <SectionTitle eyebrow="Experience" title="实习经历" />
          <div className="space-y-6">
            {experiences.map((item) => (
              <article key={item.role} className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur">
                <div className="flex flex-col justify-between gap-4 border-b border-white/10 pb-6 md:flex-row">
                  <div>
                    <h3 className="text-2xl font-semibold text-white">{item.role}</h3>
                    <p className="mt-2 text-cyan-100">{item.company}</p>
                  </div>
                  <p className="font-mono text-sm text-slate-400">{item.period}</p>
                </div>
                <div className="mt-6 grid gap-4 md:grid-cols-3">
                  {item.points.map((point, index) => (
                    <div key={point.title} className="rounded-2xl bg-slate-950/50 p-5">
                      <p className="font-mono text-sm text-cyan-300">0{index + 1}</p>
                      <h4 className="mt-3 font-semibold text-white">{point.title}</h4>
                      <p className="mt-3 text-sm leading-7 text-slate-400">{point.body}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="py-20">
          <SectionTitle eyebrow="Projects" title="个人作品" />
          <div className="grid gap-6">
            {projects.map((project) => (
              <article key={project.name} className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur">
                <div className="flex flex-col justify-between gap-6 lg:flex-row">
                  <div>
                    <p className="font-mono text-sm text-slate-400">{project.period}</p>
                    <h3 className="mt-3 text-2xl font-semibold text-white">{project.name}</h3>
                    <p className="mt-4 max-w-3xl leading-8 text-slate-300">{project.summary}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex shrink-0 flex-wrap items-start gap-3">
                    {project.links.map((link) => (
                      <a key={link.href} className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-300 hover:text-slate-950" href={link.href} target="_blank" rel="noreferrer">
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
                <ul className="mt-6 grid gap-3 text-sm leading-7 text-slate-400 lg:grid-cols-2">
                  {project.points.map((point) => (
                    <li key={point} className="rounded-2xl bg-slate-950/45 p-4">
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="py-20">
          <SectionTitle eyebrow="Skills" title="相关技能" />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {skillGroups.map((group) => (
              <div key={group.title} className="rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-5">
                <h3 className="font-semibold text-white">{group.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill} className="rounded-full bg-slate-950/60 px-3 py-1.5 text-sm text-slate-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <footer id="contact" className="border-t border-white/10 py-10 text-sm text-slate-400">
          <div className="flex flex-col justify-between gap-4 sm:flex-row">
            <p>Built with Next.js · Deployed on GitHub Pages</p>
            <div className="flex gap-4">
              <a className="hover:text-cyan-200" href="mailto:1196581141@qq.com">
                Email
              </a>
              <a className="hover:text-cyan-200" href="https://github.com/t5uYu" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
