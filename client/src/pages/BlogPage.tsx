import BackToTop from "../components/footer/BackToTop";

const images = {
  imageOne:
    "https://plus.unsplash.com/premium_photo-1661962685099-c6a685e6c61d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  imageTwo:
    "https://images.unsplash.com/photo-1598449356475-b9f71db7d847?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  imageThree:
    "https://images.unsplash.com/photo-1614683574679-beee9c2ab699?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

const data = {
  title: "a tree",
  content:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, sunt doloremque quaerat eius, libero soluta laboriosam quod ipsam ex laudantium saepe ratione maiores. Laborum ipsum excepturi vel nam fuga similique dolorem. Sit quos quisquam optio nesciunt voluptatum porro neque recusandae. Laudantium corrupti eum, vel deserunt enim ipsam! Voluptate vel quas esse aspernatur, praesentium velit sit doloremque molestias nisi! Unde inventore officia facere quidem, enim animi corrupti impedit itaque cumque pariatur est eaque perspiciatis beatae, voluptates repellendus! Corrupti dolor dicta sapiente, possimus quidem aliquam molestiae laborum sint laudantium molestias, pariatur omnis modi inventore, autem cupiditate soluta illo enim ad excepturi. Ex dicta placeat fugit corrupti quam quod, deleniti perspiciatis doloribus quo aperiam suscipit expedita alias earum nobis architecto nihil iste reprehenderit facilis. Architecto nulla beatae sed distinctio nam explicabo nihil, libero, natus, ducimus hic officiis quod molestias quam quasi illum optio excepturi dolorum? Illum facere corporis explicabo similique neque iure maxime asperiores dicta quisquam, nisi quae suscipit aspernatur eaque nemo tenetur fuga reiciendis delectus soluta in facilis unde ad! Ipsum minus perferendis nesciunt laboriosam optio repudiandae consequuntur quo architecto cumque sequi molestias tenetur corrupti, amet, laborum nostrum facilis ab sed obcaecati quibusdam ducimus rem possimus suscipit nobis quos. Facilis minus, repellendus inventore atque explicabo, facere sapiente consectetur quia vitae illo id doloremque deserunt harum ipsum dignissimos aliquid distinctio. Est iste animi error reiciendis aliquam quidem quibusdam minus nobis. Ipsum doloribus blanditiis vero, a, quia voluptatibus illum iste repellat impedit nisi similique consequuntur, sint recusandae voluptate! Officia, animi repellendus. Aut dicta eligendi voluptas, rem quidem aliquam doloremque reiciendis fuga optio excepturi repellendus perferendis iste a ipsa id provident eaque corrupti vero earum quis consequatur similique cumque quas. Ipsum laudantium quo deleniti illum tempore esse sint, hic dolores est, necessitatibus, velit adipisci totam natus tempora! Excepturi dolores odio odit enim quod iusto soluta et itaque quibusdam. Ab sequi magnam facere a dignissimos hic excepturi dolore molestias quod, voluptatibus aspernatur laborum tempore error nulla voluptate reiciendis nemo totam quos tenetur quo dolorem sit. Accusamus, laudantium! Libero, exercitationem explicabo modi cumque dolor earum neque ea suscipit illum sequi voluptatum eaque voluptas quod! Error repellendus labore in accusamus nam beatae sunt neque ipsam, enim modi illo dolorum id molestias? Eius, animi assumenda quo maxime delectus corporis ipsa, enim quibusdam, quis sapiente esse quaerat aspernatur tempora voluptatum. Repellendus dolorum minima beatae! Provident sit, error aperiam consequuntur odio illo! Accusantium qui veritatis enim officiis blanditiis! Enim, provident labore recusandae perferendis repellat odio. Numquam animi exercitationem est nobis provident perspiciatis unde ut delectus aliquid eius sapiente dolore cum quas laboriosam totam rem autem placeat, obcaecati dolorum tempora nesciunt! Ab quas ullam, mollitia porro corporis voluptatem. Assumenda sit sed, amet illo atque dolorem molestias veniam reprehenderit laudantium tempore magni ratione, voluptatum deleniti veritatis perferendis. Tempore id inventore quod minima harum mollitia ipsa impedit provident. Quae praesentium excepturi repudiandae quasi rerum ut suscipit modi ipsum voluptatibus ex voluptatem similique, laborum id omnis. Autem velit neque dolore sit eum assumenda quia voluptatibus. Nisi eos velit id? Vitae aliquam voluptatem molestiae dolorum impedit!",
  image:
    "https://plus.unsplash.com/premium_photo-1736194028784-a0afea956b72?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  published: "JAN 25th 2024 Archil milorava",
};

const BlogPage = () => {
  return (
    <section className=" w-full h-auto my-2 px-4 py-1 ">
      <div className="flex flex-col items-center">
        <div className="">
          <img src={images.imageThree} alt="bla" className="max-h-[40rem] " />
        </div>
        <div className=" flex flex-col gap-4 items-center my-2">
          <h1 className="text-4xl font-bold">{data.title}</h1>
          <p className="text-center ">{data.content}</p>
        </div>
        <p className="text-sm font-semibold tracking-widest uppercase cursor-pointer hover:underline">
          {data.published}
        </p>
      </div>
      <BackToTop />
    </section>
  );
};

export default BlogPage;
