type ProjectVisualType = "ez-leads" | "automation" | "analytics";

type ProjectVisualProps = {
  type: ProjectVisualType;
  title: string;
};

export function ProjectVisual({ type, title }: ProjectVisualProps) {
  return (
    <div
      className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-slate-200 bg-slate-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
      role="img"
      aria-label={`${title} preview placeholder`}
    >
      <div className="absolute inset-0 opacity-80" />

      {type === "ez-leads" ? (
        <>
          <div className="absolute inset-0 bg-[linear-gradient(135deg,#0f172a_0%,#14532d_55%,#166534_100%)]" />
          <div className="absolute top-3 left-3 rounded-lg bg-black/20 px-2 py-1 text-[10px] font-semibold tracking-[0.18em] text-emerald-100 uppercase">
            WhatsApp CRM
          </div>
          <div className="absolute right-3 bottom-3 left-3 space-y-2">
            <div className="ml-auto w-[72%] rounded-2xl rounded-tr-sm bg-emerald-500/90 px-3 py-2 text-[10px] leading-4 text-white">
              New lead captured from campaign
            </div>
            <div className="w-[68%] rounded-2xl rounded-tl-sm bg-white/12 px-3 py-2 text-[10px] leading-4 text-emerald-50">
              AI summary ready for follow-up
            </div>
            <div className="ml-auto w-[58%] rounded-2xl rounded-tr-sm bg-emerald-500/75 px-3 py-2 text-[10px] leading-4 text-white">
              Assign to sales workflow
            </div>
          </div>
        </>
      ) : null}

      {type === "automation" ? (
        <>
          <div className="absolute inset-0 bg-[linear-gradient(135deg,#0f172a_0%,#172554_55%,#1e3a8a_100%)]" />
          <div className="absolute top-3 left-3 rounded-lg bg-white/10 px-2 py-1 text-[10px] font-semibold tracking-[0.18em] text-sky-100 uppercase">
            Workflow
          </div>
          <div className="absolute inset-0 flex items-center justify-center gap-3 px-4">
            {["Trigger", "Process", "Notify"].map((step, index) => (
              <div key={step} className="flex items-center gap-3">
                <div className="rounded-xl border border-sky-300/25 bg-white/10 px-3 py-4 text-center text-[10px] font-medium text-sky-50">
                  {step}
                </div>
                {index < 2 ? (
                  <span className="text-sky-300/70" aria-hidden="true">
                    →
                  </span>
                ) : null}
              </div>
            ))}
          </div>
        </>
      ) : null}

      {type === "analytics" ? (
        <>
          <div className="absolute inset-0 bg-[linear-gradient(135deg,#0f172a_0%,#1e293b_50%,#334155_100%)]" />
          <div className="absolute top-3 left-3 rounded-lg bg-white/10 px-2 py-1 text-[10px] font-semibold tracking-[0.18em] text-slate-100 uppercase">
            KPI Dashboard
          </div>
          <div className="absolute right-4 bottom-4 left-4 rounded-xl border border-white/10 bg-white/5 p-3">
            <div className="mb-3 flex h-12 items-end gap-2">
              {[18, 30, 22, 38, 26].map((height, index) => (
                <div
                  key={index}
                  className="flex-1 rounded-sm bg-sky-400/70"
                  style={{ height: `${height}px` }}
                />
              ))}
            </div>
            <div className="h-px bg-white/10" />
            <div className="mt-2 flex justify-between text-[9px] text-slate-300">
              <span>Experience</span>
              <span>Telecom KPIs</span>
              <span>Reporting</span>
            </div>
          </div>
        </>
      ) : null}

      <div className="absolute top-3 right-3 rounded-full bg-white/10 px-2 py-0.5 text-[9px] font-medium text-white/70">
        Preview
      </div>
    </div>
  );
}
