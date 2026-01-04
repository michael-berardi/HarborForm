import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Liberty Design Studio - High-Performance Digital Infrastructure';
export const size = {
    width: 1200,
    height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)',
                    fontFamily: 'system-ui, sans-serif',
                }}
            >
                {/* Gradient accent orb */}
                <div
                    style={{
                        position: 'absolute',
                        top: '-20%',
                        right: '-10%',
                        width: '600px',
                        height: '600px',
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 70%)',
                        filter: 'blur(60px)',
                    }}
                />
                <div
                    style={{
                        position: 'absolute',
                        bottom: '-30%',
                        left: '-10%',
                        width: '500px',
                        height: '500px',
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(139,92,246,0.25) 0%, transparent 70%)',
                        filter: 'blur(60px)',
                    }}
                />

                {/* Content */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '60px',
                        zIndex: 10,
                    }}
                >
                    {/* Logo text */}
                    <div
                        style={{
                            fontSize: 28,
                            fontWeight: 700,
                            letterSpacing: '0.15em',
                            color: '#ffffff',
                            textTransform: 'uppercase',
                            marginBottom: 40,
                            opacity: 0.9,
                        }}
                    >
                        Liberty Design Studio
                    </div>

                    {/* Main headline */}
                    <div
                        style={{
                            fontSize: 64,
                            fontWeight: 800,
                            textAlign: 'center',
                            lineHeight: 1.1,
                            background: 'linear-gradient(135deg, #ffffff 0%, #94a3b8 100%)',
                            backgroundClip: 'text',
                            color: 'transparent',
                            maxWidth: '900px',
                        }}
                    >
                        High-Performance Digital Infrastructure
                    </div>

                    {/* Tagline */}
                    <div
                        style={{
                            fontSize: 24,
                            color: '#94a3b8',
                            marginTop: 30,
                            textAlign: 'center',
                            maxWidth: '700px',
                        }}
                    >
                        Web Design • SEO • Lead Generation
                    </div>
                </div>

                {/* Bottom accent line */}
                <div
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '4px',
                        background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899)',
                    }}
                />
            </div>
        ),
        {
            ...size,
        }
    );
}
