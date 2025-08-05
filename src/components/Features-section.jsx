import { Image, Send, Eye, Filter, Zap, Heart } from "lucide-react";

const feature = [
  {
    id: 1,
    header: "Image & Text Support",
    text: "Send both images and text messages anonymously",
    icon: Image,
  },
  {
    id: 2,
    header: "Full Anonymity",
    text: "No tracking, no usernames, complete privacy",
    icon: Eye,
  },
  {
    id: 3,
    header: "Instant Delivery",
    text: "Messages delivered in real-time",
    icon: Send,
  },
  {
    id: 4,
    header: "Message Filters",
    text: "Organize your inbox with smart filters",
    icon: Filter,
  },
  {
    id: 5,
    header: "Instant Delivery",
    text: "Messages appear in real-time. No delays",
    icon: Zap,
  },
  {
    id: 6,
    header: "Emotional Safe Space",
    text: "Designed for honest, judgment-free communication",
    icon: Heart,
  },
];

const Features = () => {
  return (
    <section className="section-padding py-20 bg-[#141729]">
      <div className="max-w-7xl mx-auto px-15">
        <h1 className="text-xl md:text-[40px] font-bold text-center mb-4 text-white">
          Features That <span className="text-[#7963e9]">Matter</span>
        </h1>
        <p className="text-center text-lg dark:text-[#e4e4e7] text-[#495c83">
          Every feature designed with your emotional safety and privacy in mind
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-9 mt-17">
          {feature.map((features) => {
            const Icon = features.icon;
            return (
              <div
                key={features.id}
                className="px-6 glass-card shadow-sm py-6 rounded-xl flex flex-col gap-4 hover:!bg-[#eeeeee1a] transition-colors"
              >
                <div className="size-12 rounded-xl bg-violet-600 flex items-center justify-center">
                  <Icon className="size-6 text-white" />
                </div>
                <p className="dark:text-[#f1f1f8] text-[#141729] text-xl font-semibold">
                  {features.header}
                </p>
                <p className="text-base text-[#626784] dark:text-[#9898b3]">
                  {features.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
