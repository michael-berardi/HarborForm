import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';
import AdminDashboard from './AdminDashboard';

export default async function AdminPage() {
    const session = await auth();

    if (!session?.user) {
        redirect('/0x/login');
    }

    return <AdminDashboard user={session.user} />;
}
