import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';

export default async function AssistantLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await auth();

    if (!session?.user) {
        redirect('/0x/login');
    }

    return <>{children}</>;
}
