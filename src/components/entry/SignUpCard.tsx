'use client'
import { useRouter } from 'next/navigation';

const SignUpCard = () => {
  const router = useRouter();

  const handleSubmit = () => {
    router.push('/');
  }

  return (
    <section className="flex items-center justify-center max-w-lg w-full p-5 mt-32">
      <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden w-full">
        <div className="p-8">
          <h2 className="text-center text-3xl font-extrabold text-white">
            Welcome
          </h2>
          <p className="mt-4 text-center text-gray-400">Create new account</p>
          <div className="mt-8 space-y-6">
            <div className="rounded-md shadow-sm">
              <div>
                <label className="sr-only">Email address</label>
                <input
                  placeholder="Email address"
                  className="appearance-none relative block w-full px-3 py-3 border border-gray-700 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  type="email"
                  name="email"
                  id="email"
                />
              </div>
              <div className="mt-4">
                <label className="sr-only">Password</label>
                <input
                  placeholder="Password"
                  className="appearance-none relative block w-full px-3 py-3 border border-gray-700 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  type="password"
                  name="password"
                  id="password"
                />
              </div>
              <div className="mt-4">
                <label className="sr-only">Confirm Password</label>
                <input
                  placeholder="Confirm Password"
                  className="appearance-none relative block w-full px-3 py-3 border border-gray-700 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  type="password"
                  name="password"
                  id="password"
                />
              </div>
            </div>
            <div>
              <button
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-gray-900 bg-[#dfdfdf] hover:bg-[#b9b8b8] "
                type="submit"
                onClick={handleSubmit}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
        <div className="px-8 py-4 bg-gray-700 text-center">
          <span className="text-gray-400 mr-2">Already have an account?</span>
          <a
            className="font-medium text-[#dfdfdf] hover:text-slate-400"
            href="#"
            onClick={() => {
                router.push('/signin');
            }}
          >
            Sign In
          </a>
        </div>
      </div>
    </section>
  )
}

export default SignUpCard