import Link from "next/link";

export const metadata = {
    title: 'Page Not Found || 404'
  }

const NotFound = () => {
    
    return (
        <main class="grid min-h-screen bg-gray-900 body-font place-items-center px-6 py-24 sm:py-32 lg:px-8">
            <div class="text-center">
                <h1 class="text-5xl font-semibold text-indigo-600">404</h1>
                <h1 class="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">Page not found</h1>
                <p class="mt-6 text-base leading-7 text-gray-500">Sorry, we couldn’t find the page you’re looking for.</p>
                <div class="mt-10 flex items-center justify-center gap-x-6">
                    <Link href="/" class=" bg-sky-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Go back home</Link>
                </div>
            </div>
        </main>
    );
};

export default NotFound;

