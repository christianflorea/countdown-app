import { useState } from 'react'

/** A single flip-clock card that animates whenever its value changes. */
export function FlipDigit({ value }: { value: string }) {
  const [state, setState] = useState({ current: value, previous: value, flips: 0 })
  if (state.current !== value) {
    setState({ current: value, previous: state.current, flips: state.flips + 1 })
  }
  const { current, previous, flips } = state
  const animating = flips > 0

  return (
    <div className="flip">
      {/* Static halves: new value on top, old value on the bottom (until the flap covers it). */}
      <div className="half top"><span>{current}</span></div>
      <div className="half bottom"><span>{animating ? previous : current}</span></div>
      {animating && (
        <>
          <div key={`t${flips}`} className="half top flap-top"><span>{previous}</span></div>
          <div key={`b${flips}`} className="half bottom flap-bottom"><span>{current}</span></div>
        </>
      )}
    </div>
  )
}
