const Faq = () => {
  return (
    <div className="my-20 mb-16">
      <div className="max-w-[80%] mx-auto">
        <h1 className="font-Neela text-3xl lg:text-[55px] text-[#626543] brown-stroke text-center pb-8">
          May we offer a little persuasion?
        </h1>
        <div className="mt-10">
          <div className="flex flex-wrap justify-center gap-8">
            <div className="bg-[#D9D9D9] py-5 px-10 rounded-[5px] flex-1 max-w-xl shadow-lg">
              <div className="font-bold text-lg lg:text-[20px]">
                Who is eligible to receive an invitation?
              </div>
              <div className="text-base lg:text-[20px] mt-2">
                All members of the Hack Club Slack who are under the age of 18
                by the boarding date are eligible to board the train. Limited
                tickets are available, though.
              </div>
            </div>

            <div className="bg-[#D9D9D9] py-5 px-10 rounded-[5px] flex-1 max-w-xl shadow-lg">
              <div className="font-bold text-lg lg:text-[20px]">
                Will travel to Vancouver and from Montreal be Covered?
              </div>
              <div className="text-base lg:text-[20px] mt-2">
                Yes, we will reimburse the costs of flights and/or trains
                required to get to Vancouver and home from Montreal.
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-8 mt-8 mb-10">
            <div className="bg-[#D9D9D9] py-5 px-10 rounded-[5px] flex-1 max-w-xl shadow-lg">
              <div className="font-bold text-lg lg:text-[20px]">
                Will housing, meals, and transport be provided?
              </div>
              <div className="text-base lg:text-[20px] mt-2">
                Yes, all essentials will be covered by us. Housing will take
                place in both sleepertrains and reputable dormitories/hotels.
              </div>
            </div>

            <div className="bg-[#D9D9D9] py-5 px-10 rounded-[5px] flex-1 max-w-xl shadow-lg">
              <div className="font-bold text-lg lg:text-[20px]">
                My parents have concerns, what should I do?
              </div>
              <div className="text-base lg:text-[20px] mt-2">
                Please refer to the{" "}
                <a href="https://cloud-1xda24uyl-hack-club-bot.vercel.app/0parentguide.pdf">
                  parents' guide
                </a>
                &nbsp;for additional information. If needed, your parents can
                also contact us at
                <a href="mailto:boreal@hackclub.com"> boreal@hackclub.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
