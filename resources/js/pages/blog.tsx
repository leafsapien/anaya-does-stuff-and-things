import { Head, Link } from '@inertiajs/react';
import { home } from '@/routes';

export default function Blog() {
    return (
        <>
            <Head title="Blog" />
            <div className="flex min-h-screen flex-col items-center bg-[#FDFDFC] p-6 text-[#1b1b18] lg:justify-center lg:p-8 dark:bg-[#0a0a0a]">
                <header className="mb-6 w-full max-w-[335px] text-sm lg:max-w-4xl">
                    <nav className="flex items-center justify-start gap-4">
                        <Link
                            href={home()}
                            className="inline-block rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#19140035] dark:text-[#EDEDEC] dark:hover:border-[#3E3E3A]"
                        >
                            ← Home
                        </Link>
                    </nav>
                </header>
                <div className="flex w-full items-center justify-center opacity-100 transition-opacity duration-750 lg:grow starting:opacity-0">
                    <main className="w-full max-w-[335px] lg:max-w-4xl">
                        <div className="rounded-lg bg-white p-6 pb-12 shadow-[inset_0px_0px_0px_1px_rgba(26,26,0,0.16)] lg:p-20 dark:bg-[#161615] dark:text-[#EDEDEC] dark:shadow-[inset_0px_0px_0px_1px_#fffaed2d]">
                            <h1 className="mb-2 text-2xl font-semibold">Blog</h1>
                            <p className="mb-8 text-[#706f6c] dark:text-[#A1A09A]">
                                Thoughts, things I've built, and stuff that interests me.
                            </p>
                            <div className="flex flex-col items-center justify-center py-16 text-center">
                                <p className="text-[#706f6c] dark:text-[#A1A09A]">No posts yet — check back soon!</p>
                            </div>
                        </div>
                    </main>
                </div>
                <div className="hidden h-14.5 lg:block"></div>
            </div>
        </>
    );
}
