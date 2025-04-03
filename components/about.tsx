import { FaTwitter, FaGithub, FaLinkedinIn, FaMediumM } from 'react-icons/fa';
import { SiZenn } from 'react-icons/si';
import Image from "next/image";


const About = () => {
    return (
        <div id="about" className="flex flex-col items-center">
            <Image
                className="w-16 h-16 rounded-full object-cover"
                src="/profile.jpg" 
                alt="Profile"
            />
            <h2 className="text-xl font-bold text-gray-800">Chota Kameya</h2>
            <p className="text-gray-500">1st year doctor student at The University of Electro-Communications</p>
            <p className="mt-4 text-gray-700">
                美的感情の認知過程，芸術と人のインタラクションに興味があります．主に認知科学の領域で研究を進めています．
            </p>
            <div className="mt-4 flex space-x-4 text-gray-600">
                <a href="https://github.com/tkck110213" aria-label="GitHub">
                    <FaGithub size={24} />
                </a>
                <a href="https://zenn.dev" aria-label="Zenn">
                    <SiZenn size={24} />
                </a>
                {/* <a href="https://linkedin.com" aria-label="LinkedIn">
                    <FaLinkedinIn size={24} />
                </a>
                <a href="https://medium.com" aria-label="Medium">
                    <FaMediumM size={24} />
                </a> */}
            </div>
        </div>
    );
}

export default About;