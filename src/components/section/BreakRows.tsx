import Marquee from "@/components/magicui/marquee";

const reviews: string[] = [
  "Full-Stack Web Developer",
  "✴",
  "FrontEnd Developer",
  "✴",
  "BackEnd Developer",
  "✴",
  "Freelance Developer",
  "✴",
];

interface ReviewCardProps {
  content: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ content }) => (
  <div className="mx-6">
    <div className="flex flex-row items-center gap-2">
      <p>{content}</p>
    </div>
  </div>
);

const MarqueeDemo: React.FC = () => {
  const firstRow = reviews.slice(0, reviews.length / 2);

  return (
    <div className="border-b-[3px] border-t-[3px] border-black bg-gray-300 h-20 flex items-center text-4xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((content, index) => (
          <ReviewCard key={index} content={content} />
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeDemo;
