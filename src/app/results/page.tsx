type Match = { date: string; competition: string; opponent: string; score: string };

const demo: Match[] = [
  { date: "2025-04-20", competition: "九大リーグ", opponent: "XXXX大", score: "2-1" },
  { date: "2025-05-03", competition: "九州大会", opponent: "YYYY大", score: "1-1 (PK 4-3)" },
];

export default function ResultsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-semibold">Results</h1>
      <p className="mt-4 text-neutral-700">主要戦績（デモ）。後で正式データに差し替えます。</p>
      <div className="mt-6 overflow-x-auto">
        <table className="min-w-full text-sm border">
          <thead className="bg-neutral-50">
            <tr>
              <th className="text-left p-3 border">日付</th>
              <th className="text-left p-3 border">大会</th>
              <th className="text-left p-3 border">相手</th>
              <th className="text-left p-3 border">スコア</th>
            </tr>
          </thead>
          <tbody>
            {demo.map((m, i) => (
              <tr key={i} className="odd:bg-white even:bg-neutral-50">
                <td className="p-3 border">{m.date}</td>
                <td className="p-3 border">{m.competition}</td>
                <td className="p-3 border">{m.opponent}</td>
                <td className="p-3 border">{m.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
