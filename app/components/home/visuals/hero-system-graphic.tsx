export function HeroSystemGraphic() {
  const nodes = [
    { x: 24, y: 28, label: "Data" },
    { x: 76, y: 22, label: "AI" },
    { x: 50, y: 58, label: "Workflow" },
    { x: 18, y: 72, label: "Product" },
    { x: 82, y: 70, label: "Insight" },
  ];

  const links = [
    [0, 1],
    [1, 2],
    [2, 3],
    [2, 4],
    [0, 2],
    [1, 4],
  ] as const;

  return (
    <div
      aria-hidden="true"
      className="hidden h-full min-h-[9rem] overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-[linear-gradient(135deg,#f8fafc,#eff6ff)] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] lg:block"
    >
      <p className="text-[10px] font-bold tracking-[0.22em] text-sky-600 uppercase">
        Systems view
      </p>
      <svg viewBox="0 0 100 88" className="mt-2 h-full w-full">
        {links.map(([from, to]) => (
          <line
            key={`${from}-${to}`}
            x1={nodes[from].x}
            y1={nodes[from].y}
            x2={nodes[to].x}
            y2={nodes[to].y}
            stroke="rgba(56, 189, 248, 0.35)"
            strokeWidth="1.2"
          />
        ))}
        {nodes.map((node) => (
          <g key={node.label}>
            <circle cx={node.x} cy={node.y} r="7" fill="#2563eb" fillOpacity="0.12" />
            <circle cx={node.x} cy={node.y} r="4" fill="#2563eb" />
            <text
              x={node.x}
              y={node.y + 14}
              textAnchor="middle"
              fontSize="6"
              fill="#475569"
            >
              {node.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
