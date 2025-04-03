import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET(request: Request) {
  const fontUrl = new URL('/fonts/42dotSans-SemiBold.ttf', request.url).toString()
  const fontRes = await fetch(fontUrl)
  const fontData = await fontRes.arrayBuffer()

  const { searchParams } = new URL(request.url)
  const title = searchParams.get('title') || 'mynolog'

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          width: '100%',
          backgroundColor: '#0f172a',
          color: '#f8fafc',
          padding: '48px',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            fontSize: '2.2rem',
            fontWeight: 500,
            color: '#94a3b8',
            marginBottom: '16px',
          }}
        >
          mynolog
        </div>
        <div
          style={{
            fontSize: '2.6rem',
            fontWeight: 800,
            lineHeight: 1.25,
            maxWidth: '1000px',
          }}
        >
          {title}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: '42dot Sans',
          data: fontData,
          style: 'normal',
        },
      ],
    },
  )
}
