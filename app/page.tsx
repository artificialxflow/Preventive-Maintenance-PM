import Link from 'next/link';

export default function Home() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center" style={{height: '80vh'}}>
      <h2>به نسخه نمایشی سیستم مدیریت نگهداری خوش آمدید</h2>
      <Link href="/dashboard" className="btn btn-primary mt-4">ورود به داشبورد</Link>
    </div>
  );
}
