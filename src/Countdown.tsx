import { FlipDigit } from './FlipDigit'

const DAY = 86_400_000

function Unit({ value, label, minDigits = 2 }: { value: number; label: string; minDigits?: number }) {
  const digits = String(value).padStart(minDigits, '0').split('')
  return (
    <div className="unit">
      <div className="digits">
        {digits.map((d, i) => (
          // Key from the right so a digit keeps its identity when the day count shrinks (100 → 99).
          <FlipDigit key={digits.length - i} value={d} />
        ))}
      </div>
      <div className="unit-label">{label}</div>
    </div>
  )
}

export function Countdown({ label, target, now }: { label: string; target: number; now: number }) {
  const remaining = target - now
  const isToday = remaining <= 0

  let body
  if (isToday) {
    body = <div className="today">Today! 🎉</div>
  } else {
    const totalSeconds = Math.floor(remaining / 1000)
    body = (
      <div className="units">
        <Unit value={Math.floor(totalSeconds / 86400)} label="Days" />
        <Unit value={Math.floor(totalSeconds / 3600) % 24} label="Hours" />
        <Unit value={Math.floor(totalSeconds / 60) % 60} label="Minutes" />
        <Unit value={totalSeconds % 60} label="Seconds" />
      </div>
    )
  }

  return (
    <section className="tile">
      <h2 className="tile-label">{label}</h2>
      {body}
    </section>
  )
}

/** A countdown stays visible through its day (24h after the target), then disappears. */
export const isVisible = (target: number, now: number) => now < target + DAY
