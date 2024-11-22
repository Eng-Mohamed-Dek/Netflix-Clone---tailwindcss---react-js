const Feature = ({ title, description, image, video, id }) => {
	return (
		<div
			className={`relative mx-auto mb-20 mt-20 flex max-w-screen-lg flex-col items-center justify-center ${
				id % 2 !== 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
			} space-y-4`}>
			<div className='mt-12 flex-1 space-y-4 tracking-wider'>
				<h1 className='max-w-lg sm:text-center text-center text-2xl font-bold sm:text-5xl'>
					{title}
				</h1>
				<h2 className='sm:text-center text-center text-1xl sm:text-2xl tracking-normal w-[400px] leading-10'>{description}</h2>
			</div>
			<div className='relative flex-1'>
				<img className='z-10' alt='' src={`./images/${image}`} />
				<video
					loop
					autoPlay
					className='absolute top-1 -z-10 sm:top-20 sm:left-16 sm:w-96'
					src={`./images/${video}`}
				/>
			</div>
		</div>
	);
};

export default Feature;
