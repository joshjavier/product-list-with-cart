import { ReactNode } from 'react'

export interface Props {
  children: ReactNode
}

export default function Infobox({ children }: Props) {
  return (
    <div className="infobox">{children}</div>
  )
}
