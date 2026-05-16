import React from 'react';
import { data, useNavigate } from 'react-router';
import { useForm } from 'react-hook-form'
import { loginUser } from '../api/authApi';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../features/userSlice';
import PublicRoute from '../router/PublicRoute';

const Login = () => {
    let navigate = useNavigate()
    let dispatch = useDispatch();
    let { currentUser } = useSelector((state) => state.user)
    console.log(currentUser);

    let {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        mode: "onChange"
    })
    let handlesub = async (data) => {
        try {
            console.log(data);
            let res = await loginUser(data);
            dispatch(addUser(res.data.user))
            navigate('/profile')
            reset(                                                                                                                                      )
        } catch (error) {
            console.log(error);
        }

    }
    return (
        <div className="min-h-screen bg-slate-900 flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-sans">
            <PublicRoute/>
            <div className="sm:mx-auto sm:w-full sm:max-max-md">
                {/* Logo or Brand Name */}
                <h2 className="text-center text-3xl font-extrabold text-white tracking-tight">
                    Welcome back to <span className="text-indigo-500">DevHub</span>
                </h2>
                <p className="mt-2 text-center text-sm text-slate-400">
                    Don't have an account?{' '}
                    <a href="/auth/register" className="font-medium text-indigo-400 hover:text-indigo-300">
                        Sign up for free
                    </a>
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-slate-800 py-8 px-4 shadow-2xl border border-slate-700 sm:rounded-xl sm:px-10">
                    <form
                        onSubmit={handleSubmit(handlesub)}
                        className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-slate-300">
                                Email address
                            </label>
                            <div className="mt-1">
                                <input
                                    {...register('email', { required: "please fill the field" })}
                                    type="email"
                                    required
                                    className="appearance-none block w-full px-3 py-2 border border-slate-600 rounded-md shadow-sm placeholder-slate-500 bg-slate-700 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    placeholder="you@example.com"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-300">
                                Password
                            </label>
                            <div className="mt-1">
                                <input
                                    {...register('password', { required: "please fill the field" })}
                                    type="password"
                                    required
                                    className="appearance-none block w-full px-3 py-2 border border-slate-600 rounded-md shadow-sm placeholder-slate-500 bg-slate-700 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        {/* <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-slate-600 rounded bg-slate-700"
                                />
                                <label className="ml-2 block text-sm text-slate-400">
                                    Remember me
                                </label>
                            </div>


                        </div> */}

                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>

                    {/* <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-600"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-slate-800 text-slate-400">Or continue with</span>
              </div>
            </div>

            <div className="mt-6">
              <button className="w-full inline-flex justify-center py-2 px-4 border border-slate-600 rounded-md shadow-sm bg-slate-700 text-sm font-medium text-white hover:bg-slate-600 transition-colors">
                <span className="sr-only">Sign in with GitHub</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                </svg>
                <span className="ml-2">GitHub</span>
              </button>
            </div>
          </div> */}
                </div>
            </div>
        </div>
    );
};

export default Login;