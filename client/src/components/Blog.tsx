import { useQuery } from "@tanstack/react-query";
import { Heart, MessageCircle } from "lucide-react";
import { useParams } from "react-router-dom";
import { getBlog } from "../services/blogsAPI";

const data = {
  title:
    "ახალი მთავრობის პირობებში ბევრ ბულგარელს წარსულში დაბრუნების ეშინიაეშინიაეშინიაეშინიაეშინიაეშინიაეშინია ეშინიაეშინია ეშინიაეშინია ეშინიაეშინიაეშინიაეშინია ეშინიაეშინია",
  content:
    "მზია თვლის, რომ მისი ჯანმრთელობის მდგომარეობა, ამ ეტაპისთვის, ნორმალურია და ორგანიზმი და ჯანმრთელობა ჯერჯერობით აძლევს შესაძლებლობას, რომ შიმშილი გააგრძელოს. მზია უარს ამბობს სამედიცინო დაწესებულებაში გადაყვანაზე, სპეციალურ სამედიცინო ჩარევაზე. გუშინდელი მდგომარეობით, რისი საშუალებაც მქონდა მენახა ვიზუალურად, ეს საჭიროება მას არ ჰქონდა და თვითონაც თქვა, რომ ამის საჭიროება არ იყო. საპროტესტო აქციები იმართება სხვადასხვა უწყებასთან. მათ შორის ერთ-ერთი ხმაურიანი აქცია 28 იანვარს გაიმართა სპეციალურ საგამოძიებო სამსახურთან, სადაც ჟურნალისტებმა მოითხოვეს როგორც მზია ამაღლობელის გათავისუფლება, ისე ბათუმის პოლიციის უფროსის, ირაკლი დგებუაძის სამსახურიდან გათავისუფლება, რომელსაც მზია ამაღლობელი მის მიმართ არასათანადო მოპყრობაში ადანაშაულებს. ექიმი-ექსპერტი, მედიცინის დოქტორი თამუნა გოდერიძე, რადიო თავისუფლებასთან საუბრობს იმ რისკებზე, რაც პროტესტის უკიდურეს ზომას, შიმშილობას, განსაკუთრებით კი, საპატიმროში დაწყებულ შიმშილობას ახლავს თან. ექიმი-ექსპერტი, მედიცინის დოქტორი თამუნა გოდერიძე, რადიო თავისუფლებასთან საუბრობს იმ რისკებზე, რაც პროტესტის უკიდურეს ზომას, შიმშილობას, განსაკუთრებით კი, საპატიმროში დაწყებულ შიმშილობას ახლავს თან. ექიმი-ექსპერტი, მედიცინის დოქტორი თამუნა გოდერიძე, რადიო თავისუფლებასთან საუბრობს იმ რისკებზე, რაც პროტესტის უკიდურეს ზომას, შიმშილობას, განსაკუთრებით კი, საპატიმროში დაწყებულ შიმშილობას ახლავს თან. ექიმი-ექსპერტი, მედიცინის დოქტორი თამუნა გოდერიძე, რადიო თავისუფლებასთან საუბრობს იმ რისკებზე, რაც პროტესტის უკიდურეს ზომას, შიმშილობას, განსაკუთრებით კი, საპატიმროში დაწყებულ შიმშილობას ახლავს თან. ექიმი-ექსპერტი, მედიცინის დოქტორი თამუნა გოდერიძე, რადიო თავისუფლებასთან საუბრობს იმ რისკებზე, რაც პროტესტის უკიდურეს ზომას, შიმშილობას, განსაკუთრებით კი, საპატიმროში დაწყებულ შიმშილობას ახლავს თან. ექიმი-ექსპერტი, მედიცინის დოქტორი თამუნა გოდერიძე, რადიო თავისუფლებასთან საუბრობს იმ რისკებზე, რაც პროტესტის უკიდურეს ზომას, შიმშილობას, განსაკუთრებით კი, საპატიმროში დაწყებულ შიმშილობას ახლავს თან. ექიმი-ექსპერტი, მედიცინის დოქტორი თამუნა გოდერიძე, რადიო თავისუფლებასთან საუბრობს იმ რისკებზე, რაც პროტესტის უკიდურეს ზომას, შიმშილობას, განსაკუთრებით კი, საპატიმროში დაწყებულ შიმშილობას ახლავს თან.",
  image:
    "https://plus.unsplash.com/premium_photo-1736194028784-a0afea956b72?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  published: "JAN 25th 2024",
  author: "Archil Milorava",
};

const Blog = () => {


  const {id} =  useParams()

  console.log(id);
  

 const {data:blog, isLoading} =  useQuery({
    queryKey: ["blog"],
    queryFn: getBlog(id)
  })

  console.log(blog);
  

  return (
    <article className={` ${isLoading && 'opacity-50'} w-full h-full flex flex-col gap-1`}>
      <div className=" sm:h-[30rem] h-[17rem] w-full  ">
        <img
          src={data.image}
          alt="asd"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="w-full h-auto uppercase text-sm flex flex-col sm:flex-row items-center gap-1 sm:gap-4 sm:my-2">
        <p>Published: {data.published}</p>
        <p>
          | by
          <a className="hover:underline cursor-pointer transition-all">
            {" "}
            {data.author}
          </a>
        </p>
      </div>
      <div className="flex gap-2">
        <div className="text-lg flex items-center gap-1">
          <MessageCircle className="cursor-pointer hover:opacity-65" size={20} />
          <span>12</span>
        </div>
        <div className="text-lg flex items-center gap-1">
          <Heart className="cursor-pointer hover:opacity-65" size={20} />
          <span>0</span>
        </div>
      </div>
      <div className="h-auto w-full overflow-hidden">
        <h1 className="text-xl font-semibold">{data.title}</h1>
      </div>
      <div className="w-full h-auto">
        <p className=" text-sm text-left leading-6">{data.content}</p>
      </div>
    </article>
  );
};

export default Blog;
