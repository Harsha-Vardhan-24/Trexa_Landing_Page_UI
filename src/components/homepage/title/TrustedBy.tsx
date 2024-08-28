import netflix_logo from "../../../assets/trusted_by/netflix_logo.png";
import google_logo from "../../../assets/trusted_by/google_logo.png";
import youtube_logo from "../../../assets/trusted_by/youtube_logo.png";
import prime_logo from "../../../assets/trusted_by/prime_logo.png";
import play_logo from "../../../assets/trusted_by/play_logo.png";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

export const TrustedBy = () => {
  const IMAGES_ARR = [
    { name: "netflix logo", link: netflix_logo },
    { name: "google logo", link: google_logo },
    { name: "youtube logo", link: youtube_logo },
    { name: "prime logo", link: prime_logo },
    { name: "play logo", link: play_logo },
  ];
  return (
    <Card className="mt-24 md:mt-42 pt-6">
      <CardTitle className="font-semibold text-slate-400 text-sm tracking-tighter">
        Trusted by
      </CardTitle>
      <CardContent>
        <div className="flex flex-wrap md:flex-row gap-4 md:gap-8 lg:gap-20 justify-center">
          {IMAGES_ARR.map((logo, index) => {
            return (
              <img
                key={index}
                src={logo.link}
                alt={logo.name}
                className="w-20 object-contain"
              />
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};
