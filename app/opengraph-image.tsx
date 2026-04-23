import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Martín Franco — Senior .NET Developer · Applied AI';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 80,
          background:
            'radial-gradient(at 15% 20%, rgba(99,102,241,0.45) 0px, transparent 50%), radial-gradient(at 85% 10%, rgba(236,72,153,0.3) 0px, transparent 50%), radial-gradient(at 75% 85%, rgba(34,211,238,0.3) 0px, transparent 50%), #08090c',
          color: 'white',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', fontSize: 22, letterSpacing: 4, opacity: 0.7 }}>
          MARTIN FRANCO
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ fontSize: 108, lineHeight: 1, fontWeight: 400, fontStyle: 'italic' }}>
            Senior .NET
          </div>
          <div style={{ fontSize: 108, lineHeight: 1 }}>+ Applied AI</div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: 22,
            opacity: 0.75,
          }}
        >
          <div>15+ years · Healthcare · Social security</div>
          <div>martinfranco.dev</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
