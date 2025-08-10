import PreBuiltCardTestimonial from "./PreBuiltCardTestimonal";
import Title from "./Title";

const Testimonial = () => {
  return (
    <div className="pt-20 flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50">
      <Title
        title={"What Our Guest Say"}
        subTitle={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit saepe architecto nemo, laborum voluptates placeat."
        }
      />
      <PreBuiltCardTestimonial/>
    </div>
  );
};

export default Testimonial;
