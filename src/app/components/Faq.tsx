const Faq = () => {
  return (
    <div className="mt-10 mb-16">
      <div className="max-w-[80%] mx-auto">
          <h1 className="font-Neela text-[55px] text-[#626543] brown-stroke text-center pt-4">
            May we offer a little persuastion?
          </h1>
        <div className="mt-10">
          <div className="flex flex-wrap justify-center gap-8">
            <div className="bg-[#D9D9D9] py-5 px-10 rounded-[5px] flex-1 max-w-xl shadow-lg">
              <div className="font-bold text-[20px]">Who can board the train?</div>
              <div className="text-[20px] mt-2">
                All members of the <a href="https://hackclub.com/slack" className="underline" target="_blank">Hack Club Slack</a> who are under the age of 19 by the boarding date. Limited tickets are available, though.
              </div>
            </div>

            <div className="bg-[#D9D9D9] py-5 px-10 rounded-[5px] flex-1 max-w-xl shadow-lg">
              <div className="font-bold text-[20px]">
                Will travel to and from the event be covered?
              </div>
              <div className="text-[20px] mt-2">
                Yes, we will reimburse the costs of flights and / or trains required to get to
                Vancouver and home from Montreal.
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 mt-8 mb-10">
            <div className="bg-[#D9D9D9] py-5 px-10 rounded-[5px] flex-1 max-w-xl shadow-lg">
              <div className="font-bold text-[20px]">
                What should I bring?
              </div>
              <div className="text-[20px] mt-2">
                Casual clothes for seven days, simple toiletries and a laptop + charger. International travellers (including Americans) will need a valid passport to enter Canada.
              </div>
            </div>
          
            <div className="bg-[#D9D9D9] py-5 px-10 rounded-[5px] flex-1 max-w-xl shadow-lg">
              <div className="font-bold text-[20px]">
                What has Hack Club done in the past?
              </div>
              <div className="text-[20px] mt-2">
                We've ran hackathons across the world, from <a href="https://www.youtube.com/watch?v=PnK4gzO6S3Q" className="underline" target="_blank">San Francisco</a> to <a href="https://www.youtube.com/watch?v=KLx4NZZPzMc" className="underline" target="_blank">New Delhi</a>. Last summer, we turned a semi-abandoned campsite into a bustling hacker society. <a href="https://www.youtube.com/watch?v=O1s5HqSqKi0" className="underline" target="_blank">Check out the documentary</a>.
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-8 mt-8 mb-10">
            <div className="bg-[#D9D9D9] py-5 px-10 rounded-[5px] flex-1 max-w-xl shadow-lg">
              <div className="font-bold text-[20px]">
                Will housing, meals, and transport be provided?
              </div>
              <div className="text-[20px] mt-2">
                Yes, all essentials will be covered by us. Housing will take place in both
                sleepertrains and reputable dormitories/hotels.
              </div>
            </div>

            <div className="bg-[#D9D9D9] py-5 px-10 rounded-[5px] flex-1 max-w-xl shadow-lg">
              <div className="font-bold text-[20px]">
                My parents have concerns....
              </div>
              <div className="text-[20px] mt-2">
                We'll release a parents guide shortly. We're here to help, ask them to reach out to us at{' '}
                <a href="mailto:boreal@hackclub.com" className="underline">boreal@hackclub.com</a>.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
