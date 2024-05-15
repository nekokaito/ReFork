import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const Contact = () => {
    useEffect(() => {Aos.init();}, []);
    return (
        <div id="contact" data-aos="fade-down-right" className=" my-20 p-10 md:my-44">
            <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-[#242f42]">
	<div className="flex flex-col justify-between">
		<div className="space-y-2">
			<h2 className="text-4xl font-jaro font-bold leading-tight lg:text-5xl text-white">Lets talk!</h2>
			<div className=" text-white font-roboto">We are Here for Help</div>
		</div>
		<img src="assets/svg/doodle.svg" alt="" className="p-6 h-52 md:h-64" />
	</div>
	<form noValidate="" className="space-y-6 font-jaro">
		<div>
			<label htmlFor="name" className="text-sm">Full name</label>
			<input id="name" type="text" placeholder="" className="w-full p-3 rounded dark:bg-gray-100" />
		</div>
		<div>
			<label htmlFor="email" className="text-sm">Email</label>
			<input id="email" type="email" className="w-full p-3 rounded dark:bg-gray-100" />
		</div>
		<div>
			<label htmlFor="message" className="text-sm">Message</label>
			<textarea id="message" rows="3" className="w-full p-3 rounded dark:bg-gray-100"></textarea>
		</div>
		<button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-[#7ba3ff] dark:text-gray-50">Send Message</button>
	</form>
</div>
        </div>
    );
};

export default Contact;