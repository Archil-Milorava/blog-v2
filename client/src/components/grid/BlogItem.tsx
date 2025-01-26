const data = {
  title: "a tree",
  content:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque corrupti iusto ea excepturi consectetur culpa. In doloremque quam sint, atque voluptas, suscipit quia illum earum quae commodi ipsam, ducimus cupiditate corrupti praesentium animi ipsum voluptatem. Est voluptatem officia iure sit provident itaque cum consequuntur ad non vero ex modi, at hic recusandae minus. Molestiae aut eligendi dignissimosadsadsadasddsas ullam nobis et adipisci fuga deserunt accusantium consequuntur molestias perferendis quidem aliquid eveniet, quas nostrum, laborum id ipsum voluptatem qui",
  image:
    "https://plus.unsplash.com/premium_photo-1736194028784-a0afea956b72?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  published: "JAN 25th 2024 Archil milorava",
};

const BlogItem = () => {
  return (
    <div className=" h-[27rem] w-full mb-4">
      <div className="h-1/2 w-full overflow-hidden">
        <img
          src={data.image}
          alt={data.title}
          className="h-full object-cover w-full hover:opacity-50 transition-all cursor-pointer"
        />
      </div>
      <div className="h-full w-full overflow-hidden flex flex-col items-center gap-4 px-2 mt-1">
        <h1 className="text-2xl font-extrabold cursor-pointer">a bla bla</h1>
        <p className="text-center">
          {data.content.split(" ").length > 40
            ? data.content.substring(0, 250) + "..."
            : data.content}
        </p>
        <p className="text-sm tracking-widest uppercase cursor-pointer hover:underline">
          {data.published}
        </p>
      </div>
    </div>
  );
};

export default BlogItem;
