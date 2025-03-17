import { useState } from 'react';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import { Button } from "./ui/button";

export default function AuthPage() {
    const [isCustomer, setIsCustomer] = useState(true);

    return (
        <div className="min-h-screen flex">
            {/* Left Section */}
            <div className="w-1/2 bg-blue-900 text-white flex flex-col justify-center items-center p-10">
                <h1 className="text-4xl font-bold mb-4">Join the printing revolution</h1>
                <p className="text-lg mb-6">Connect with local print shops or grow your printing business with our platform.</p>
                <blockquote className="italic mb-4">
                    "PrintConnect has transformed how I handle document printing. No more printer headaches!"
                </blockquote>
                <p className="font-bold">— Alex Morgan, Student</p>
            </div>

            {/* Right Section */}
            <div className="w-1/2 bg-white p-10">
                <div className="flex items-center justify-between mb-6">
                    <div className={`py-2 px-4 cursor-pointer ${isCustomer ? 'bg-blue-500 text-white' : 'bg-gray-200'}`} onClick={() => setIsCustomer(true)}>Customer</div>
                    <div className={`py-2 px-4 cursor-pointer ${!isCustomer ? 'bg-blue-500 text-white' : 'bg-gray-200'}`} onClick={() => setIsCustomer(false)}>Shopkeeper</div>
                </div>

                <h2 className="text-2xl font-bold mb-4">Create an account</h2>
                <p className="text-gray-500 mb-4">Enter your information to get started</p>

                <div className="flex flex-col gap-4">
                    <Button className="flex items-center justify-center gap-2 bg-red-500 text-white py-3 rounded-md hover:bg-red-600">
                        <FaGoogle /> Continue with Google
                    </Button>
                    <Button className="flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700">
                        <FaFacebook /> Continue with Facebook
                    </Button>
                </div>

                <div className="my-6 text-center text-gray-400">OR CONTINUE WITH</div>

                <form className="space-y-4">
                    <div className="flex gap-4">
                        <input type="text" placeholder="First Name" className="w-1/2 p-3 border rounded-md" />
                        <input type="text" placeholder="Last Name" className="w-1/2 p-3 border rounded-md" />
                    </div>
                    <input type="email" placeholder="Email" className="w-full p-3 border rounded-md" />
                    <input type="password" placeholder="Password" className="w-full p-3 border rounded-md" />

                    <Button className="bg-blue-500 text-white w-full py-3 rounded-md hover:bg-blue-600">
                        {isCustomer ? 'Create Customer Account' : 'Create Shopkeeper Account'}
                    </Button>
                </form>
            </div>
        </div>
    );
}
