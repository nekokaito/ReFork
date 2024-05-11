

const Header = () => {
    return (
        <header>
           <section className="">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-5xl font-bold leading-none sm:text-6xl font-jaro">We
				<span className="text-[#7ba3ff]"> Work Together </span>
                To Feed Our Neighbors
			</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12 font-roboto">Join us in a collective effort to make a meaningful impact in our community.
				<br  className="hidden md:inline lg:hidden" /> We are not just sharing meals, but also sharing hope, compassion, and support for our neighbors in need.
			</p>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				<a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded bg-[#7ba3ff] hover:bg-[#6593ff] dark:text-gray-50 font-jaro">Join Now</a>
				<a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800 hover:text-[#6593ff] font-jaro">Contact Us</a>
			</div>
		</div>
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src="/Product.png" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
		</div>
	</div>
</section> 
        </header>
    );
};

export default Header;