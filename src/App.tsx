import { useEffect, useState } from 'react'
import { Countdown } from './Countdown'
import { EVENTS } from './events'

const DAY = 86_400_000

// Each countdown shows "Today!" once its time arrives, then disappears at the end of
// that day (midnight PT, i.e. PST = UTC-8 in December).
const events = EVENTS.map((e) => ({
  ...e,
  time: Date.parse(e.target),
  hideAt: Date.parse(`${e.target.slice(0, 10)}T00:00:00-08:00`) + DAY,
})).sort((a, b) => a.time - b.time)

export default function App() {
  const [now, setNow] = useState(() => Date.now())

  useEffect(() => {
    // Tick a few times a second so each change lands right on the second boundary.
    const id = setInterval(() => setNow(Date.now()), 250)
    return () => clearInterval(id)
  }, [])

  const visible = events.filter((e) => now < e.hideAt)

  return (
    <main className="page">
      <h1 className="title">Ella's Very Important Countdowns</h1>
      {visible.length === 0 ? (
        <p className="empty">No upcoming countdowns.</p>
      ) : (
        <div className="grid">
          {visible.map((e) => (
            <Countdown key={e.label} label={e.label} target={e.time} now={now} />
          ))}
        </div>
      )}
      <p className="message">Counting down the days till you're back,<br />going to miss you my love</p>
    </main>
  )
}
