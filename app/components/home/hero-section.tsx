import Image from "next/image";

export function HeroSection() {
  return (
    <section id="top" className="px-4 pb-6 pt-0 sm:px-6 sm:pb-8 lg:px-8">
      <div className="mx-auto max-w-6xl animate-fade-up-soft">
        <div className="rounded-[2.25rem] bg-white px-6 py-[28px] sm:px-8 lg:px-10">
          <div className="grid gap-5">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="h-[25px] w-[25px] rounded-full bg-[#eea11a] shadow-[0_0_0_4px_rgba(255,255,255,0.75)]" />
                  <p className="text-[1.8rem] font-semibold tracking-tight text-slate-950 sm:text-[2rem]">
                    Zahoor Ahmed
                  </p>
                </div>
                <div className="max-w-xl space-y-0.5 pl-9 text-sm leading-[1.7] text-slate-900 sm:text-[0.98rem]">
                  <p>Entrepreneur in AI, data, and digital products</p>
                  <p>Turning ideas into practical systems and ventures</p>
                </div>
              </div>
            </div>

            <div className="grid gap-5 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
              <div className="relative mx-auto w-full max-w-[20rem] lg:mx-0 lg:justify-self-center xl:max-w-[22rem]">
                <div className="relative aspect-square overflow-hidden rounded-full border-[3px] border-white bg-[#d5d5d5] shadow-[0_18px_36px_rgba(15,23,42,0.10)]">
                  <Image
                    src="/zahoor-profile-r1.png"
                    alt="Portrait of Zahoor Ahmed"
                    fill
                    sizes="(max-width: 1024px) 72vw, 384px"
                    className="scale-[1.22] object-cover"
                    style={{ objectPosition: "center -4%" }}
                    priority
                  />
                </div>
              </div>

              <div className="max-w-2xl space-y-4">
                <div className="space-y-4">
                  <p className="-ml-0.5 text-[3.35rem] font-semibold leading-none tracking-tight text-slate-950 sm:text-[4.1rem]">
                    Hello
                  </p>
                  <p className="pl-0.5 text-[1.55rem] font-semibold tracking-tight text-slate-950 sm:text-[1.7rem]">
                    What drives me
                  </p>
                </div>

                <p className="max-w-xl pl-0.5 text-[0.98rem] leading-7 text-slate-900 sm:text-[1rem]">
                  I&apos;m building at the intersection of AI, data,
                  automation, and digital products. My focus is not just on
                  ideas, but on turning them into practical systems, meaningful
                  ventures, and work that creates real value.
                </p>

                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href="#projects"
                    className="inline-flex items-center justify-center rounded-full bg-[#a87908] px-6 py-3 text-[0.95rem] font-medium tracking-tight text-white shadow-[0_10px_24px_rgba(168,121,8,0.18)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_28px_rgba(168,121,8,0.24)]"
                  >
                    Projects
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-[#f7f3ee] px-6 py-3 text-[0.95rem] font-medium tracking-tight text-slate-950 shadow-[0_6px_18px_rgba(15,23,42,0.05)] transition hover:-translate-y-0.5 hover:border-slate-300 hover:bg-white"
                  >
                    Contact
                  </a>
                  <a
                    href="mailto:hello@zahoorahmed.com"
                    className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-[#f7f3ee] px-6 py-3 text-[0.95rem] font-medium tracking-tight text-slate-950 shadow-[0_6px_18px_rgba(15,23,42,0.05)] transition hover:-translate-y-0.5 hover:border-slate-300 hover:bg-white"
                  >
                    Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
