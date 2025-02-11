
const Contact = () => {
    return (
        <section className="bg-[#3F181C]">
            <div className="mx-5! loading">
                <div className="container mx-auto! grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-5 pb-15! pt-15!">
                    <div className="bg-[#1E1E1E] p-15!">
                        <h2 className="text-[#FDBA74] text-3xl font-bold mb-3!">Need Help? Open a Ticket</h2>
                        <p className="text-white mb-3!">Our support team will get back to you ASAP via email.</p>
                        <div className="text-white grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <label htmlFor="Your Name">Your Name</label> <br />
                                <input className="bg-[#3F181C] w-full h-10 px-2! mt-2! focus:ring-2 focus:ring-orange-500 rounded outline-none" type="text" name="name" id="Your Name" placeholder="Enter Your Name"/>
                            </div>
                            <div>
                                <label htmlFor="Your Email">Your Email</label> <br />
                                <input className="bg-[#3F181C] w-full h-10 px-2! mt-2! focus:ring-2 focus:ring-orange-500 rounded outline-none" type="text" name="email" id="Your Email" placeholder="Enter Your Email"/>
                            </div>
                        </div>
                        <div className="text-white mt-5!">
                            <textarea placeholder="Write Your Message Here ..." className="bg-[#3F181C] w-full h-28 py-3! px-3! mt-2! focus:ring-2 focus:ring-orange-500 rounded outline-none" name="" id=""></textarea>
                        </div>
                            <button className="bg-orange-500 text-white w-35 mt-5! h-12 hover:bg-orange-600  cursor-pointer rounded-full transition duration-500">Submit Ticket</button>
                        </div>
                    <div className="bg-[#1E1E1E] text-white p-10!">
                        <h2 className="text-[#FDBA74] text-3xl font-bold mb-3!">Subscribe to receive future updates</h2>
                        <p className="text-white mb-3!">Lorem ipsum dolor sited Sed ullam corper consectur adipiscing Mae ornare massa quis lectus.</p>
                        <div className="bg-gray-400 w-full h-[1px] mb-5!"></div>
                            <div>
                                <label htmlFor="Your Name">Your Name</label> <br />
                                <input className="bg-[#3F181C] w-full h-10 px-2! mb-2! mt-2! focus:ring-2 focus:ring-orange-500 rounded outline-none" type="text" name="name" id="Your Name" placeholder="Enter Your Name"/>
                            </div>
                            <div>
                                <label htmlFor="Your Email">Your Email</label> <br />
                                <input className="bg-[#3F181C] w-full h-10 px-2! mt-2! focus:ring-2 focus:ring-orange-500 rounded outline-none" type="text" name="email" id="Your Email" placeholder="Enter Your Email"/>
                            </div>
                            <button className="bg-orange-500 w-full mt-5! h-10 hover:bg-orange-600 cursor-pointer rounded transition duration-500">Submit</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact