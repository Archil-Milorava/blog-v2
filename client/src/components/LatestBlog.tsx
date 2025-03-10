const data = {
  title: "ახალი მთავრობის პირობებში ბევრ ბულგარელს წარსულში დაბრუნების ეშინია",
  content:
    "მზია თვლის, რომ მისი ჯანმრთელობის მდგომარეობა, ამ ეტაპისთვის, ნორმალურია და ორგანიზმი და ჯანმრთელობა ჯერჯერობით აძლევს შესაძლებლობას, რომ შიმშილი გააგრძელოს. მზია უარს ამბობს სამედიცინო დაწესებულებაში გადაყვანაზე, სპეციალურ სამედიცინო ჩარევაზე. გუშინდელი მდგომარეობით, რისი საშუალებაც მქონდა მენახა ვიზუალურად, ეს საჭიროება მას არ ჰქონდა და თვითონაც თქვა, რომ ამის საჭიროება არ იყო. საპროტესტო აქციები იმართება სხვადასხვა უწყებასთან. მათ შორის ერთ-ერთი ხმაურიანი აქცია 28 იანვარს გაიმართა სპეციალურ საგამოძიებო სამსახურთან, სადაც ჟურნალისტებმა მოითხოვეს როგორც მზია ამაღლობელის გათავისუფლება, ისე ბათუმის პოლიციის უფროსის, ირაკლი დგებუაძის სამსახურიდან გათავისუფლება, რომელსაც მზია ამაღლობელი მის მიმართ არასათანადო მოპყრობაში ადანაშაულებს. ექიმი-ექსპერტი, მედიცინის დოქტორი თამუნა გოდერიძე, რადიო თავისუფლებასთან საუბრობს იმ რისკებზე, რაც პროტესტის უკიდურეს ზომას, შიმშილობას, განსაკუთრებით კი, საპატიმროში დაწყებულ შიმშილობას ახლავს თან. ექიმი-ექსპერტი, მედიცინის დოქტორი თამუნა გოდერიძე, რადიო თავისუფლებასთან საუბრობს იმ რისკებზე, რაც პროტესტის უკიდურეს ზომას, შიმშილობას, განსაკუთრებით კი, საპატიმროში დაწყებულ შიმშილობას ახლავს თან. ექიმი-ექსპერტი, მედიცინის დოქტორი თამუნა გოდერიძე, რადიო თავისუფლებასთან საუბრობს იმ რისკებზე, რაც პროტესტის უკიდურეს ზომას, შიმშილობას, განსაკუთრებით კი, საპატიმროში დაწყებულ შიმშილობას ახლავს თან. ექიმი-ექსპერტი, მედიცინის დოქტორი თამუნა გოდერიძე, რადიო თავისუფლებასთან საუბრობს იმ რისკებზე, რაც პროტესტის უკიდურეს ზომას, შიმშილობას, განსაკუთრებით კი, საპატიმროში დაწყებულ შიმშილობას ახლავს თან. ექიმი-ექსპერტი, მედიცინის დოქტორი თამუნა გოდერიძე, რადიო თავისუფლებასთან საუბრობს იმ რისკებზე, რაც პროტესტის უკიდურეს ზომას, შიმშილობას, განსაკუთრებით კი, საპატიმროში დაწყებულ შიმშილობას ახლავს თან. ექიმი-ექსპერტი, მედიცინის დოქტორი თამუნა გოდერიძე, რადიო თავისუფლებასთან საუბრობს იმ რისკებზე, რაც პროტესტის უკიდურეს ზომას, შიმშილობას, განსაკუთრებით კი, საპატიმროში დაწყებულ შიმშილობას ახლავს თან. ექიმი-ექსპერტი, მედიცინის დოქტორი თამუნა გოდერიძე, რადიო თავისუფლებასთან საუბრობს იმ რისკებზე, რაც პროტესტის უკიდურეს ზომას, შიმშილობას, განსაკუთრებით კი, საპატიმროში დაწყებულ შიმშილობას ახლავს თან.",
  image:
    "https://plus.unsplash.com/premium_photo-1736194028784-a0afea956b72?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  published: "JAN 25th 2024",
  author: "Archil Milorava",
};

const LatestBlog = () => {
  return (
    <div className="w-full h-[6rem] max-h-[8rem] overflow-hidden flex gap-3">
      <div className="w-4/12 h-full  ">
        <img
          src={data.image}
          alt="asd"
          className="w-full h-full object-cover cursor-pointer"
        />
      </div>
      <div className=" w-8/12 h-full flex flex-col gap-3">
        <h1 className="text-sm font-semibold tracking-wider hover:underline transition-all cursor-pointer">
          {data.title}
        </h1>
        <p className="text-xs font-extralight">{data.published}</p>
      </div>
    </div>
  );
};

export default LatestBlog;
