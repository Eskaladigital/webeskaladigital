import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'ESKALA | Digital Marketing Agency',
    template: '%s | ESKALA Digital',
  },
}

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return children
}
