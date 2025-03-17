import { useNavigate } from 'react-router-dom';
import { Button, Card, CardContent } from "./ui/card";
import { motion } from "framer-motion";
import { FaLock, FaFileUpload, FaStore, FaPrint, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function LandingPage() {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen bg-white text-black">
            {/* Top Navigation Bar */}
            <nav className="bg-blue-600 text-white py-4 px-6 flex justify-between items-center">
                <h1 className="text-2xl font-bold">PrintSecure</h1>
                <div className="flex gap-4">
                    <a href="#" className="hover:underline">Home</a>
                    <a href="#" className="hover:underline">Services</a>
                    <a href="#" className="hover:underline">Contact</a>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="text-center py-20 px-4">
                <h1 className="text-5xl font-bold">Print Documents Securely, Anywhere</h1>
                <p className="mt-4 text-lg text-gray-600">Your documents, your privacy. Print with confidence at any of our verified locations.</p>
                <div className="mt-6 flex justify-center gap-4">
                <Button 
                        className="bg-blue-500 text-white px-6 py-3 rounded-2xl shadow-lg hover:bg-blue-600"
                        onClick={() => navigate('/auth')}
                    >
                        Get Started
                    </Button>
                    <Button className="bg-gray-200 px-6 py-3 rounded-2xl hover:bg-gray-300">Learn More</Button>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-20 bg-gray-100">
                <h2 className="text-center text-3xl font-semibold mb-10">How It Works</h2>
                <div className="flex justify-center gap-6">
                    {[{ icon: FaFileUpload, label: 'Upload' }, { icon: FaStore, label: 'Select Shop' }, { icon: FaPrint, label: 'Print' }].map(({ icon: Icon, label }, idx) => (
                        <Card key={idx} className="p-6 w-60 text-center shadow-md hover:shadow-lg">
                            <CardContent>
                                <Icon className="text-4xl text-blue-500 mx-auto mb-2" />
                                <h3 className="text-xl font-bold mb-2">{label}</h3>
                                <p className="text-gray-600">{getStepDescription(label)}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Security Section */}
            <section className="py-20 px-4">
                <h2 className="text-3xl font-bold text-center">Bank-Level Security for Your Documents</h2>
                <div className="mt-6 flex flex-col items-center">
                    <p className="flex items-center gap-2"><FaLock /> End-to-End Encryption</p>
                    <p className="flex items-center gap-2"><FaLock /> Auto-Deletion after printing</p>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-black text-white py-10 px-6">
                <div className="grid grid-cols-4 gap-6">
                    <div>
                        <h3 className="font-bold">PrintSecure</h3>
                        <p className="text-gray-400">Secure document printing solutions for everyone.</p>
                    </div>
                    <div>
                        <h3 className="font-bold">Quick Links</h3>
                        <p>About Us</p>
                        <p>Contact</p>
                        <p>Careers</p>
                    </div>
                    <div>
                        <h3 className="font-bold">Legal</h3>
                        <p>Privacy Policy</p>
                        <p>Terms of Service</p>
                        <p>Cookie Policy</p>
                    </div>
                    <div>
                        <h3 className="font-bold">Follow Us</h3>
                        <div className="flex gap-2">
                            <FaFacebook className="text-white text-xl" />
                            <FaTwitter className="text-white text-xl" />
                            <FaInstagram className="text-white text-xl" />
                        </div>
                    </div>
                </div>
                <p className="text-center text-gray-500 mt-8">© 2025 PrintSecure. All rights reserved.</p>
            </footer>
        </div>
    );
}

function getStepDescription(step) {
    switch (step) {
        case 'Upload':
            return 'Upload your documents securely with end-to-end encryption.';
        case 'Select Shop':
            return 'Choose from a network of verified print shops near you.';
        case 'Print':
            return 'Pick up your documents or get them delivered.';
        default:
            return '';
    }
}