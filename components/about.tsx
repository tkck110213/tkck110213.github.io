import { FaGithub, FaEnvelope } from 'react-icons/fa';
import { SiZenn, SiGooglescholar } from 'react-icons/si'; 
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
            <p className="text-gray-500 text-center">First-year Ph.D. student <br /> The University of Electro-Communications</p>
            <p className="mt-4 text-gray-700">
                芸術の美的鑑賞プロセスに関心があります．主に認知科学の領域で活動しています．
            </p>
            <div className="mt-4 flex space-x-4 text-gray-600">
                <a href="https://github.com/tkck110213" aria-label="GitHub">
                    <FaGithub size={24} />
                </a>
                <a href="https://zenn.dev" aria-label="Zenn">
                    <SiZenn size={24} />
                </a>
                <a href="mailto:c.kameya@uec.ac.jp" aria-label="Email">
                    <FaEnvelope size={24} />
                </a>
                <a href="https://scholar.google.com/citations?user=uneQLVYAAAAJ" aria-label="Google Scholar">
                    <SiGooglescholar size={24} />
                </a>
            </div>
        </div>
    );
}

export default About;
