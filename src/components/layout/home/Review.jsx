import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Review = () => {
    useEffect(() => {Aos.init();}, []);
    return (
        <div data-aos="fade-up"
        data-aos-anchor-placement="top-center">
            <section className="my-42">
	<div className="container flex flex-col items-center mx-auto mb-12 md:p-10 md:px-12">
		<h1 className="p-4 text-6xl font-semibold leading-none text-center font-jaro">Review</h1>
	</div>
	<div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10">
		<div data-aos="zoom-out-up" className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
			<div  className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-[#242f42]">
				<p className="relative px-6 py-1 text-lg italic text-center text-white">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 text-[#7ba3ff]">
						<path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
						<path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
					</svg
                    >The volunteer sign-up process is straightforward and efficient, allowing us to onboard new volunteers quickly.
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 dark:text-[#7ba3ff]">
						<path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
						<path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
					</svg>
				</p>
			</div>
			<div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-[#7ba3ff] dark:text-gray-50">
				<img src="https://i1.sndcdn.com/avatars-hc0jtNyMqq2TqOmJ-Fa6DfA-t240x240.jpg" alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full 0" />
				<p className="text-xl font-semibold leading-tight font-jaro">John Smith</p>
				<p className="text-sm uppercase">Volunteer Coordinator</p>
			</div>
		</div>
		<div data-aos="zoom-out-up" className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
			<div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-[#242f42]">
				<p className="relative px-6 py-1 text-lg italic text-center  text-white">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 text-[#7ba3ff]">
						<path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
						<path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
					</svg
                    >Overall, the website has become an invaluable tool in our mission to support the community. Its is very Eco Friendly
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 dark:text-[#7ba3ff]">
						<path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
						<path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
					</svg>
				</p>
			</div>
			<div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-[#7ba3ff] dark:text-gray-50">
				<img src="https://ogden_images.s3.amazonaws.com/www.post-journal.com/images/2023/11/24160034/Ellery-Jane-Doe-02-614x840.jpg" alt="" className="w-16 h-16 mb-2 object-cover -mt-16 bg-center bg-cover rounded-full" />
				<p className="text-xl font-semibold leading-tight font-jaro">Jane Doe</p>
				<p className="text-sm uppercase">Community Outreach Coordinator</p>
			</div>
		</div>
		<div data-aos="zoom-out-up" className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
			<div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-[#242f42]">
				<p className="relative px-6 py-1 text-lg italic text-center text-white">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 text-[#7ba3ff]">
						<path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
						<path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
					</svg
                    > Website has not only enhanced our fundraising capabilities but also strengthened our connection with the community.
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 dark:text-[#7ba3ff]">
						<path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
						<path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
					</svg>
				</p>
			</div>
			<div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-[#7ba3ff] dark:text-gray-50">
				<img src="https://engineering.nd.edu/wp-content/uploads/2021/08/johnson-HS2.jpg" alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full " />
				<p className="text-xl font-semibold leading-tight font-jaro">Emily Johnson</p>
				<p className="text-sm uppercase"> Fundraising Manager</p>
			</div>
		</div>
        <div data-aos="zoom-out-up" className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
			<div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-[#242f42]">
				<p className="relative px-6 py-1 text-lg italic text-center text-white">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 text-[#7ba3ff]">
						<path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
						<path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
					</svg
                    >I recently took part in the refork, and it was a great experience for me. 
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 dark:text-[#7ba3ff]">
						<path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
						<path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
					</svg>
				</p>
			</div>
			<div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-[#7ba3ff] dark:text-gray-50">
				<img src="https://avatars.githubusercontent.com/u/130210417?v=4" alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full " />
				<p className="text-xl font-semibold leading-tight font-jaro">Ruhan Rouf</p>
				<p className="text-sm uppercase">Web Developer</p>
			</div>
		</div>
	</div>
</section>
        </div>
    );
};

export default Review;