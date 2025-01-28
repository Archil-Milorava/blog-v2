const data = {
  title: "როგორ არის შიმშილობის მე-17 დღეს მზია ამაღლობელი - ვესაუბრეთ ადვოკატებს, ექიმებს, ოფიციალურ უწყებებს",
  content:
    "ადვოკატმა გიორგი ხიმშიაშვილმა მზია ამაღლობელი პენიტენციურ დაწესებულებაში 27 იანვარს, საღამოს საათებში ნახა. როგორც რადიო თავისუფლებას უყვება, მათ დაახლოებით საათ-ნახევარი ისაუბრეს",
  image:
    "https://plus.unsplash.com/premium_photo-1731621417541-d4c7a9acf205?q=80&w=1994&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  published: "JAN 25th 2024 Archil milorava",
};

const BlogItem = () => {
  const truncateText =
    data.content.split(" ").length > 10
      ? data.content.substring(0, 200) + "..."
      : data.content;

  return (
    <div className=" h-[24rem] w-full overflow-hidden mt-4">
      {/* iamge */}
      <div className=" h-1/2">
      <img src={data.image} alt="asd" className="max-h-full w-full object-cover cursor-pointer" />
      </div>

      {/* titile */}
      <div className="h-1/2 w-full flex flex-col items-center justify-center gap-1">
        
      <h1 className="h-auto max-h-[4rem]  text-lg font-semibold tracking-wider text-center overflow-hidden w-full ">
        {data.title}
      </h1>

      {/* content */}
      <p className="text-sm text-center px-1">{truncateText}</p>

      {/* author */}
      <h2 className="uppercase ">
        <span>DEc 16 2024</span> <span className="hover:underline transition-all cursor-pointer">Archil milorava</span>
      </h2>
      </div>
    </div>
  );
};

export default BlogItem;
