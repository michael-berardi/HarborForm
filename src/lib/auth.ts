import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"

// Only allow your GitHub account
const ALLOWED_GITHUB_ID = process.env.ALLOWED_GITHUB_ID

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        GitHub({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
    ],
    callbacks: {
        async signIn({ profile }) {
            // Only allow your specific GitHub account
            if (!ALLOWED_GITHUB_ID) {
                console.error("ALLOWED_GITHUB_ID not set")
                return false
            }
            return profile?.id?.toString() === ALLOWED_GITHUB_ID
        },
        async session({ session, token }) {
            if (session.user && token.sub) {
                session.user.id = token.sub
            }
            return session
        },
    },
    pages: {
        signIn: "/0x/login",
        error: "/0x/login",
    },
})
