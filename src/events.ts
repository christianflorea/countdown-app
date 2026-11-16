export interface CountdownEvent {
  label: string
  /** ISO timestamp. All dates are midnight Pacific Time (PST = UTC-8 in December). */
  target: string
}

export const EVENTS: CountdownEvent[] = [
  { label: 'Christmas Tree and Nutcracker Date 🎨', target: '2026-12-02T00:00:00-08:00' },
  { label: 'Out with the old, in with the new 🟣⬅️', target: '2026-12-07T00:00:00-08:00' },
  { label: "Ella's BIG 23 Birthday Bash 🥳💕", target: '2026-12-24T00:00:00-08:00' },
  { label: 'Christmas 🎄', target: '2026-12-25T00:00:00-08:00' },
]
