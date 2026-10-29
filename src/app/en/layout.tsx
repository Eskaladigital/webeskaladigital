import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'ESKALA | Web Design and Digital Studio for Labels and Brands',
    template: '%s | ESKALA Digital',
  },
}

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return children
}
