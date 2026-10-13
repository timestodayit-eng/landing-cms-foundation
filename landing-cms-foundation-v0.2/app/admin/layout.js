import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { verifySessionToken } from '@/lib/admin-auth';

export default async function AdminLayout({ children }) {
  const cookieStore = await cookies();

  const token = cookieStore.get('admin_session')?.value;

  const loggedIn = verifySessionToken(token);

  if (!loggedIn) {
    redirect('/login');
  }

  return children;
}
