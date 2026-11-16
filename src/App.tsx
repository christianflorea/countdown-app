import { useEffect, useState } from 'react'
import { Countdown, isVisible } from './Countdown'
import { EVENTS } from './events'

const events = EVENTS.map((e) => ({ ...e, time: Date.parse(e.target) })).sort((a, b) => a.time - b.time)

export default function App() {
  const [now, setNow] = useState(() => Date.now())

  useEffect(() => {
    // Tick a few times a second so each change lands right on the second boundary.
    const id = setInterval(() => setNow(Date.now()), 250)
    return () => clearInterval(id)
  }, [])

  const visible = events.filter((e) => isVisible(e.time, now))

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
      <p className="message">Counting down the days till you're back, miss you my love</p>
    </main>
  )
}
